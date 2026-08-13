import React, { useState } from 'react';
import { ActionPlanTask, ACCProgram } from '@/types';
import { Badge } from '@/components/UI/Badge';
import {
  CheckSquare,
  Square,
  Plus,
  Trash2,
  Calendar,
  Sparkles,
  FlaskConical,
  GraduationCap,
  ExternalLink,
  Printer
} from 'lucide-react';

interface ExplorationPlanViewProps {
  tasks: ActionPlanTask[];
  onUpdateTasks: (tasks: ActionPlanTask[]) => void;
  selectedPrograms: ACCProgram[];
  onOpenExport: () => void;
}

export const ExplorationPlanView: React.FC<ExplorationPlanViewProps> = ({
  tasks,
  onUpdateTasks,
  selectedPrograms,
  onOpenExport
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskTimeframe, setNewTaskTimeframe] = useState<'30-day' | '60-day' | '90-day'>('30-day');
  const [newTaskCategory, setNewTaskCategory] = useState<any>('Explore ACC Campus / Lab');

  // Generate initial default tasks if empty
  const initializeDefaultTasks = () => {
    const defaultTasks: ActionPlanTask[] = [
      // 30-Day
      {
        id: 'task-30-1',
        timeframe: '30-day',
        title: 'Schedule a 1-on-1 meeting with an ACC Area of Study Advisor',
        description: 'Verify high school transcript, TSI status exemptions, and check eligibility for ACC Free Tuition.',
        category: 'Explore ACC Campus / Lab',
        status: 'Not Started',
        resourceLink: 'https://students.austincc.edu/academic-advising/'
      },
      {
        id: 'task-30-2',
        timeframe: '30-day',
        title: 'Take a campus tour of the ACC Highland or Round Rock training facilities',
        description: 'Walk through live labs (MakerSpace, Bioscience Incubator, Semiconductor Cleanroom, or Automotive bays).',
        category: 'Explore ACC Campus / Lab',
        status: 'Not Started',
        resourceLink: 'https://www.austincc.edu/admissions/tours'
      },
      // 60-Day
      {
        id: 'task-60-1',
        timeframe: '60-day',
        title: 'Conduct an informational interview with an ACC faculty instructor or alum',
        description: 'Spend 20 minutes asking 3 questions about entry-level daily job tasks, work culture, and local Austin hiring.',
        category: 'Informational Interview',
        status: 'Not Started'
      },
      {
        id: 'task-60-2',
        timeframe: '60-day',
        title: 'Complete an inexpensive hands-on micro-project',
        description: 'Test your leading hypothesis by building a tiny prototype (e.g. web page, 3D CAD sketch, or small electronics breadboard).',
        category: 'Hands-on Micro-Project',
        status: 'Not Started'
      },
      // 90-Day
      {
        id: 'task-90-1',
        timeframe: '90-day',
        title: 'Register for First-Semester exploratory schedule (Core + 1 Intro course)',
        description: 'Lock in 12–15 credit hours ensuring universal Texas Core applicability while testing a leading interest.',
        category: 'Course Enrollment',
        status: 'Not Started',
        resourceLink: 'https://www.austincc.edu/registration'
      },
      {
        id: 'task-90-2',
        timeframe: '90-day',
        title: 'Attend a meeting of an ACC Student Organization (ACM, MakerClub, Enactus)',
        description: 'Connect with second-year ACC students navigating university transfer applications and internships.',
        category: 'Student Organization',
        status: 'Not Started'
      }
    ];

    // Append experiments from selected programs
    for (const p of selectedPrograms) {
      defaultTasks.push({
        id: `task-prog-${p.id}`,
        timeframe: '60-day',
        title: `${p.name}: ${p.lowCostValidationExperiment.title}`,
        description: p.lowCostValidationExperiment.description,
        category: 'Hands-on Micro-Project',
        status: 'Not Started',
        targetProgramId: p.id
      });
    }

    onUpdateTasks(defaultTasks);
  };

  const planTasks = tasks.length > 0 ? tasks : [];

  const handleToggleStatus = (id: string) => {
    const updated = planTasks.map(t => {
      if (t.id === id) {
        return {
          ...t,
          status: (t.status === 'Completed' ? 'Not Started' : 'Completed') as any
        };
      }
      return t;
    });
    onUpdateTasks(updated);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: ActionPlanTask = {
      id: `custom-${Date.now()}`,
      timeframe: newTaskTimeframe,
      title: newTaskTitle.trim(),
      description: 'Custom exploratory action step.',
      category: newTaskCategory,
      status: 'Not Started'
    };
    onUpdateTasks([...planTasks, newTask]);
    setNewTaskTitle('');
  };

  const handleDeleteTask = (id: string) => {
    onUpdateTasks(planTasks.filter(t => t.id !== id));
  };

  const timeframes: { id: '30-day' | '60-day' | '90-day'; label: string; sub: string }[] = [
    { id: '30-day', label: '30-Day Discovery Phase', sub: 'Campus visits, advisor setup, TSI readiness' },
    { id: '60-day', label: '60-Day Hypothesis Testing Phase', sub: 'Informational interviews, micro-projects, student clubs' },
    { id: '90-day', label: '90-Day Semester Launch Phase', sub: 'Course registration, book preparation, transfer planning' }
  ];

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-400/20">
              <CheckSquare className="w-3.5 h-3.5 text-blue-400" />
              <span>Exploration Action Roadmap</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              30 / 60 / 90 Day Exploration Plan
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Convert hypotheses into concrete, low-risk tests. Complete campus lab tours, brief faculty interviews, and low-cost projects before committing to a multi-year major.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {planTasks.length === 0 ? (
              <button
                onClick={initializeDefaultTasks}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors shadow-md cursor-pointer"
              >
                Load Starter Action Plan
              </button>
            ) : (
              <button
                onClick={onOpenExport}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Roadmap</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {planTasks.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xs">
          <FlaskConical className="w-12 h-12 text-blue-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Ready to Build Your Exploration Roadmap?
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Click below to generate a tailored 30-, 60-, and 90-day checklist with low-cost validation experiments and advisor prep tasks.
          </p>
          <button
            onClick={initializeDefaultTasks}
            className="mt-5 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-500/25 transition-all cursor-pointer"
          >
            Generate My Action Plan
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Timeframe Columns */}
          {timeframes.map(tf => {
            const tfTasks = planTasks.filter(t => t.timeframe === tf.id);
            return (
              <div
                key={tf.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4"
              >
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {tf.label}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {tf.sub}
                    </p>
                  </div>
                  <Badge variant="primary" size="sm">
                    {tfTasks.filter(t => t.status === 'Completed').length}/{tfTasks.length} Done
                  </Badge>
                </div>

                <div className="space-y-2.5">
                  {tfTasks.map(task => {
                    const isDone = task.status === 'Completed';
                    return (
                      <div
                        key={task.id}
                        className={`p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 text-xs ${
                          isDone
                            ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50 text-slate-500'
                            : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <button
                            type="button"
                            onClick={() => handleToggleStatus(task.id)}
                            className="mt-0.5 text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform cursor-pointer"
                            aria-label={isDone ? 'Mark as incomplete' : 'Mark as completed'}
                          >
                            {isDone ? (
                              <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <Square className="w-5 h-5 text-slate-400" />
                            )}
                          </button>
                          <div>
                            <div className={`font-bold ${isDone ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                              {task.title}
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                              {task.description}
                            </p>
                            <div className="flex items-center gap-2 mt-1.5">
                              <Badge variant="neutral" size="sm">
                                {task.category}
                              </Badge>
                              {task.resourceLink && (
                                <a
                                  href={task.resourceLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                                >
                                  <span>Resource Link</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteTask(task.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 rounded-md transition-colors cursor-pointer shrink-0"
                          title="Delete task"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Add Custom Task Form */}
          <form
            onSubmit={handleAddTask}
            className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs flex flex-col sm:flex-row items-center gap-3 text-xs"
          >
            <input
              type="text"
              value={newTaskTitle}
              onChange={e => setNewTaskTitle(e.target.value)}
              placeholder="Add your own custom exploration task (e.g. 'Email Professor Smith for syllabus')..."
              className="flex-1 w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            />
            <select
              value={newTaskTimeframe}
              onChange={e => setNewTaskTimeframe(e.target.value as any)}
              className="px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 focus:outline-hidden"
            >
              <option value="30-day">30-Day Phase</option>
              <option value="60-day">60-Day Phase</option>
              <option value="90-day">90-Day Phase</option>
            </select>
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Task</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
