import React, { useState } from 'react';
import { UserResponses, AssessmentQuestion } from '@/types';
import { getQuestionsByModule } from '@/data/assessmentQuestions';
import { ProgressBar } from './ProgressBar';
import { QuestionCard } from './QuestionCard';
import { ChevronLeft, ChevronRight, CheckCircle2, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';

interface AssessmentWizardProps {
  responses: UserResponses;
  onUpdateResponses: (updated: UserResponses) => void;
  onViewResults: () => void;
}

export const AssessmentWizard: React.FC<AssessmentWizardProps> = ({
  responses,
  onUpdateResponses,
  onViewResults
}) => {
  const [currentModule, setCurrentModule] = useState<'A' | 'B' | 'C' | 'D' | 'E'>('A');

  const questions = getQuestionsByModule(currentModule, responses.assessmentMode);

  const getModuleResponseMap = (mod: 'A' | 'B' | 'C' | 'D' | 'E') => {
    switch (mod) {
      case 'A': return responses.moduleA;
      case 'B': return responses.moduleB;
      case 'C': return responses.moduleC;
      case 'D': return responses.moduleD;
      case 'E': return responses.moduleE;
    }
  };

  const handleAnswerChange = (qId: string, val: any) => {
    const updated = { ...responses };
    if (currentModule === 'A') {
      updated.moduleA = { ...updated.moduleA, [qId]: val };
    } else if (currentModule === 'B') {
      updated.moduleB = { ...updated.moduleB, [qId]: val };
    } else if (currentModule === 'C') {
      updated.moduleC = { ...updated.moduleC, [qId]: val };
    } else if (currentModule === 'D') {
      updated.moduleD = { ...updated.moduleD, [qId]: val };
    } else if (currentModule === 'E') {
      updated.moduleE = { ...updated.moduleE, [qId]: val };
    }

    // Check if module is complete
    const currentQList = getQuestionsByModule(currentModule, responses.assessmentMode);
    const modMap = getModuleResponseMap(currentModule);
    const isModComplete = currentQList.every(q => (modMap as any)[q.id] !== undefined);

    if (isModComplete && !updated.completedModules.includes(currentModule)) {
      updated.completedModules = [...updated.completedModules, currentModule];
    }

    onUpdateResponses(updated);
  };

  const handleToggleMode = (mode: 'quick' | 'deep') => {
    onUpdateResponses({
      ...responses,
      assessmentMode: mode
    });
  };

  const moduleOrder: ('A' | 'B' | 'C' | 'D' | 'E')[] = ['A', 'B', 'C', 'D', 'E'];
  const currentIndex = moduleOrder.indexOf(currentModule);

  const handleNextModule = () => {
    if (currentIndex < moduleOrder.length - 1) {
      setCurrentModule(moduleOrder[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onViewResults();
    }
  };

  const handlePrevModule = () => {
    if (currentIndex > 0) {
      setCurrentModule(moduleOrder[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Calculate total answered count
  let totalAnswered = 0;
  let totalQuestionsCount = 0;
  for (const m of moduleOrder) {
    const qList = getQuestionsByModule(m, responses.assessmentMode);
    totalQuestionsCount += qList.length;
    const mMap = getModuleResponseMap(m);
    for (const q of qList) {
      if ((mMap as any)[q.id] !== undefined) totalAnswered++;
    }
  }

  const moduleTitles: Record<'A' | 'B' | 'C' | 'D' | 'E', { title: string; desc: string }> = {
    A: {
      title: 'Module A: O*NET Standard Interest Profiler (RIASEC)',
      desc: 'Rate how much you would enjoy doing each task if you had the training. Do not worry about education level or salary yet.'
    },
    B: {
      title: 'Module B: Work Environment Preferences',
      desc: 'Identify physical workspaces, noise levels, social interactions, and workflow paces that suit you best.'
    },
    C: {
      title: 'Module C: Subject & Concrete Activity Evidence',
      desc: 'Ground your interests in real things you have voluntarily built, fixed, designed, or enjoyed outside of pressure.'
    },
    D: {
      title: 'Module D: Work Values & Practical Constraints',
      desc: 'Define acceptable education timelines (2yr vs 4yr+), income priorities, math/science appetite, and schedule boundaries.'
    },
    E: {
      title: 'Module E: Adaptive Clarification Questions',
      desc: 'Targeted tie-breakers to clarify close domain matches and test deal-breakers.'
    }
  };

  const currentModMap = getModuleResponseMap(currentModule);
  const currentAnsweredCount = questions.filter(q => (currentModMap as any)[q.id] !== undefined).length;

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      {/* Top Wizard Progress */}
      <ProgressBar
        currentModule={currentModule}
        completedModules={responses.completedModules}
        totalAnswered={totalAnswered}
        totalQuestions={totalQuestionsCount}
        onSelectModule={setCurrentModule}
        assessmentMode={responses.assessmentMode}
        onToggleMode={handleToggleMode}
      />

      {/* Module Title Header Card */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 mb-6 shadow-md">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
              Part {currentIndex + 1} of 5
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              {moduleTitles[currentModule].title}
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {moduleTitles[currentModule].desc}
            </p>
          </div>
          <div className="hidden sm:block text-right shrink-0">
            <span className="text-2xl font-black text-white">
              {currentAnsweredCount}/{questions.length}
            </span>
            <div className="text-xs text-slate-400">Answered in Module</div>
          </div>
        </div>
      </div>

      {/* Questions Stream */}
      <div className="space-y-4">
        {questions.map((q, idx) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={idx}
            totalInModule={questions.length}
            value={(currentModMap as any)[q.id]}
            onChange={val => handleAnswerChange(q.id, val)}
          />
        ))}
      </div>

      {/* Navigation Controls Bottom Bar */}
      <div className="mt-8 flex items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
        <button
          type="button"
          onClick={handlePrevModule}
          disabled={currentIndex === 0}
          className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Module</span>
        </button>

        <div className="flex items-center gap-3">
          {totalAnswered >= 15 && (
            <button
              type="button"
              onClick={onViewResults}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Preview Results</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleNextModule}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all cursor-pointer"
          >
            <span>{currentIndex === moduleOrder.length - 1 ? 'View Hypotheses & Fit' : 'Next Module'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
