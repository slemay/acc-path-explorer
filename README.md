# ACC Path Explorer 🧭
### Independent Career & Educational Exploration Portal for Austin Community College

> **Catalog Baseline:** Verified for Austin Community College Academic Catalog **2026–2027**  
> **Source Attribution:** Austin Community College, Texas Higher Education Coordinating Board (THECB), O*NET v28, U.S. Bureau of Labor Statistics (BLS), Texas Workforce Commission (TWC) LMCI (Austin-Round Rock MSA), and Texas Public University Articulation Systems (UT Austin, Texas State, Texas A&M).

---

## 1. Product Overview & Core Philosophy

**ACC Path Explorer** is a private, client-side career-and-education exploration web portal designed for recent high-school graduates who are beginning at Austin Community College (ACC) undecided about their academic major or career path.

### The Core Principle: *Recommendations are Hypotheses to Test, Not Verdicts*
- **No Diagnostic Labels:** The tool never claims to measure innate intelligence, diagnose personality, guarantee college admission, guarantee university credit applicability, or predict career success.
- **Transparent Decision-Support:** Every match explains:
  1. *What the student's answers suggest* (supporting positive factors);
  2. *What could make the path a poor fit* (potential conflicts, math load, bodily fluid deal-breakers, schedule demands);
  3. *What information is still missing* (unanswered questions);
  4. *The fastest, cheapest validation experiment* (lab tour, faculty interview, student club, micro-project) to test the hypothesis before committing.

---

## 2. Key Features & Architecture

### 🧭 1. ACC Program Explorer
- Search and multi-filter verified ACC certificate, AAS, AA, AS, AAT, and BAT programs across **all 11 ACC Areas of Study**:
  1. Applied Technologies & Skilled Trades
  2. Arts, Digital Media & Communications
  3. Business
  4. Culinary, Hospitality & Tourism
  5. Design, Manufacturing & Construction
  6. Education
  7. Health Sciences
  8. Information Technology
  9. Liberal Arts (Humanities & Social Sciences)
  10. Public & Social Services
  11. Science, Engineering & Math
- Filter by credential type, time to completion, transfer intent, hands-on intensity, math/science load, and selective admission.

### 📝 2. Standardized O*NET Interest Profiler & Environment Assessment
- **Module A (Interest Profile):** Standardized O*NET RIASEC battery (Realistic, Investigative, Artistic, Social, Enterprising, Conventional) with 5-point Likert response scale. Offers **Quick Mode (30 questions)** and **Deep Mode (60 questions)**.
- **Module B (Work Environment):** 14 scenario-based questions evaluating physical workspaces, team vs solo, hands-on vs abstract, routine vs dynamic pace, and sensory tolerances.
- **Module C (Subject & Activity Evidence):** 12 questions measuring voluntary past engagement (built projects, repaired gear, coding, tutoring, disliked subjects & root causes).
- **Module D (Work Values & Constraints):** 12 questions covering earnings timeline (2-yr workforce vs 4-yr bachelor ladder), math appetite, and delivery constraints.
- **Module E (Adaptive Clarification):** Targeted tie-breakers resolving boundary conditions between close domains.

### 📊 3. Deterministic 6-Component Scoring Engine
Primarily calculated using transparent, configurable weights documented in code:
| Component | Default Weight | Description |
|---|---:|---|
| **O*NET RIASEC Interest Alignment** | 35% | Weighted dot-product between student RIASEC profile and program profile |
| **Work Environment Fit** | 20% | Setting overlap, people interaction, hands-on tools, and sensory match |
| **Activity & Subject Evidence** | 15% | Grounded in voluntary past projects and favorite school electives |
| **Work Values Alignment** | 15% | Earnings timeline, autonomy, and lifestyle match |
| **Practical Constraints Fit** | 10% | Math sequence tolerance, delivery mode, and physical requirements |
| **Evidence Quality & Completeness** | 5% | Completeness ratio and consistency check |

- **Separate Fit & Confidence Scores:** Fit (0–100%) and Confidence (0–100%) are calculated and displayed independently.

### 📅 4. First-Semester Discussion Planner
Generates two distinct term-1 schedule concepts:
- **Concept A (Explore a Direction):** Combines 3 foundational Texas Core courses with 1 introductory course in the leading domain (e.g. `COSC 1336`, `WLDG 1421`, `ITSY 1300`, `BUSI 1301`) to test the hypothesis immediately.
- **Concept B (Maximum Flexibility):** 100% general core courses (Communication, Math, Social Science, First-Year Seminar) that apply universally to any Texas public bachelor's degree without locking the student in.
- **Transfer Distinctions:** Clearly labels courses as *"Counts toward Texas Core"*, *"Transfers as Credit"*, and *"Applies to Intended Major"*.
- **Advisor Question Generator:** Tailors a concise list of questions to bring to an ACC Area of Study advisor or Transfer Services appointment.

### ⚖️ 5. Side-by-Side Path Comparison
- Compare up to 3 programs side-by-side across fit, educational length, credential level, Austin MSA median wages, Texas university transferability, math/science load, hands-on level, and low-cost experiments.

### 🗺️ 6. 30 / 60 / 90 Day Exploration Action Roadmap
- Actionable checklist with campus tours, informational interviews, micro-projects, student clubs, and TSI verification tasks.
- Allows adding custom tasks and tracking completion status in browser storage.

### 🛡️ 7. Data Governance & Source Verification Directory
- Comprehensive source manifest displaying official citations, URLs, retrieval dates, and catalog year verification stamps.
- Automated data quality audit verifying 0 orphaned programs, 0 broken citations, and catalog consistency.

---

## 3. Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with responsive, high-contrast, accessible styling and print stylesheets
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/) with automated unit tests for scoring math, transfer rules, and data governance
- **Data Privacy:** 100% client-side localStorage persistence. Zero third-party telemetry, zero external tracking.

---

## 4. Getting Started Locally

### Prerequisites
- Node.js (v20+ recommended)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/acc-path-explorer.git
cd acc-path-explorer

# Install dependencies
npm install

# Run automated unit tests
npm test

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## 5. Editorial Style Guide for Recommendations

When describing matches or modifying program copy, adhere strictly to these editorial rules:
1. **Neutral & Exploratory:** Use *"Strong match to explore"*, *"Possible match to test"*, *"Lower priority match"*.
2. **Never Deterministic:** Never write *"You should become..."*, *"This is your destiny"*, or *"Your personality is..."*.
3. **Always Highlight Friction:** Every high match must explicitly note what could make it a poor fit (e.g. math load, licensing exams, shift hours).
4. **Concrete Next Step:** Every match must propose a low-cost, low-risk test (e.g. open lab tour, 20-minute faculty coffee interview, small prototype project).

---

## 6. Disclaimers & Statutory Disclosures

- **Independent Tool:** ACC Path Explorer is an independent decision-support tool. It is not affiliated with, maintained by, or endorsed by Austin Community College, O*NET, the U.S. Department of Labor, or transfer universities.
- **Advising Notice:** Students must verify all degree plans, TSI placement requirements, prerequisites, and registration with an official ACC Area of Study advisor.
- **Tuition & Transfer Notice:** ACC Free Tuition terms and university articulation guidelines are subject to change by respective institutions.
