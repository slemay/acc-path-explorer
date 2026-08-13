import { DiscussionSchedule, StudentContext, ACCProgram, DiscussionScheduleCourseItem } from '@/types';
import { ACC_CORE_CURRICULUM_COURSES } from '@/data/accCoreCurriculum';

/**
 * Generates First-Semester Course Discussion Plans for undecided students
 * offering two distinct schedules:
 * 1. "Maximum Flexibility" (General Core - 100% applies broadly)
 * 2. "Explore a Direction" (Core Foundation + 1 Exploratory Program Course)
 */
export function generateFirstSemesterSchedules(
  studentContext: StudentContext,
  leadingProgram?: ACCProgram
): {
  maxFlexibilitySchedule: DiscussionSchedule;
  exploratorySchedule: DiscussionSchedule;
} {
  const isCalculusReady = studentContext.mathComfortLevel === 'Calculus-ready';
  const isMinimalMath = studentContext.mathComfortLevel === 'Prefer Minimal Math';

  // Math course selection logic
  const selectedMath = isCalculusReady
    ? ACC_CORE_CURRICULUM_COURSES.find(c => c.code === 'MATH 2413') || ACC_CORE_CURRICULUM_COURSES.find(c => c.code === 'MATH 1314')!
    : isMinimalMath
    ? ACC_CORE_CURRICULUM_COURSES.find(c => c.code === 'MATH 1332') || ACC_CORE_CURRICULUM_COURSES.find(c => c.code === 'MATH 1314')!
    : ACC_CORE_CURRICULUM_COURSES.find(c => c.code === 'MATH 1314')!;

  const engl1301 = ACC_CORE_CURRICULUM_COURSES.find(c => c.code === 'ENGL 1301')!;
  const educ1300 = ACC_CORE_CURRICULUM_COURSES.find(c => c.code === 'EDUC 1300')!;
  const psyc2301 = ACC_CORE_CURRICULUM_COURSES.find(c => c.code === 'PSYC 2301')!;

  // 1. MAXIMUM FLEXIBILITY SCHEDULE (12-13 SCH)
  const maxFlexibilityCourses: DiscussionScheduleCourseItem[] = [
    {
      code: engl1301.code,
      title: engl1301.title,
      creditHours: engl1301.sch,
      inclusionReason: 'Foundational English composition requirement universally mandatory across all associate and bachelor degrees.',
      coreArea: '010 - Communication',
      prerequisiteNote: engl1301.prerequisites,
      transferCaveat: 'Transfers 100% as direct ENGL 1301 credit to UT Austin (RHE 306), Texas State (ENG 1310), and Texas A&M (ENGL 104).'
    },
    {
      code: selectedMath.code,
      title: selectedMath.title,
      creditHours: selectedMath.sch,
      inclusionReason: `Satisfies Texas Core Mathematics (020) based on your reported math readiness (${studentContext.mathComfortLevel}).`,
      coreArea: '020 - Mathematics',
      prerequisiteNote: selectedMath.prerequisites,
      transferCaveat: isMinimalMath
        ? 'CAUTION: Contemporary Math (MATH 1332) transfers for Liberal Arts, but does NOT satisfy Business or STEM major prerequisites.'
        : 'Applies broadly as core math. If shifting to Engineering/CS, Calculus I (MATH 2413) is required.'
    },
    {
      code: educ1300.code,
      title: educ1300.title,
      creditHours: educ1300.sch,
      inclusionReason: 'ACC signature First-Year Experience seminar specifically designed for undecided students to clarify career paths, study skills, and degree plans.',
      coreArea: '090 - Component Area Option',
      prerequisiteNote: 'No prerequisites.',
      transferCaveat: 'Counts toward ACC associate degrees and transfers as general elective / component area credit.'
    },
    {
      code: psyc2301.code,
      title: psyc2301.title,
      creditHours: psyc2301.sch,
      inclusionReason: 'High-utility social science core course that doubles as a major prerequisite for Nursing, Psychology, Business, and Education.',
      coreArea: '080 - Social & Behavioral Sciences',
      prerequisiteNote: psyc2301.prerequisites,
      transferCaveat: 'Transfers as direct core credit across all Texas public universities (UT PSY 301, TXST PSY 1300).'
    }
  ];

  const maxFlexibilitySchedule: DiscussionSchedule = {
    conceptType: 'Maximum Flexibility (General Core)',
    summary: 'Optimized for undecided exploration. 100% of these credit hours apply directly to the Texas 42-hour General Education Core and transfer to any public Texas university without locking you into a specific major.',
    totalCreditHours: maxFlexibilityCourses.reduce((acc, c) => acc + c.creditHours, 0),
    courses: maxFlexibilityCourses,
    advisorQuestions: [
      'Are my TSI scores fully verified on my ACC student portal, or do I need a placement refresher?',
      'If I take College Algebra instead of Contemporary Math, does that keep my options open for both Business and Liberal Arts?',
      'How does the ACC Free Tuition program apply to my first 12 credit hours this term?'
    ],
    tsiNotice: 'TSI Status Notice: Student must be TSI Complete or enrolled in co-requisite support for Reading, Writing, and Math before registering.',
    tuitionCoverageNotice: 'Tuition Note: Eligible in-district 2024–2026 high school graduates receive $0 tuition; textbook and supply fees remain the student’s responsibility.'
  };

  // 2. EXPLORE A DIRECTION SCHEDULE (12-14 SCH)
  const exploratoryCourse = leadingProgram?.relatedAccCourses.find(c => c.isFirstSemesterExploratory) || {
    courseCode: 'COSC 1336',
    courseTitle: 'Programming Fundamentals I',
    creditHours: 3,
    coreCurriculumArea: '090 - Component Area Option',
    isFirstSemesterExploratory: true,
    description: 'First exploratory course introducing hands-on problem solving in the leading field of interest.'
  };

  const exploratoryCourses: DiscussionScheduleCourseItem[] = [
    {
      code: engl1301.code,
      title: engl1301.title,
      creditHours: engl1301.sch,
      inclusionReason: 'Universal communication requirement maintaining general degree progress.',
      coreArea: '010 - Communication',
      prerequisiteNote: engl1301.prerequisites,
      transferCaveat: 'Universal Texas core credit.'
    },
    {
      code: selectedMath.code,
      title: selectedMath.title,
      creditHours: selectedMath.sch,
      inclusionReason: 'Satisfies core mathematics requirements.',
      coreArea: '020 - Mathematics',
      prerequisiteNote: selectedMath.prerequisites,
      transferCaveat: 'Check specific math requirements for the intended bachelor degree before term 2.'
    },
    {
      code: educ1300.code,
      title: educ1300.title,
      creditHours: educ1300.sch,
      inclusionReason: 'College learning strategies and career decision-making.',
      coreArea: '090 - Component Area Option',
      prerequisiteNote: 'No prerequisites.',
      transferCaveat: 'Component Area core credit.'
    },
    {
      code: exploratoryCourse.courseCode,
      title: exploratoryCourse.courseTitle,
      creditHours: exploratoryCourse.creditHours,
      inclusionReason: `Hands-on exploratory course to test your leading hypothesis in ${leadingProgram ? leadingProgram.name : 'a leading career domain'}.`,
      coreArea: exploratoryCourse.coreCurriculumArea || 'Major Specific / Field of Study',
      prerequisiteNote: exploratoryCourse.prerequisites ? exploratoryCourse.prerequisites.join(', ') : 'Check course catalog for prerequisites.',
      transferCaveat: leadingProgram?.intent === 'University Transfer' || leadingProgram?.intent === 'Workforce Entry & Transfer'
        ? 'Applies directly to the major sequence at transfer universities.'
        : 'Applies to the ACC AAS/Certificate award plan. May transfer as elective credit if switching to an unrelated 4-year major.'
    }
  ];

  const exploratorySchedule: DiscussionSchedule = {
    conceptType: 'Explore a Direction (Core + Exploratory Course)',
    summary: `Combines 3 core courses with 1 introductory course in ${leadingProgram ? leadingProgram.name : 'your top match'} to test whether this field is a genuine fit before committing.`,
    totalCreditHours: exploratoryCourses.reduce((acc, c) => acc + c.creditHours, 0),
    courses: exploratoryCourses,
    advisorQuestions: [
      `If I take ${exploratoryCourse.courseCode} (${exploratoryCourse.courseTitle}) and later decide this field isn't for me, how will these 3 credit hours apply to a General Studies degree?`,
      `What is the deadline to drop or switch classes during the first week if the course pace doesn't feel right?`,
      `Does my target transfer university (e.g. UT Austin, Texas State, or Texas A&M) require a specific science sequence starting in term 2?`
    ],
    tsiNotice: 'TSI Status Notice: Exploratory courses in technical and STEM fields may require immediate TSI Math placement verification.',
    tuitionCoverageNotice: 'Tuition Note: Covered under ACC Free Tuition for eligible in-district graduates. Check lab fee differentials.'
  };

  return { maxFlexibilitySchedule, exploratorySchedule };
}
