import React, { useState } from 'react';
import { AssessmentResult, ACCProgram } from '@/types';
import { RiasecChart } from './RiasecChart';
import { DomainCard } from './DomainCard';
import { Sparkles, Compass, Calendar, CheckSquare, Info, Filter } from 'lucide-react';

interface ResultsOverviewProps {
  results: AssessmentResult;
  onSelectProgram: (program: ACCProgram) => void;
  onAddToCompare: (programId: string) => void;
  isProgramInCompare: (programId: string) => boolean;
  onPlanWithProgram: (program: ACCProgram) => void;
  onRetakeAssessment: () => void;
  onNavigateTab: (tab: any) => void;
}

export const ResultsOverview: React.FC<ResultsOverviewProps> = ({
  results,
  onSelectProgram,
  onAddToCompare,
  isProgramInCompare,
  onPlanWithProgram,
  onRetakeAssessment,
  onNavigateTab
}) => {
  const [viewFilter, setViewFilter] = useState<'top5' | 'all'>('top5');

  const displayedMatches = viewFilter === 'top5'
    ? results.domainMatches.slice(0, 5)
    : results.domainMatches;

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-8">
      {/* Top Banner: Core Product Philosophy */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-400/20">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Exploration Results & Hypotheses</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Your Career & Academic Hypotheses
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Every match below is a <strong>hypothesis to test</strong>, not a rigid career diagnosis. These recommendations evaluate where your interests, preferred environments, and self-reported strengths point, while identifying potential friction points and inexpensive next steps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <button
              onClick={() => onNavigateTab('planner')}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>1st-Semester Schedule</span>
            </button>
            <button
              onClick={() => onNavigateTab('actionPlan')}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-colors border border-slate-700 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <CheckSquare className="w-4 h-4" />
              <span>30/60/90 Action Plan</span>
            </button>
          </div>
        </div>
      </div>

      {/* RIASEC Holland Code Visualization */}
      <section aria-labelledby="riasec-heading">
        <div className="flex items-center justify-between mb-3">
          <h3 id="riasec-heading" className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
            O*NET Interest Profile (RIASEC Dimensions)
          </h3>
          <span className="text-xs text-slate-500">Standard O*NET Interest Profiler</span>
        </div>
        <RiasecChart
          scores={results.riasecPercentages}
          primaryCode={results.primaryCode}
        />
      </section>

      {/* Ranked Career Domains List */}
      <section aria-labelledby="domains-heading">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 id="domains-heading" className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Plausible Career Domains & ACC Programs
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Ranked deterministically using your RIASEC profile (35%), environment fit (20%), activity evidence (15%), values (15%), constraints (10%), and confidence (5%).
            </p>
          </div>

          {/* Toggle between Top 5 vs All 11 Areas */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0">
            <button
              type="button"
              onClick={() => setViewFilter('top5')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                viewFilter === 'top5'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Top 5 Recommendations
            </button>
            <button
              type="button"
              onClick={() => setViewFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                viewFilter === 'all'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              All 11 Areas of Study
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {displayedMatches.map((match, idx) => (
            <DomainCard
              key={match.domainId}
              match={match}
              rank={idx + 1}
              onSelectProgram={onSelectProgram}
              onAddToCompare={onAddToCompare}
              isProgramInCompare={isProgramInCompare}
              onPlanWithProgram={onPlanWithProgram}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
