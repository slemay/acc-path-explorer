# Master Build Prompt: ACC Path Explorer

Copy the full prompt below into an AI coding environment that can browse the web, create files, run a development server, and test the application.

---

## Prompt

You are a cross-functional product team consisting of:

- a career-development and vocational-assessment specialist;
- an Austin Community College (ACC) academic-program and transfer-pathway researcher;
- a student-centered UX designer;
- a data architect;
- and a senior full-stack engineer.

Design and implement a production-quality, mobile-first web application with the working title **ACC Path Explorer**.

### 1. Product purpose

Build a private career-and-education exploration portal for a recent high-school graduate who is beginning at Austin Community College and does not yet know what he wants to study or pursue professionally.

The application must help him:

1. identify patterns in his interests, preferred work environments, values, self-reported strengths, constraints, and dislikes;
2. discover several plausible career domains rather than being assigned one “correct” career;
3. connect those domains to current ACC certificates, associate degrees, workforce/trade programs, bachelor’s degrees, and university-transfer options;
4. compare paths on the basis of fit, time, education required, work setting, math/science intensity, people interaction, hands-on work, local job outlook, and transfer flexibility;
5. select low-risk next steps—such as an exploratory ACC course, informational interview, job-shadowing experience, student organization, lab tour, or small project—that test each hypothesis;
6. develop a first-semester course discussion plan that preserves transfer flexibility while he remains undecided.

This is a decision-support and exploration tool. It must not claim to diagnose personality, measure intelligence, determine aptitude, guarantee admission, guarantee transfer, or predict career success.

### 2. Core product principle

Treat every recommendation as a **hypothesis to test**, not a verdict.

The results must explain:

- what the student’s answers suggest;
- which answers materially influenced a match;
- what could make the path a poor fit;
- what information is still missing;
- and the cheapest, fastest way to test the path before committing.

Use neutral language such as “strong match to explore,” “possible match,” and “lower-priority match.” Never say “you should become…” or “this is your ideal career.”

### 3. Research and source-of-truth requirements

Before coding recommendations, research the current ACC academic year using official sources. As of this specification, the applicable catalog is **2026–2027**, but the application must not assume that catalog remains current forever.

Use these official sources as the initial source manifest:

- ACC catalog and handbook: https://catalog.austincc.edu/
- ACC current course descriptions: https://catalog.austincc.edu/course-descriptions/current-courses/
- ACC programs by area of study: https://programs.austincc.edu/programs-by-area-of-study/
- ACC award plans and program maps: https://programs.austincc.edu/awards-and-program-maps/
- ACC degrees and certificates by award type: https://catalog.austincc.edu/award-plans/degrees-and-certificates-listing-by-award-type/
- ACC core curriculum: https://students.austincc.edu/transfer-services/core-curriculum/
- ACC transfer services: https://students.austincc.edu/transfer-services/
- ACC university guides, equivalencies, and articulation agreements: https://students.austincc.edu/transfer-services/university-information-transfer-guides-course-equivalencies/
- ACC transfer planning guide: https://students.austincc.edu/transfer-services/transfer-planning-guide/
- ACC career exploration and FOCUS-2: https://students.austincc.edu/career-services/career-exploration/
- ACC Free Tuition: https://www.austincc.edu/paying-for-college/acc-free-tuition/
- O*NET Interest Profiler services: https://services.onetcenter.org/ip
- O*NET Web Services reference: https://services.onetcenter.org/reference/
- O*NET occupational data: https://www.onetcenter.org/database.html
- U.S. Bureau of Labor Statistics Occupational Outlook Handbook: https://www.bls.gov/ooh/
- Texas labor-market information, when available from an official Texas Workforce Commission source: https://www.twc.texas.gov/

Rules:

1. ACC’s current catalog, program maps, and official transfer pages are authoritative for ACC facts.
2. For transfer claims, also verify against the destination university’s current official catalog or transfer-equivalency tool.
3. Never infer that a course applies to a destination major merely because the university accepts it as transfer credit.
4. Never label an entire program “guaranteed to transfer” unless an official, current agreement explicitly supports that statement.
5. Store the source URL, source title, academic year, retrieval date, and last verification date for every program, course, transfer pathway, tuition claim, and labor-market claim.
6. Display citations and a “last verified” date in the user interface.
7. If a source cannot be verified, show “Verification required” rather than fabricating a value.
8. Do not scrape a site in violation of its access rules. Prefer documented APIs, downloadable data, structured pages, or a curated import file.
9. Separate application code from catalog data. Build a repeatable refresh/import process so a future academic year can replace the current snapshot without rewriting the product.
10. If web access is unavailable, do not invent ACC data. Implement the application with clearly marked fixture data and identify the blocked ingestion step.

### 4. Assessment design

Do not create an arbitrary 100-question personality test.

Use the official **O*NET Interest Profiler** as the interest foundation. Prefer the documented 60-question version when depth matters; support the 30-question Mini-IP as a faster option. Follow O*NET attribution and license requirements. Retrieve questions and scoring through the documented API when credentials are configured. Never silently substitute a homemade RIASEC score for the official scoring method.

The assessment experience should contain the following modules:

#### Module A — Interest profile

- O*NET RIASEC dimensions: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional.
- Five response options, consistent with the official instrument.
- Show progress, allow pause/resume, and permit answers to be changed.

#### Module B — Work-environment preferences

Use approximately 12–18 concise, scenario-based or forced-choice questions covering:

- working alone, in a small team, or with many people;
- hands-on activity versus abstract analysis;
- indoor, outdoor, field, shop, lab, office, clinical, classroom, and remote settings;
- predictable routine versus frequent change;
- sustained concentration versus rapid task switching;
- building or repairing versus advising, persuading, organizing, researching, caring, or creating;
- comfort with customer-facing work, conflict, public speaking, and responsibility for others;
- tolerance for physical work, noise, weather, bodily fluids, safety risk, and irregular schedules.

#### Module C — Subject and activity evidence

Use approximately 10–15 questions. Ask for concrete evidence, not vague self-labels:

- school subjects and projects he voluntarily enjoyed;
- activities that held his attention without external pressure;
- things he has built, fixed, written, designed, organized, sold, researched, performed, taught, or cared for;
- tasks friends or family ask him to help with;
- subjects he disliked and the reason—content, teaching format, difficulty, repetition, social setting, or lack of relevance;
- confidence and recency for each claimed strength.

Do not treat grades alone as aptitude. Do not use unsupported “visual/auditory/kinesthetic learning style” categories.

#### Module D — Work values and practical constraints

Use approximately 10–15 questions covering:

- income importance and acceptable earnings ramp;
- job stability;
- autonomy;
- helping others;
- creativity;
- status or advancement;
- work-life boundaries;
- willingness to complete two, four, six, or more years of education;
- willingness to obtain a license or certification;
- commute, transportation, campus, online-learning, and scheduling constraints;
- willingness to travel, relocate, work nights/weekends, or perform physically demanding work;
- financial constraints not covered by tuition, including books, tools, lab fees, transportation, and lost work time.

#### Module E — Adaptive clarification

Ask up to 10 follow-up questions only when needed to:

- distinguish between two close domains;
- investigate contradictory answers;
- clarify an important deal-breaker;
- determine whether interest is based on actual experience or only an idea of the work;
- or improve low-confidence results.

The normal experience should take roughly 20–30 minutes. Offer a quick mode and a deep mode. Save progress locally after every response.

### 5. Scoring and recommendation model

Implement a deterministic, testable scoring engine. Do not delegate the primary score calculation to a generative AI model.

Keep these components separate:

- RIASEC interest score;
- work-environment compatibility;
- activity and subject evidence;
- work-value alignment;
- practical-constraint compatibility;
- answer completeness and consistency;
- recommendation confidence.

Use transparent, configurable weights. Start with this provisional model and document it in code:

| Component | Initial weight |
|---|---:|
| O*NET/RIASEC interest alignment | 35% |
| Work-environment alignment | 20% |
| Activity and subject evidence | 15% |
| Work-value alignment | 15% |
| Practical-constraint compatibility | 10% |
| Evidence quality and answer confidence | 5% |

These weights are product defaults, not scientifically validated coefficients. Label them accordingly and keep them editable in configuration.

For each domain, occupation, and ACC program:

- calculate a fit score;
- calculate a separate confidence score;
- list the three to five strongest positive factors;
- list meaningful conflicts or deal-breakers;
- list unanswered questions that could change the ranking;
- show which component scores produced the total;
- and generate one or more inexpensive validation experiments.

Do not collapse interest, ability, values, constraints, earnings, and job outlook into one opaque number. Display them separately even if a composite ranking is used.

### 6. ACC data model

Create normalized, versioned records for at least:

- academic year;
- ACC area of study;
- program name;
- program URL;
- award type: certificate, Level 1/Level 2 certificate if applicable, Occupational Skills Award, AA, AS, AAT, AAS, or bachelor’s degree;
- program intent: workforce entry, transfer, or both;
- program map URL and version;
- total credits and published duration, when stated;
- prerequisites, TSI requirements, selective admission, licensing, background-check, clinical, equipment, or physical requirements, when stated;
- campus or delivery constraints, when stated;
- related ACC courses;
- related O*NET-SOC occupations;
- CIP code when available;
- RIASEC and work-context attributes;
- destination universities and transfer artifacts;
- course equivalencies and articulation agreements;
- source records and verification status.

Ingest all current ACC program categories, not only traditional university majors. Include workforce and technical paths such as skilled trades, manufacturing, automotive, health sciences, information technology, design/media, public service, culinary/hospitality, business, science/engineering, education, and liberal arts where they exist in the official catalog.

### 7. Course and transfer logic

ACC’s Texas core curriculum currently contains 42 credit hours across communication, mathematics, life and physical sciences, language/philosophy/culture, creative arts, American history, government/political science, social and behavioral sciences, and the component-area option. Treat the current official core page as the source of truth, not this sentence.

The first-semester planner must follow these rules:

1. Never recommend a schedule without accounting for TSI status, prerequisites, placement, course availability, workload, and modality.
2. Distinguish “counts toward the Texas core,” “transfers as credit,” and “applies to the intended major.” These are not equivalent.
3. If a likely major requires a specific mathematics or science sequence, flag the risk of taking a generic alternative.
4. When the target major or university is unknown, optimize for exploration and broad applicability, but label the plan “preliminary—advisor review required.”
5. When a target university is selected, use its current transfer guide and equivalency source in addition to ACC data.
6. Show at least two schedule concepts when appropriate:
   - **Maximum flexibility:** broadly applicable core courses and manageable workload.
   - **Explore a direction:** core courses plus one appropriate introductory or hands-on course that tests a leading hypothesis.
7. Do not imply that the application can register the student for classes.
8. Include a prominent action to prepare questions for an ACC Area of Study advisor or Transfer Services appointment.

### 8. Required user experience

Build these screens and workflows:

1. **Welcome and boundaries**
   - Explain what the application does and does not do.
   - State that it is an independent planning tool and is not affiliated with or endorsed by ACC.
   - Offer Quick Assessment and Deep Assessment.

2. **Student context**
   - Collect only information needed for recommendations.
   - Do not require a legal name, student ID, date of birth, disability details, or other sensitive data.

3. **Assessment**
   - One question or compact question group at a time.
   - Clear progress by module.
   - Back, pause, resume, and “not sure” controls.
   - Explain why sensitive-seeming constraint questions matter.

4. **Results overview**
   - RIASEC profile visualization.
   - Top five career domains with fit and confidence shown separately.
   - “What your answers suggest,” “What may not fit,” and “What to test next.”
   - Avoid celebratory or deterministic personality language.

5. **Path explorer**
   - Search and filter all ACC programs.
   - Filters for credential type, time to completion, transfer intent, hands-on intensity, math/science intensity, work setting, people interaction, schedule constraints, and selective admission.
   - Show both strong matches and user-requested alternatives.

6. **Path detail**
   - ACC program and credential options.
   - Related occupations.
   - Typical work activities and environments.
   - Education or licensing requirements.
   - Labor-market information with geography, source, and date.
   - Transfer options and limitations.
   - Relevant first-step courses or experiences.
   - Match rationale, conflicts, confidence, and sources.

7. **Compare paths**
   - Compare up to three paths in a clear table.
   - Include fit, confidence, educational time, credential, transferability evidence, math/science load, hands-on level, people interaction, work environment, licensing, published cost factors, wages, outlook, and recommended experiment.

8. **Exploration plan**
   - Convert selected paths into a 30-, 60-, or 90-day action plan.
   - Include concrete actions such as visiting an ACC lab, talking with a faculty member, interviewing someone in the field, completing a small project, attending a student-club meeting, or taking an introductory class.

9. **First-semester discussion plan**
   - Present schedule concepts, not official academic advice.
   - Show why each course was included, which core area it satisfies, prerequisites, transfer caveats, and source links.
   - Generate a concise list of questions to take to an ACC advisor.

10. **Report and return visits**
   - Export or print a readable report containing results, evidence, selected paths, unresolved questions, action plan, citations, and data verification dates.
   - Save progress and selected paths in the browser.
   - Allow all local data to be erased.

### 9. Visual and interaction design

The product should feel exploratory, practical, and age-appropriate—not like a school test or a corporate HR assessment.

Use:

- a clean mobile-first layout;
- calm, high-contrast colors;
- clear cards and comparison tables;
- concise language suitable for a recent high-school graduate;
- useful empty, loading, offline, and error states;
- WCAG 2.2 AA accessibility practices;
- keyboard navigation and visible focus states;
- reduced-motion support;
- accessible charts with text equivalents;
- no manipulative gamification, countdowns, streaks, or false precision.

### 10. Technical implementation

Unless the existing repository requires another stack, use:

- Next.js with TypeScript;
- Tailwind CSS and an accessible component library;
- a versioned local data layer for the MVP;
- browser storage for a single private user;
- server-side routes only for protected external API calls;
- environment variables for O*NET or other API credentials;
- a source manifest and repeatable import/validation scripts for ACC data;
- schema validation for imported records;
- unit tests for scoring, confidence, filtering, and course/transfer rules;
- integration tests for the assessment-to-results workflow;
- end-to-end tests for pause/resume, compare, export/print, and delete-data behavior.

Do not require login for the MVP. Do not send assessment responses to an LLM or external analytics service by default. If an optional generative-AI explanation layer is added, it must:

- be disabled by default;
- receive only the minimum necessary structured scores;
- never alter deterministic rankings;
- cite the records used;
- distinguish sourced facts from generated interpretation;
- and fail safely without blocking the core product.

Avoid inventing APIs. If an official integration requires credentials, implement a documented adapter interface, an `.env.example`, and a fixture-backed development mode.

### 11. Data quality and governance

Create an internal data-quality view or command that reports:

- records missing a source;
- broken or redirected URLs;
- stale verification dates;
- duplicate programs or courses;
- orphaned program-to-occupation mappings;
- transfer claims missing destination-university evidence;
- and conflicts between catalog years.

Every visible factual record must carry a status such as:

- Verified current;
- Verified for a prior academic year;
- Partially verified;
- Verification required.

Never silently mix academic years.

### 12. Important disclosures

Display these ideas in plain language, not legalistic fine print:

- Results support exploration and do not determine ability or career success.
- Program requirements, course availability, tuition, and transfer rules change.
- A course may transfer without applying to a particular major.
- Selective-admission and licensed programs may have additional requirements.
- The student should confirm any schedule with an ACC advisor and the intended transfer institution.
- ACC Free Tuition eligibility and covered costs must be verified on ACC’s current official page. Tuition coverage may not include out-of-district charges, lab fees, textbooks, tools, supplies, transportation, or other costs.
- The application is independent and not affiliated with ACC, O*NET, the U.S. Department of Labor, or a destination university.

### 13. Deliverables

Produce and implement:

1. a short product brief and explicit assumptions;
2. an information architecture and user flow;
3. the data model and source manifest;
4. the assessment question strategy and scoring specification;
5. high-fidelity responsive screens;
6. a functioning application using verified data where available and labeled fixtures where not;
7. automated tests;
8. setup, environment, data-refresh, and deployment instructions;
9. an editorial guide for recommendation language;
10. a known-limitations list and prioritized backlog.

### 14. Implementation sequence

Work in this order:

1. Inspect the repository and current tool access.
2. Research and document official data sources.
3. Define schemas, scoring behavior, and recommendation guardrails.
4. Build a thin vertical slice: onboarding → short assessment → deterministic score → three sample paths → path detail.
5. Validate the slice with tests and accessible responsive behavior.
6. Expand the ACC catalog ingestion and program mapping.
7. Add comparison, exploration planning, first-semester planning, citations, and report export.
8. Run the full test suite, inspect the application visually at mobile and desktop widths, and correct defects.
9. Document which records are verified, partially verified, or fixtures.

Do not stop after producing mockups or a plan. Implement the working application in the repository. Make reasonable technical decisions without asking routine preference questions. Ask only when a missing decision would materially change product scope, privacy, cost, or deployment.

### 15. Acceptance criteria

The build is complete only when:

- a student can complete or pause the assessment and resume without data loss;
- the same answers always produce the same scores;
- fit and confidence are shown separately;
- every recommendation explains supporting evidence, conflicts, uncertainty, and a next experiment;
- the explorer includes verified ACC academic and workforce paths across all official areas of study;
- every ACC, transfer, tuition, and labor-market fact has a visible source and verification date;
- unverified information is explicitly labeled;
- the planner distinguishes core applicability, credit transfer, and major applicability;
- the application never presents itself as an ACC system or as professional academic counseling;
- all personal assessment data can remain local and can be deleted;
- core workflows pass automated tests;
- and the interface is usable on a phone, keyboard-accessible, and readable without relying on a chart alone.

Begin by stating the current academic-year sources you verified, the assumptions you will use, and any genuine blockers. Then proceed directly through design and implementation.

---

## Notes for the product owner

The first version should optimize for a single student and local data privacy. Multi-user accounts, counselor dashboards, and generalized public deployment should remain outside the MVP unless specifically requested later.

