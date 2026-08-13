import React from 'react';
import {
  Compass,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  UserCheck,
  BookOpen,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { StudentContext } from '@/types';

interface WelcomeViewProps {
  studentContext: StudentContext;
  onStartAssessment: (mode: 'quick' | 'deep') => void;
  onBrowsePrograms: () => void;
  onOpenContextModal: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({
  studentContext,
  onStartAssessment,
  onBrowsePrograms,
  onOpenContextModal
}) => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 space-y-10">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-700 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Austin Community College • Independent Decision-Support Portal</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
          Explore Your Academic & Career Pathways at ACC
        </h1>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
          Starting at Austin Community College undecided? Discover plausible career domains, compare verified ACC degree and certificate programs, and plan low-risk first-semester exploration courses.
        </p>
      </div>

      {/* Assessment Mode Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Card 1: Quick Assessment */}
        <div className="bg-white dark:bg-slate-900 border-2 border-blue-500 hover:border-blue-600 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-xs">
                Recommended
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-bold">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>~10 Minutes</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-950 dark:text-white group-hover:text-blue-600 transition-colors">
                Quick Discovery Mode
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed font-normal">
                Standard O*NET Mini-IP survey (30 questions) paired with work environment scenarios and high-level subject strengths.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Official O*NET Mini-IP interest scoring</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Immediate Top 5 domain hypotheses</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pause & resume anytime locally</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onStartAssessment('quick')}
            className="mt-6 w-full py-3.5 px-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start Quick Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 2: Deep Assessment */}
        <div className="bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 hover:border-slate-400 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs font-bold rounded-full">
                Comprehensive
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-bold">
                <Clock className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>~25 Minutes</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                Deep Assessment Mode
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed font-normal">
                Full 60-question O*NET Interest Profiler with detailed evidence logging, value priorities, and adaptive tie-breakers.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full O*NET 60-question battery</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Deep analysis of past voluntary projects</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Adaptive clarification questions</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onStartAssessment('deep')}
            className="mt-6 w-full py-3.5 px-5 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start Deep Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Direct Browse Alternative */}
      <div className="text-center pt-2">
        <button
          onClick={onBrowsePrograms}
          className="text-sm font-bold text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 inline-flex items-center gap-2 underline transition-colors cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>Skip Assessment & Directly Browse all 11 ACC Areas of Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* High-Contrast Plain-Language Boundaries & Disclaimers Box */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-slate-300 dark:border-slate-700 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white tracking-tight">
              What This Application Does & Does Not Do
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Clear boundaries and exploration guardrails for student decision support
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Panel 1: What It Does */}
          <div className="p-5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-2xl border-2 border-emerald-300 dark:border-emerald-800 space-y-3">
            <div className="flex items-center gap-2 text-emerald-950 dark:text-emerald-200 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0" />
              <span>What It Does (Decision Support)</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-900 dark:text-slate-100 leading-relaxed font-medium">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">•</span>
                <span>Identifies patterns in your interests, preferred work environments, and values.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">•</span>
                <span>Presents several plausible career hypotheses rather than assigning a single &quot;verdict&quot;.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">•</span>
                <span>Connects hypotheses directly to verified 2026–2027 ACC awards and courses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">•</span>
                <span>Distinguishes Texas Core credit from university major applicability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">•</span>
                <span>Proposes low-cost experiments (lab tours, projects) to test a path before committing.</span>
              </li>
            </ul>
          </div>

          {/* Panel 2: What It Does NOT Do */}
          <div className="p-5 bg-amber-50/70 dark:bg-amber-950/30 rounded-2xl border-2 border-amber-300 dark:border-amber-800 space-y-3">
            <div className="flex items-center gap-2 text-amber-950 dark:text-amber-200 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0" />
              <span>What It Does NOT Do (Important Limits)</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-900 dark:text-slate-100 leading-relaxed font-medium">
              <li className="flex items-start gap-2">
                <span className="text-amber-700 dark:text-amber-400 font-bold">•</span>
                <span>Does <strong>NOT</strong> diagnose personality, measure intelligence, or predict career success.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700 dark:text-amber-400 font-bold">•</span>
                <span>Does <strong>NOT</strong> guarantee college admission or destination university transfer acceptance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700 dark:text-amber-400 font-bold">•</span>
                <span>Does <strong>NOT</strong> register students for classes or replace professional academic counseling.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700 dark:text-amber-400 font-bold">•</span>
                <span>Does <strong>NOT</strong> collect sensitive legal names, student IDs, or dates of birth.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
          <span>Independent exploration portal • Not affiliated with or endorsed by Austin Community College.</span>
          <span className="text-blue-700 dark:text-blue-300 font-bold">100% Private Local Storage</span>
        </div>
      </div>
    </div>
  );
};
