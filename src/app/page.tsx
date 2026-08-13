'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  UserResponses,
  StudentContext,
  ACCProgram,
  ActionPlanTask,
  AssessmentResult
} from '@/types';
import {
  loadUserResponses,
  saveUserResponses,
  eraseAllLocalData,
  loadSelectedPaths,
  saveSelectedPaths,
  loadActionPlan,
  saveActionPlan,
  DEFAULT_USER_RESPONSES,
  DEFAULT_STUDENT_CONTEXT
} from '@/lib/storage';
import { calculateAssessmentResults } from '@/lib/scoringEngine';
import { generateFirstSemesterSchedules } from '@/lib/plannerEngine';
import { ACC_PROGRAMS, getProgramById } from '@/data/accPrograms';

import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { TabNav, ActiveTab } from '@/components/Layout/TabNav';

import { WelcomeView } from '@/components/Assessment/WelcomeView';
import { AssessmentWizard } from '@/components/Assessment/AssessmentWizard';
import { StudentContextModal } from '@/components/Assessment/StudentContextModal';
import { ResultsOverview } from '@/components/Results/ResultsOverview';
import { PathExplorer } from '@/components/Explorer/PathExplorer';
import { PathDetailModal } from '@/components/Detail/PathDetailModal';
import { ComparePathsModal } from '@/components/Compare/ComparePathsModal';
import { FirstSemesterPlanner } from '@/components/Planner/FirstSemesterPlanner';
import { ExplorationPlanView } from '@/components/ActionPlan/ExplorationPlanView';
import { ExportReportModal } from '@/components/Report/ExportReportModal';
import { DataGovernanceView } from '@/components/Governance/DataGovernanceView';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>('assessment');
  const [responses, setResponses] = useState<UserResponses>(DEFAULT_USER_RESPONSES);
  const [selectedPathIds, setSelectedPathIds] = useState<string[]>([]);
  const [actionPlanTasks, setActionPlanTasks] = useState<ActionPlanTask[]>([]);

  const [activeDetailProgram, setActiveDetailProgram] = useState<ACCProgram | null>(null);
  const [leadingPlannerProgram, setLeadingPlannerProgram] = useState<ACCProgram | undefined>(undefined);

  const [isContextModalOpen, setIsContextModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const loadedResponses = loadUserResponses();
    const loadedPaths = loadSelectedPaths();
    const loadedTasks = loadActionPlan();

    setResponses(loadedResponses);
    setSelectedPathIds(loadedPaths);
    setActionPlanTasks(loadedTasks);

    // If assessment already has answers, mark as started
    const hasAnswers = Object.keys(loadedResponses.moduleA).length > 0;
    setIsStarted(hasAnswers);

    // Default leading program to first computer science or top match
    setLeadingPlannerProgram(ACC_PROGRAMS[0]);

    setMounted(true);
  }, []);

  // Compute assessment results deterministically whenever responses change
  const results: AssessmentResult = useMemo(() => {
    return calculateAssessmentResults(responses);
  }, [responses]);

  // Map program ID -> fit score
  const fitScoresMap = useMemo(() => {
    const map: Record<string, number> = {};
    for (const match of results.domainMatches) {
      for (const prog of match.topPrograms) {
        map[prog.id] = match.fitScore;
      }
    }
    return map;
  }, [results]);

  // Persist responses on changes
  const handleUpdateResponses = (updated: UserResponses) => {
    setResponses(updated);
    saveUserResponses(updated);
    setIsStarted(true);
  };

  // Persist student profile
  const handleSaveContext = (updatedContext: StudentContext) => {
    const updated = {
      ...responses,
      studentContext: updatedContext
    };
    handleUpdateResponses(updated);
  };

  // Add/Remove Path from Compare
  const handleToggleCompare = (programId: string) => {
    let updated: string[];
    if (selectedPathIds.includes(programId)) {
      updated = selectedPathIds.filter(id => id !== programId);
    } else {
      if (selectedPathIds.length >= 3) {
        alert('You can compare up to 3 paths at a time. Remove one to add another.');
        return;
      }
      updated = [...selectedPathIds, programId];
    }
    setSelectedPathIds(updated);
    saveSelectedPaths(updated);
  };

  const handleClearCompare = () => {
    setSelectedPathIds([]);
    saveSelectedPaths([]);
  };

  // Update Action Plan
  const handleUpdateTasks = (tasks: ActionPlanTask[]) => {
    setActionPlanTasks(tasks);
    saveActionPlan(tasks);
  };

  // Reset/Erase all local data
  const handleResetData = () => {
    if (confirm('Are you sure you want to erase all locally saved assessment answers and custom action plans from this browser? This action cannot be undone.')) {
      eraseAllLocalData();
      setResponses(DEFAULT_USER_RESPONSES);
      setSelectedPathIds([]);
      setActionPlanTasks([]);
      setIsStarted(false);
      setActiveTab('explorer');
    }
  };

  // Plan First Semester around a specific program
  const handlePlanWithProgram = (prog: ACCProgram) => {
    setLeadingPlannerProgram(prog);
    setActiveTab('planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartAssessment = (mode: 'quick' | 'deep') => {
    const updated: UserResponses = {
      ...responses,
      assessmentMode: mode
    };
    handleUpdateResponses(updated);
    setIsStarted(true);
    setActiveTab('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // First semester discussion schedule
  const discussionSchedule = useMemo(() => {
    const { exploratorySchedule } = generateFirstSemesterSchedules(
      responses.studentContext,
      leadingPlannerProgram
    );
    return exploratorySchedule;
  }, [responses.studentContext, leadingPlannerProgram]);

  const selectedProgramsObjects = useMemo(() => {
    return selectedPathIds
      .map(id => getProgramById(id))
      .filter((p): p is ACCProgram => p !== undefined);
  }, [selectedPathIds]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <span>Loading ACC Path Explorer...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased">
      {/* Universal Header */}
      <Header
        onOpenContext={() => setIsContextModalOpen(true)}
        onOpenExport={() => setIsExportModalOpen(true)}
        onResetData={handleResetData}
        onOpenGovernance={() => setActiveTab('governance')}
        completionPercentage={results.completionPercentage}
      />

      {/* Main Tab Navigation */}
      <TabNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        hasCompletedAssessment={results.totalQuestionsAnswered >= 15}
        selectedPathsCount={selectedPathIds.length}
      />

      {/* Dynamic Content Views */}
      <main className="flex-1 w-full pb-12">
        {/* TAB 1: EXPLORER */}
        {activeTab === 'explorer' && (
          <PathExplorer
            onSelectProgram={prog => setActiveDetailProgram(prog)}
            onAddToCompare={handleToggleCompare}
            isProgramInCompare={id => selectedPathIds.includes(id)}
            onPlanWithProgram={handlePlanWithProgram}
            fitScoresMap={fitScoresMap}
          />
        )}

        {/* TAB 2: ASSESSMENT */}
        {activeTab === 'assessment' && (
          !isStarted && results.totalQuestionsAnswered === 0 ? (
            <WelcomeView
              studentContext={responses.studentContext}
              onStartAssessment={handleStartAssessment}
              onBrowsePrograms={() => setActiveTab('explorer')}
              onOpenContextModal={() => setIsContextModalOpen(true)}
            />
          ) : (
            <AssessmentWizard
              responses={responses}
              onUpdateResponses={handleUpdateResponses}
              onViewResults={() => {
                setActiveTab('results');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )
        )}

        {/* TAB 3: RESULTS */}
        {activeTab === 'results' && (
          <ResultsOverview
            results={results}
            onSelectProgram={prog => setActiveDetailProgram(prog)}
            onAddToCompare={handleToggleCompare}
            isProgramInCompare={id => selectedPathIds.includes(id)}
            onPlanWithProgram={handlePlanWithProgram}
            onRetakeAssessment={() => setActiveTab('assessment')}
            onNavigateTab={setActiveTab}
          />
        )}

        {/* TAB 4: COMPARE */}
        {activeTab === 'compare' && (
          <ComparePathsModal
            selectedPathIds={selectedPathIds}
            onRemovePath={handleToggleCompare}
            onClearAll={handleClearCompare}
            onOpenExplorer={() => setActiveTab('explorer')}
            onPlanWithProgram={handlePlanWithProgram}
            fitScoresMap={fitScoresMap}
          />
        )}

        {/* TAB 5: PLANNER */}
        {activeTab === 'planner' && (
          <FirstSemesterPlanner
            studentContext={responses.studentContext}
            leadingProgram={leadingPlannerProgram}
            onSelectLeadingProgram={setLeadingPlannerProgram}
            onOpenExport={() => setIsExportModalOpen(true)}
          />
        )}

        {/* TAB 6: ACTION PLAN */}
        {activeTab === 'actionPlan' && (
          <ExplorationPlanView
            tasks={actionPlanTasks}
            onUpdateTasks={handleUpdateTasks}
            selectedPrograms={selectedProgramsObjects}
            onOpenExport={() => setIsExportModalOpen(true)}
          />
        )}

        {/* TAB 7: GOVERNANCE */}
        {activeTab === 'governance' && (
          <DataGovernanceView />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onOpenGovernance={() => setActiveTab('governance')} />

      {/* Modals */}
      <StudentContextModal
        isOpen={isContextModalOpen}
        onClose={() => setIsContextModalOpen(false)}
        context={responses.studentContext}
        onSaveContext={handleSaveContext}
      />

      <PathDetailModal
        program={activeDetailProgram}
        isOpen={activeDetailProgram !== null}
        onClose={() => setActiveDetailProgram(null)}
        onAddToCompare={handleToggleCompare}
        isInCompare={activeDetailProgram ? selectedPathIds.includes(activeDetailProgram.id) : false}
        onPlan={handlePlanWithProgram}
      />

      <ExportReportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        responses={responses}
        results={results}
        selectedPrograms={selectedProgramsObjects}
        tasks={actionPlanTasks}
        discussionSchedule={discussionSchedule}
      />
    </div>
  );
}
