import { describe, it, expect } from 'vitest';
import { calculateRIASECScores, calculateAssessmentResults } from '@/lib/scoringEngine';
import { UserResponses } from '@/types';
import { DEFAULT_STUDENT_CONTEXT } from '@/lib/storage';

describe('Scoring Engine', () => {
  it('should deterministically calculate RIASEC scores on standard inputs', () => {
    const sampleModuleA: Record<string, number> = {
      q_riasec_r1: 1,
      q_riasec_r2: 1,
      q_riasec_r3: 1,
      q_riasec_r4: 1,
      q_riasec_i1: 5,
      q_riasec_i2: 5,
      q_riasec_i3: 5,
      q_riasec_i4: 5,
      q_riasec_a1: 4,
      q_riasec_a2: 4,
      q_riasec_a3: 4,
      q_riasec_a4: 4,
      q_riasec_s1: 2,
      q_riasec_s2: 2,
      q_riasec_s3: 2,
      q_riasec_s4: 2,
      q_riasec_e1: 3,
      q_riasec_e2: 3,
      q_riasec_e3: 3,
      q_riasec_e4: 3,
      q_riasec_c1: 4,
      q_riasec_c2: 4,
      q_riasec_c3: 4,
      q_riasec_c4: 4
    };

    const { percentages, primaryCode } = calculateRIASECScores(sampleModuleA as any);

    expect(percentages.Investigative).toBe(100);
    expect(percentages.Realistic).toBe(0);
    expect(percentages.Artistic).toBe(75);
    expect(percentages.Conventional).toBe(75);
    expect(primaryCode).toBe('IAC'); // Top 3
  });

  it('should rank Information Technology highly when student likes coding and analytical problem solving', () => {
    const techUserResponses: UserResponses = {
      studentContext: DEFAULT_STUDENT_CONTEXT,
      moduleA: {
        q_riasec_i1: 5,
        q_riasec_i2: 4,
        q_riasec_i3: 5,
        q_riasec_i4: 3,
        q_riasec_c1: 5,
        q_riasec_c2: 5,
        q_riasec_c3: 4,
        q_riasec_c4: 4,
        q_riasec_r1: 2,
        q_riasec_r2: 2,
        q_riasec_r3: 3,
        q_riasec_r4: 4,
        q_riasec_s1: 2,
        q_riasec_s2: 2,
        q_riasec_s3: 2,
        q_riasec_s4: 2,
        q_riasec_e1: 3,
        q_riasec_e2: 3,
        q_riasec_e3: 3,
        q_riasec_e4: 3,
        q_riasec_a1: 3,
        q_riasec_a2: 3,
        q_riasec_a3: 3,
        q_riasec_a4: 2
      },
      moduleB: {
        q_env_setting: ['Office', 'Remote'],
        q_env_people: 'Medium',
        q_env_handson: 'Low',
        q_env_routine: 'Fast-Paced / Dynamic',
        q_env_physical_tolerance: 'Low',
        q_env_biofluids_safety: 'Deal-Breaker'
      },
      moduleC: {
        q_evi_favorite_subjects: ['CompSci', 'Math'],
        q_evi_projects_built: ['coded_website_bot', 'built_pc_or_mod'],
        q_evi_peer_help: 'tech_troubleshooting',
        q_evi_disliked_subject_reason: 'too_much_repetitive_memorization'
      },
      moduleD: {
        q_val_earnings_vs_speed: 'bachelor_ladder_4yr',
        q_val_work_life_boundaries: 'strict_boundaries',
        q_val_math_appetite: 'enthusiastic_stem',
        q_val_commute_delivery: 'hybrid_flexible'
      },
      moduleE: {},
      completedModules: ['A', 'B', 'C', 'D'],
      assessmentMode: 'quick',
      lastUpdated: new Date().toISOString()
    };

    const results = calculateAssessmentResults(techUserResponses);
    expect(results.domainMatches.length).toBeGreaterThan(0);

    const topDomain = results.domainMatches[0];
    expect(topDomain.areaOfStudy).toBe('Information Technology');
    expect(topDomain.fitScore).toBeGreaterThanOrEqual(75);
    expect(topDomain.strongestPositiveFactors.length).toBeGreaterThan(0);
    expect(topDomain.confidenceScore).toBeGreaterThan(60);
  });

  it('should flag bodily fluid deal-breakers for bedside nursing programs', () => {
    const bioSensitiveResponses: UserResponses = {
      studentContext: DEFAULT_STUDENT_CONTEXT,
      moduleA: {
        q_riasec_s1: 5,
        q_riasec_s2: 5,
        q_riasec_s3: 5,
        q_riasec_s4: 5
      },
      moduleB: {
        q_env_biofluids_safety: 'Deal-Breaker'
      },
      moduleC: {},
      moduleD: {},
      moduleE: {},
      completedModules: ['A', 'B'],
      assessmentMode: 'quick',
      lastUpdated: new Date().toISOString()
    };

    const results = calculateAssessmentResults(bioSensitiveResponses);
    const healthDomain = results.domainMatches.find(d => d.areaOfStudy === 'Health Sciences');
    expect(healthDomain).toBeDefined();
    expect(healthDomain?.potentialConflicts.some(c => c.includes('bodily fluids'))).toBe(true);
  });
});
