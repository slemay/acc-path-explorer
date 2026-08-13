import React from 'react';
import {
  Compass,
  FileQuestion,
  BarChart3,
  Scale,
  Calendar,
  CheckSquare,
  ShieldCheck
} from 'lucide-react';
import clsx from 'clsx';

export type ActiveTab =
  | 'explorer'
  | 'assessment'
  | 'results'
  | 'compare'
  | 'planner'
  | 'actionPlan'
  | 'governance';

interface TabNavProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  hasCompletedAssessment: boolean;
  selectedPathsCount: number;
}

export const TabNav: React.FC<TabNavProps> = ({
  activeTab,
  onSelectTab,
  hasCompletedAssessment,
  selectedPathsCount
}) => {
  const tabs = [
    {
      id: 'assessment' as ActiveTab,
      label: 'Assessment',
      icon: FileQuestion,
      description: 'O*NET & environment questions'
    },
    {
      id: 'explorer' as ActiveTab,
      label: 'Explore Paths',
      icon: Compass,
      description: 'Search & filter all ACC programs'
    },
    {
      id: 'results' as ActiveTab,
      label: 'Results & Hypotheses',
      icon: BarChart3,
      description: 'RIASEC profile & fit rankings',
      badge: hasCompletedAssessment ? 'Ready' : undefined
    },
    {
      id: 'compare' as ActiveTab,
      label: 'Compare',
      icon: Scale,
      description: 'Side-by-side comparison',
      count: selectedPathsCount > 0 ? selectedPathsCount : undefined
    },
    {
      id: 'planner' as ActiveTab,
      label: '1st Semester Planner',
      icon: Calendar,
      description: 'Schedule concepts & advisor questions'
    },
    {
      id: 'actionPlan' as ActiveTab,
      label: 'Action Plan',
      icon: CheckSquare,
      description: '30/60/90-day low-cost tests'
    },
    {
      id: 'governance' as ActiveTab,
      label: 'Sources & Governance',
      icon: ShieldCheck,
      description: 'Official 2026-2027 citations'
    }
  ];

  return (
    <nav className="w-full bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 overflow-x-auto py-2 scrollbar-none">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={clsx(
                  'flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-500',
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30 dark:bg-blue-600'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className={clsx('w-4 h-4', isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400')} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={clsx(
                    'px-1.5 py-0.2 rounded-full text-[10px] font-semibold',
                    isActive ? 'bg-white/20 text-white' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                  )}>
                    {tab.badge}
                  </span>
                )}
                {tab.count !== undefined && (
                  <span className={clsx(
                    'px-1.5 py-0.2 rounded-full text-[10px] font-bold',
                    isActive ? 'bg-white/20 text-white' : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                  )}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
