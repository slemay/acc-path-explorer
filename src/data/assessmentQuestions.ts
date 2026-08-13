import { AssessmentQuestion } from '@/types';

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // =========================================================================
  // MODULE A: O*NET Interest Profiler (RIASEC) - 30 Mini / 60 Full
  // =========================================================================
  // Realistic (R)
  {
    id: 'q_riasec_r1',
    module: 'A',
    dimension: 'Realistic',
    prompt: 'Build kitchen cabinets, furniture, or wooden structures',
    subtext: 'Using hand tools, power saws, drills, and measuring instruments.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Helps assess interest in hands-on building, trades, and tactile craftsmanship.'
  },
  {
    id: 'q_riasec_r2',
    module: 'A',
    dimension: 'Realistic',
    prompt: 'Repair an automobile engine or electric vehicle drivetrain',
    subtext: 'Diagnosing mechanical sounds, running scan tools, and replacing parts.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Measures interest in mechanical and automotive troubleshooting.'
  },
  {
    id: 'q_riasec_r3',
    module: 'A',
    dimension: 'Realistic',
    prompt: 'Operate precision manufacturing equipment or laser cutters',
    subtext: 'Setting up industrial machinery, CNC mills, or semiconductor cleanroom systems.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Identifies affinity for technical apparatus and manufacturing.'
  },
  {
    id: 'q_riasec_r4',
    module: 'A',
    dimension: 'Realistic',
    prompt: 'Assemble electronic circuit boards and solder components',
    subtext: 'Wiring sensors, microcontrollers, breadboards, and relays.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Evaluates electronics and physical hardware interests.'
  },
  {
    id: 'q_riasec_r5',
    module: 'A',
    dimension: 'Realistic',
    prompt: 'Weld metal parts together or fabricate custom steel frames',
    subtext: 'Using MIG, TIG, or stick welders and metal grinders.',
    type: 'likert5',
    isQuickMode: false,
    rationaleNotice: 'Tests interest in structural welding and heavy trade fabrication.'
  },

  // Investigative (I)
  {
    id: 'q_riasec_i1',
    module: 'A',
    dimension: 'Investigative',
    prompt: 'Write software code to solve a complex algorithm puzzle',
    subtext: 'Designing programs, debugging errors, and structuring logic in Python, Java, or C++.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Tests interest in abstract analytical thinking and computer science.'
  },
  {
    id: 'q_riasec_i2',
    module: 'A',
    dimension: 'Investigative',
    prompt: 'Conduct a biological or chemical laboratory experiment',
    subtext: 'Using micropipettes, microscopes, centrifuges, and test assays.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Measures curiosity about physical and life sciences experimentation.'
  },
  {
    id: 'q_riasec_i3',
    module: 'A',
    dimension: 'Investigative',
    prompt: 'Investigate how a network security vulnerability was exploited',
    subtext: 'Analyzing firewall logs, packet captures, and malicious software behavior.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Determines attraction to cybersecurity and digital forensics.'
  },
  {
    id: 'q_riasec_i4',
    module: 'A',
    dimension: 'Investigative',
    prompt: 'Study the causes of human behavior, memory, or cognitive development',
    subtext: 'Reading research papers, analyzing psychological studies, and observing patterns.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Evaluates interest in social science and behavioral research.'
  },
  {
    id: 'q_riasec_i5',
    module: 'A',
    dimension: 'Investigative',
    prompt: 'Analyze complex mathematical formulas or statistical datasets',
    subtext: 'Using math models to predict trends or test scientific hypotheses.',
    type: 'likert5',
    isQuickMode: false,
    rationaleNotice: 'Assesses appetite for mathematical and statistical analysis.'
  },

  // Artistic (A)
  {
    id: 'q_riasec_a1',
    module: 'A',
    dimension: 'Artistic',
    prompt: 'Design 3D digital characters, animations, or video game environments',
    subtext: 'Modeling assets in Blender/Maya and creating lighting and texture effects.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Identifies passion for digital arts, animation, and visual media.'
  },
  {
    id: 'q_riasec_a2',
    module: 'A',
    dimension: 'Artistic',
    prompt: 'Edit a video or film sequence with soundtracks, pacing, and color grading',
    subtext: 'Using Premiere Pro, DaVinci Resolve, and cinematic storytelling techniques.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Evaluates creative media production and visual storytelling.'
  },
  {
    id: 'q_riasec_a3',
    module: 'A',
    dimension: 'Artistic',
    prompt: 'Create original graphic illustrations, logos, or UI layouts for websites',
    subtext: 'Selecting typography, color palettes, vector shapes, and visual balance.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Measures interest in visual communication, branding, and graphic design.'
  },
  {
    id: 'q_riasec_a4',
    module: 'A',
    dimension: 'Artistic',
    prompt: 'Develop original culinary recipes and craft artisan pastries or dishes',
    subtext: 'Experimenting with flavor profiles, plate presentations, and baking science.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Connects creative expression with culinary craftsmanship.'
  },
  {
    id: 'q_riasec_a5',
    module: 'A',
    dimension: 'Artistic',
    prompt: 'Write creative stories, scripts, essays, or engaging articles',
    subtext: 'Crafting dialogue, character arcs, and expressive prose.',
    type: 'likert5',
    isQuickMode: false,
    rationaleNotice: 'Assesses interest in literary expression and copywriting.'
  },

  // Social (S)
  {
    id: 'q_riasec_s1',
    module: 'A',
    dimension: 'Social',
    prompt: 'Help someone recover from an illness, injury, or medical condition',
    subtext: 'Administering care, checking vital signs, listening with empathy, and explaining recovery steps.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Evaluates core healthcare, nursing, and clinical patient care interest.'
  },
  {
    id: 'q_riasec_s2',
    module: 'A',
    dimension: 'Social',
    prompt: 'Teach a group of students a new subject or skill',
    subtext: 'Explaining difficult concepts step-by-step and encouraging learners.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Measures inclination toward education, training, and youth mentorship.'
  },
  {
    id: 'q_riasec_s3',
    module: 'A',
    dimension: 'Social',
    prompt: 'Counsel a person going through a stressful life transition or crisis',
    subtext: 'Listening without judgment, offering constructive coping strategies, and connecting to resources.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Identifies passion for social work, mental health, and human services.'
  },
  {
    id: 'q_riasec_s4',
    module: 'A',
    dimension: 'Social',
    prompt: 'Volunteer to organize community support or food distribution for families in need',
    subtext: 'Coordinating volunteers and addressing community well-being.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Evaluates public service and community advocacy interests.'
  },
  {
    id: 'q_riasec_s5',
    module: 'A',
    dimension: 'Social',
    prompt: 'Help resolve a disagreement or conflict between team members',
    subtext: 'Mediating disputes and finding fair solutions for everyone involved.',
    type: 'likert5',
    isQuickMode: false,
    rationaleNotice: 'Assesses mediation, interpersonal diplomacy, and group harmony.'
  },

  // Enterprising (E)
  {
    id: 'q_riasec_e1',
    module: 'A',
    dimension: 'Enterprising',
    prompt: 'Pitch a new business concept or product to investors',
    subtext: 'Explaining market opportunity, revenue models, and growth potential.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Tests entrepreneurial drive and persuasive communication.'
  },
  {
    id: 'q_riasec_e2',
    module: 'A',
    dimension: 'Enterprising',
    prompt: 'Lead a team project and manage milestones, deadlines, and responsibilities',
    subtext: 'Delegating tasks, motivating teammates, and driving project completion.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Measures leadership appetite and organizational management.'
  },
  {
    id: 'q_riasec_e3',
    module: 'A',
    dimension: 'Enterprising',
    prompt: 'Negotiate contracts, pricing agreements, or real estate property sales',
    subtext: 'Working out terms that satisfy both parties and close deals.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Identifies aptitude for sales, business development, and deal negotiation.'
  },
  {
    id: 'q_riasec_e4',
    module: 'A',
    dimension: 'Enterprising',
    prompt: 'Market a brand or event using social media campaigns and audience analytics',
    subtext: 'Crafting promotional messaging and measuring customer engagement.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Assesses interest in commercial marketing and growth strategies.'
  },
  {
    id: 'q_riasec_e5',
    module: 'A',
    dimension: 'Enterprising',
    prompt: 'Manage finances and daily operations for a retail store or restaurant',
    subtext: 'Controlling inventory, supervising staff, and tracking daily revenues.',
    type: 'likert5',
    isQuickMode: false,
    rationaleNotice: 'Evaluates practical business operations and retail/restaurant leadership.'
  },

  // Conventional (C)
  {
    id: 'q_riasec_c1',
    module: 'A',
    dimension: 'Conventional',
    prompt: 'Audit financial records and reconcile spreadsheets for accuracy',
    subtext: 'Tracking debits, credits, invoices, receipts, and tax calculations.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Evaluates precision, financial organization, and accounting inclination.'
  },
  {
    id: 'q_riasec_c2',
    module: 'A',
    dimension: 'Conventional',
    prompt: 'Organize and structure large databases, files, or inventory records',
    subtext: 'Maintaining clean classification systems, catalog tags, and data schemas.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Measures preference for order, information management, and structured databases.'
  },
  {
    id: 'q_riasec_c3',
    module: 'A',
    dimension: 'Conventional',
    prompt: 'Review legal contracts or government compliance regulations for adherence',
    subtext: 'Checking that documents follow precise statutory wording and rules.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Identifies interest in legal research, compliance, and paralegal work.'
  },
  {
    id: 'q_riasec_c4',
    module: 'A',
    dimension: 'Conventional',
    prompt: 'Follow documented step-by-step standard operating procedures (SOPs)',
    subtext: 'Ensuring consistent quality control and adherence to safety protocols.',
    type: 'likert5',
    isQuickMode: true,
    rationaleNotice: 'Tests comfort with structured protocols and compliance.'
  },
  {
    id: 'q_riasec_c5',
    module: 'A',
    dimension: 'Conventional',
    prompt: 'Calculate payroll, deductions, and tax withholdings for employees',
    subtext: 'Using structured payroll tables and automated software tools.',
    type: 'likert5',
    isQuickMode: false,
    rationaleNotice: 'Assesses interest in detailed clerical and compensation systems.'
  },

  // =========================================================================
  // MODULE B: Work Environment Preferences (14 Scenarios)
  // =========================================================================
  {
    id: 'q_env_setting',
    module: 'B',
    category: 'Work Setting',
    prompt: 'What physical work environments appeal to you most?',
    subtext: 'Select your top 1–3 preferred settings.',
    type: 'multi_choice',
    options: [
      { value: 'Office', label: 'Office / Corporate Desk (Modern indoor workspace with computers)' },
      { value: 'Remote', label: 'Remote / Home Office (Flexibility to work from anywhere)' },
      { value: 'Lab', label: 'Scientific / Cleanroom Lab (High-tech testing, microscopes, clean protocols)' },
      { value: 'Shop/Field', label: 'Shop / Industrial Bay (Hands-on workshop, vehicles, tools, equipment)' },
      { value: 'Clinical', label: 'Clinical / Hospital (Patient care suites, imaging rooms, medical center)' },
      { value: 'Studio', label: 'Media Studio / Soundstage (Lighting, cameras, production bays)' },
      { value: 'Outdoor', label: 'Outdoor / Field Sites (Natural environments, job sites, varied weather)' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Filters out pathways that require physical settings you dislike.'
  },
  {
    id: 'q_env_people',
    module: 'B',
    category: 'Social Interaction',
    prompt: 'How much social interaction do you prefer during your workday?',
    type: 'single_choice',
    options: [
      { value: 'Low', label: 'Mostly Independent (Deep solo focus, minimal meetings or public contact)' },
      { value: 'Medium', label: 'Small Collaborative Team (Working closely with 3–8 teammates)' },
      { value: 'High', label: 'Continuous Public / Client / Patient Interaction (Constant communication with new people)' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Balances people-centric careers (nursing, teaching) vs technical analysis (coding, drafting).'
  },
  {
    id: 'q_env_handson',
    module: 'B',
    category: 'Hands-On Intensity',
    prompt: 'Do you prefer physical, hands-on work with tools/equipment or digital/abstract problem solving?',
    type: 'single_choice',
    options: [
      { value: 'High', label: 'Direct Physical Tools & Materials (Working with hands, equipment, wiring, or physical repairs)' },
      { value: 'Medium', label: 'Balanced Mix (Some computer analysis and some physical lab/equipment interaction)' },
      { value: 'Low', label: 'Primarily Digital / Conceptual (Software, documents, spreadsheets, design screens)' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Distinguishes trade/skilled manufacturing paths from software/business desk roles.'
  },
  {
    id: 'q_env_routine',
    module: 'B',
    category: 'Pace & Routine',
    prompt: 'Which daily workflow pace suits you best?',
    type: 'single_choice',
    options: [
      { value: 'Predictable Routine', label: 'Predictable & Structured (Clear daily checklist, steady workflow, few surprises)' },
      { value: 'Moderate Variety', label: 'Balanced Variety (Consistent structure with new weekly projects)' },
      { value: 'Fast-Paced / Dynamic', label: 'Rapid & Dynamic (Fast task switching, urgent problem solving, emergency response)' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Matches roles like accounting (structured) vs emergency nursing/IT incident response (dynamic).'
  },
  {
    id: 'q_env_physical_tolerance',
    module: 'B',
    category: 'Physical Demands',
    prompt: 'What level of physical exertion, lifting, or standing are you comfortable with?',
    type: 'single_choice',
    options: [
      { value: 'Low', label: 'Sedentary (Mostly seated at a desk or workstation)' },
      { value: 'Moderate', label: 'Active on Feet (Walking, light lifting, moving around labs or classrooms)' },
      { value: 'High', label: 'Heavy Physical Work (Lifting 40+ lbs, bending, working in heat/cold, standing 8+ hours)' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Ensures physical requirements of trades/nursing match your comfort.'
  },
  {
    id: 'q_env_biofluids_safety',
    module: 'B',
    category: 'Sensory / Hazard Tolerance',
    prompt: 'Are you comfortable working in environments with blood, bodily fluids, or medical procedures?',
    type: 'single_choice',
    options: [
      { value: 'Comfortable', label: 'Yes, completely comfortable (Interested in direct patient clinical care)' },
      { value: 'Hesitant', label: 'Uncertain / Prefer minimal exposure' },
      { value: 'Deal-Breaker', label: 'No, absolute deal-breaker (Prefer zero exposure to medical bodily fluids)' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Critical deal-breaker check for direct nursing/paramedic/surgical programs vs medical imaging or biotech.'
  },

  // =========================================================================
  // MODULE C: Subject and Activity Evidence (Concrete Past Experience)
  // =========================================================================
  {
    id: 'q_evi_favorite_subjects',
    module: 'C',
    category: 'High School Evidence',
    prompt: 'Which school subjects or elective classes did you genuinely enjoy without being forced?',
    subtext: 'Select all that apply.',
    type: 'multi_choice',
    options: [
      { value: 'CompSci', label: 'Computer Science / Coding / Robotics' },
      { value: 'Math', label: 'Advanced Algebra / Geometry / Precalculus' },
      { value: 'Biology', label: 'Biology / Anatomy / Health Sciences' },
      { value: 'Physics_Chem', label: 'Chemistry / Physics / Engineering' },
      { value: 'Art_Media', label: 'Visual Art / Graphic Design / Video Production / Photography' },
      { value: 'History_Gov', label: 'Government / US History / Law / Debate' },
      { value: 'English_Lit', label: 'English / Creative Writing / Journalism' },
      { value: 'Business_Econ', label: 'Economics / Business / Accounting / Marketing' },
      { value: 'Shop_Trades', label: 'Auto Shop / Woodworking / Welding / Agriculture' },
      { value: 'Culinary', label: 'Culinary Arts / Foods & Nutrition' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Identifies proven past engagement rather than hypothetical interest.'
  },
  {
    id: 'q_evi_projects_built',
    module: 'C',
    category: 'Concrete Evidence',
    prompt: 'Which of the following have you actually done or built outside of class requirements?',
    subtext: 'Select all that apply.',
    type: 'multi_choice',
    options: [
      { value: 'built_pc_or_mod', label: 'Assembled a custom PC, installed Linux, or modded video game files' },
      { value: 'fixed_car_bike_device', label: 'Replaced car brakes/oil, fixed a bicycle, or repaired cracked phone screens' },
      { value: 'created_video_channel', label: 'Edited YouTube/TikTok videos, created digital music beats, or designed logos' },
      { value: 'coded_website_bot', label: 'Wrote a Discord bot, web page, or Python script to automate a task' },
      { value: 'tutored_mentored', label: 'Tutored a peer, coached a younger sibling, or volunteered with kids' },
      { value: 'sold_items_resold', label: 'Resold shoes/clothing, managed an online shop, or pitched a school fundraiser' },
      { value: 'cared_for_injured', label: 'Helped care for an elderly relative or injured family member' },
      { value: 'cooked_full_meals', label: 'Planned and cooked multi-course meals or baked from scratch for groups' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Past voluntary actions are the single highest predictor of future domain satisfaction.'
  },
  {
    id: 'q_evi_peer_help',
    module: 'C',
    category: 'Reputational Strength',
    prompt: 'What kinds of problems do friends or family usually come to you for help with?',
    type: 'single_choice',
    options: [
      { value: 'tech_troubleshooting', label: 'Tech problems (Fixing computer glitches, Wi-Fi, setting up devices)' },
      { value: 'mechanical_fixing', label: 'Physical fixing (Assembling furniture, car issues, fixing physical gear)' },
      { value: 'creative_visual', label: 'Creative aesthetics (Choosing outfits, graphic design, editing pictures/videos)' },
      { value: 'listening_advice', label: 'Emotional support (Listening to personal troubles, giving thoughtful advice)' },
      { value: 'explaining_homework', label: 'Academic tutoring (Explaining difficult homework concepts in simple terms)' },
      { value: 'organizing_events', label: 'Organization & Planning (Budgeting trip expenses, organizing group events)' }
    ],
    isQuickMode: true,
    rationaleNotice: 'External social validation reveals strengths you might take for granted.'
  },
  {
    id: 'q_evi_disliked_subject_reason',
    module: 'C',
    category: 'Dislike Root Cause',
    prompt: 'When you disliked a subject in high school, what was usually the primary reason?',
    type: 'single_choice',
    options: [
      { value: 'too_abstract', label: 'Too abstract / No real-world practical application' },
      { value: 'too_much_repetitive_memorization', label: 'Too much rote memorization / boring drills' },
      { value: 'heavy_math_frustration', label: 'Overwhelming mathematical formulas / lack of clear step-by-step guidance' },
      { value: 'too_much_solo_reading_writing', label: 'Too much isolated reading and essay writing' },
      { value: 'poor_instruction_format', label: 'Just had an uninspiring teacher or bad textbook format (Subject itself was okay)' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Distinguishes between a dislike of a subject matter vs frustration with teaching style.'
  },

  // =========================================================================
  // MODULE D: Work Values & Practical Constraints
  // =========================================================================
  {
    id: 'q_val_earnings_vs_speed',
    module: 'D',
    category: 'Earnings Priority',
    prompt: 'What is your timeline for reaching financial independence and a solid starting wage?',
    type: 'single_choice',
    options: [
      { value: 'fast_workforce_2yr', label: 'Fast 1–2 Year Route: Start earning $50k–$65k+ quickly with an Associate (AAS) or Certificate' },
      { value: 'bachelor_ladder_4yr', label: '4-Year University Ladder: Willing to invest 4 years for higher long-term ceiling ($90k–$120k+)' },
      { value: 'earn_and_learn', label: 'Earn & Learn: Get a 2-year technical degree, work in the field, and have employer pay for Bachelor’s' },
      { value: 'flexible_undecided', label: 'Exploration First: Want to take 1–2 exploratory semesters before committing' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Guides recommendations toward workforce-ready AAS degrees vs transfer-oriented AS/AA degrees.'
  },
  {
    id: 'q_val_work_life_boundaries',
    module: 'D',
    category: 'Work-Life Values',
    prompt: 'Which career trade-off aligns best with your personal life values?',
    type: 'single_choice',
    options: [
      { value: 'strict_boundaries', label: 'Predictable 40-hour week: Leave work at work, maximum personal free time' },
      { value: 'shift_flexibility', label: 'Compressed Shifts: 3 or 4 long 12-hour days with 3 or 4 consecutive days off (Nursing/EMS style)' },
      { value: 'high_reward_intensity', label: 'High Pace & Ambition: Willing to work intense project hours for rapid promotions and high compensation' },
      { value: 'mission_helping', label: 'Meaning & Purpose: Impacting people’s lives matters more than maximum salary' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Matches lifestyle expectations with industry realities.'
  },
  {
    id: 'q_val_math_appetite',
    module: 'D',
    category: 'Math/Science Intensity',
    prompt: 'How do you feel about college-level Calculus, Physics, or Advanced Chemistry sequences?',
    type: 'single_choice',
    options: [
      { value: 'enthusiastic_stem', label: 'Ready for rigorous STEM (Willing to take Calculus I/II and University Physics)' },
      { value: 'moderate_practical_math', label: 'Comfortable with practical applied math (Statistics, College Algebra, Technical Math)' },
      { value: 'minimal_math_preferred', label: 'Prefer minimal math (Would rather take Contemporary Math / Quantitative Reasoning)' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Crucial filter to prevent recommending heavy engineering/CS transfer if rigorous math is a barrier.'
  },
  {
    id: 'q_val_commute_delivery',
    module: 'D',
    category: 'Delivery Constraints',
    prompt: 'What is your preferred class delivery format and campus travel preference?',
    type: 'single_choice',
    options: [
      { value: 'in_person_hands_on', label: 'In-person campus classes (Need physical labs, hands-on shops, and face-to-face peers)' },
      { value: 'hybrid_flexible', label: 'Hybrid balance (2 days on campus for labs, remaining coursework online)' },
      { value: 'mostly_online', label: 'Mostly online / distance learning (Need maximum schedule flexibility)' }
    ],
    isQuickMode: true,
    rationaleNotice: 'Ensures program delivery options match your transportation and schedule availability.'
  },

  // =========================================================================
  // MODULE E: Adaptive Clarification (Targeted Tie-Breakers)
  // =========================================================================
  {
    id: 'q_clar_tech_vs_hands_on',
    module: 'E',
    category: 'Technology vs Physical Trade',
    prompt: 'If choosing between working on a computer keyboard vs working with physical tools in a shop, which sounds more satisfying at the end of the day?',
    type: 'single_choice',
    options: [
      { value: 'screen_software', label: 'Solving digital problems on screen (Code, systems, databases, network architecture)' },
      { value: 'physical_hardware_trade', label: 'Touching tangible equipment (Engines, wiring, fabrication, robotics, cleanroom tools)' },
      { value: 'equal_combination', label: 'Both equally (e.g. semiconductor cleanroom or CAD design)' }
    ],
    isQuickMode: false,
    rationaleNotice: 'Used to resolve close scoring between Information Technology and Applied Technologies.'
  },
  {
    id: 'q_clar_health_patient_vs_tech',
    module: 'E',
    category: 'Direct Patient Care vs Health Tech',
    prompt: 'In healthcare, do you see yourself providing direct bedside patient care or operating diagnostic imaging/lab technology?',
    type: 'single_choice',
    options: [
      { value: 'direct_nursing', label: 'Direct emotional and physical bedside care (Nursing, EMS)' },
      { value: 'diagnostic_imaging', label: 'High-tech diagnostic imaging and testing (Radiology, Ultrasound, Biotech wet lab)' },
      { value: 'neither', label: 'Not interested in healthcare environments' }
    ],
    isQuickMode: false,
    rationaleNotice: 'Distinguishes Nursing/EMS from Radiologic Technology and Biotech.'
  },
  {
    id: 'q_clar_business_lead_vs_creative',
    module: 'E',
    category: 'Business vs Creative Media',
    prompt: 'Do you prefer driving business strategy and financial profit or producing creative media and storytelling?',
    type: 'single_choice',
    options: [
      { value: 'business_strategy', label: 'Business growth, market analytics, financial management, leadership' },
      { value: 'creative_storytelling', label: 'Creative storytelling, film production, game mechanics, graphic visual design' }
    ],
    isQuickMode: false,
    rationaleNotice: 'Distinguishes Business Administration from Arts & Digital Media.'
  }
];

export function getQuestionsByModule(module: 'A' | 'B' | 'C' | 'D' | 'E', mode: 'quick' | 'deep'): AssessmentQuestion[] {
  return ASSESSMENT_QUESTIONS.filter(q => {
    if (q.module !== module) return false;
    if (mode === 'quick') return q.isQuickMode;
    return true;
  });
}
