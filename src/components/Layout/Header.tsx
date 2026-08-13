import React, { useState, useEffect } from 'react';
import { Compass, Trash2, Printer, ShieldCheck, UserCheck, Sparkles, Sun, Moon } from 'lucide-react';
import { Badge } from '@/components/UI/Badge';

interface HeaderProps {
  onOpenContext: () => void;
  onOpenExport: () => void;
  onResetData: () => void;
  onOpenGovernance: () => void;
  completionPercentage: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContext,
  onOpenExport,
  onResetData,
  onOpenGovernance,
  completionPercentage
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial preference from localStorage or system
    const savedTheme = localStorage.getItem('acc_theme_mode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('acc_theme_mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('acc_theme_mode', 'light');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Top Advisory Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white px-4 py-1.5 text-xs text-center flex items-center justify-center gap-2 font-medium">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span>
          Independent Decision-Support Tool for Austin Community College Exploration • Catalog Year <strong>2026–2027</strong>
        </span>
        <button
          onClick={onOpenGovernance}
          className="underline hover:text-blue-200 ml-1 text-slate-300 transition-colors cursor-pointer"
        >
          View Sources
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  ACC Path Explorer
                </h1>
                <Badge variant="primary" size="sm">
                  Independent Portal
                </Badge>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Explore career hypotheses, ACC degrees, and Texas university transfer pathways
              </p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            {/* Dark / Light Mode Switch */}
            <button
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-300 dark:border-slate-700 cursor-pointer"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            {/* Student Context Profile Button */}
            <button
              onClick={onOpenContext}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-300 dark:border-slate-700 cursor-pointer"
              title="View or update your student background settings"
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Student Profile</span>
            </button>

            {/* Print / Export Report */}
            <button
              onClick={onOpenExport}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-300 dark:border-slate-700 cursor-pointer"
              title="Print or export your personalized path report"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span>Report</span>
            </button>

            {/* Reset / Erase Local Data */}
            <button
              onClick={onResetData}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 rounded-lg transition-colors border border-rose-200 dark:border-rose-800 cursor-pointer"
              title="Permanently erase all locally stored assessment data from this browser"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Erase Data</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
