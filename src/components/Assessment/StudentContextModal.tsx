import React from 'react';
import { Modal } from '@/components/UI/Modal';
import { StudentContext } from '@/types';
import { UserCheck, Sparkles, AlertCircle } from 'lucide-react';

interface StudentContextModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: StudentContext;
  onSaveContext: (updated: StudentContext) => void;
}

export const StudentContextModal: React.FC<StudentContextModalProps> = ({
  isOpen,
  onClose,
  context,
  onSaveContext
}) => {
  const [formData, setFormData] = React.useState<StudentContext>(context);

  React.useEffect(() => {
    setFormData(context);
  }, [context]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveContext(formData);
    onClose();
  };

  const campuses = [
    'Highland',
    'Rio Grande',
    'Round Rock',
    'Riverside',
    'Northridge',
    'Eastview',
    'Hays',
    'Cypress Creek',
    'San Gabriel',
    'Elgin',
    'South Austin'
  ];

  const handleCampusToggle = (campus: string) => {
    const current = formData.campusPreferences || [];
    if (current.includes(campus)) {
      setFormData({
        ...formData,
        campusPreferences: current.filter(c => c !== campus)
      });
    } else {
      setFormData({
        ...formData,
        campusPreferences: [...current, campus]
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Student Profile & Exploration Context"
      subtitle="Private local profile to customize first-semester course planning and tuition eligibility"
      maxWidth="2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Privacy Note */}
        <div className="p-3 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-xl text-xs text-blue-900 dark:text-blue-200 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <span>
            No sensitive information required. We do not ask for your legal name, student ID number, date of birth, or Social Security number. All settings remain 100% on your device.
          </span>
        </div>

        {/* High School Grad Year */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
            High School Graduation Year / Status
          </label>
          <select
            value={formData.highSchoolGradYear}
            onChange={e => setFormData({ ...formData, highSchoolGradYear: e.target.value })}
            className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
          >
            <option value="2026">Class of 2026 (Recent High School Graduate)</option>
            <option value="2025">Class of 2025</option>
            <option value="2024">Class of 2024</option>
            <option value="Earlier / GED">Prior High School Graduate or GED</option>
          </select>
        </div>

        {/* ACC Free Tuition Status */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
            ACC Free Tuition Pilot Program Eligibility
          </label>
          <select
            value={formData.freeTuitionEligible}
            onChange={e => setFormData({ ...formData, freeTuitionEligible: e.target.value as any })}
            className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
          >
            <option value="Yes (Class of 2024/2025/2026 In-District)">Yes — In-District High School Graduate (2024, 2025, or 2026)</option>
            <option value="No">No — Standard In-District or Out-of-District Tuition</option>
            <option value="Not Sure">Not Sure — Need to check residence district with ACC Admissions</option>
          </select>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            Covers in-district tuition for eligible recent high school graduates. Does not cover textbook purchases, lab equipment, or living expenses.
          </p>
        </div>

        {/* Math Comfort & Readiness */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
            Math Background & Readiness Level
          </label>
          <select
            value={formData.mathComfortLevel}
            onChange={e => setFormData({ ...formData, mathComfortLevel: e.target.value as any })}
            className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
          >
            <option value="Algebra-comfortable">Algebra Comfortable (Ready for College Algebra / Statistics / Applied Math)</option>
            <option value="Calculus-ready">Calculus Ready (Completed Precalculus; ready for Calculus I for STEM / CS)</option>
            <option value="Prefer Minimal Math">Prefer Minimal Math (Prefer Contemporary Quantitative Reasoning for Humanities)</option>
            <option value="Need Math Refresher">Need Math Refresher (Want corequisite developmental refresher support)</option>
          </select>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            Helps the course planner recommend the appropriate Texas Core math sequence.
          </p>
        </div>

        {/* Primary Educational Goal */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
            Initial Goal at Austin Community College
          </label>
          <select
            value={formData.primaryGoal}
            onChange={e => setFormData({ ...formData, primaryGoal: e.target.value as any })}
            className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
          >
            <option value="Explore 1-2 classes before deciding">Explore 1–2 introductory courses before committing to a major</option>
            <option value="Transfer to 4-year university for Bachelor degree">Transfer to a 4-year Texas University (UT Austin, Texas State, Texas A&M, etc.)</option>
            <option value="Earn 2-year workforce credential and start working">Earn an Associate of Applied Science (AAS) or Certificate to enter workforce quickly</option>
            <option value="Learn a specific hands-on trade">Learn a hands-on skilled trade or technical craft</option>
          </select>
        </div>

        {/* Weekly Credit Hours Availability */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
            Planned Weekly Enrollment Pace
          </label>
          <select
            value={formData.weeklyHoursAvailable}
            onChange={e => setFormData({ ...formData, weeklyHoursAvailable: e.target.value as any })}
            className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
          >
            <option value="Full-Time (12+ credits)">Full-Time (12–15 credit hours / ~4 courses per semester)</option>
            <option value="Part-Time (6-9 credits)">Part-Time (6–9 credit hours / 2–3 courses)</option>
            <option value="Single Course (3 credits)">Single Exploratory Course (3–4 credit hours)</option>
          </select>
        </div>

        {/* Campus Preferences */}
        <div>
          <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-2">
            Preferred ACC Campus Locations (Select all that you can commute to)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {campuses.map(campus => {
              const isSelected = (formData.campusPreferences || []).includes(campus);
              return (
                <button
                  type="button"
                  key={campus}
                  onClick={() => handleCampusToggle(campus)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {campus}
                </button>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm shadow-blue-500/20 cursor-pointer"
          >
            Save Profile Settings
          </button>
        </div>
      </form>
    </Modal>
  );
};
