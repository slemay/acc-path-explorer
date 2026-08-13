import React from 'react';
import { ACCProgram } from '@/types';
import { Badge } from '@/components/UI/Badge';
import {
  Clock,
  DollarSign,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Plus,
  Check,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import clsx from 'clsx';

interface ProgramCardProps {
  program: ACCProgram;
  fitScore?: number;
  onSelect: () => void;
  onAddToCompare: () => void;
  isInCompare: boolean;
  onPlan: () => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  fitScore,
  onSelect,
  onAddToCompare,
  isInCompare,
  onPlan
}) => {
  const primaryOccupation = program.relatedOccupations[0];
  const exploratoryCourse = program.relatedAccCourses.find(c => c.isFirstSemesterExploratory);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge variant="primary" size="sm">
            {program.areaOfStudy}
          </Badge>
          {fitScore !== undefined && (
            <Badge variant={fitScore >= 75 ? 'success' : fitScore >= 55 ? 'primary' : 'neutral'} size="sm">
              Fit: {fitScore}%
            </Badge>
          )}
        </div>

        {/* Title & Award Type */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {program.name}
        </h3>

        <div className="flex flex-wrap items-center gap-2 mt-2">
          <Badge variant="neutral" size="sm">
            {program.awardType}
          </Badge>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {program.totalCredits} credits • ~{program.publishedDurationMonths} mos
          </span>
          {program.selectiveAdmission && (
            <Badge variant="warning" size="sm">
              Selective Admission
            </Badge>
          )}
        </div>

        {/* Primary Labor Market Outlook */}
        {primaryOccupation && (
          <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl text-xs space-y-1">
            <div className="text-slate-500 dark:text-slate-400 font-medium">
              Target Role: <strong className="text-slate-800 dark:text-slate-200">{primaryOccupation.title}</strong>
            </div>
            <div className="flex items-center justify-between font-semibold">
              <span className="text-emerald-700 dark:text-emerald-400">
                Austin Median: {primaryOccupation.medianWageAustin}
              </span>
              <span className="text-slate-600 dark:text-slate-400">
                {primaryOccupation.growthRateAustin}
              </span>
            </div>
          </div>
        )}

        {/* Exploratory First-Semester Course Highlight */}
        {exploratoryCourse && (
          <div className="mt-3 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
            <span>
              <strong>Intro Test Course:</strong> {exploratoryCourse.courseCode} ({exploratoryCourse.courseTitle})
            </span>
          </div>
        )}
      </div>

      {/* Footer Action Buttons */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-xs">
        <button
          type="button"
          onClick={onSelect}
          className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onAddToCompare}
            className={clsx(
              'px-2.5 py-1.5 rounded-lg font-medium border transition-colors flex items-center gap-1 cursor-pointer',
              isInCompare
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-200'
            )}
            title="Add to side-by-side comparison"
          >
            {isInCompare ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
            <span>{isInCompare ? 'In Compare' : 'Compare'}</span>
          </button>
          <button
            type="button"
            onClick={onPlan}
            className="px-2.5 py-1.5 rounded-lg font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center gap-1 cursor-pointer"
            title="Create first-semester discussion schedule with this program"
          >
            <Calendar className="w-3 h-3" />
            <span>Plan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
