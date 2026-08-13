export type RIASECDimension = 'Realistic' | 'Investigative' | 'Artistic' | 'Social' | 'Enterprising' | 'Conventional';

export type ACCAreaOfStudy =
  | 'Applied Technologies & Trades'
  | 'Arts, Digital Media & Communications'
  | 'Business'
  | 'Culinary, Hospitality & Tourism'
  | 'Design, Manufacturing & Construction'
  | 'Education'
  | 'Health Sciences'
  | 'Information Technology'
  | 'Liberal Arts (Humanities & Social Sciences)'
  | 'Public & Social Services'
  | 'Science, Engineering & Math';

export type AwardType =
  | 'Certificate Level 1'
  | 'Certificate Level 2'
  | 'Occupational Skills Award'
  | 'Associate of Applied Science (AAS)'
  | 'Associate of Arts (AA)'
  | 'Associate of Science (AS)'
  | 'Associate of Arts in Teaching (AAT)'
  | 'Bachelor of Applied Technology (BAT)'
  | 'Bachelor of Science in Nursing (BSN)';

export type ProgramIntent = 'Workforce Entry' | 'University Transfer' | 'Workforce Entry & Transfer';

export type VerificationStatus =
  | 'Verified current'
  | 'Verified for a prior academic year'
  | 'Partially verified'
  | 'Verification required';

export interface SourceRecord {
  id: string;
  title: string;
  url: string;
  organization:
    | 'Austin Community College'
    | 'O*NET Center / US DOL'
    | 'U.S. Bureau of Labor Statistics'
    | 'Texas Workforce Commission'
    | 'The University of Texas at Austin'
    | 'Texas State University'
    | 'Texas A&M University'
    | 'University of Houston';
  academicYear: string;
  retrievalDate: string;
  lastVerifiedDate: string;
  verificationStatus: VerificationStatus;
  notes?: string;
}

export interface RelatedOccupation {
  title: string;
  socCode: string;
  medianWageAustin: string;
  annualOpeningsAustin: string;
  growthRateAustin: string;
  typicalEducation: string;
  sourceId: string;
}

export interface RelatedACCCourse {
  courseCode: string;
  courseTitle: string;
  creditHours: number;
  coreCurriculumArea?: string;
  coreComponentCode?: string;
  isFirstSemesterExploratory: boolean;
  description: string;
  prerequisites?: string[];
}

export interface TransferPathway {
  university: string;
  degreeName: string;
  transferGuideUrl: string;
  coreSatisfied: boolean;
  generalCreditAccepted: boolean;
  majorApplicabilityNotes: string;
  articulationType: 'Formal Articulation 2+2' | 'Field of Study Curriculum' | 'General Core Transfer' | 'Course-by-Course Evaluation';
  minGpaRecommended?: number;
  sourceId: string;
}

export interface ValidationExperiment {
  title: string;
  description: string;
  estimatedTimeHours: number;
  costEstimate: string;
  type: 'Lab Tour' | 'Faculty Interview' | 'Intro Course' | 'Student Org' | 'Micro-Project' | 'Job Shadow';
  actionUrl?: string;
}

export interface ACCProgram {
  id: string;
  name: string;
  areaOfStudy: ACCAreaOfStudy;
  awardType: AwardType;
  intent: ProgramIntent;
  totalCredits: number;
  publishedDurationMonths: number;
  tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)' | 'Standard In-District Tuition' | 'Special Differential Program Tuition';
  estimatedTuitionInDistrict: string;
  additionalCostsNotes: string;
  programUrl: string;
  programMapUrl: string;
  cipCode?: string;
  prerequisites: string[];
  tsiRequirements: 'TSI Liable (Reading, Writing, Math)' | 'TSI Exempt (Level 1 Certificate)' | 'TSI Partial';
  selectiveAdmission: boolean;
  selectiveAdmissionNotes?: string;
  deliveryOptions: ('In-Person' | 'Hybrid' | 'Online / Distance' | 'Evenings/Weekends')[];
  primaryCampuses: string[];
  riasecCode: string;
  riasecWeights: Record<RIASECDimension, number>;
  workContext: {
    handsOnLevel: 'Low' | 'Medium' | 'High';
    mathScienceIntensity: 'Low' | 'Medium' | 'High' | 'Very High';
    peopleInteraction: 'Low' | 'Medium' | 'High';
    workSetting: ('Office' | 'Lab' | 'Outdoor' | 'Shop/Field' | 'Clinical' | 'Studio' | 'Remote')[];
    physicalDemand: 'Low' | 'Moderate' | 'High';
    paceOfChange: 'Predictable Routine' | 'Moderate Variety' | 'Fast-Paced / Dynamic';
  };
  relatedOccupations: RelatedOccupation[];
  relatedAccCourses: RelatedACCCourse[];
  transferPathways: TransferPathway[];
  lowCostValidationExperiment: ValidationExperiment;
  sourceIds: string[];
  verificationStatus: VerificationStatus;
  lastVerifiedDate: string;
}

export interface CoreCurriculumCourse {
  code: string;
  title: string;
  sch: number;
  componentArea: string;
  componentCode: string;
  prerequisites: string;
  tsiRequirement: 'TSI Complete in Reading/Writing' | 'TSI Complete in Math' | 'None';
  suitabilityForUndecided: 'High' | 'Medium' | 'Major-Specific (Risk of excess hours)';
  warningNote?: string;
  sourceId: string;
}

export type Likert5 = 1 | 2 | 3 | 4 | 5; // 1: Strongly Dislike/Disagree, 2: Dislike/Disagree, 3: Unsure/Neutral, 4: Like/Agree, 5: Strongly Like/Agree

export interface AssessmentQuestion {
  id: string;
  module: 'A' | 'B' | 'C' | 'D' | 'E';
  prompt: string;
  subtext?: string;
  dimension?: RIASECDimension;
  category?: string;
  type: 'likert5' | 'single_choice' | 'multi_choice' | 'slider';
  options?: { value: string | number; label: string; description?: string }[];
  isQuickMode: boolean; // included in 30-min quick mode
  rationaleNotice?: string; // explains why this question is asked
}

export interface StudentContext {
  highSchoolGradYear: string;
  isAccUndecided: boolean;
  freeTuitionEligible: 'Yes (Class of 2024/2025/2026 In-District)' | 'No' | 'Not Sure';
  weeklyHoursAvailable: 'Full-Time (12+ credits)' | 'Part-Time (6-9 credits)' | 'Single Course (3 credits)';
  mathComfortLevel: 'Calculus-ready' | 'Algebra-comfortable' | 'Prefer Minimal Math' | 'Need Math Refresher';
  primaryGoal: 'Earn 2-year workforce credential and start working' | 'Transfer to 4-year university for Bachelor degree' | 'Explore 1-2 classes before deciding' | 'Learn a specific hands-on trade';
  campusPreferences: string[];
}

export interface UserResponses {
  studentContext: StudentContext;
  moduleA: Record<string, Likert5>; // RIASEC
  moduleB: Record<string, string | number | string[]>; // Work Environment
  moduleC: Record<string, string | number | string[]>; // Evidence
  moduleD: Record<string, string | number | string[]>; // Values & Constraints
  moduleE: Record<string, string | number>; // Clarification
  completedModules: string[];
  assessmentMode: 'quick' | 'deep';
  lastUpdated: string;
}

export interface ScoringWeights {
  riasecInterest: number;        // default 0.35
  workEnvironment: number;       // default 0.20
  activityEvidence: number;      // default 0.15
  workValues: number;            // default 0.15
  practicalConstraints: number;  // default 0.10
  evidenceConfidence: number;    // default 0.05
}

export interface ComponentScores {
  riasecScore: number;
  workEnvironmentScore: number;
  activityEvidenceScore: number;
  workValuesScore: number;
  practicalConstraintsScore: number;
  evidenceQualityScore: number;
}

export interface DomainMatch {
  domainId: string;
  domainName: string;
  areaOfStudy: ACCAreaOfStudy;
  fitScore: number;          // 0 to 100
  confidenceScore: number;   // 0 to 100
  componentScores: ComponentScores;
  strongestPositiveFactors: string[];
  potentialConflicts: string[];
  unansweredQuestions: string[];
  validationExperiment: ValidationExperiment;
  topPrograms: ACCProgram[];
  summaryNote: string;
}

export interface AssessmentResult {
  riasecScores: Record<RIASECDimension, number>;
  riasecPercentages: Record<RIASECDimension, number>;
  primaryCode: string; // e.g. "RIC"
  domainMatches: DomainMatch[];
  calculatedAt: string;
  totalQuestionsAnswered: number;
  completionPercentage: number;
  isComplete: boolean;
}

export interface ActionPlanTask {
  id: string;
  timeframe: '30-day' | '60-day' | '90-day';
  title: string;
  description: string;
  category: 'Explore ACC Campus / Lab' | 'Informational Interview' | 'Course Enrollment' | 'Student Organization' | 'Hands-on Micro-Project';
  status: 'Not Started' | 'In Progress' | 'Completed';
  targetProgramId?: string;
  resourceLink?: string;
}

export interface DiscussionScheduleCourseItem {
  code: string;
  title: string;
  creditHours: number;
  inclusionReason: string;
  coreArea?: string;
  prerequisiteNote?: string;
  transferCaveat: string;
}

export interface DiscussionSchedule {
  conceptType: 'Maximum Flexibility (General Core)' | 'Explore a Direction (Core + Exploratory Course)';
  summary: string;
  totalCreditHours: number;
  courses: DiscussionScheduleCourseItem[];
  advisorQuestions: string[];
  tsiNotice: string;
  tuitionCoverageNotice: string;
}
