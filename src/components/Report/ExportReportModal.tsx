import React from 'react';
import { Modal } from '@/components/UI/Modal';
import { UserResponses, AssessmentResult, ACCProgram, ActionPlanTask, DiscussionSchedule } from '@/types';
import { OFFICIAL_SOURCES } from '@/data/sourceManifest';
import { Printer, Download, ShieldCheck, Compass, CheckCircle2, AlertTriangle, Calendar, FileText } from 'lucide-react';
import { Badge } from '@/components/UI/Badge';

interface ExportReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  responses: UserResponses;
  results: AssessmentResult;
  selectedPrograms: ACCProgram[];
  tasks: ActionPlanTask[];
  discussionSchedule?: DiscussionSchedule;
}

export const ExportReportModal: React.FC<ExportReportModalProps> = ({
  isOpen,
  onClose,
  responses,
  results,
  selectedPrograms,
  tasks,
  discussionSchedule
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJSON = () => {
    const data = {
      title: 'ACC Path Explorer Summary Report',
      generatedAt: new Date().toISOString(),
      catalogYear: '2026–2027',
      studentProfile: responses.studentContext,
      riasecProfile: {
        scores: results.riasecPercentages,
        code: results.primaryCode
      },
      topDomains: results.domainMatches.slice(0, 5),
      selectedPrograms: selectedPrograms.map(p => ({
        id: p.id,
        name: p.name,
        area: p.areaOfStudy,
        award: p.awardType,
        credits: p.totalCredits,
        medianWage: p.relatedOccupations[0]?.medianWageAustin
      })),
      actionPlan: tasks,
      sources: OFFICIAL_SOURCES
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `acc_path_explorer_report_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Personalized Exploration & Advising Report"
      subtitle="Print-ready summary of assessment hypotheses, degree options, course planner, and action steps"
      maxWidth="5xl"
    >
      <div className="space-y-6">
        {/* Action Controls Bar */}
        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
          <span className="text-slate-600 dark:text-slate-300">
            Catalog Year: <strong>2026–2027</strong> • Generated: {new Date().toLocaleDateString()}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadJSON}
              className="px-3 py-1.5 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Printable Document Container */}
        <div className="p-6 sm:p-8 bg-white text-slate-900 rounded-2xl border border-slate-200 space-y-8 print:border-none print:p-0 print:m-0 text-xs sm:text-sm">
          {/* Report Header */}
          <div className="border-b-2 border-slate-900 pb-4 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Compass className="w-6 h-6 text-blue-700" />
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  ACC Path Explorer • Student Discovery Report
                </h1>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Independent Decision-Support Tool for Austin Community College Degree & Transfer Exploration
              </p>
            </div>
            <div className="text-right text-xs text-slate-500">
              <div>Catalog Year: <strong>2026–2027</strong></div>
              <div>Verification: <strong>Verified Current</strong></div>
            </div>
          </div>

          {/* Student Profile Overview */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <h2 className="font-bold text-slate-900 uppercase tracking-wider mb-2">
              1. Student Exploration Context
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <span className="text-slate-500 block">Graduation Status</span>
                <strong>{responses.studentContext.highSchoolGradYear}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Math Comfort</span>
                <strong>{responses.studentContext.mathComfortLevel}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Free Tuition Status</span>
                <strong>{responses.studentContext.freeTuitionEligible.split(' ')[0]}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Initial Goal</span>
                <strong className="truncate block">{responses.studentContext.primaryGoal}</strong>
              </div>
            </div>
          </div>

          {/* RIASEC Profile Breakdown */}
          <div>
            <h2 className="font-bold text-slate-900 uppercase tracking-wider mb-2">
              2. O*NET RIASEC Interest Dimensions (Primary Code: {results.primaryCode})
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-xs">
              {Object.entries(results.riasecPercentages).map(([dim, score]) => (
                <div key={dim} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-slate-500 text-[10px] uppercase font-bold">{dim}</div>
                  <div className="text-lg font-black text-blue-700 mt-0.5">{score}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Domain Hypotheses */}
          <div>
            <h2 className="font-bold text-slate-900 uppercase tracking-wider mb-3">
              3. Top 3 Career & Academic Domain Hypotheses
            </h2>
            <div className="space-y-3">
              {results.domainMatches.slice(0, 3).map((d, idx) => (
                <div key={d.domainId} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-sm text-slate-900">
                      #{idx + 1}: {d.domainName}
                    </div>
                    <div className="flex items-center gap-3 font-semibold">
                      <span className="text-blue-700">Fit Match: {d.fitScore}%</span>
                      <span className="text-emerald-700">Confidence: {d.confidenceScore}%</span>
                    </div>
                  </div>
                  <p className="text-slate-700">{d.summaryNote}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                    <div className="text-emerald-800">
                      <strong>Positive Evidence:</strong> {d.strongestPositiveFactors.join(' • ') || 'Aligned interests'}
                    </div>
                    <div className="text-amber-800">
                      <strong>Friction Check:</strong> {d.potentialConflicts.join(' • ') || 'No major deal-breakers'}
                    </div>
                  </div>
                  <div className="text-[11px] text-blue-900 pt-1 font-medium">
                    <strong>Recommended Test:</strong> {d.validationExperiment.title} ({d.validationExperiment.costEstimate}, ~{d.validationExperiment.estimatedTimeHours} hrs)
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Discussion Schedule Plan */}
          {discussionSchedule && (
            <div>
              <h2 className="font-bold text-slate-900 uppercase tracking-wider mb-2">
                4. First-Semester Discussion Schedule ({discussionSchedule.conceptType})
              </h2>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3 text-xs">
                <div className="font-semibold text-slate-800">
                  Total: {discussionSchedule.totalCreditHours} Semester Credit Hours
                </div>
                <div className="space-y-1.5">
                  {discussionSchedule.courses.map((c, cIdx) => (
                    <div key={cIdx} className="flex items-center justify-between border-b border-slate-200/80 pb-1">
                      <div>
                        <strong>{c.code}: {c.title}</strong> ({c.creditHours} cr)
                        <div className="text-[11px] text-slate-500">{c.transferCaveat}</div>
                      </div>
                      <span className="text-slate-600 font-medium">{c.coreArea || 'Field of Study'}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <strong className="block text-slate-900 mb-1">Questions Prepared for ACC Advisor:</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                    {discussionSchedule.advisorQuestions.map((q, qIdx) => (
                      <li key={qIdx}>{q}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Action Roadmap */}
          {tasks.length > 0 && (
            <div>
              <h2 className="font-bold text-slate-900 uppercase tracking-wider mb-2">
                5. 30 / 60 / 90 Day Exploration Action Plan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {['30-day', '60-day', '90-day'].map(tf => (
                  <div key={tf} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                    <strong className="uppercase text-[11px] text-blue-800 block">
                      {tf === '30-day' ? '30-Day Discovery' : tf === '60-day' ? '60-Day Testing' : '90-Day Registration'}
                    </strong>
                    <ul className="space-y-1 text-slate-700">
                      {tasks.filter(t => t.timeframe === tf).slice(0, 3).map((t, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-1">
                          <span>•</span>
                          <span>{t.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verified Citations & Legal Disclaimers */}
          <div className="border-t border-slate-300 pt-4 text-[10px] text-slate-500 space-y-1">
            <div>
              <strong>Disclaimers:</strong> This report is for student career and educational exploration only. It does not diagnose personality, guarantee college admission, ensure university credit applicability, or register students for courses. Official registration and degree auditing must be completed through Austin Community College.
            </div>
            <div>
              <strong>Verified Data Sources:</strong> Austin Community College Catalog 2026–2027 • Texas Higher Education Coordinating Board (THECB) 42-Hour General Education Core • O*NET Occupational Database v28 • Texas Workforce Commission LMCI Austin-Round Rock MSA.
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
