import { ACCProgram } from '@/types';

export const ACC_PROGRAMS: ACCProgram[] = [
  // =========================================================================
  // 1. INFORMATION TECHNOLOGY
  // =========================================================================
  {
    id: 'prog-cs-as',
    name: 'Computer Science (AS Transfer)',
    areaOfStudy: 'Information Technology',
    awardType: 'Associate of Science (AS)',
    intent: 'University Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Personal laptop capable of virtualization/IDE tooling (~$900–$1,400). Digital textbooks covered in Z-classes where available.',
    programUrl: 'https://programs.austincc.edu/awards/computer-science-associate-of-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/computer-science-as-transfer-map-2026/',
    cipCode: '11.0701',
    prerequisites: ['MATH 2412 (Precalculus) or placement test score for Calculus I (MATH 2413).', 'TSI Complete in all areas.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid', 'Online / Distance', 'Evenings/Weekends'],
    primaryCampuses: ['Highland', 'Round Rock', 'Riverside', 'Northridge'],
    riasecCode: 'IRC',
    riasecWeights: { Realistic: 30, Investigative: 95, Artistic: 45, Social: 30, Enterprising: 50, Conventional: 75 },
    workContext: {
      handsOnLevel: 'Low',
      mathScienceIntensity: 'Very High',
      peopleInteraction: 'Medium',
      workSetting: ['Office', 'Remote'],
      physicalDemand: 'Low',
      paceOfChange: 'Fast-Paced / Dynamic'
    },
    relatedOccupations: [
      {
        title: 'Software Developer / Engineer',
        socCode: '15-1252',
        medianWageAustin: '$126,450/yr ($60.79/hr)',
        annualOpeningsAustin: '3,840',
        growthRateAustin: '+28% (Much faster than average)',
        typicalEducation: 'Bachelor’s degree',
        sourceId: 'src-twc-austin-msa'
      },
      {
        title: 'Computer Systems Analyst',
        socCode: '15-1211',
        medianWageAustin: '$104,200/yr ($50.10/hr)',
        annualOpeningsAustin: '1,120',
        growthRateAustin: '+19%',
        typicalEducation: 'Bachelor’s degree',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'COSC 1336',
        courseTitle: 'Programming Fundamentals I (Python / Java)',
        creditHours: 3,
        coreCurriculumArea: 'Component Area Option (090)',
        isFirstSemesterExploratory: true,
        description: 'First core programming course. Introduces structured algorithms, logic, problem solving, and syntax with zero prior coding required.'
      },
      {
        courseCode: 'MATH 2413',
        courseTitle: 'Calculus I',
        creditHours: 4,
        coreCurriculumArea: 'Mathematics (020)',
        isFirstSemesterExploratory: false,
        description: 'Differential and integral calculus essential for university engineering and computer science transfer sequences.'
      },
      {
        courseCode: 'COSC 1337',
        courseTitle: 'Programming Fundamentals II (Object-Oriented Data Structures)',
        creditHours: 3,
        isFirstSemesterExploratory: false,
        description: 'Object-oriented design, recursion, linked lists, stacks, queues, and algorithm complexity.'
      }
    ],
    transferPathways: [
      {
        university: 'The University of Texas at Austin',
        degreeName: 'B.S. in Computer Science (College of Natural Sciences)',
        transferGuideUrl: 'https://admissions.utexas.edu/apply/transfer-resources/ate-system/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Highly competitive transfer admissions (typically 3.85+ GPA). Requires Calculus I & II (MATH 2413/2414) and COSC 1336/1337 completed prior to transfer application.',
        articulationType: 'Course-by-Course Evaluation',
        minGpaRecommended: 3.8,
        sourceId: 'src-ut-austin-transfer'
      },
      {
        university: 'Texas State University',
        degreeName: 'B.S. in Computer Science',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Seamless 2+2 articulation map. All 60 credits apply directly toward freshman/sophomore degree requirements.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.75,
        sourceId: 'src-txst-transfer-guide'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Build a First Terminal Program & Attend ACC ACM Student Club',
      description: 'Spend 2 hours completing Harvard CS50 Week 0 (free online scratch/python module) and attend a Friday meeting of the ACC Computer Science Student Club at Highland Campus Building 2000.',
      estimatedTimeHours: 4,
      costEstimate: '$0 (Free)',
      type: 'Micro-Project'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa', 'src-ut-austin-transfer', 'src-txst-transfer-guide'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'prog-cybersecurity-aas',
    name: 'Cybersecurity & Information Assurance (AAS & BAT)',
    areaOfStudy: 'Information Technology',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry & Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Industry certification exam vouchers (CompTIA Security+, Network+, CySA+) discounted for ACC students (~$150–$250 each).',
    programUrl: 'https://programs.austincc.edu/awards/cybersecurity-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/cybersecurity-aas-map-2026/',
    cipCode: '11.1003',
    prerequisites: ['TSI Complete or enrolled in corequisite developmental education.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid', 'Online / Distance', 'Evenings/Weekends'],
    primaryCampuses: ['Highland', 'Rio Grande', 'Round Rock'],
    riasecCode: 'CIR',
    riasecWeights: { Realistic: 45, Investigative: 90, Artistic: 25, Social: 35, Enterprising: 60, Conventional: 90 },
    workContext: {
      handsOnLevel: 'Medium',
      mathScienceIntensity: 'Medium',
      peopleInteraction: 'Medium',
      workSetting: ['Office', 'Lab', 'Remote'],
      physicalDemand: 'Low',
      paceOfChange: 'Fast-Paced / Dynamic'
    },
    relatedOccupations: [
      {
        title: 'Information Security Analyst',
        socCode: '15-1212',
        medianWageAustin: '$112,800/yr ($54.23/hr)',
        annualOpeningsAustin: '1,450',
        growthRateAustin: '+34% (Exponential growth in Central Texas)',
        typicalEducation: 'Associate degree + Certifications (or Bachelor’s)',
        sourceId: 'src-twc-austin-msa'
      },
      {
        title: 'Network & Computer Systems Administrator',
        socCode: '15-1244',
        medianWageAustin: '$88,900/yr ($42.74/hr)',
        annualOpeningsAustin: '1,020',
        growthRateAustin: '+15%',
        typicalEducation: 'Associate degree or Postsecondary certificate',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'ITSY 1300',
        courseTitle: 'Fundamentals of Information Security',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Hands-on introduction to network defenses, cryptography basics, security policies, threat vectors, and ethical hacking.'
      },
      {
        courseCode: 'ITNW 1325',
        courseTitle: 'Fundamentals of Networking Technologies (Network+ Prep)',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Design and configuration of IP routing, switching, subnetting, and network infrastructure.'
      }
    ],
    transferPathways: [
      {
        university: 'Austin Community College',
        degreeName: 'Bachelor of Applied Technology (BAT) in Cybersecurity',
        transferGuideUrl: 'https://programs.austincc.edu/awards/cybersecurity-bachelor-of-applied-technology/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Direct 2+2 internal ladder! All 60 credits from the AAS apply 100% into the ACC 4-year BAT program at in-district tuition.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.5,
        sourceId: 'src-acc-programs-study'
      },
      {
        university: 'Texas A&M University–San Antonio',
        degreeName: 'B.A.A.S. in Information Technology (Cybersecurity)',
        transferGuideUrl: 'https://www.tamusa.edu/admissions/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Accepts technical vocational AAS credits into Applied Arts and Sciences degree.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.5,
        sourceId: 'src-tamu-transfer-matrix'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Complete OverTheWire Bandit Cyber Wargame (Levels 1-5)',
      description: 'Spend 2-3 hours doing free Linux terminal command-line security challenges at overthewire.org and visit the ACC Cybersecurity Defense Lab at Highland Campus.',
      estimatedTimeHours: 3,
      costEstimate: '$0 (Free)',
      type: 'Micro-Project'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'prog-software-dev-aas',
    name: 'Software Development / Web & Mobile Applications (AAS)',
    areaOfStudy: 'Information Technology',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Personal development laptop ($800+).',
    programUrl: 'https://programs.austincc.edu/awards/computer-information-technology-software-development-specialization-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/software-development-aas-map-2026/',
    cipCode: '11.0201',
    prerequisites: ['TSI Complete or enrolled in corequisite developmental education.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid', 'Online / Distance'],
    primaryCampuses: ['Highland', 'Riverside', 'Round Rock'],
    riasecCode: 'IRC',
    riasecWeights: { Realistic: 35, Investigative: 85, Artistic: 55, Social: 30, Enterprising: 45, Conventional: 80 },
    workContext: {
      handsOnLevel: 'Medium',
      mathScienceIntensity: 'Medium',
      peopleInteraction: 'Medium',
      workSetting: ['Office', 'Remote'],
      physicalDemand: 'Low',
      paceOfChange: 'Fast-Paced / Dynamic'
    },
    relatedOccupations: [
      {
        title: 'Web & Front-End Developer',
        socCode: '15-1254',
        medianWageAustin: '$89,600/yr ($43.08/hr)',
        annualOpeningsAustin: '1,280',
        growthRateAustin: '+22%',
        typicalEducation: 'Associate degree or Certificate + Portfolio',
        sourceId: 'src-twc-austin-msa'
      },
      {
        title: 'Junior Full-Stack Application Developer',
        socCode: '15-1252',
        medianWageAustin: '$94,500/yr ($45.43/hr)',
        annualOpeningsAustin: '2,100',
        growthRateAustin: '+25%',
        typicalEducation: 'Associate degree + Portfolio',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'ITSE 1302',
        courseTitle: 'Computer Programming (JavaScript / Web Applications)',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Interactive web applications, DOM scripting, modern JavaScript frameworks, and full-stack project architecture.'
      },
      {
        courseCode: 'ITSE 1307',
        courseTitle: 'Introduction to Database Design & SQL',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Relational data modeling, table schemas, SQL queries, and database-backed app integration.'
      }
    ],
    transferPathways: [
      {
        university: 'Austin Community College',
        degreeName: 'Bachelor of Applied Technology (BAT) in Software Development',
        transferGuideUrl: 'https://programs.austincc.edu/awards/software-development-bat/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Direct workforce ladder from AAS to 4-year Bachelor of Applied Technology.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.5,
        sourceId: 'src-acc-programs-study'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Build and Deploy a Personal Web Page on GitHub Pages',
      description: 'Spend 2 hours following the free MDN Web Docs HTML/CSS tutorial to build a simple personal page and publish it live.',
      estimatedTimeHours: 3,
      costEstimate: '$0 (Free)',
      type: 'Micro-Project'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },

  // =========================================================================
  // 2. APPLIED TECHNOLOGIES & TRADES
  // =========================================================================
  {
    id: 'prog-auto-tech-aas',
    name: 'Automotive Technology & Electric Vehicle Systems (AAS & Cert 1)',
    areaOfStudy: 'Applied Technologies & Trades',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Automotive hand tool set & safety equipment required (~$1,200–$2,000; tool grants and vendor discounts available through ACC Department).',
    programUrl: 'https://programs.austincc.edu/awards/automotive-technology-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/automotive-technology-aas-map-2026/',
    cipCode: '47.0604',
    prerequisites: ['TSI Complete or enrolled in corequisite developmental education.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Evenings/Weekends'],
    primaryCampuses: ['Round Rock', 'Riverside'],
    riasecCode: 'REC',
    riasecWeights: { Realistic: 95, Investigative: 65, Artistic: 15, Social: 25, Enterprising: 45, Conventional: 70 },
    workContext: {
      handsOnLevel: 'High',
      mathScienceIntensity: 'Medium',
      peopleInteraction: 'Low',
      workSetting: ['Shop/Field'],
      physicalDemand: 'High',
      paceOfChange: 'Moderate Variety'
    },
    relatedOccupations: [
      {
        title: 'Automotive Service Technician & Electric Vehicle Specialist',
        socCode: '49-3023',
        medianWageAustin: '$56,800/yr ($27.31/hr - Master techs $85k+)',
        annualOpeningsAustin: '920',
        growthRateAustin: '+14% (High demand for EV/Hybrid diagnostics)',
        typicalEducation: 'Associate degree or Postsecondary certificate',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'AUMT 1407',
        courseTitle: 'Automotive Electrical Systems',
        creditHours: 4,
        isFirstSemesterExploratory: true,
        description: 'Comprehensive study of automotive electrical circuits, wiring schematics, digital multimeters, batteries, starters, and alternator diagnosis.'
      },
      {
        courseCode: 'AUMT 1410',
        courseTitle: 'Automotive Brake Systems',
        creditHours: 4,
        isFirstSemesterExploratory: true,
        description: 'Operation and repair of disc/drum brakes, hydraulic systems, and anti-lock brake (ABS) electronics.'
      }
    ],
    transferPathways: [
      {
        university: 'Ferris State University / Texas State University',
        degreeName: 'B.S. in Automotive Management / Technology Management',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: false,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Designed primarily for immediate dealership/fleet workforce entry or fleet shop management.',
        articulationType: 'Course-by-Course Evaluation',
        minGpaRecommended: 2.25,
        sourceId: 'src-acc-programs-study'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Tour the ACC Round Rock Automotive & EV Training Facility',
      description: 'Schedule a 1-hour shop floor tour with an Automotive faculty advisor at Round Rock Campus and watch a live EV scan tool diagnostic demo.',
      estimatedTimeHours: 2,
      costEstimate: '$0 (Free)',
      type: 'Lab Tour'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'prog-welding-aas',
    name: 'Welding Technology (AAS & Code Welding Cert 1)',
    areaOfStudy: 'Applied Technologies & Trades',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Welding helmet, leather PPE, jacket, gloves, and chipping hammer (~$350–$600). Consumable materials provided in ACC labs.',
    programUrl: 'https://programs.austincc.edu/awards/welding-technology-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/welding-technology-aas-map-2026/',
    cipCode: '48.0508',
    prerequisites: ['Level 1 Certificate is TSI-exempt. AAS requires standard TSI compliance.'],
    tsiRequirements: 'TSI Exempt (Level 1 Certificate)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Evenings/Weekends'],
    primaryCampuses: ['Riverside', 'Round Rock'],
    riasecCode: 'RCA',
    riasecWeights: { Realistic: 95, Investigative: 40, Artistic: 35, Social: 15, Enterprising: 30, Conventional: 70 },
    workContext: {
      handsOnLevel: 'High',
      mathScienceIntensity: 'Low',
      peopleInteraction: 'Low',
      workSetting: ['Shop/Field', 'Outdoor'],
      physicalDemand: 'High',
      paceOfChange: 'Predictable Routine'
    },
    relatedOccupations: [
      {
        title: 'Welder, Cutter, Solderer & Pipefitter',
        socCode: '51-4121',
        medianWageAustin: '$52,400/yr ($25.19/hr - Certified pipe/structural $75k+)',
        annualOpeningsAustin: '810',
        growthRateAustin: '+16%',
        typicalEducation: 'Postsecondary certificate / Apprenticeship',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'WLDG 1421',
        courseTitle: 'Welding Fundamentals (Shielded Metal Arc / Stick)',
        creditHours: 4,
        isFirstSemesterExploratory: true,
        description: 'Hands-on introduction to SMAW (stick welding), joint setups, metallurgy basics, and shop safety procedures.'
      },
      {
        courseCode: 'WLDG 1430',
        courseTitle: 'Introduction to Gas Metal Arc Welding (GMAW / MIG)',
        creditHours: 4,
        isFirstSemesterExploratory: true,
        description: 'MIG welding principles on steel and aluminum plates in multiple positions.'
      }
    ],
    transferPathways: [
      {
        university: 'Tarleton State University',
        degreeName: 'B.A.A.S. in Manufacturing and Industrial Management',
        transferGuideUrl: 'https://www.tarleton.edu/admissions/',
        coreSatisfied: false,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Workforce AAS credits transfer into industrial management bachelor degree.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.0,
        sourceId: 'src-acc-programs-study'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Attend an ACC Welding Saturday Open Lab Session',
      description: 'Visit the Riverside Campus welding shop during an open demonstration day, observe student coupon test bends, and speak with a lead instructor.',
      estimatedTimeHours: 2,
      costEstimate: '$0 (Free)',
      type: 'Lab Tour'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'prog-hvac-aas',
    name: 'Heating, Air Conditioning & Refrigeration Technology (HVAC AAS & Cert 1)',
    areaOfStudy: 'Applied Technologies & Trades',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'HVAC gauge set, digital multimeter, safety boots (~$400–$700). EPA 608 Universal Certification fee included in coursework.',
    programUrl: 'https://programs.austincc.edu/awards/heating-air-conditioning-and-refrigeration-technology-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/hvac-aas-map-2026/',
    cipCode: '47.0201',
    prerequisites: ['Level 1 certificate is TSI exempt. AAS requires TSI compliance.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Evenings/Weekends'],
    primaryCampuses: ['Round Rock', 'Riverside'],
    riasecCode: 'RIE',
    riasecWeights: { Realistic: 90, Investigative: 70, Artistic: 15, Social: 30, Enterprising: 50, Conventional: 70 },
    workContext: {
      handsOnLevel: 'High',
      mathScienceIntensity: 'Medium',
      peopleInteraction: 'Medium',
      workSetting: ['Shop/Field', 'Outdoor'],
      physicalDemand: 'High',
      paceOfChange: 'Moderate Variety'
    },
    relatedOccupations: [
      {
        title: 'HVAC Mechanic, Technician & Commercial Installer',
        socCode: '49-9021',
        medianWageAustin: '$58,400/yr ($28.08/hr - Commercial technicians $80k+)',
        annualOpeningsAustin: '1,100',
        growthRateAustin: '+18% (Critical demand across Texas residential and commercial growth)',
        typicalEducation: 'Postsecondary certificate or Associate degree',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'HART 1407',
        courseTitle: 'Refrigeration Principles & EPA 608 Recovery',
        creditHours: 4,
        isFirstSemesterExploratory: true,
        description: 'Thermodynamic refrigeration cycle, manifold gauges, vacuum pumps, refrigerant recovery, and EPA regulations.'
      },
      {
        courseCode: 'HART 1401',
        courseTitle: 'Basic Electricity for HVAC',
        creditHours: 4,
        isFirstSemesterExploratory: true,
        description: 'AC/DC circuits, control relays, transformers, thermostats, capacitors, and troubleshooting electrical schematics.'
      }
    ],
    transferPathways: [
      {
        university: 'Texas State University',
        degreeName: 'B.A.A.S. in Technology Management',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: false,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Prepares technicians for commercial contracting business ownership and facilities management.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.25,
        sourceId: 'src-acc-programs-study'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Informational Interview with an Austin Commercial HVAC Contractor',
      description: 'Spend 30 minutes on the phone or over coffee asking an ACC HVAC alumni about daily diagnostic service calls, commercial vs residential work, and earning potential.',
      estimatedTimeHours: 1,
      costEstimate: '$0 (Free)',
      type: 'Faculty Interview'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },

  // =========================================================================
  // 3. HEALTH SCIENCES
  // =========================================================================
  {
    id: 'prog-nursing-rn-aas',
    name: 'Professional Nursing (RN Associate Degree & BSN Ladder)',
    areaOfStudy: 'Health Sciences',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry & Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'Special Differential Program Tuition',
    estimatedTuitionInDistrict: '$6,400 total (Includes clinical lab differential fees)',
    additionalCostsNotes: 'Scrubs, stethoscope, clinical background check, drug screen, immunizations, and ATI testing package (~$1,200 total).',
    programUrl: 'https://programs.austincc.edu/awards/professional-nursing-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/nursing-rn-aas-map-2026/',
    cipCode: '51.3801',
    prerequisites: ['BIOL 2401 (Anatomy & Physiology I)', 'BIOL 2402 (Anatomy & Physiology II)', 'BIOL 2420 (Microbiology)', 'PSYC 2301', 'HESI A2 Admission Exam scores (minimum 75% in each section).'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: true,
    selectiveAdmissionNotes: 'Competitive point-based admission process. Applications accepted twice yearly (Fall & Spring cohorts).',
    deliveryOptions: ['In-Person', 'Hybrid'],
    primaryCampuses: ['Eastview', 'Round Rock'],
    riasecCode: 'SIR',
    riasecWeights: { Realistic: 45, Investigative: 80, Artistic: 20, Social: 95, Enterprising: 40, Conventional: 70 },
    workContext: {
      handsOnLevel: 'High',
      mathScienceIntensity: 'High',
      peopleInteraction: 'High',
      workSetting: ['Clinical'],
      physicalDemand: 'High',
      paceOfChange: 'Fast-Paced / Dynamic'
    },
    relatedOccupations: [
      {
        title: 'Registered Nurse (RN) - Acute & Hospital Care',
        socCode: '29-1141',
        medianWageAustin: '$88,200/yr ($42.40/hr)',
        annualOpeningsAustin: '2,450',
        growthRateAustin: '+24% (Very High Regional Need)',
        typicalEducation: 'Associate degree in Nursing (ADN/AAS) or BSN + NCLEX-RN License',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'BIOL 2401',
        courseTitle: 'Human Anatomy & Physiology I',
        creditHours: 4,
        coreCurriculumArea: 'Life & Physical Sciences (030)',
        isFirstSemesterExploratory: true,
        description: 'Structure and function of the human body, cells, tissues, skeletal, muscular, and nervous systems with dissection and models.'
      },
      {
        courseCode: 'RNSG 1209',
        courseTitle: 'Introduction to Nursing Skills & Clinical Foundations',
        creditHours: 2,
        isFirstSemesterExploratory: false,
        description: 'Core clinical competencies: vital signs, sterile technique, patient assessment, and medication calculations.'
      }
    ],
    transferPathways: [
      {
        university: 'Austin Community College',
        degreeName: 'RN-to-BSN (Bachelor of Science in Nursing)',
        transferGuideUrl: 'https://programs.austincc.edu/awards/rn-to-bsn-bachelor-of-science-in-nursing/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'ACC offers a 100% online, affordable RN-to-BSN completion track designed for working RNs.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.5,
        sourceId: 'src-acc-programs-study'
      },
      {
        university: 'The University of Texas at Austin',
        degreeName: 'B.S. in Nursing (School of Nursing)',
        transferGuideUrl: 'https://nursing.utexas.edu/academics/undergraduate/alternate-entry',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Direct admission to UT School of Nursing requires high prerequisite GPA (typically 3.75+ in science prerequisite courses).',
        articulationType: 'Course-by-Course Evaluation',
        minGpaRecommended: 3.75,
        sourceId: 'src-ut-austin-transfer'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Attend an ACC Health Sciences Information Session & Hospital Volunteer Shift',
      description: 'Register for the mandatory monthly online ACC Nursing Information Session (1 hour) and shadow a hospital volunteer role at Dell Seton Medical Center.',
      estimatedTimeHours: 3,
      costEstimate: '$0 (Free)',
      type: 'Faculty Interview'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa', 'src-ut-austin-transfer'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'prog-radiologic-tech-aas',
    name: 'Radiologic Technology / Medical Radiographer (AAS)',
    areaOfStudy: 'Health Sciences',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry',
    totalCredits: 66,
    publishedDurationMonths: 24,
    tuitionCategory: 'Special Differential Program Tuition',
    estimatedTuitionInDistrict: '$6,200 total',
    additionalCostsNotes: 'Radiation monitoring dosimeter badge, clinical scrub uniforms, ARRT exam fees (~$900).',
    programUrl: 'https://programs.austincc.edu/awards/radiologic-technology-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/radiologic-technology-aas-map-2026/',
    cipCode: '51.0911',
    prerequisites: ['BIOL 2401 & BIOL 2402 with grade of C or better', 'MATH 1314 or MATH 1342', 'TSI Complete in all areas.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: true,
    selectiveAdmissionNotes: 'Specialized clinical cohort with limited seats; clinical site rotations across Austin hospital networks.',
    deliveryOptions: ['In-Person'],
    primaryCampuses: ['Eastview', 'Round Rock'],
    riasecCode: 'RIC',
    riasecWeights: { Realistic: 80, Investigative: 75, Artistic: 20, Social: 75, Enterprising: 30, Conventional: 75 },
    workContext: {
      handsOnLevel: 'High',
      mathScienceIntensity: 'High',
      peopleInteraction: 'High',
      workSetting: ['Clinical'],
      physicalDemand: 'Moderate',
      paceOfChange: 'Moderate Variety'
    },
    relatedOccupations: [
      {
        title: 'Radiologic Technologist & CT / MRI Specialist',
        socCode: '29-2034',
        medianWageAustin: '$74,500/yr ($35.82/hr)',
        annualOpeningsAustin: '460',
        growthRateAustin: '+19%',
        typicalEducation: 'Associate degree + ARRT Certification / Texas Medical Board License',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'RADR 1201',
        courseTitle: 'Introduction to Radiography & Patient Care',
        creditHours: 2,
        isFirstSemesterExploratory: false,
        description: 'Overview of imaging modalities, radiation safety principles, patient positioning, and clinical legal ethics.'
      },
      {
        courseCode: 'BIOL 2401',
        courseTitle: 'Human Anatomy & Physiology I',
        creditHours: 4,
        coreCurriculumArea: 'Life & Physical Sciences (030)',
        isFirstSemesterExploratory: true,
        description: 'Prerequisite foundational course for all medical imaging programs.'
      }
    ],
    transferPathways: [
      {
        university: 'Texas State University / Midwestern State University',
        degreeName: 'B.S. in Radiologic Science (BSRS)',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Advanced modality bachelor completion for ultrasound, MRI, mammography, and imaging department leadership.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.75,
        sourceId: 'src-acc-programs-study'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Tour the ACC Eastview Campus Radiologic Simulation Lab',
      description: 'Visit the simulated X-ray suite at Eastview Campus, observe high-tech digital positioning phantoms, and speak with a second-year radiology student.',
      estimatedTimeHours: 2,
      costEstimate: '$0 (Free)',
      type: 'Lab Tour'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'prog-biotech-aas',
    name: 'Biotechnology (AAS & Advanced Certificate)',
    areaOfStudy: 'Science, Engineering & Math',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry & Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Lab coat and splash safety goggles (~$45). Lab supplies provided in state-of-the-art Highland wet labs.',
    programUrl: 'https://programs.austincc.edu/awards/biotechnology-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/biotechnology-aas-map-2026/',
    cipCode: '26.1201',
    prerequisites: ['BIOL 1406 with C or better', 'MATH 1314 or higher.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid'],
    primaryCampuses: ['Highland (ACC Bioscience Incubator)'],
    riasecCode: 'IRC',
    riasecWeights: { Realistic: 65, Investigative: 95, Artistic: 20, Social: 25, Enterprising: 35, Conventional: 80 },
    workContext: {
      handsOnLevel: 'High',
      mathScienceIntensity: 'Very High',
      peopleInteraction: 'Low',
      workSetting: ['Lab'],
      physicalDemand: 'Moderate',
      paceOfChange: 'Moderate Variety'
    },
    relatedOccupations: [
      {
        title: 'Biological / Chemical Technician & Quality Control Analyst',
        socCode: '19-4021',
        medianWageAustin: '$58,600/yr ($28.17/hr)',
        annualOpeningsAustin: '540',
        growthRateAustin: '+21% (Austin biotech and pharma corridor)',
        typicalEducation: 'Associate degree or Certificate',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'BITC 1402',
        courseTitle: 'Biotechnology Laboratory Methods & Techniques',
        creditHours: 4,
        isFirstSemesterExploratory: true,
        description: 'Hands-on micropipetting, solution prep, pH buffering, spectrophotometry, gel electrophoresis, and sterile cell culture.'
      },
      {
        courseCode: 'BIOL 1406',
        courseTitle: 'Cellular & Molecular Biology',
        creditHours: 4,
        coreCurriculumArea: 'Life & Physical Sciences (030)',
        isFirstSemesterExploratory: true,
        description: 'Biochemistry, gene expression, recombinant DNA, and metabolic cellular pathways.'
      }
    ],
    transferPathways: [
      {
        university: 'University of Houston-Downtown / Texas A&M University',
        degreeName: 'B.S. in Biotechnology / Bioengineering',
        transferGuideUrl: 'https://www.uhd.edu/academics/sciences-technology/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Transfers directly into applied biosciences and industrial microbiology majors.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.75,
        sourceId: 'src-acc-programs-study'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Tour the ACC Highland Bioscience Incubator Wet Labs',
      description: 'Take a guided walk through the ACC Bioscience Incubator at Highland Campus to see actual startup life-science companies working alongside student labs.',
      estimatedTimeHours: 1.5,
      costEstimate: '$0 (Free)',
      type: 'Lab Tour'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },

  // =========================================================================
  // 4. BUSINESS
  // =========================================================================
  {
    id: 'prog-business-admin-as',
    name: 'Business Administration (AS Transfer - UT McCombs / TXST McCoy)',
    areaOfStudy: 'Business',
    awardType: 'Associate of Science (AS)',
    intent: 'University Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Standard business textbooks and digital access codes (~$300/semester).',
    programUrl: 'https://programs.austincc.edu/awards/business-administration-associate-of-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/business-administration-as-transfer-map-2026/',
    cipCode: '52.0201',
    prerequisites: ['MATH 1324 (Math for Business) or MATH 1314', 'TSI Complete in all areas.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid', 'Online / Distance', 'Evenings/Weekends'],
    primaryCampuses: ['Highland', 'Rio Grande', 'Round Rock', 'Riverside', 'Hays'],
    riasecCode: 'ECS',
    riasecWeights: { Realistic: 20, Investigative: 55, Artistic: 30, Social: 60, Enterprising: 95, Conventional: 85 },
    workContext: {
      handsOnLevel: 'Low',
      mathScienceIntensity: 'Medium',
      peopleInteraction: 'High',
      workSetting: ['Office', 'Remote'],
      physicalDemand: 'Low',
      paceOfChange: 'Moderate Variety'
    },
    relatedOccupations: [
      {
        title: 'Management Analyst & Business Consultant',
        socCode: '13-1111',
        medianWageAustin: '$98,400/yr ($47.31/hr)',
        annualOpeningsAustin: '2,200',
        growthRateAustin: '+22%',
        typicalEducation: 'Bachelor’s degree',
        sourceId: 'src-twc-austin-msa'
      },
      {
        title: 'Financial Analyst & Operations Manager',
        socCode: '13-2051',
        medianWageAustin: '$92,300/yr ($44.38/hr)',
        annualOpeningsAustin: '1,350',
        growthRateAustin: '+18%',
        typicalEducation: 'Bachelor’s degree',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'BUSI 1301',
        courseTitle: 'Business Principles',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Comprehensive overview of business operations, marketing, organizational management, entrepreneurship, and economics.'
      },
      {
        courseCode: 'ACCT 2301',
        courseTitle: 'Principles of Financial Accounting',
        creditHours: 3,
        isFirstSemesterExploratory: false,
        description: 'Balance sheets, income statements, corporate accounting, cash flow analysis, and ethical accounting standards.'
      },
      {
        courseCode: 'ECON 2301',
        courseTitle: 'Principles of Macroeconomics',
        creditHours: 3,
        coreCurriculumArea: 'Social & Behavioral Sciences (080)',
        isFirstSemesterExploratory: true,
        description: 'Macroeconomic indicators, fiscal and monetary policies, GDP, inflation, and global trade dynamics.'
      }
    ],
    transferPathways: [
      {
        university: 'The University of Texas at Austin',
        degreeName: 'B.B.A. in Business Administration (McCombs School of Business)',
        transferGuideUrl: 'https://admissions.utexas.edu/apply/transfer-resources/ate-system/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Extremely competitive transfer process (typically 3.8+ GPA required). Must complete Calculus (MATH 1325/2413), ECON 2301 & 2302, and ACCT 2301 with top grades.',
        articulationType: 'Course-by-Course Evaluation',
        minGpaRecommended: 3.85,
        sourceId: 'src-ut-austin-transfer'
      },
      {
        university: 'Texas State University',
        degreeName: 'B.B.A. in Finance / Management / Marketing (McCoy College of Business)',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Guaranteed transfer articulation when meeting 3.0 GPA benchmark on business prerequisites.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 3.0,
        sourceId: 'src-txst-transfer-guide'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Analyze a Company 10-K & Pitch an ACC Business Club Case Study',
      description: 'Spend 2 hours reviewing the free SEC EDGAR summary of a company you love (e.g., Apple or Tesla) and join an ACC Enactus / Future Business Leaders meeting.',
      estimatedTimeHours: 3,
      costEstimate: '$0 (Free)',
      type: 'Student Org'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa', 'src-ut-austin-transfer', 'src-txst-transfer-guide'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'prog-accounting-aas',
    name: 'Accounting & Bookkeeping (AAS & Professional Certificate)',
    areaOfStudy: 'Business',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'QuickBooks certification voucher discount available (~$120).',
    programUrl: 'https://programs.austincc.edu/awards/accounting-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/accounting-aas-map-2026/',
    cipCode: '52.0302',
    prerequisites: ['TSI Complete or enrolled in corequisite developmental education.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid', 'Online / Distance'],
    primaryCampuses: ['Highland', 'Rio Grande', 'Round Rock'],
    riasecCode: 'CEI',
    riasecWeights: { Realistic: 20, Investigative: 70, Artistic: 15, Social: 35, Enterprising: 65, Conventional: 95 },
    workContext: {
      handsOnLevel: 'Low',
      mathScienceIntensity: 'Medium',
      peopleInteraction: 'Medium',
      workSetting: ['Office', 'Remote'],
      physicalDemand: 'Low',
      paceOfChange: 'Predictable Routine'
    },
    relatedOccupations: [
      {
        title: 'Bookkeeper, Auditing Clerk & Staff Accountant',
        socCode: '43-3031',
        medianWageAustin: '$51,800/yr ($24.90/hr - Degreed accountants $82k+)',
        annualOpeningsAustin: '1,840',
        growthRateAustin: '+12%',
        typicalEducation: 'Associate degree or Certificate',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'ACNT 1303',
        courseTitle: 'Introduction to Accounting I (Practical Bookkeeping)',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Debits, credits, general ledgers, payroll records, and financial statement generation.'
      },
      {
        courseCode: 'ACNT 1325',
        courseTitle: 'Principles of Financial Accounting with QuickBooks',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Hands-on computer accounting using industry-standard QuickBooks software.'
      }
    ],
    transferPathways: [
      {
        university: 'Western Governors University (WGU) / Texas A&M-Commerce',
        degreeName: 'B.S. in Accounting',
        transferGuideUrl: 'https://www.wgu.edu/online-business-degrees/accounting-bachelors-program.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Fully applies toward CPA examination eligibility educational credit hours.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.5,
        sourceId: 'src-acc-programs-study'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Complete a Sample 3-Month Household Budget & Spreadsheet Audit',
      description: 'Spend 2 hours building an automated multi-tab Google Sheet reconciling mock bank transactions and calculating profit/loss.',
      estimatedTimeHours: 2,
      costEstimate: '$0 (Free)',
      type: 'Micro-Project'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },

  // =========================================================================
  // 5. DESIGN, MANUFACTURING & CONSTRUCTION
  // =========================================================================
  {
    id: 'prog-semiconductor-aas',
    name: 'Advanced Manufacturing & Semiconductor Technology (AAS)',
    areaOfStudy: 'Design, Manufacturing & Construction',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Cleanroom PPE provided on site. High-tech fab equipment sponsored by Samsung, NXP, and Applied Materials.',
    programUrl: 'https://programs.austincc.edu/awards/advanced-manufacturing-and-semiconductor-technology-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/semiconductor-manufacturing-aas-map-2026/',
    cipCode: '15.0613',
    prerequisites: ['TSI Complete in Math (or corequisite enrollment)'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid'],
    primaryCampuses: ['Highland (ACC IMPACT Fab Center)', 'Round Rock'],
    riasecCode: 'RIE',
    riasecWeights: { Realistic: 90, Investigative: 85, Artistic: 20, Social: 20, Enterprising: 40, Conventional: 75 },
    workContext: {
      handsOnLevel: 'High',
      mathScienceIntensity: 'High',
      peopleInteraction: 'Low',
      workSetting: ['Lab', 'Shop/Field'],
      physicalDemand: 'Moderate',
      paceOfChange: 'Fast-Paced / Dynamic'
    },
    relatedOccupations: [
      {
        title: 'Semiconductor Manufacturing Equipment Technician',
        socCode: '17-3026',
        medianWageAustin: '$64,800/yr ($31.15/hr - Entry techs start at $55k+ with signing incentives)',
        annualOpeningsAustin: '1,320',
        growthRateAustin: '+38% (Massive Central Texas fab expansion)',
        typicalEducation: 'Associate of Applied Science degree',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'CETT 1403',
        courseTitle: 'DC-AC Circuits & Electronic Instrumentation',
        creditHours: 4,
        isFirstSemesterExploratory: true,
        description: 'Electronic components, oscilloscopes, circuit board testing, and cleanroom vacuum equipment.'
      },
      {
        courseCode: 'SMFT 1471',
        courseTitle: 'Semiconductor Manufacturing Principles & Cleanroom Protocols',
        creditHours: 4,
        isFirstSemesterExploratory: true,
        description: 'Silicon wafer fabrication processes: photolithography, chemical vapor deposition, etching, ion implantation, and vacuum systems.'
      }
    ],
    transferPathways: [
      {
        university: 'Texas State University',
        degreeName: 'B.S. in Engineering Technology (Electrical & Manufacturing)',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Smooth 2+2 transfer for technicians pursuing engineering management and lead process engineering roles.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.5,
        sourceId: 'src-txst-transfer-guide'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Tour the ACC Highland Semiconductor IMPACT Cleanroom',
      description: 'Suit up in cleanroom gear and tour ACC’s live vacuum deposition and wafer processing equipment alongside a faculty industry veteran.',
      estimatedTimeHours: 2,
      costEstimate: '$0 (Free)',
      type: 'Lab Tour'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa', 'src-txst-transfer-guide'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'prog-architectural-cad-aas',
    name: 'Architectural & Engineering Computer-Aided Design (CAD AAS)',
    areaOfStudy: 'Design, Manufacturing & Construction',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry & Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'High-performance GPU laptop recommended for Revit/AutoCAD rendering (~$1,200). Autodesk software licenses provided free for students.',
    programUrl: 'https://programs.austincc.edu/awards/architectural-and-engineering-computer-aided-design-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/cad-architectural-aas-map-2026/',
    cipCode: '15.1303',
    prerequisites: ['TSI Complete or corequisite enrollment.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid', 'Online / Distance'],
    primaryCampuses: ['Highland', 'Round Rock', 'Riverside'],
    riasecCode: 'RAI',
    riasecWeights: { Realistic: 85, Investigative: 70, Artistic: 75, Social: 20, Enterprising: 40, Conventional: 75 },
    workContext: {
      handsOnLevel: 'High',
      mathScienceIntensity: 'Medium',
      peopleInteraction: 'Medium',
      workSetting: ['Office', 'Studio', 'Remote'],
      physicalDemand: 'Low',
      paceOfChange: 'Moderate Variety'
    },
    relatedOccupations: [
      {
        title: 'Architectural & Civil Drafter (BIM / Revit Modeler)',
        socCode: '17-3011',
        medianWageAustin: '$62,400/yr ($30.00/hr)',
        annualOpeningsAustin: '780',
        growthRateAustin: '+17%',
        typicalEducation: 'Associate degree in CAD / Drafting',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'DFTG 1405',
        courseTitle: 'Technical Drafting & 2D CAD (AutoCAD)',
        creditHours: 4,
        isFirstSemesterExploratory: true,
        description: 'Geometric construction, orthographic projections, isometric views, dimensioning standards, and drawing sheet layouts.'
      },
      {
        courseCode: 'DFTG 1417',
        courseTitle: 'Architectural Drafting - Residential (Autodesk Revit)',
        creditHours: 4,
        isFirstSemesterExploratory: true,
        description: 'Building Information Modeling (BIM), residential floor plans, elevations, wall sections, and 3D renderings.'
      }
    ],
    transferPathways: [
      {
        university: 'University of Texas at San Antonio / Texas A&M University',
        degreeName: 'B.S. in Construction Science & Management / Architecture',
        transferGuideUrl: 'https://www.utsa.edu/admissions/transfer/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Applies toward construction management and technical architectural documentation tracks.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.75,
        sourceId: 'src-acc-programs-study'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Design a 3D Tiny Home in Free SketchUp & Meet an Architectural CAD Faculty',
      description: 'Spend 2 hours using free web-based SketchUp to draw a 400 sq ft floor plan with windows/doors and email it to an ACC CAD professor for brief feedback.',
      estimatedTimeHours: 3,
      costEstimate: '$0 (Free)',
      type: 'Micro-Project'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },

  // =========================================================================
  // 6. ARTS, DIGITAL MEDIA & COMMUNICATIONS
  // =========================================================================
  {
    id: 'prog-game-dev-aas',
    name: 'Game Development, Animation & Motion Graphics (AAS)',
    areaOfStudy: 'Arts, Digital Media & Communications',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Drawing tablet and Adobe/Unreal personal computer setup (~$800–$1,500; high-end Mac/PC workstations available in ACC labs).',
    programUrl: 'https://programs.austincc.edu/awards/game-development-animation-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/game-development-aas-map-2026/',
    cipCode: '10.0304',
    prerequisites: ['TSI Complete or enrolled in developmental coursework.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid'],
    primaryCampuses: ['Highland', 'Rio Grande'],
    riasecCode: 'AIR',
    riasecWeights: { Realistic: 50, Investigative: 70, Artistic: 95, Social: 25, Enterprising: 40, Conventional: 40 },
    workContext: {
      handsOnLevel: 'Medium',
      mathScienceIntensity: 'Medium',
      peopleInteraction: 'Medium',
      workSetting: ['Studio', 'Office', 'Remote'],
      physicalDemand: 'Low',
      paceOfChange: 'Fast-Paced / Dynamic'
    },
    relatedOccupations: [
      {
        title: 'Special Effects Artist, 3D Animator & Game Designer',
        socCode: '27-1014',
        medianWageAustin: '$84,200/yr ($40.48/hr)',
        annualOpeningsAustin: '620',
        growthRateAustin: '+19% (Major Austin game studio hub)',
        typicalEducation: 'Associate / Bachelor’s degree + Demo Reel',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'GAME 1303',
        courseTitle: 'Introduction to Game Design & Theory',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Core game mechanics, player psychology, level design theory, narrative arcs, and paper prototyping.'
      },
      {
        courseCode: 'ARTV 1341',
        courseTitle: '3D Animation I (Maya / Blender)',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: '3D polygon modeling, texturing, UV mapping, lighting, rigging, and keyframe animation principles.'
      }
    ],
    transferPathways: [
      {
        university: 'The University of Texas at Austin',
        degreeName: 'B.S. in Arts and Entertainment Technologies (AET)',
        transferGuideUrl: 'https://admissions.utexas.edu/apply/transfer-resources/ate-system/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Requires creative portfolio review for UT Arts and Entertainment Technologies major admission.',
        articulationType: 'Course-by-Course Evaluation',
        minGpaRecommended: 3.5,
        sourceId: 'src-ut-austin-transfer'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Participate in a 48-Hour Weekend Game Jam (or Create a Godot Micro-Level)',
      description: 'Spend a weekend following the free 1-hour Brackeys Godot 2D tutorial to make a playable platformer level and attend the Austin Game Developers Meetup.',
      estimatedTimeHours: 4,
      costEstimate: '$0 (Free)',
      type: 'Micro-Project'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa', 'src-ut-austin-transfer'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'prog-rtf-aas',
    name: 'Radio-Television-Film & Video Production (AAS & AA Transfer)',
    areaOfStudy: 'Arts, Digital Media & Communications',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry & Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'High-speed external SSD drive for video editing projects (~$90–$140). Cinema cameras, lighting packages, and sound stages checked out free through ACC RTF equipment cage.',
    programUrl: 'https://programs.austincc.edu/awards/radio-television-film-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/rtf-aas-map-2026/',
    cipCode: '10.0202',
    prerequisites: ['TSI Complete in Reading and Writing.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid'],
    primaryCampuses: ['Highland (ACC Soundstages)', 'Northridge'],
    riasecCode: 'AES',
    riasecWeights: { Realistic: 55, Investigative: 40, Artistic: 95, Social: 60, Enterprising: 75, Conventional: 35 },
    workContext: {
      handsOnLevel: 'High',
      mathScienceIntensity: 'Low',
      peopleInteraction: 'High',
      workSetting: ['Studio', 'Outdoor', 'Shop/Field'],
      physicalDemand: 'Moderate',
      paceOfChange: 'Fast-Paced / Dynamic'
    },
    relatedOccupations: [
      {
        title: 'Video Editor, Camera Operator & Film Crew Technician',
        socCode: '27-4032',
        medianWageAustin: '$61,200/yr ($29.42/hr)',
        annualOpeningsAustin: '510',
        growthRateAustin: '+16% (Austin film, commercial, and streaming productions)',
        typicalEducation: 'Associate or Bachelor’s degree + Portfolio',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'RTVB 1305',
        courseTitle: 'Introduction to Television & Film Studio Production',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Operation of studio broadcast cameras, multi-camera switchers, audio mixing boards, studio lighting grids, and teleprompters.'
      },
      {
        courseCode: 'COMM 1307',
        courseTitle: 'Introduction to Mass Communication',
        creditHours: 3,
        coreCurriculumArea: 'Social & Behavioral Sciences (080)',
        isFirstSemesterExploratory: true,
        description: 'Survey of mass media history, streaming platforms, film, ethics, advertising, and cultural impacts.'
      }
    ],
    transferPathways: [
      {
        university: 'The University of Texas at Austin',
        degreeName: 'B.S. in Radio-Television-Film (Moody College of Communication)',
        transferGuideUrl: 'https://admissions.utexas.edu/apply/transfer-resources/ate-system/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Transfer into UT Moody RTF requires competitive GPA (typically 3.65+) and strong statement of purpose.',
        articulationType: 'Course-by-Course Evaluation',
        minGpaRecommended: 3.6,
        sourceId: 'src-ut-austin-transfer'
      },
      {
        university: 'Texas State University',
        degreeName: 'B.S. in Electronic Media / Mass Communication',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Direct 2+2 articulation into School of Journalism and Mass Communication.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.75,
        sourceId: 'src-txst-transfer-guide'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Crew a 3-Hour Student Film Shoot at the ACC Highland Soundstage',
      description: 'Sign up as a volunteer production assistant (PA) on a student short film production at ACC Highland Building 4000 soundstages.',
      estimatedTimeHours: 3,
      costEstimate: '$0 (Free)',
      type: 'Job Shadow'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa', 'src-ut-austin-transfer'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },

  // =========================================================================
  // 7. EDUCATION
  // =========================================================================
  {
    id: 'prog-teaching-aat',
    name: 'Education / Teacher Preparation (Associate of Arts in Teaching - AAT)',
    areaOfStudy: 'Education',
    awardType: 'Associate of Arts in Teaching (AAT)',
    intent: 'University Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'State criminal background check required for K-12 school field observations (~$45).',
    programUrl: 'https://programs.austincc.edu/awards/associate-of-arts-in-teaching/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/teaching-aat-map-2026/',
    cipCode: '13.0101',
    prerequisites: ['TSI Complete in Reading, Writing, and Math.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid', 'Online / Distance'],
    primaryCampuses: ['Highland', 'Round Rock', 'Riverside', 'Hays'],
    riasecCode: 'SAE',
    riasecWeights: { Realistic: 20, Investigative: 60, Artistic: 65, Social: 95, Enterprising: 70, Conventional: 55 },
    workContext: {
      handsOnLevel: 'Medium',
      mathScienceIntensity: 'Medium',
      peopleInteraction: 'High',
      workSetting: ['Office'],
      physicalDemand: 'Moderate',
      paceOfChange: 'Moderate Variety'
    },
    relatedOccupations: [
      {
        title: 'Elementary, Middle & High School Teacher',
        socCode: '25-2021',
        medianWageAustin: '$60,500/yr (Austin ISD starting $56k+ with pension)',
        annualOpeningsAustin: '2,100',
        growthRateAustin: '+18% (Critical regional educator shortage)',
        typicalEducation: 'Bachelor’s degree + Texas Educator Certificate',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'EDUC 1301',
        courseTitle: 'Introduction to the Teaching Profession',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Philosophies of education, classroom culture, Texas curriculum standards, and 16 hours of structured K-12 classroom observation.'
      },
      {
        courseCode: 'EDUC 2301',
        courseTitle: 'Introduction to Special Populations (Inclusive Classrooms)',
        creditHours: 3,
        isFirstSemesterExploratory: false,
        description: 'Instructional methodologies for students with learning differences, English language learners, and neurodivergent students.'
      }
    ],
    transferPathways: [
      {
        university: 'Texas State University',
        degreeName: 'B.S. in Interdisciplinary Studies (Elementary / Middle School Certification)',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: '100% of the 60 credit AAT transfers directly into the College of Education teacher certification plan.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.75,
        sourceId: 'src-txst-transfer-guide'
      },
      {
        university: 'The University of Texas at Austin',
        degreeName: 'B.S. in Applied Learning & Development (College of Education)',
        transferGuideUrl: 'https://admissions.utexas.edu/apply/transfer-resources/ate-system/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Transfers directly with Texas Core Curriculum fully satisfied.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 3.2,
        sourceId: 'src-ut-austin-transfer'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Shadow an ACC Child Care Center or AISD After-School Mentor Session',
      description: 'Spend 2 hours observing an after-school tutoring session or volunteering with an ACC student education organization.',
      estimatedTimeHours: 2,
      costEstimate: '$0 (Free)',
      type: 'Job Shadow'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa', 'src-txst-transfer-guide'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },

  // =========================================================================
  // 8. PUBLIC & SOCIAL SERVICES
  // =========================================================================
  {
    id: 'prog-criminal-justice-aa',
    name: 'Criminal Justice & Law Enforcement (AA Transfer & AAS)',
    areaOfStudy: 'Public & Social Services',
    awardType: 'Associate of Arts (AA)',
    intent: 'University Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Standard textbooks.',
    programUrl: 'https://programs.austincc.edu/awards/criminal-justice-associate-of-arts/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/criminal-justice-aa-map-2026/',
    cipCode: '43.0104',
    prerequisites: ['TSI Complete in Reading and Writing.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid', 'Online / Distance'],
    primaryCampuses: ['Highland', 'Round Rock', 'Riverside', 'Hays'],
    riasecCode: 'SER',
    riasecWeights: { Realistic: 45, Investigative: 75, Artistic: 20, Social: 80, Enterprising: 75, Conventional: 70 },
    workContext: {
      handsOnLevel: 'Medium',
      mathScienceIntensity: 'Low',
      peopleInteraction: 'High',
      workSetting: ['Office', 'Outdoor', 'Shop/Field'],
      physicalDemand: 'Moderate',
      paceOfChange: 'Fast-Paced / Dynamic'
    },
    relatedOccupations: [
      {
        title: 'Probation Officer, Detective & Law Enforcement Specialist',
        socCode: '21-1092',
        medianWageAustin: '$64,900/yr ($31.20/hr)',
        annualOpeningsAustin: '840',
        growthRateAustin: '+14%',
        typicalEducation: 'Bachelor’s degree / Law Enforcement Academy',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'CRIJ 1301',
        courseTitle: 'Introduction to Criminal Justice',
        creditHours: 3,
        coreCurriculumArea: 'Social & Behavioral Sciences (080)',
        isFirstSemesterExploratory: true,
        description: 'Systemic overview of police agencies, criminal courts, corrections, constitutional rights, and juvenile justice.'
      },
      {
        courseCode: 'CRIJ 1306',
        courseTitle: 'Court Systems & Judicial Practices',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Structure of state and federal judicial systems, prosecutorial procedures, bail hearings, plea bargaining, and courtroom roles.'
      }
    ],
    transferPathways: [
      {
        university: 'Texas State University',
        degreeName: 'B.S. in Criminal Justice (Law Enforcement / Corrections / Criminology)',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Seamless 2+2 articulation with top-ranked Texas State School of Criminal Justice.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.5,
        sourceId: 'src-txst-transfer-guide'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Attend an Open Travis County Court Session & Talk with a Criminal Justice Professor',
      description: 'Spend 2 hours sitting in the public gallery of the Blackwell-Thurman Criminal Justice Center in downtown Austin and interview an ACC professor about career routes.',
      estimatedTimeHours: 3,
      costEstimate: '$0 (Free)',
      type: 'Faculty Interview'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa', 'src-txst-transfer-guide'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'prog-paralegal-aas',
    name: 'Paralegal Studies (AAS - ABA Approved)',
    areaOfStudy: 'Public & Social Services',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Legal research database access (Westlaw/LexisNexis) provided to ACC students without charge.',
    programUrl: 'https://programs.austincc.edu/awards/paralegal-studies-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/paralegal-aas-map-2026/',
    cipCode: '22.0302',
    prerequisites: ['ENGL 1301 with C or better; TSI Complete in Reading and Writing.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid', 'Evenings/Weekends'],
    primaryCampuses: ['Rio Grande', 'Round Rock'],
    riasecCode: 'CEI',
    riasecWeights: { Realistic: 15, Investigative: 85, Artistic: 30, Social: 50, Enterprising: 75, Conventional: 95 },
    workContext: {
      handsOnLevel: 'Low',
      mathScienceIntensity: 'Low',
      peopleInteraction: 'Medium',
      workSetting: ['Office', 'Remote'],
      physicalDemand: 'Low',
      paceOfChange: 'Moderate Variety'
    },
    relatedOccupations: [
      {
        title: 'Paralegal, Legal Assistant & Title Examiner',
        socCode: '23-2011',
        medianWageAustin: '$64,500/yr ($31.01/hr - Senior litigation paralegals $90k+)',
        annualOpeningsAustin: '890',
        growthRateAustin: '+18%',
        typicalEducation: 'Associate degree in Paralegal Studies (ABA Approved)',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'LGLA 1301',
        courseTitle: 'Legal Research & Writing I',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Primary legal authorities, statutes, case reporters, Westlaw database research, and legal memorandum writing.'
      },
      {
        courseCode: 'LGLA 1307',
        courseTitle: 'Introduction to Law and the Legal Professions',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'American legal system, civil procedure, torts, contracts, legal ethics, and unauthorized practice of law rules.'
      }
    ],
    transferPathways: [
      {
        university: 'Texas State University',
        degreeName: 'B.A.A.S. / B.A. in Political Science (Pre-Law)',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Provides strong legal writing background and directly applies toward Pre-Law bachelor tracks.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.75,
        sourceId: 'src-txst-transfer-guide'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Analyze a Supreme Court Case Summary & Draft a 1-Page Legal Brief',
      description: 'Spend 2 hours reading a famous Supreme Court case brief on Oyez.org (e.g., Miranda v. Arizona) and outlining the issue, rule, analysis, and conclusion (IRAC method).',
      estimatedTimeHours: 2,
      costEstimate: '$0 (Free)',
      type: 'Micro-Project'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },

  // =========================================================================
  // 9. SCIENCE, ENGINEERING & MATH
  // =========================================================================
  {
    id: 'prog-engineering-as',
    name: 'Engineering (AS Transfer - Mechanical, Electrical, Civil, Aerospace)',
    areaOfStudy: 'Science, Engineering & Math',
    awardType: 'Associate of Science (AS)',
    intent: 'University Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Scientific graphing calculator (TI-84/TI-Nspire) and engineering software tools (~$130).',
    programUrl: 'https://programs.austincc.edu/awards/engineering-associate-of-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/engineering-as-transfer-map-2026/',
    cipCode: '14.0101',
    prerequisites: ['MATH 2412 (Precalculus) or placement into MATH 2413 (Calculus I)', 'TSI Complete in all areas.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid'],
    primaryCampuses: ['Highland', 'Round Rock', 'Northridge', 'Riverside'],
    riasecCode: 'IRC',
    riasecWeights: { Realistic: 70, Investigative: 95, Artistic: 35, Social: 20, Enterprising: 50, Conventional: 75 },
    workContext: {
      handsOnLevel: 'Medium',
      mathScienceIntensity: 'Very High',
      peopleInteraction: 'Medium',
      workSetting: ['Office', 'Lab', 'Shop/Field'],
      physicalDemand: 'Low',
      paceOfChange: 'Fast-Paced / Dynamic'
    },
    relatedOccupations: [
      {
        title: 'Mechanical, Electrical & Civil Engineer',
        socCode: '17-2141',
        medianWageAustin: '$106,500/yr ($51.20/hr)',
        annualOpeningsAustin: '1,890',
        growthRateAustin: '+23%',
        typicalEducation: 'Bachelor of Science in Engineering + EIT/PE License',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'ENGR 1201',
        courseTitle: 'Introduction to Engineering & Design',
        creditHours: 2,
        isFirstSemesterExploratory: true,
        description: 'Engineering disciplines overview, ethics, dimensional analysis, Excel modeling, technical problem solving, and hands-on team design project.'
      },
      {
        courseCode: 'MATH 2413',
        courseTitle: 'Calculus I',
        creditHours: 4,
        coreCurriculumArea: 'Mathematics (020)',
        isFirstSemesterExploratory: true,
        description: 'Differential calculus foundational to all physics and engineering science course sequences.'
      },
      {
        courseCode: 'PHYS 2425',
        courseTitle: 'University Physics I (Calculus-Based Mechanics)',
        creditHours: 4,
        coreCurriculumArea: 'Life & Physical Sciences (030)',
        isFirstSemesterExploratory: false,
        description: 'Newtonian mechanics, momentum, rotational kinematics, gravitation, oscillations, and wave mechanics.'
      }
    ],
    transferPathways: [
      {
        university: 'The University of Texas at Austin',
        degreeName: 'B.S. in Engineering (Cockrell School of Engineering)',
        transferGuideUrl: 'https://admissions.utexas.edu/apply/transfer-resources/ate-system/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Extremely competitive. Requires minimum 3.8+ GPA with Calculus I, II, Physics I (PHYS 2425), and Chemistry I (CHEM 1411) completed.',
        articulationType: 'Course-by-Course Evaluation',
        minGpaRecommended: 3.85,
        sourceId: 'src-ut-austin-transfer'
      },
      {
        university: 'Texas A&M University',
        degreeName: 'B.S. in Engineering (College of Engineering)',
        transferGuideUrl: 'https://admissions.tamu.edu/apply/transfer/transfer-course-equivalency',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Requires TAMU Engineering Academy or minimum 3.5 GPA with core calculus sequence.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 3.5,
        sourceId: 'src-tamu-transfer-matrix'
      },
      {
        university: 'Texas State University',
        degreeName: 'B.S. in Engineering (Ingram School of Engineering)',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Full 2+2 articulation for Civil, Electrical, and Mechanical Engineering.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 3.0,
        sourceId: 'src-txst-transfer-guide'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Build an Arduino Breadboard Circuit & Attend ACC MakerSpace Orientation',
      description: 'Spend 2 hours assembling an LED sensor circuit with an Arduino starter kit at the ACC Highland MakerSpace and attend an Engineering Club design session.',
      estimatedTimeHours: 3,
      costEstimate: '$0 (Free using campus maker equipment)',
      type: 'Micro-Project'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa', 'src-ut-austin-transfer', 'src-tamu-transfer-matrix', 'src-txst-transfer-guide'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },

  // =========================================================================
  // 10. LIBERAL ARTS (HUMANITIES & SOCIAL SCIENCES)
  // =========================================================================
  {
    id: 'prog-general-studies-aa',
    name: 'General Studies / Undecided Exploratory Transfer (AA)',
    areaOfStudy: 'Liberal Arts (Humanities & Social Sciences)',
    awardType: 'Associate of Arts (AA)',
    intent: 'University Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Standard digital textbooks covered in Z-classes where available.',
    programUrl: 'https://programs.austincc.edu/awards/general-studies-in-liberal-arts-associate-of-arts/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/general-studies-aa-map-2026/',
    cipCode: '24.0101',
    prerequisites: ['TSI Complete or enrolled in corequisite developmental education.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid', 'Online / Distance', 'Evenings/Weekends'],
    primaryCampuses: ['Highland', 'Rio Grande', 'Round Rock', 'Riverside', 'Northridge', 'Hays', 'San Gabriel', 'Cypress Creek'],
    riasecCode: 'SIA',
    riasecWeights: { Realistic: 30, Investigative: 65, Artistic: 60, Social: 80, Enterprising: 60, Conventional: 50 },
    workContext: {
      handsOnLevel: 'Low',
      mathScienceIntensity: 'Low',
      peopleInteraction: 'Medium',
      workSetting: ['Office', 'Remote'],
      physicalDemand: 'Low',
      paceOfChange: 'Moderate Variety'
    },
    relatedOccupations: [
      {
        title: 'Project Coordinator, Communications Specialist & Human Resources Analyst',
        socCode: '13-1082',
        medianWageAustin: '$66,800/yr ($32.12/hr)',
        annualOpeningsAustin: '1,750',
        growthRateAustin: '+16%',
        typicalEducation: 'Bachelor’s degree (Any Major)',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'EDUC 1300',
        courseTitle: 'Effective Learning: Strategies for College Success',
        creditHours: 3,
        coreCurriculumArea: 'Component Area Option (090)',
        isFirstSemesterExploratory: true,
        description: 'First-semester orientation: study techniques, degree planning, career exploration, and critical thinking.'
      },
      {
        courseCode: 'ENGL 1301',
        courseTitle: 'English Composition I',
        creditHours: 3,
        coreCurriculumArea: 'Communication (010)',
        isFirstSemesterExploratory: true,
        description: 'Academic essay composition, critical analysis, rhetoric, and research citations.'
      },
      {
        courseCode: 'PSYC 2301',
        courseTitle: 'Introduction to Psychology',
        creditHours: 3,
        coreCurriculumArea: 'Social & Behavioral Sciences (080)',
        isFirstSemesterExploratory: true,
        description: 'Human behavior, cognitive processes, personality development, emotion, and psychological science.'
      }
    ],
    transferPathways: [
      {
        university: 'The University of Texas at Austin',
        degreeName: 'B.A. in Liberal Arts / Humanities / Social Sciences (College of Liberal Arts)',
        transferGuideUrl: 'https://admissions.utexas.edu/apply/transfer-resources/ate-system/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'General core courses transfer seamlessly into 100% of UT College of Liberal Arts bachelor degree majors (Psychology, Economics, Government, History, English).',
        articulationType: 'General Core Transfer',
        minGpaRecommended: 3.2,
        sourceId: 'src-ut-austin-transfer'
      },
      {
        university: 'Texas State University',
        degreeName: 'B.A. in General Studies / Applied Arts',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Guaranteed core transfer credit.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.25,
        sourceId: 'src-txst-transfer-guide'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Schedule an ACC Career & Transfer Exploration Advising Session',
      description: 'Book a 45-minute 1-on-1 appointment with an ACC Career Specialist at Highland Campus to review career assessment options and compare university transfer plans.',
      estimatedTimeHours: 1,
      costEstimate: '$0 (Free)',
      type: 'Faculty Interview'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa', 'src-ut-austin-transfer', 'src-txst-transfer-guide'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },
  {
    id: 'prog-psychology-aa',
    name: 'Psychology (AA Transfer)',
    areaOfStudy: 'Liberal Arts (Humanities & Social Sciences)',
    awardType: 'Associate of Arts (AA)',
    intent: 'University Transfer',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'ACC Free Tuition Eligible (In-District High School Grads)',
    estimatedTuitionInDistrict: '$5,100 total ($85/credit hour)',
    additionalCostsNotes: 'Standard textbooks.',
    programUrl: 'https://programs.austincc.edu/awards/psychology-associate-of-arts/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/psychology-aa-map-2026/',
    cipCode: '42.0101',
    prerequisites: ['TSI Complete in Reading, Writing, and Math.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person', 'Hybrid', 'Online / Distance'],
    primaryCampuses: ['Highland', 'Rio Grande', 'Round Rock', 'Riverside'],
    riasecCode: 'SIA',
    riasecWeights: { Realistic: 15, Investigative: 80, Artistic: 50, Social: 95, Enterprising: 55, Conventional: 45 },
    workContext: {
      handsOnLevel: 'Low',
      mathScienceIntensity: 'Medium',
      peopleInteraction: 'High',
      workSetting: ['Office', 'Clinical', 'Remote'],
      physicalDemand: 'Low',
      paceOfChange: 'Moderate Variety'
    },
    relatedOccupations: [
      {
        title: 'Behavioral Health Specialist, Case Manager & Counseling Assistant',
        socCode: '21-1018',
        medianWageAustin: '$54,200/yr ($26.06/hr - Licensed Psychologists $110k+)',
        annualOpeningsAustin: '1,420',
        growthRateAustin: '+22%',
        typicalEducation: 'Bachelor’s (Case manager) or Master’s/Doctorate (Licensed Counselor/Psychologist)',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'PSYC 2301',
        courseTitle: 'Introduction to Psychology',
        creditHours: 3,
        coreCurriculumArea: 'Social & Behavioral Sciences (080)',
        isFirstSemesterExploratory: true,
        description: 'Scientific overview of mind, brain function, personality, learning theory, and social behavior.'
      },
      {
        courseCode: 'PSYC 2314',
        courseTitle: 'Lifespan Growth & Development',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Physical, cognitive, emotional, and social development from infancy through adolescence, adulthood, and aging.'
      },
      {
        courseCode: 'MATH 1342',
        courseTitle: 'Elementary Statistical Methods',
        creditHours: 3,
        coreCurriculumArea: 'Mathematics (020)',
        isFirstSemesterExploratory: true,
        description: 'Data distributions, probability, hypothesis testing, and correlation used in social science research.'
      }
    ],
    transferPathways: [
      {
        university: 'The University of Texas at Austin',
        degreeName: 'B.A. / B.S. in Psychology (College of Liberal Arts)',
        transferGuideUrl: 'https://admissions.utexas.edu/apply/transfer-resources/ate-system/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Transfers smoothly. Statistics (MATH 1342) and PSYC 2301 fulfill major prerequisite requirements.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 3.4,
        sourceId: 'src-ut-austin-transfer'
      },
      {
        university: 'Texas State University',
        degreeName: 'B.A. / B.S. in Psychology',
        transferGuideUrl: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Full 2+2 articulation map into Department of Psychology.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.5,
        sourceId: 'src-txst-transfer-guide'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Review an APA Research Study & Volunteer with a Local Peer Support Program',
      description: 'Spend 2 hours reading a summary of an empirical psychology experiment on PsycNET/Google Scholar and attend an ACC Psychology Student Club event.',
      estimatedTimeHours: 3,
      costEstimate: '$0 (Free)',
      type: 'Student Org'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa', 'src-ut-austin-transfer', 'src-txst-transfer-guide'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  },

  // =========================================================================
  // 11. CULINARY, HOSPITALITY & TOURISM
  // =========================================================================
  {
    id: 'prog-culinary-arts-aas',
    name: 'Culinary Arts & Kitchen Operations (AAS & Certificate)',
    areaOfStudy: 'Culinary, Hospitality & Tourism',
    awardType: 'Associate of Applied Science (AAS)',
    intent: 'Workforce Entry',
    totalCredits: 60,
    publishedDurationMonths: 24,
    tuitionCategory: 'Special Differential Program Tuition',
    estimatedTuitionInDistrict: '$5,900 total (Includes kitchen ingredient & culinary lab fees)',
    additionalCostsNotes: 'Professional chef knife set, kitchen whites/uniform, non-slip footwear (~$450). Texas Food Handler & ServSafe Manager certifications included in coursework.',
    programUrl: 'https://programs.austincc.edu/awards/culinary-arts-associate-of-applied-science/',
    programMapUrl: 'https://programs.austincc.edu/award-maps/culinary-arts-aas-map-2026/',
    cipCode: '12.0503',
    prerequisites: ['TSI Complete or corequisite developmental coursework.'],
    tsiRequirements: 'TSI Liable (Reading, Writing, Math)',
    selectiveAdmission: false,
    deliveryOptions: ['In-Person'],
    primaryCampuses: ['Highland (ACC Culinary Dining Lab)'],
    riasecCode: 'ERA',
    riasecWeights: { Realistic: 90, Investigative: 40, Artistic: 85, Social: 45, Enterprising: 75, Conventional: 50 },
    workContext: {
      handsOnLevel: 'High',
      mathScienceIntensity: 'Low',
      peopleInteraction: 'High',
      workSetting: ['Shop/Field'],
      physicalDemand: 'High',
      paceOfChange: 'Fast-Paced / Dynamic'
    },
    relatedOccupations: [
      {
        title: 'Sous Chef, Kitchen Manager & Executive Chef',
        socCode: '35-1011',
        medianWageAustin: '$58,900/yr ($28.32/hr - Executive restaurant chefs $85k+)',
        annualOpeningsAustin: '1,200',
        growthRateAustin: '+20% (Thriving Austin culinary and hospitality industry)',
        typicalEducation: 'Associate degree or Apprenticeship',
        sourceId: 'src-twc-austin-msa'
      }
    ],
    relatedAccCourses: [
      {
        courseCode: 'CHEF 1301',
        courseTitle: 'Basic Food Preparation & Kitchen Safety',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Knife skills, cooking techniques (sauté, roast, braise), food safety temperatures, stocks, and mother sauces.'
      },
      {
        courseCode: 'CHEF 1305',
        courseTitle: 'Sanitation & Safety (ServSafe Manager Certification)',
        creditHours: 3,
        isFirstSemesterExploratory: true,
        description: 'Microbiology of foodborne illnesses, HACCP regulations, kitchen sanitation, and state licensing.'
      }
    ],
    transferPathways: [
      {
        university: 'University of Houston (Conrad N. Hilton College of Global Hospitality Leadership)',
        degreeName: 'B.S. in Global Hospitality Leadership',
        transferGuideUrl: 'https://www.uh.edu/hilton-college/',
        coreSatisfied: true,
        generalCreditAccepted: true,
        majorApplicabilityNotes: 'Top-ranked hospitality program accepts ACC culinary coursework toward restaurant and resort management bachelor degree.',
        articulationType: 'Formal Articulation 2+2',
        minGpaRecommended: 2.75,
        sourceId: 'src-acc-programs-study'
      }
    ],
    lowCostValidationExperiment: {
      title: 'Tour the ACC Highland Culinary Commercial Kitchens & Student Bistro',
      description: 'Visit the ACC Highland commercial kitchen suites and eat a student-prepared lunch at the Highland Campus student dining lab while chatting with culinary faculty.',
      estimatedTimeHours: 2,
      costEstimate: '$12 (Student lunch cost)',
      type: 'Lab Tour'
    },
    sourceIds: ['src-acc-programs-study', 'src-twc-austin-msa'],
    verificationStatus: 'Verified current',
    lastVerifiedDate: '2026-08-12'
  }
];

export function getProgramById(id: string): ACCProgram | undefined {
  return ACC_PROGRAMS.find(p => p.id === id);
}

export function getProgramsByArea(area: string): ACCProgram[] {
  return ACC_PROGRAMS.filter(p => p.areaOfStudy === area);
}
