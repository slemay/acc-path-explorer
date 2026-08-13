import { describe, it, expect } from 'vitest';
import { runDataQualityAudit } from '@/lib/dataGovernance';

describe('Data Governance & Audit', () => {
  it('should verify all ACC programs have valid source citations and complete metadata', () => {
    const report = runDataQualityAudit();

    expect(report.totalPrograms).toBeGreaterThan(10);
    expect(report.totalSources).toBeGreaterThan(5);
    expect(report.sourcesMissingUrl).toEqual([]);
    expect(report.programsMissingSources).toEqual([]);
    expect(report.orphanTransferClaims).toEqual([]);
    expect(report.catalogYear).toBe('2026–2027');
    expect(report.isAllVerified).toBe(true);
  });
});
