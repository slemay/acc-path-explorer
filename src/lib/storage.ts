import { UserResponses, StudentContext, ActionPlanTask } from '@/types';

const STORAGE_KEY = 'acc_path_explorer_data_v1';
const ACTION_PLAN_KEY = 'acc_path_explorer_action_plan_v1';
const SELECTED_PATHS_KEY = 'acc_path_explorer_selected_paths_v1';

export const DEFAULT_STUDENT_CONTEXT: StudentContext = {
  highSchoolGradYear: '2026',
  isAccUndecided: true,
  freeTuitionEligible: 'Yes (Class of 2024/2025/2026 In-District)',
  weeklyHoursAvailable: 'Full-Time (12+ credits)',
  mathComfortLevel: 'Algebra-comfortable',
  primaryGoal: 'Explore 1-2 classes before deciding',
  campusPreferences: ['Highland', 'Rio Grande', 'Round Rock']
};

export const DEFAULT_USER_RESPONSES: UserResponses = {
  studentContext: DEFAULT_STUDENT_CONTEXT,
  moduleA: {},
  moduleB: {},
  moduleC: {},
  moduleD: {},
  moduleE: {},
  completedModules: [],
  assessmentMode: 'quick',
  lastUpdated: new Date().toISOString()
};

export function loadUserResponses(): UserResponses {
  if (typeof window === 'undefined') return DEFAULT_USER_RESPONSES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_USER_RESPONSES;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_USER_RESPONSES,
      ...parsed,
      studentContext: {
        ...DEFAULT_STUDENT_CONTEXT,
        ...(parsed.studentContext || {})
      }
    };
  } catch (e) {
    console.error('Error loading responses from localStorage:', e);
    return DEFAULT_USER_RESPONSES;
  }
}

export function saveUserResponses(responses: UserResponses): void {
  if (typeof window === 'undefined') return;
  try {
    const updated = {
      ...responses,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving responses to localStorage:', e);
  }
}

export function eraseAllLocalData(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(ACTION_PLAN_KEY);
    localStorage.removeItem(SELECTED_PATHS_KEY);
  } catch (e) {
    console.error('Error erasing local data:', e);
  }
}

export function loadSelectedPaths(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(SELECTED_PATHS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveSelectedPaths(pathIds: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SELECTED_PATHS_KEY, JSON.stringify(pathIds));
  } catch (e) {
    console.error('Error saving selected paths:', e);
  }
}

export function loadActionPlan(): ActionPlanTask[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(ACTION_PLAN_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveActionPlan(tasks: ActionPlanTask[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ACTION_PLAN_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Error saving action plan:', e);
  }
}

export function exportAllDataAsJSON(): string {
  const responses = loadUserResponses();
  const selectedPaths = loadSelectedPaths();
  const actionPlan = loadActionPlan();
  return JSON.stringify(
    {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      responses,
      selectedPaths,
      actionPlan
    },
    null,
    2
  );
}
