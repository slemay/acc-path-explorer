import React, { useState } from 'react';
import { DiscussionSchedule, StudentContext, ACCProgram } from '@/types';
import { generateFirstSemesterSchedules } from '@/lib/plannerEngine';
import { ACC_PROGRAMS } from '@/data/accPrograms';
import { Badge } from '@/components/UI/Badge';
import {
  Calendar,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  BookOpen,
  ArrowRight,
  Printer,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface FirstSemesterPlannerProps {
  studentContext: StudentContext;
  leadingProgram?: ACCProgram;
  onSelectLeadingProgram: (prog: ACCProgram) => void;
  onOpenExport: () => void;
}

export const FirstSemesterPlanner: React.FC<FirstSemesterPlannerProps> = ({
  studentContext,
  leadingProgram,
  onSelectLeadingProgram,
  onOpenExport
}) => {
  const [selectedConcept, setSelectedConcept] = useState<'maxFlexibility' | 'exploratory'>('exploratory');

  const { maxFlexibilitySchedule, exploratorySchedule } = generateFirstSemesterSchedules(
    studentContext,
    leadingProgram
  );

  const activeSchedule = selectedConcept === 'maxFlexibility' ? maxFlexibilitySchedule : exploratorySchedule;

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 space-y-8">
      {/* Top Banner: Disclaimer & Purpose */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-400/20">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Discussion Schedule Concepts (Term 1)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              First-Semester Discussion Planner
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              These schedules are <strong>exploratory concepts for discussion</strong> with an ACC Area of Study advisor. They do not register you for classes or replace official academic counseling.
            </p>
          </div>

          <button
            onClick={onOpenExport}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 shrink-0 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Advisor Prep Sheet</span>
          </button>
        </div>
      </div>

      {/* Program Anchor Selector */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Anchor Program for Exploratory Direction
          </span>
          <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
            {leadingProgram ? leadingProgram.name : 'Select an ACC program to test in term 1'}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {leadingProgram ? `${leadingProgram.areaOfStudy} • ${leadingProgram.awardType}` : 'Defaulting to Computer Science exploratory track.'}
          </p>
        </div>

        <select
          value={leadingProgram?.id || ''}
          onChange={e => {
            const prog = ACC_PROGRAMS.find(p => p.id === e.target.value);
            if (prog) onSelectLeadingProgram(prog);
          }}
          className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
        >
          {ACC_PROGRAMS.map(p => (
            <option key={p.id} value={p.id}>
              {p.name} ({p.areaOfStudy})
            </option>
          ))}
        </select>
      </div>

      {/* Schedule Concept Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => setSelectedConcept('exploratory')}
          className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedConcept === 'exploratory'
              ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-950 dark:text-white ring-2 ring-blue-500/20 shadow-xs'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <Badge variant="primary" size="sm">Recommended</Badge>
            <span className="text-xs font-bold">{exploratorySchedule.totalCreditHours} Credit Hours</span>
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Concept A: Explore a Direction
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
            Takes 3 universal core courses + 1 introductory hands-on course to test your leading hypothesis immediately.
          </p>
        </button>

        <button
          type="button"
          onClick={() => setSelectedConcept('maxFlexibility')}
          className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedConcept === 'maxFlexibility'
              ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-950 dark:text-white ring-2 ring-blue-500/20 shadow-xs'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <Badge variant="neutral" size="sm">Universal Progress</Badge>
            <span className="text-xs font-bold">{maxFlexibilitySchedule.totalCreditHours} Credit Hours</span>
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Concept B: Maximum Flexibility (General Core)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
            100% applies to the 42-SCH Texas General Education Core. Ideal if completely undecided between arts, business, or STEM.
          </p>
        </button>
      </div>

      {/* Selected Schedule Detail Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              {activeSchedule.conceptType}
            </span>
            <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full">
              Total: {activeSchedule.totalCreditHours} Semester Credit Hours
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {activeSchedule.summary}
          </p>
        </div>

        {/* Course-by-Course Table */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            First-Semester Course Selection Breakdown
          </div>
          {activeSchedule.courses.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/40 space-y-2 text-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <strong className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.code}: {item.title}
                  </strong>
                  <span className="text-slate-500 font-medium">({item.creditHours} cr)</span>
                </div>
                {item.coreArea && (
                  <Badge variant="primary" size="sm">
                    Texas Core: {item.coreArea}
                  </Badge>
                )}
              </div>

              <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>Inclusion Rationale:</strong> {item.inclusionReason}
              </div>

              {item.prerequisiteNote && (
                <div className="text-slate-500 dark:text-slate-400">
                  <strong>Prerequisites:</strong> {item.prerequisiteNote}
                </div>
              )}

              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-300">
                <strong>Transfer Applicability Note:</strong> {item.transferCaveat}
              </div>
            </div>
          ))}
        </div>

        {/* Critical Statutory Advising Checklist & Questions */}
        <div className="p-5 bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 rounded-2xl text-xs space-y-3">
          <div className="flex items-center gap-2 font-bold text-amber-950 dark:text-amber-200 text-sm">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Questions to Bring to Your ACC Area of Study Advisor</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Copy or print these specific questions for your upcoming advising appointment:
          </p>
          <ul className="space-y-2">
            {activeSchedule.advisorQuestions.map((q, qIdx) => (
              <li key={qIdx} className="flex items-start gap-2 text-slate-800 dark:text-slate-200">
                <span className="w-4 h-4 rounded-full bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  {qIdx + 1}
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* TSI Status Notice */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
          <div className="font-bold text-slate-800 dark:text-slate-200">
            {activeSchedule.tsiNotice}
          </div>
          <div>{activeSchedule.tuitionCoverageNotice}</div>
        </div>
      </div>
    </div>
  );
};
