import React, { useState } from 'react';
import { DomainMatch, ACCProgram } from '@/types';
import { Badge } from '@/components/UI/Badge';
import {
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  FlaskConical,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ArrowRight,
  Plus
} from 'lucide-react';
import clsx from 'clsx';

interface DomainCardProps {
  match: DomainMatch;
  rank: number;
  onSelectProgram: (program: ACCProgram) => void;
  onAddToCompare: (programId: string) => void;
  isProgramInCompare: (programId: string) => boolean;
  onPlanWithProgram: (program: ACCProgram) => void;
}

export const DomainCard: React.FC<DomainCardProps> = ({
  match,
  rank,
  onSelectProgram,
  onAddToCompare,
  isProgramInCompare,
  onPlanWithProgram
}) => {
  const [showComponentBreakdown, setShowComponentBreakdown] = useState(false);

  const getFitBadgeVariant = (score: number) => {
    if (score >= 75) return 'success';
    if (score >= 55) return 'primary';
    return 'neutral';
  };

  const getFitLabel = (score: number) => {
    if (score >= 75) return 'Strong Match to Explore';
    if (score >= 55) return 'Possible Match to Test';
    return 'Lower Priority Match';
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all">
      {/* Header: Rank, Title, Fit and Confidence Badges */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-6 h-6 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-black flex items-center justify-center">
              #{rank}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              ACC Area of Study
            </span>
            <Badge variant={getFitBadgeVariant(match.fitScore)} size="sm">
              {getFitLabel(match.fitScore)}
            </Badge>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {match.domainName}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
            {match.summaryNote}
          </p>
        </div>

        {/* Fit & Confidence Meter Group */}
        <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shrink-0">
          <div className="text-center">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Fit Match</div>
            <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
              {match.fitScore}%
            </div>
          </div>
          <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
          <div className="text-center">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Confidence</div>
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
              {match.confidenceScore}%
            </div>
          </div>
        </div>
      </div>

      {/* Component Breakdown Toggle */}
      <div className="py-3 border-b border-slate-100 dark:border-slate-800">
        <button
          type="button"
          onClick={() => setShowComponentBreakdown(!showComponentBreakdown)}
          className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 cursor-pointer"
        >
          <span>{showComponentBreakdown ? 'Hide Component Score Breakdown' : 'View Component Score Breakdown (Transparent Weights)'}</span>
          {showComponentBreakdown ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {showComponentBreakdown && (
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl text-xs">
            <div>
              <div className="text-slate-500 dark:text-slate-400">RIASEC Interest (35%)</div>
              <div className="font-bold text-slate-900 dark:text-white">{match.componentScores.riasecScore}%</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">Work Environment (20%)</div>
              <div className="font-bold text-slate-900 dark:text-white">{match.componentScores.workEnvironmentScore}%</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">Subject Evidence (15%)</div>
              <div className="font-bold text-slate-900 dark:text-white">{match.componentScores.activityEvidenceScore}%</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">Work Values (15%)</div>
              <div className="font-bold text-slate-900 dark:text-white">{match.componentScores.workValuesScore}%</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">Constraints Fit (10%)</div>
              <div className="font-bold text-slate-900 dark:text-white">{match.componentScores.practicalConstraintsScore}%</div>
            </div>
            <div>
              <div className="text-slate-500 dark:text-slate-400">Evidence Quality (5%)</div>
              <div className="font-bold text-slate-900 dark:text-white">{match.componentScores.evidenceQualityScore}%</div>
            </div>
          </div>
        )}
      </div>

      {/* 3 Pillars: Supporting Evidence, Potential Conflicts, Missing Questions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 text-xs">
        {/* Pillar 1: Strongest Positive Factors */}
        <div className="p-3.5 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 rounded-xl">
          <div className="flex items-center gap-1.5 font-bold text-emerald-900 dark:text-emerald-300 mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Why This May Fit</span>
          </div>
          {match.strongestPositiveFactors.length > 0 ? (
            <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
              {match.strongestPositiveFactors.map((factor, fIdx) => (
                <li key={fIdx} className="flex items-start gap-1.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500">General interest alignment with foundational subjects.</p>
          )}
        </div>

        {/* Pillar 2: Potential Conflicts / Deal-Breakers */}
        <div className="p-3.5 bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/50 rounded-xl">
          <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300 mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>What May Not Fit (Friction Points)</span>
          </div>
          {match.potentialConflicts.length > 0 ? (
            <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
              {match.potentialConflicts.map((conf, cIdx) => (
                <li key={cIdx} className="flex items-start gap-1.5">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{conf}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500">No major deal-breakers or environmental friction detected.</p>
          )}
        </div>

        {/* Pillar 3: Missing Information */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-200 mb-2">
            <HelpCircle className="w-4 h-4 text-blue-500" />
            <span>Missing Information to Clarify</span>
          </div>
          {match.unansweredQuestions.length > 0 ? (
            <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
              {match.unansweredQuestions.map((unq, uIdx) => (
                <li key={uIdx} className="flex items-start gap-1.5">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>{unq}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500">All core assessment module indicators completed.</p>
          )}
        </div>
      </div>

      {/* Recommended Low-Cost Validation Experiment Callout */}
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-xl mb-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
            <FlaskConical className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-blue-900 dark:text-blue-200 uppercase tracking-wider">
              Cheapest / Fastest Test: {match.validationExperiment.title}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-0.5 leading-relaxed">
              {match.validationExperiment.description}
            </p>
            <div className="flex items-center gap-3 mt-2 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
              <span>Time: ~{match.validationExperiment.estimatedTimeHours} hours</span>
              <span>•</span>
              <span>Cost: {match.validationExperiment.costEstimate}</span>
              <span>•</span>
              <span className="text-blue-700 dark:text-blue-300">Type: {match.validationExperiment.type}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top ACC Program Options in this Domain */}
      <div>
        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2.5">
          Verified ACC Degree & Certificate Options
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {match.topPrograms.map(prog => {
            const inCompare = isProgramInCompare(prog.id);
            return (
              <div
                key={prog.id}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <Badge variant="neutral" size="sm">
                      {prog.awardType}
                    </Badge>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {prog.publishedDurationMonths} mos • {prog.totalCredits} cr
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {prog.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-1">
                    {prog.relatedOccupations[0]?.title}: {prog.relatedOccupations[0]?.medianWageAustin}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-xs">
                  <button
                    type="button"
                    onClick={() => onSelectProgram(prog)}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer"
                  >
                    View Program Map →
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => onAddToCompare(prog.id)}
                      className={clsx(
                        'px-2 py-1 rounded-md text-[11px] font-medium border transition-colors cursor-pointer',
                        inCompare
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:bg-slate-100'
                      )}
                    >
                      {inCompare ? 'In Compare' : '+ Compare'}
                    </button>
                    <button
                      type="button"
                      onClick={() => onPlanWithProgram(prog)}
                      className="px-2 py-1 rounded-md text-[11px] font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                      title="Build a first-semester schedule around this program"
                    >
                      Plan
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
