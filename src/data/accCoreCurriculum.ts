import { CoreCurriculumCourse } from '@/types';

export const ACC_CORE_CURRICULUM_COURSES: CoreCurriculumCourse[] = [
  // 010 Communication (6 SCH)
  {
    code: 'ENGL 1301',
    title: 'English Composition I',
    sch: 3,
    componentArea: '010 - Communication',
    componentCode: '010',
    prerequisites: 'TSI Complete in Reading and Writing or equivalent placement.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Foundational universal requirement across all Texas 2-year and 4-year degree plans.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'ENGL 1302',
    title: 'English Composition II',
    sch: 3,
    componentArea: '010 - Communication',
    componentCode: '010',
    prerequisites: 'ENGL 1301 with a grade of C or better.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Recommended taken in term 2 or after ENGL 1301.',
    sourceId: 'src-acc-core-curriculum'
  },

  // 020 Mathematics (3 SCH)
  {
    code: 'MATH 1332',
    title: 'Contemporary Mathematics (Quantitative Reasoning)',
    sch: 3,
    componentArea: '020 - Mathematics',
    componentCode: '020',
    prerequisites: 'TSI Complete in Math.',
    tsiRequirement: 'TSI Complete in Math',
    suitabilityForUndecided: 'Medium',
    warningNote: 'Excellent for Liberal Arts and Humanities. CAUTION: Does NOT satisfy math requirements for STEM, Business, or Health Science majors.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'MATH 1314',
    title: 'College Algebra',
    sch: 3,
    componentArea: '020 - Mathematics',
    componentCode: '020',
    prerequisites: 'TSI Complete in Math or appropriate placement score.',
    tsiRequirement: 'TSI Complete in Math',
    suitabilityForUndecided: 'High',
    warningNote: 'Broad applicability for General Studies, Social Sciences, and Technology majors. Prerequisite bridge to Precalculus.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'MATH 1324',
    title: 'Mathematics for Business & Social Sciences',
    sch: 3,
    componentArea: '020 - Mathematics',
    componentCode: '020',
    prerequisites: 'TSI Complete in Math.',
    tsiRequirement: 'TSI Complete in Math',
    suitabilityForUndecided: 'Medium',
    warningNote: 'Specifically tailored for Business and Economics tracks (satisfies UT McCombs & TXST McCoy prerequisites).',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'MATH 1342',
    title: 'Elementary Statistical Methods',
    sch: 3,
    componentArea: '020 - Mathematics',
    componentCode: '020',
    prerequisites: 'TSI Complete in Math.',
    tsiRequirement: 'TSI Complete in Math',
    suitabilityForUndecided: 'High',
    warningNote: 'Strong applicability across Nursing/Health Sciences, Psychology, Sociology, and Data Analytics.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'MATH 2413',
    title: 'Calculus I',
    sch: 4,
    componentArea: '020 - Mathematics',
    componentCode: '020',
    prerequisites: 'MATH 2412 (Precalculus) with a grade of C or better or qualifying placement score.',
    tsiRequirement: 'TSI Complete in Math',
    suitabilityForUndecided: 'Major-Specific (Risk of excess hours)',
    warningNote: 'Required for Computer Science, Engineering, Physics, and Math. Rigorous math prerequisite required.',
    sourceId: 'src-acc-core-curriculum'
  },

  // 030 Life & Physical Sciences (6 SCH)
  {
    code: 'BIOL 1408',
    title: 'General Biology I (Non-Science Majors)',
    sch: 4,
    componentArea: '030 - Life & Physical Sciences',
    componentCode: '030',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Great introductory lab science for Arts, Business, and Humanities. Will NOT satisfy Pre-Med or Biology major sequence.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'BIOL 1406',
    title: 'Cellular and Molecular Biology (Science Majors)',
    sch: 4,
    componentArea: '030 - Life & Physical Sciences',
    componentCode: '030',
    prerequisites: 'TSI Complete in Reading, Writing, and Math. High school chemistry recommended.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'Medium',
    warningNote: 'Foundational entry point for Biology, Pre-Med, Biotechnology, and Nursing tracks.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'GEOL 1403',
    title: 'Physical Geology',
    sch: 4,
    componentArea: '030 - Life & Physical Sciences',
    componentCode: '030',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Engaging, accessible lab science covering earth structures, minerals, and environmental hazards.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'PHYS 1401',
    title: 'General College Physics I (Trig-Based)',
    sch: 4,
    componentArea: '030 - Life & Physical Sciences',
    componentCode: '030',
    prerequisites: 'MATH 1314 and MATH 1316 or MATH 2412 with C or better.',
    tsiRequirement: 'TSI Complete in Math',
    suitabilityForUndecided: 'Major-Specific (Risk of excess hours)',
    warningNote: 'Required for Architecture, Construction Management, and Health Physics. Engineering majors require Calculus-based PHYS 2425 instead.',
    sourceId: 'src-acc-core-curriculum'
  },

  // 040 Language, Philosophy & Culture (3 SCH)
  {
    code: 'PHIL 1301',
    title: 'Introduction to Philosophy',
    sch: 3,
    componentArea: '040 - Language, Philosophy, & Culture',
    componentCode: '040',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Develops critical reasoning and argumentative clarity. Applies to 100% of Texas bachelor programs as general core.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'PHIL 2306',
    title: 'Ethics',
    sch: 3,
    componentArea: '040 - Language, Philosophy, & Culture',
    componentCode: '040',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Directly beneficial for students exploring Law, Health Sciences, Tech/AI ethics, or Business.',
    sourceId: 'src-acc-core-curriculum'
  },

  // 050 Creative Arts (3 SCH)
  {
    code: 'ARTS 1301',
    title: 'Art Appreciation',
    sch: 3,
    componentArea: '050 - Creative Arts',
    componentCode: '050',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Explores visual media, culture, and artistic methods. Broad transfer acceptance.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'DRAM 1310',
    title: 'Introduction to Theatre',
    sch: 3,
    componentArea: '050 - Creative Arts',
    componentCode: '050',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Great for creative exploration, stagecraft, storytelling, and collaborative arts.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'MUSI 1306',
    title: 'Music Appreciation',
    sch: 3,
    componentArea: '050 - Creative Arts',
    componentCode: '050',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'History and fundamentals of musical genres, composition, and cultural expression.',
    sourceId: 'src-acc-core-curriculum'
  },

  // 060 American History (6 SCH)
  {
    code: 'HIST 1301',
    title: 'United States History I (to 1877)',
    sch: 3,
    componentArea: '060 - American History',
    componentCode: '060',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Statutory Texas core requirement for almost every associate and bachelor degree in Texas.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'HIST 1302',
    title: 'United States History II (since 1877)',
    sch: 3,
    componentArea: '060 - American History',
    componentCode: '060',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Second half of statutory US history requirement.',
    sourceId: 'src-acc-core-curriculum'
  },

  // 070 Government / Political Science (6 SCH)
  {
    code: 'GOVT 2305',
    title: 'Federal Government (Federal Constitution & Topics)',
    sch: 3,
    componentArea: '070 - Government / Political Science',
    componentCode: '070',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Statutory Texas requirement covering U.S. constitutional principles and civic processes.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'GOVT 2306',
    title: 'Texas Government (Texas Constitution & Topics)',
    sch: 3,
    componentArea: '070 - Government / Political Science',
    componentCode: '070',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'State and local political systems in Texas.',
    sourceId: 'src-acc-core-curriculum'
  },

  // 080 Social & Behavioral Sciences (3 SCH)
  {
    code: 'PSYC 2301',
    title: 'Introduction to Psychology',
    sch: 3,
    componentArea: '080 - Social & Behavioral Sciences',
    componentCode: '080',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Extremely versatile course. Required prerequisite for Nursing/Allied Health and broadly applies across all majors.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'SOCI 1301',
    title: 'Introduction to Sociology',
    sch: 3,
    componentArea: '080 - Social & Behavioral Sciences',
    componentCode: '080',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Human social behavior, groups, and institutional dynamics. Broad transferability.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'ECON 2301',
    title: 'Principles of Macroeconomics',
    sch: 3,
    componentArea: '080 - Social & Behavioral Sciences',
    componentCode: '080',
    prerequisites: 'TSI Complete in Reading, Writing, and Math.',
    tsiRequirement: 'TSI Complete in Math',
    suitabilityForUndecided: 'High',
    warningNote: 'Essential prerequisite for Business Administration, Finance, and Economics majors.',
    sourceId: 'src-acc-core-curriculum'
  },

  // 090 Component Area Option (3 SCH)
  {
    code: 'SPCH 1315',
    title: 'Public Speaking',
    sch: 3,
    componentArea: '090 - Component Area Option',
    componentCode: '090',
    prerequisites: 'TSI Complete in Reading and Writing.',
    tsiRequirement: 'TSI Complete in Reading/Writing',
    suitabilityForUndecided: 'High',
    warningNote: 'Builds critical verbal presentation skills. Fulfills oral communication requirement across Texas public universities.',
    sourceId: 'src-acc-core-curriculum'
  },
  {
    code: 'EDUC 1300',
    title: 'Effective Learning: Strategies for College Success',
    sch: 3,
    componentArea: '090 - Component Area Option',
    componentCode: '090',
    prerequisites: 'None.',
    tsiRequirement: 'None',
    suitabilityForUndecided: 'High',
    warningNote: 'ACC’s signature first-semester seminar for undecided students. Explores study habits, career planning, and degree roadmaps.',
    sourceId: 'src-acc-core-curriculum'
  }
];
