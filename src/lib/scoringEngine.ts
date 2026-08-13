import {
  RIASECDimension,
  UserResponses,
  ScoringWeights,
  ComponentScores,
  DomainMatch,
  AssessmentResult,
  ACCAreaOfStudy,
  ACCProgram
} from '@/types';
import { ACC_PROGRAMS } from '@/data/accPrograms';
import { ASSESSMENT_QUESTIONS } from '@/data/assessmentQuestions';

export const DEFAULT_SCORING_WEIGHTS: ScoringWeights = {
  riasecInterest: 0.35,
  workEnvironment: 0.20,
  activityEvidence: 0.15,
  workValues: 0.15,
  practicalConstraints: 0.10,
  evidenceConfidence: 0.05
};

const RIASEC_DIMENSIONS: RIASECDimension[] = [
  'Realistic',
  'Investigative',
  'Artistic',
  'Social',
  'Enterprising',
  'Conventional'
];

/**
 * Calculates raw RIASEC dimension scores from Module A Likert-5 responses.
 * Scaled 0 to 100 per dimension.
 */
export function calculateRIASECScores(moduleAResponses: Record<string, number>): {
  raw: Record<RIASECDimension, number>;
  percentages: Record<RIASECDimension, number>;
  primaryCode: string;
} {
  const dimensionTotals: Record<RIASECDimension, { sum: number; count: number }> = {
    Realistic: { sum: 0, count: 0 },
    Investigative: { sum: 0, count: 0 },
    Artistic: { sum: 0, count: 0 },
    Social: { sum: 0, count: 0 },
    Enterprising: { sum: 0, count: 0 },
    Conventional: { sum: 0, count: 0 }
  };

  const moduleAQuestions = ASSESSMENT_QUESTIONS.filter(q => q.module === 'A' && q.dimension);

  for (const q of moduleAQuestions) {
    const dim = q.dimension!;
    const val = moduleAResponses[q.id];
    if (val !== undefined && val >= 1 && val <= 5) {
      dimensionTotals[dim].sum += val;
      dimensionTotals[dim].count += 1;
    }
  }

  const raw: Record<RIASECDimension, number> = {
    Realistic: 0,
    Investigative: 0,
    Artistic: 0,
    Social: 0,
    Enterprising: 0,
    Conventional: 0
  };

  const percentages: Record<RIASECDimension, number> = { ...raw };

  for (const dim of RIASEC_DIMENSIONS) {
    const { sum, count } = dimensionTotals[dim];
    if (count > 0) {
      // 1-5 scale mapped to 0-100: (avg - 1) / 4 * 100
      const avg = sum / count;
      const pct = Math.round(((avg - 1) / 4) * 100);
      raw[dim] = Math.round(avg * 10) / 10;
      percentages[dim] = Math.max(0, Math.min(100, pct));
    } else {
      raw[dim] = 0;
      percentages[dim] = 0;
    }
  }

  // Determine top 3-letter Holland Code
  const sortedDims = [...RIASEC_DIMENSIONS].sort((a, b) => percentages[b] - percentages[a]);
  const primaryCode = sortedDims.slice(0, 3).map(d => d[0]).join('');

  return { raw, percentages, primaryCode };
}

/**
 * Calculates RIASEC similarity between user profile and a program's profile.
 */
function calculateRIASECSimilarity(
  userPct: Record<RIASECDimension, number>,
  programWeights: Record<RIASECDimension, number>
): number {
  let weightedDot = 0;
  let maxPossible = 0;

  for (const dim of RIASEC_DIMENSIONS) {
    const u = userPct[dim] || 0;
    const p = programWeights[dim] || 0;
    weightedDot += (u * p) / 100;
    maxPossible += p;
  }

  if (maxPossible === 0) return 50;
  return Math.round((weightedDot / maxPossible) * 100);
}

/**
 * Calculates Work Environment Alignment score (0-100)
 */
function calculateEnvironmentScore(
  responsesB: Record<string, string | number | string[]>,
  program: ACCProgram
): { score: number; positiveFactors: string[]; conflicts: string[] } {
  let score = 70; // baseline
  const positiveFactors: string[] = [];
  const conflicts: string[] = [];

  // Setting match
  const preferredSettings = (responsesB['q_env_setting'] as string[]) || [];
  if (preferredSettings.length > 0) {
    const hasOverlap = program.workContext.workSetting.some(s => preferredSettings.includes(s));
    if (hasOverlap) {
      score += 15;
      positiveFactors.push(`Matches preferred work setting (${program.workContext.workSetting.join(', ')})`);
    } else {
      score -= 20;
      conflicts.push(`Work environment (${program.workContext.workSetting.join(', ')}) differs from your preferred settings`);
    }
  }

  // People interaction
  const preferredPeople = responsesB['q_env_people'] as string;
  if (preferredPeople) {
    if (preferredPeople === program.workContext.peopleInteraction) {
      score += 10;
      positiveFactors.push(`Fits your ${preferredPeople.toLowerCase()} social interaction preference`);
    } else if (
      (preferredPeople === 'Low' && program.workContext.peopleInteraction === 'High') ||
      (preferredPeople === 'High' && program.workContext.peopleInteraction === 'Low')
    ) {
      score -= 15;
      conflicts.push(`Social demand (${program.workContext.peopleInteraction}) differs from your preference (${preferredPeople})`);
    }
  }

  // Hands-on vs Digital
  const preferredHandsOn = responsesB['q_env_handson'] as string;
  if (preferredHandsOn) {
    if (preferredHandsOn === program.workContext.handsOnLevel) {
      score += 10;
      positiveFactors.push(`Matches desired ${preferredHandsOn.toLowerCase()} hands-on tool engagement`);
    } else if (
      (preferredHandsOn === 'High' && program.workContext.handsOnLevel === 'Low') ||
      (preferredHandsOn === 'Low' && program.workContext.handsOnLevel === 'High')
    ) {
      score -= 15;
      conflicts.push(`Hands-on level (${program.workContext.handsOnLevel}) does not match preference (${preferredHandsOn})`);
    }
  }

  // Bodily fluids check for Health Sciences
  const bioTolerance = responsesB['q_env_biofluids_safety'] as string;
  if (bioTolerance === 'Deal-Breaker' && program.areaOfStudy === 'Health Sciences' && program.id.includes('nursing')) {
    score -= 40;
    conflicts.push('Clinical bedside environment involves bodily fluids, which you identified as a deal-breaker');
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    positiveFactors,
    conflicts
  };
}

/**
 * Calculates Subject & Activity Evidence score (0-100)
 */
function calculateEvidenceScore(
  responsesC: Record<string, string | number | string[]>,
  program: ACCProgram
): { score: number; positiveFactors: string[] } {
  let score = 50;
  const positiveFactors: string[] = [];

  const favoriteSubjects = (responsesC['q_evi_favorite_subjects'] as string[]) || [];
  const projectsBuilt = (responsesC['q_evi_projects_built'] as string[]) || [];
  const peerHelp = responsesC['q_evi_peer_help'] as string;

  // Tech / CS evidence
  if (program.areaOfStudy === 'Information Technology') {
    if (favoriteSubjects.includes('CompSci')) {
      score += 20;
      positiveFactors.push('Voluntarily enjoyed high school Computer Science / coding');
    }
    if (projectsBuilt.includes('coded_website_bot') || projectsBuilt.includes('built_pc_or_mod')) {
      score += 20;
      positiveFactors.push('Demonstrated hands-on self-directed tech building (PC assembly or coding project)');
    }
    if (peerHelp === 'tech_troubleshooting') {
      score += 10;
      positiveFactors.push('Friends and family regularly seek your help with tech troubleshooting');
    }
  }

  // Trades / Applied Tech evidence
  if (program.areaOfStudy === 'Applied Technologies & Trades') {
    if (favoriteSubjects.includes('Shop_Trades')) {
      score += 25;
      positiveFactors.push('Enjoyed high school auto/shop/trade electives');
    }
    if (projectsBuilt.includes('fixed_car_bike_device')) {
      score += 20;
      positiveFactors.push('Prior voluntary experience fixing mechanical gear, cars, or hardware');
    }
    if (peerHelp === 'mechanical_fixing') {
      score += 10;
      positiveFactors.push('Known among peers for practical mechanical problem solving');
    }
  }

  // Health Sciences evidence
  if (program.areaOfStudy === 'Health Sciences') {
    if (favoriteSubjects.includes('Biology')) {
      score += 25;
      positiveFactors.push('Strong interest in high school Biology and Anatomy');
    }
    if (projectsBuilt.includes('cared_for_injured')) {
      score += 15;
      positiveFactors.push('Experience caring for others in family or community settings');
    }
  }

  // Business evidence
  if (program.areaOfStudy === 'Business') {
    if (favoriteSubjects.includes('Business_Econ')) {
      score += 25;
      positiveFactors.push('Enjoyed Economics and Business coursework');
    }
    if (projectsBuilt.includes('sold_items_resold')) {
      score += 20;
      positiveFactors.push('Entrepreneurial experience in online sales or fundraising');
    }
  }

  // Arts & Media evidence
  if (program.areaOfStudy === 'Arts, Digital Media & Communications') {
    if (favoriteSubjects.includes('Art_Media')) {
      score += 25;
      positiveFactors.push('Enthusiasm for visual art and digital media creation');
    }
    if (projectsBuilt.includes('created_video_channel')) {
      score += 20;
      positiveFactors.push('Created original digital content, videos, or design assets');
    }
  }

  // STEM / Engineering evidence
  if (program.areaOfStudy === 'Science, Engineering & Math') {
    if (favoriteSubjects.includes('Physics_Chem') || favoriteSubjects.includes('Math')) {
      score += 25;
      positiveFactors.push('Strong engagement in advanced math and physical sciences');
    }
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    positiveFactors
  };
}

/**
 * Calculates Work Values & Practical Constraints score (0-100)
 */
function calculateValuesAndConstraintsScore(
  responsesD: Record<string, string | number | string[]>,
  program: ACCProgram
): { valuesScore: number; constraintsScore: number; conflicts: string[]; positiveFactors: string[] } {
  let valuesScore = 70;
  let constraintsScore = 75;
  const conflicts: string[] = [];
  const positiveFactors: string[] = [];

  const earningsTimeline = responsesD['q_val_earnings_vs_speed'] as string;
  if (earningsTimeline) {
    if (earningsTimeline === 'fast_workforce_2yr' && program.intent.includes('Workforce')) {
      valuesScore += 15;
      positiveFactors.push('Provides direct 2-year entry into a high-demand workforce role ($50k–$70k+ starting)');
    } else if (earningsTimeline === 'bachelor_ladder_4yr' && program.intent.includes('Transfer')) {
      valuesScore += 15;
      positiveFactors.push('Structured transfer pathway leading directly to a university Bachelor’s degree');
    }
  }

  const mathAppetite = responsesD['q_val_math_appetite'] as string;
  if (mathAppetite) {
    if (mathAppetite === 'minimal_math_preferred' && program.workContext.mathScienceIntensity === 'Very High') {
      constraintsScore -= 30;
      conflicts.push('Requires Calculus and University Physics sequence, which conflicts with your preference for minimal math');
    } else if (mathAppetite === 'enthusiastic_stem' && program.workContext.mathScienceIntensity === 'Very High') {
      constraintsScore += 15;
      positiveFactors.push('Aligns with your readiness for rigorous college Calculus and STEM sequences');
    }
  }

  return {
    valuesScore: Math.max(0, Math.min(100, valuesScore)),
    constraintsScore: Math.max(0, Math.min(100, constraintsScore)),
    conflicts,
    positiveFactors
  };
}

/**
 * Evaluates answer completeness and recommendation confidence score (0-100).
 */
function calculateConfidenceScore(
  userResponses: UserResponses,
  program: ACCProgram
): { confidence: number; unanswered: string[] } {
  let confidence = 50;
  const unanswered: string[] = [];

  const totalQuestions = ASSESSMENT_QUESTIONS.filter(q =>
    userResponses.assessmentMode === 'quick' ? q.isQuickMode : true
  );

  let answeredCount = 0;
  for (const q of totalQuestions) {
    if (q.module === 'A' && userResponses.moduleA[q.id] !== undefined) answeredCount++;
    else if (q.module === 'B' && userResponses.moduleB[q.id] !== undefined) answeredCount++;
    else if (q.module === 'C' && userResponses.moduleC[q.id] !== undefined) answeredCount++;
    else if (q.module === 'D' && userResponses.moduleD[q.id] !== undefined) answeredCount++;
    else if (q.module === 'E' && userResponses.moduleE[q.id] !== undefined) answeredCount++;
  }

  const completionRatio = totalQuestions.length > 0 ? answeredCount / totalQuestions.length : 0;
  confidence += Math.round(completionRatio * 35);

  // Bonus for concrete evidence
  const builtProjects = (userResponses.moduleC['q_evi_projects_built'] as string[]) || [];
  if (builtProjects.length >= 2) confidence += 10;

  // Unanswered critical questions
  if (!userResponses.moduleD['q_val_math_appetite'] && program.workContext.mathScienceIntensity === 'Very High') {
    unanswered.push('Math readiness (Calculus/Physics sequence tolerance)');
  }
  if (!userResponses.moduleB['q_env_biofluids_safety'] && program.areaOfStudy === 'Health Sciences') {
    unanswered.push('Tolerance for clinical environments and medical bodily fluids');
  }
  if (!userResponses.moduleD['q_val_earnings_vs_speed']) {
    unanswered.push('2-year workforce entry vs 4-year university transfer goal');
  }

  return {
    confidence: Math.max(20, Math.min(98, confidence)),
    unanswered
  };
}

/**
 * Main Deterministic Scoring Function
 */
export function calculateAssessmentResults(
  userResponses: UserResponses,
  weights: ScoringWeights = DEFAULT_SCORING_WEIGHTS
): AssessmentResult {
  const { raw, percentages, primaryCode } = calculateRIASECScores(userResponses.moduleA);

  // Group programs by Area of Study to build Domain Matches
  const areasOfStudy: ACCAreaOfStudy[] = [
    'Information Technology',
    'Applied Technologies & Trades',
    'Health Sciences',
    'Business',
    'Design, Manufacturing & Construction',
    'Arts, Digital Media & Communications',
    'Science, Engineering & Math',
    'Liberal Arts (Humanities & Social Sciences)',
    'Public & Social Services',
    'Education',
    'Culinary, Hospitality & Tourism'
  ];

  const domainMatches: DomainMatch[] = [];

  for (const area of areasOfStudy) {
    const areaPrograms = ACC_PROGRAMS.filter(p => p.areaOfStudy === area);
    if (areaPrograms.length === 0) continue;

    // Calculate score across programs in this domain
    let bestProgram = areaPrograms[0];
    let bestFitScore = -1;
    let bestComponents: ComponentScores = {
      riasecScore: 0,
      workEnvironmentScore: 0,
      activityEvidenceScore: 0,
      workValuesScore: 0,
      practicalConstraintsScore: 0,
      evidenceQualityScore: 0
    };
    let combinedPositive: string[] = [];
    let combinedConflicts: string[] = [];
    let combinedUnanswered: string[] = [];
    let bestConfidence = 50;

    const allDomainPositives: string[] = [];
    const allDomainConflicts: string[] = [];
    const allDomainUnanswered: string[] = [];

    for (const prog of areaPrograms) {
      const riasec = calculateRIASECSimilarity(percentages, prog.riasecWeights);
      const env = calculateEnvironmentScore(userResponses.moduleB, prog);
      const evi = calculateEvidenceScore(userResponses.moduleC, prog);
      const valConst = calculateValuesAndConstraintsScore(userResponses.moduleD, prog);
      const conf = calculateConfidenceScore(userResponses, prog);

      allDomainPositives.push(...env.positiveFactors, ...evi.positiveFactors, ...valConst.positiveFactors);
      allDomainConflicts.push(...env.conflicts, ...valConst.conflicts);
      allDomainUnanswered.push(...conf.unanswered);

      const qualityScore = Math.min(100, Math.round(conf.confidence * 0.9));

      const composite = Math.round(
        weights.riasecInterest * riasec +
        weights.workEnvironment * env.score +
        weights.activityEvidence * evi.score +
        weights.workValues * valConst.valuesScore +
        weights.practicalConstraints * valConst.constraintsScore +
        weights.evidenceConfidence * qualityScore
      );

      if (composite > bestFitScore) {
        bestFitScore = composite;
        bestProgram = prog;
        bestComponents = {
          riasecScore: riasec,
          workEnvironmentScore: env.score,
          activityEvidenceScore: evi.score,
          workValuesScore: valConst.valuesScore,
          practicalConstraintsScore: valConst.constraintsScore,
          evidenceQualityScore: qualityScore
        };
        bestConfidence = conf.confidence;
      }
    }

    combinedPositive = Array.from(new Set(allDomainPositives));
    combinedConflicts = Array.from(new Set(allDomainConflicts));
    combinedUnanswered = Array.from(new Set(allDomainUnanswered));

    let summaryNote = 'Strong match based on aligned interests and work setting.';
    if (bestFitScore >= 75) {
      summaryNote = 'High alignment across your RIASEC interest profile, work environment, and reported strengths.';
    } else if (bestFitScore >= 55) {
      summaryNote = 'Plausible exploration pathway with several strong matching elements.';
    } else {
      summaryNote = 'Lower priority match; requires careful validation before committing.';
    }

    domainMatches.push({
      domainId: `domain-${area.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      domainName: area,
      areaOfStudy: area,
      fitScore: Math.max(10, Math.min(99, bestFitScore)),
      confidenceScore: bestConfidence,
      componentScores: bestComponents,
      strongestPositiveFactors: combinedPositive.slice(0, 4),
      potentialConflicts: combinedConflicts.slice(0, 3),
      unansweredQuestions: combinedUnanswered,
      validationExperiment: bestProgram.lowCostValidationExperiment,
      topPrograms: areaPrograms,
      summaryNote
    });
  }

  // Sort domains descending by fit score
  domainMatches.sort((a, b) => b.fitScore - a.fitScore);

  const totalQuestions = ASSESSMENT_QUESTIONS.filter(q =>
    userResponses.assessmentMode === 'quick' ? q.isQuickMode : true
  ).length;

  let answeredCount = 0;
  for (const q of ASSESSMENT_QUESTIONS) {
    if (q.module === 'A' && userResponses.moduleA[q.id] !== undefined) answeredCount++;
    else if (q.module === 'B' && userResponses.moduleB[q.id] !== undefined) answeredCount++;
    else if (q.module === 'C' && userResponses.moduleC[q.id] !== undefined) answeredCount++;
    else if (q.module === 'D' && userResponses.moduleD[q.id] !== undefined) answeredCount++;
    else if (q.module === 'E' && userResponses.moduleE[q.id] !== undefined) answeredCount++;
  }

  const completionPercentage = totalQuestions > 0 ? Math.min(100, Math.round((answeredCount / totalQuestions) * 100)) : 0;

  return {
    riasecScores: raw,
    riasecPercentages: percentages,
    primaryCode,
    domainMatches,
    calculatedAt: new Date().toISOString(),
    totalQuestionsAnswered: answeredCount,
    completionPercentage,
    isComplete: completionPercentage >= 90
  };
}
