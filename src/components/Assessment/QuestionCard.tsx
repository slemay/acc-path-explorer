import React from 'react';
import { AssessmentQuestion, Likert5 } from '@/types';
import { HelpCircle, ThumbsDown, ThumbsUp, Minus, Check, Sparkles } from 'lucide-react';
import clsx from 'clsx';

interface QuestionCardProps {
  question: AssessmentQuestion;
  index: number;
  totalInModule: number;
  value: any;
  onChange: (val: any) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  index,
  totalInModule,
  value,
  onChange
}) => {
  const likertOptions: { val: Likert5; label: string; sub: string; icon: any; color: string }[] = [
    { val: 1, label: 'Strongly Dislike', sub: 'Hate it / Never', icon: ThumbsDown, color: 'hover:border-rose-400 hover:bg-rose-50 text-rose-700' },
    { val: 2, label: 'Dislike', sub: 'Prefer not to', icon: ThumbsDown, color: 'hover:border-amber-400 hover:bg-amber-50 text-amber-700' },
    { val: 3, label: 'Unsure', sub: 'Neutral / Not sure', icon: Minus, color: 'hover:border-slate-400 hover:bg-slate-50 text-slate-700' },
    { val: 4, label: 'Like', sub: 'Sounds enjoyable', icon: ThumbsUp, color: 'hover:border-blue-400 hover:bg-blue-50 text-blue-700' },
    { val: 5, label: 'Strongly Like', sub: 'Love it / Excited', icon: ThumbsUp, color: 'hover:border-emerald-400 hover:bg-emerald-50 text-emerald-700' }
  ];

  const handleMultiToggle = (optVal: string) => {
    const arr = Array.isArray(value) ? [...value] : [];
    if (arr.includes(optVal)) {
      onChange(arr.filter(v => v !== optVal));
    } else {
      onChange([...arr, optVal]);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xs mb-6 transition-all">
      {/* Question Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Question {index + 1} of {totalInModule}
            </span>
            {question.dimension && (
              <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                O*NET: {question.dimension}
              </span>
            )}
            {question.category && (
              <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                {question.category}
              </span>
            )}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
            {question.prompt}
          </h3>
          {question.subtext && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {question.subtext}
            </p>
          )}
        </div>
      </div>

      {/* Question Inputs */}
      <div className="mt-5">
        {/* Likert-5 Type */}
        {question.type === 'likert5' && (
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {likertOptions.map(opt => {
              const isSelected = value === opt.val;
              const Icon = opt.icon;
              return (
                <button
                  type="button"
                  key={opt.val}
                  onClick={() => onChange(opt.val)}
                  className={clsx(
                    'flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-500',
                    isSelected
                      ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-500/30'
                      : `border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 ${opt.color} dark:text-slate-200`
                  )}
                >
                  <Icon className={clsx('w-5 h-5 mb-1.5', isSelected ? 'text-white' : 'text-slate-400')} />
                  <span className="text-xs font-bold">{opt.label}</span>
                  <span className={clsx('text-[10px] mt-0.5', isSelected ? 'text-blue-100' : 'text-slate-400')}>
                    {opt.sub}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Single Choice Radio Card Type */}
        {question.type === 'single_choice' && question.options && (
          <div className="space-y-2.5">
            {question.options.map(opt => {
              const isSelected = value === opt.value;
              return (
                <button
                  type="button"
                  key={String(opt.value)}
                  onClick={() => onChange(opt.value)}
                  className={clsx(
                    'w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-500',
                    isSelected
                      ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 text-blue-950 dark:text-blue-100 ring-1 ring-blue-600'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  )}
                >
                  <div>
                    <div className="text-sm font-semibold">{opt.label}</div>
                    {opt.description && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {opt.description}
                      </div>
                    )}
                  </div>
                  <div className={clsx(
                    'w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3',
                    isSelected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 dark:border-slate-600'
                  )}>
                    {isSelected && <Check className="w-3 h-3" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Multi-Choice Checkbox Card Type */}
        {question.type === 'multi_choice' && question.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {question.options.map(opt => {
              const isChecked = Array.isArray(value) && value.includes(opt.value);
              return (
                <button
                  type="button"
                  key={String(opt.value)}
                  onClick={() => handleMultiToggle(String(opt.value))}
                  className={clsx(
                    'flex items-start justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-500',
                    isChecked
                      ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 text-blue-950 dark:text-blue-100 ring-1 ring-blue-600'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  )}
                >
                  <span className="text-xs font-medium pr-2">{opt.label}</span>
                  <div className={clsx(
                    'w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5',
                    isChecked ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 dark:border-slate-600'
                  )}>
                    {isChecked && <Check className="w-3 h-3" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Why We Ask This Callout */}
      {question.rationaleNotice && (
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
          <HelpCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
          <span>
            <strong>Why this matters:</strong> {question.rationaleNotice}
          </span>
        </div>
      )}
    </div>
  );
};
