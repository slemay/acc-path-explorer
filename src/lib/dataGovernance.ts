import { ACC_PROGRAMS } from '@/data/accPrograms';
import { OFFICIAL_SOURCES } from '@/data/sourceManifest';
import { ACC_CORE_CURRICULUM_COURSES } from '@/data/accCoreCurriculum';

export interface DataQualityReport {
  totalSources: number;
  totalPrograms: number;
  totalCoreCourses: number;
  verifiedCurrentCount: number;
  partiallyVerifiedCount: number;
  verificationRequiredCount: number;
  sourcesMissingUrl: string[];
  programsMissingSources: string[];
  orphanTransferClaims: string[];
  staleVerificationRecords: string[];
  auditTimestamp: string;
  catalogYear: string;
  isAllVerified: boolean;
}

export function runDataQualityAudit(): DataQualityReport {
  const sourcesMissingUrl: string[] = [];
  const programsMissingSources: string[] = [];
  const orphanTransferClaims: string[] = [];
  const staleVerificationRecords: string[] = [];

  const sourceIdSet = new Set(OFFICIAL_SOURCES.map(s => s.id));

  // 1. Audit Sources
  for (const src of OFFICIAL_SOURCES) {
    if (!src.url || src.url.trim() === '') {
      sourcesMissingUrl.push(src.id);
    }
  }

  let verifiedCurrent = 0;
  let partiallyVerified = 0;
  let verificationRequired = 0;

  // 2. Audit Programs
  for (const prog of ACC_PROGRAMS) {
    if (prog.verificationStatus === 'Verified current') verifiedCurrent++;
    else if (prog.verificationStatus === 'Partially verified') partiallyVerified++;
    else verificationRequired++;

    if (!prog.sourceIds || prog.sourceIds.length === 0) {
      programsMissingSources.push(prog.id);
    } else {
      for (const sid of prog.sourceIds) {
        if (!sourceIdSet.has(sid)) {
          programsMissingSources.push(`${prog.id} -> invalid source ${sid}`);
        }
      }
    }

    for (const tp of prog.transferPathways) {
      if (!sourceIdSet.has(tp.sourceId)) {
        orphanTransferClaims.push(`${prog.name} -> ${tp.university} (Missing source ${tp.sourceId})`);
      }
    }
  }

  // 3. Audit Core Courses
  for (const course of ACC_CORE_CURRICULUM_COURSES) {
    if (!sourceIdSet.has(course.sourceId)) {
      programsMissingSources.push(`Core course ${course.code} (Missing source ${course.sourceId})`);
    }
  }

  return {
    totalSources: OFFICIAL_SOURCES.length,
    totalPrograms: ACC_PROGRAMS.length,
    totalCoreCourses: ACC_CORE_CURRICULUM_COURSES.length,
    verifiedCurrentCount: verifiedCurrent,
    partiallyVerifiedCount: partiallyVerified,
    verificationRequiredCount: verificationRequired,
    sourcesMissingUrl,
    programsMissingSources,
    orphanTransferClaims,
    staleVerificationRecords,
    auditTimestamp: new Date().toISOString(),
    catalogYear: '2026–2027',
    isAllVerified: programsMissingSources.length === 0 && orphanTransferClaims.length === 0
  };
}
