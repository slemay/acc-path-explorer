import { SourceRecord } from '@/types';

export const OFFICIAL_SOURCES: SourceRecord[] = [
  {
    id: 'src-acc-catalog-2627',
    title: 'Austin Community College Academic Catalog & Student Handbook (2026–2027)',
    url: 'https://catalog.austincc.edu/',
    organization: 'Austin Community College',
    academicYear: '2026-2027',
    retrievalDate: '2026-08-10',
    lastVerifiedDate: '2026-08-12',
    verificationStatus: 'Verified current',
    notes: 'Primary authority for all course codes, credit hours, degree award plans, and prerequisite sequences.'
  },
  {
    id: 'src-acc-programs-study',
    title: 'ACC Programs by Area of Study & Award Plans',
    url: 'https://programs.austincc.edu/programs-by-area-of-study/',
    organization: 'Austin Community College',
    academicYear: '2026-2027',
    retrievalDate: '2026-08-10',
    lastVerifiedDate: '2026-08-12',
    verificationStatus: 'Verified current',
    notes: 'Official directory of certificates, AAS, AA, AS, AAT, and BAT programs across 11 Areas of Study.'
  },
  {
    id: 'src-acc-core-curriculum',
    title: 'Texas General Education Core Curriculum (42 Semester Credit Hours)',
    url: 'https://students.austincc.edu/transfer-services/core-curriculum/',
    organization: 'Austin Community College',
    academicYear: '2026-2027',
    retrievalDate: '2026-08-10',
    lastVerifiedDate: '2026-08-12',
    verificationStatus: 'Verified current',
    notes: 'Statutory Texas Core Curriculum structure satisfying general education across all Texas public higher education institutions.'
  },
  {
    id: 'src-acc-transfer-services',
    title: 'ACC University Transfer Guides, Articulation Agreements & Equivalencies',
    url: 'https://students.austincc.edu/transfer-services/university-information-transfer-guides-course-equivalencies/',
    organization: 'Austin Community College',
    academicYear: '2026-2027',
    retrievalDate: '2026-08-10',
    lastVerifiedDate: '2026-08-12',
    verificationStatus: 'Verified current',
    notes: 'Official articulation agreements with UT Austin, Texas State University, Texas A&M, and other Texas public institutions.'
  },
  {
    id: 'src-acc-free-tuition',
    title: 'ACC Free Tuition Pilot Program Guidelines & In-District Eligibility Rules',
    url: 'https://www.austincc.edu/paying-for-college/acc-free-tuition/',
    organization: 'Austin Community College',
    academicYear: '2026-2027',
    retrievalDate: '2026-08-10',
    lastVerifiedDate: '2026-08-12',
    verificationStatus: 'Verified current',
    notes: 'Covers in-district high school graduates from 2024, 2025, and 2026. Does not cover non-tuition costs such as textbooks, lab fees, trade equipment, or living expenses.'
  },
  {
    id: 'src-onet-ip-model',
    title: 'O*NET Interest Profiler (IP) Scoring & Occupational Dimension Model',
    url: 'https://services.onetcenter.org/ip',
    organization: 'O*NET Center / US DOL',
    academicYear: '2026-2027',
    retrievalDate: '2026-08-10',
    lastVerifiedDate: '2026-08-12',
    verificationStatus: 'Verified current',
    notes: 'Official RIASEC standardized questions, dimension metrics, and O*NET-SOC occupation crosswalk.'
  },
  {
    id: 'src-bls-ooh-2026',
    title: 'U.S. Bureau of Labor Statistics Occupational Outlook Handbook',
    url: 'https://www.bls.gov/ooh/',
    organization: 'U.S. Bureau of Labor Statistics',
    academicYear: '2026-2027',
    retrievalDate: '2026-08-10',
    lastVerifiedDate: '2026-08-12',
    verificationStatus: 'Verified current',
    notes: 'National baseline data for occupational requirements, daily work tasks, and growth projections.'
  },
  {
    id: 'src-twc-austin-msa',
    title: 'Texas Workforce Commission (TWC) LMCI Labor Market Information - Austin-Round Rock MSA',
    url: 'https://www.twc.texas.gov/',
    organization: 'Texas Workforce Commission',
    academicYear: '2026-2027',
    retrievalDate: '2026-08-10',
    lastVerifiedDate: '2026-08-12',
    verificationStatus: 'Verified current',
    notes: 'Regional median annual earnings, 5-year employment projections, and annual job openings in the Austin-Round Rock Metropolitan Area.'
  },
  {
    id: 'src-ut-austin-transfer',
    title: 'The University of Texas at Austin Automated Transfer Equivalency & Transfer Planning Guides',
    url: 'https://admissions.utexas.edu/apply/transfer-resources/ate-system/',
    organization: 'The University of Texas at Austin',
    academicYear: '2026-2027',
    retrievalDate: '2026-08-10',
    lastVerifiedDate: '2026-08-12',
    verificationStatus: 'Verified current',
    notes: 'Specific prerequisite courses required for competitive admission into Cockrell School of Engineering, McCombs School of Business, and College of Natural Sciences.'
  },
  {
    id: 'src-txst-transfer-guide',
    title: 'Texas State University Transfer Planning Guides & Articulation Matrix',
    url: 'https://www.admissions.txst.edu/future-students/transfer/transfer-guides.html',
    organization: 'Texas State University',
    academicYear: '2026-2027',
    retrievalDate: '2026-08-10',
    lastVerifiedDate: '2026-08-12',
    verificationStatus: 'Verified current',
    notes: 'Full articulation agreement maps for Computer Science, Nursing, Education, Construction Science, and Business.'
  },
  {
    id: 'src-tamu-transfer-matrix',
    title: 'Texas A&M University Transfer Course Equivalency & Degree Evaluation Guide',
    url: 'https://admissions.tamu.edu/apply/transfer/transfer-course-equivalency',
    organization: 'Texas A&M University',
    academicYear: '2026-2027',
    retrievalDate: '2026-08-10',
    lastVerifiedDate: '2026-08-12',
    verificationStatus: 'Verified current',
    notes: 'Course prerequisite mapping and minimum required GPA benchmarks for Engineering, Agriculture, and Mays Business School.'
  }
];

export function getSourceById(id: string): SourceRecord | undefined {
  return OFFICIAL_SOURCES.find(s => s.id === id);
}
