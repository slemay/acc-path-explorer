import React from 'react';
import { CheckCircle2, PauseCircle, PlayCircle } from 'lucide-react';
import clsx from 'clsx';

interface ProgressBarProps {
  currentModule: 'A' | 'B' | 'C' | 'D' | 'E';
  completedModules: string[];
  totalAnswered: number;
  totalQuestions: number;
  onSelectModule: (module: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  assessmentMode: 'quick' | 'deep';
  onToggleMode: (mode: 'quick' | 'deep') => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentModule,
  completedModules,
  totalAnswered,
  totalQuestions,
  onSelectModule,
  assessmentMode,
  onToggleMode
}) => {
  const modules = [
    { id: 'A' as const, name: 'Interest Profile', code: 'RIASEC' },
    { id: 'B' as const, name: 'Work Environment', code: 'Settings' },
    { id: 'C' as const, name: 'Subject Evidence', code: 'Strengths' },
    { id: 'D' as const, name: 'Values & Constraints', code: 'Practical' },
    { id: 'E' as const, name: 'Clarifications', code: 'Adaptive' }
  ];

  const percent = totalQuestions > 0 ? Math.min(100, Math.round((totalAnswered / totalQuestions) * 100)) : 0;

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs mb-6">
      {/* Top Header: Progress count & Mode Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Assessment Progress
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full">
              {percent}% Complete
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {totalAnswered} of {totalQuestions} questions answered • Auto-saved locally after every response
          </p>
        </div>

        {/* Quick vs Deep Mode Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => onToggleMode('quick')}
            className={clsx(
              'px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer',
              assessmentMode === 'quick'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            )}
          >
            Quick Mode (~10m)
          </button>
          <button
            type="button"
            onClick={() => onToggleMode('deep')}
            className={clsx(
              'px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer',
              assessmentMode === 'deep'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            )}
          >
            Deep Mode (~25m)
          </button>
        </div>
      </div>

      {/* Progress Bar Line */}
      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 rounded-full"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {/* Module Step Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {modules.map(mod => {
          const isCurrent = currentModule === mod.id;
          const isDone = completedModules.includes(mod.id);
          return (
            <button
              key={mod.id}
              onClick={() => onSelectModule(mod.id)}
              className={clsx(
                'flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all cursor-pointer text-xs font-medium',
                isCurrent
                  ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 ring-2 ring-blue-500/20'
                  : isDone
                  ? 'border-emerald-200 dark:border-emerald-900 bg-emerald-50/40 dark:bg-emerald-950/20 text-slate-700 dark:text-slate-300'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-500 dark:text-slate-400 hover:bg-slate-100'
              )}
            >
              {isDone ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              ) : (
                <span className={clsx(
                  'w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0',
                  isCurrent ? 'bg-blue-600 text-white' : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                )}>
                  {mod.id}
                </span>
              )}
              <div className="truncate">
                <div className="font-semibold truncate">{mod.name}</div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500">{mod.code}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
