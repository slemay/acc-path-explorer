import React from 'react';
import { ACCProgram } from '@/types';
import { getProgramById } from '@/data/accPrograms';
import { Badge } from '@/components/UI/Badge';
import {
  X,
  Plus,
  Scale,
  Sparkles,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  FlaskConical
} from 'lucide-react';

interface ComparePathsModalProps {
  selectedPathIds: string[];
  onRemovePath: (programId: string) => void;
  onClearAll: () => void;
  onOpenExplorer: () => void;
  onPlanWithProgram: (program: ACCProgram) => void;
  fitScoresMap?: Record<string, number>;
}

export const ComparePathsModal: React.FC<ComparePathsModalProps> = ({
  selectedPathIds,
  onRemovePath,
  onClearAll,
  onOpenExplorer,
  onPlanWithProgram,
  fitScoresMap = {}
}) => {
  const selectedPrograms = selectedPathIds
    .map(id => getProgramById(id))
    .filter((p): p is ACCProgram => p !== undefined)
    .slice(0, 3);

  if (selectedPrograms.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4 border border-blue-200 dark:border-blue-800">
          <Scale className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          No Paths Selected for Comparison
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
          Explore ACC degree and certificate programs and click <strong>&quot;+ Compare&quot;</strong> to view up to 3 paths side-by-side.
        </p>
        <button
          type="button"
          onClick={onOpenExplorer}
          className="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-500/25 transition-all cursor-pointer inline-flex items-center gap-2"
        >
          <span>Browse ACC Program Explorer</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  const comparisonRows = [
    {
      label: 'Fit Match',
      render: (p: ACCProgram) => {
        const score = fitScoresMap[p.id];
        return score !== undefined ? (
          <Badge variant={score >= 75 ? 'success' : score >= 55 ? 'primary' : 'neutral'}>
            {score}% Match
          </Badge>
        ) : (
          <span className="text-slate-400">Take Assessment</span>
        );
      }
    },
    {
      label: 'Award & Credential',
      render: (p: ACCProgram) => (
        <div>
          <Badge variant="neutral" size="sm">{p.awardType}</Badge>
          <div className="text-[11px] text-slate-500 mt-1">{p.intent}</div>
        </div>
      )
    },
    {
      label: 'Duration & Credits',
      render: (p: ACCProgram) => (
        <div>
          <strong className="text-slate-900 dark:text-white">~{p.publishedDurationMonths} Months</strong>
          <div className="text-slate-500">{p.totalCredits} Credit Hours</div>
        </div>
      )
    },
    {
      label: 'Austin MSA Median Wage',
      render: (p: ACCProgram) => (
        <div>
          <strong className="text-emerald-700 dark:text-emerald-400 text-sm">
            {p.relatedOccupations[0]?.medianWageAustin.split(' ')[0]}
          </strong>
          <div className="text-[11px] text-slate-500">{p.relatedOccupations[0]?.growthRateAustin}</div>
        </div>
      )
    },
    {
      label: 'Tuition & Free Tuition',
      render: (p: ACCProgram) => (
        <div className="space-y-1">
          <div className="font-semibold text-blue-600 dark:text-blue-400">
            {p.estimatedTuitionInDistrict.split(' ')[0]}
          </div>
          <div className="text-[11px] text-slate-500 leading-tight">
            {p.tuitionCategory.includes('Free') ? 'Eligible for ACC Free Tuition (In-District)' : 'Standard / Differential Fees'}
          </div>
        </div>
      )
    },
    {
      label: 'Transferability Evidence',
      render: (p: ACCProgram) => (
        <div className="space-y-1 text-[11px]">
          {p.transferPathways.length > 0 ? (
            p.transferPathways.slice(0, 2).map((tp, idx) => (
              <div key={idx} className="p-1.5 bg-slate-50 dark:bg-slate-800 rounded-md">
                <strong>{tp.university.replace('The University of Texas at Austin', 'UT Austin')}</strong>: {tp.articulationType}
              </div>
            ))
          ) : (
            <span className="text-slate-500">Primarily Workforce Entry (AAS/Cert)</span>
          )}
        </div>
      )
    },
    {
      label: 'Math & Science Load',
      render: (p: ACCProgram) => (
        <div>
          <span className={`font-semibold ${p.workContext.mathScienceIntensity === 'Very High' ? 'text-amber-600' : 'text-slate-700 dark:text-slate-300'}`}>
            {p.workContext.mathScienceIntensity}
          </span>
        </div>
      )
    },
    {
      label: 'Hands-on Tools Intensity',
      render: (p: ACCProgram) => (
        <div>
          <strong>{p.workContext.handsOnLevel}</strong>
        </div>
      )
    },
    {
      label: 'Work Setting',
      render: (p: ACCProgram) => (
        <div className="text-slate-600 dark:text-slate-300">
          {p.workContext.workSetting.join(', ')}
        </div>
      )
    },
    {
      label: 'Selective Admission',
      render: (p: ACCProgram) => (
        <div>
          {p.selectiveAdmission ? (
            <Badge variant="warning" size="sm">Yes — Competitive Application</Badge>
          ) : (
            <span className="text-slate-500">Open Admission</span>
          )}
        </div>
      )
    },
    {
      label: 'Intro Exploratory Course',
      render: (p: ACCProgram) => {
        const course = p.relatedAccCourses.find(c => c.isFirstSemesterExploratory);
        return course ? (
          <div>
            <strong className="text-blue-600 dark:text-blue-400">{course.courseCode}</strong>
            <div className="text-[11px] text-slate-500">{course.courseTitle}</div>
          </div>
        ) : (
          <span className="text-slate-400">N/A</span>
        );
      }
    },
    {
      label: 'Low-Cost Test Experiment',
      render: (p: ACCProgram) => (
        <div className="p-2 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg border border-emerald-100 dark:border-emerald-900/40 text-[11px]">
          <strong className="text-emerald-900 dark:text-emerald-300 block mb-0.5">
            {p.lowCostValidationExperiment.title}
          </strong>
          <span className="text-slate-600 dark:text-slate-400">
            {p.lowCostValidationExperiment.costEstimate} • ~{p.lowCostValidationExperiment.estimatedTimeHours} hrs
          </span>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Compare Career & Degree Pathways
            </h2>
            <Badge variant="primary" size="sm">
              {selectedPrograms.length} of 3 Selected
            </Badge>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Compare fit, educational length, local Austin job earnings, transfer options, and testing experiments side-by-side.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {selectedPrograms.length < 3 && (
            <button
              onClick={onOpenExplorer}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Another Path</span>
            </button>
          )}
          <button
            onClick={onClearAll}
            className="px-3.5 py-2 text-xs font-semibold rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-800 transition-colors cursor-pointer"
          >
            Clear Comparison
          </button>
        </div>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60">
              <th className="p-4 sm:p-5 w-48 font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider text-[11px] align-top">
                Program & Metrics
              </th>
              {selectedPrograms.map(prog => (
                <th key={prog.id} className="p-4 sm:p-5 w-72 sm:w-80 align-top border-l border-slate-200 dark:border-slate-800">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Badge variant="primary" size="sm" className="mb-1.5">
                        {prog.areaOfStudy}
                      </Badge>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {prog.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => onRemovePath(prog.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 rounded-md transition-colors cursor-pointer"
                      title="Remove from comparison"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mt-3">
                    <button
                      onClick={() => onPlanWithProgram(prog)}
                      className="w-full py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Plan This Path</span>
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {comparisonRows.map((row, rIdx) => (
              <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/40 dark:bg-slate-850/30'}>
                <td className="p-4 sm:p-5 font-bold text-slate-700 dark:text-slate-300">
                  {row.label}
                </td>
                {selectedPrograms.map(prog => (
                  <td key={prog.id} className="p-4 sm:p-5 border-l border-slate-100 dark:border-slate-800 align-top">
                    {row.render(prog)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
