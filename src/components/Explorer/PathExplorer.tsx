import React, { useState, useMemo } from 'react';
import { ACCProgram, ACCAreaOfStudy, AwardType, ProgramIntent } from '@/types';
import { ACC_PROGRAMS } from '@/data/accPrograms';
import { ProgramCard } from './ProgramCard';
import { Search, Filter, X, Sparkles, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/UI/Badge';

interface PathExplorerProps {
  onSelectProgram: (program: ACCProgram) => void;
  onAddToCompare: (programId: string) => void;
  isProgramInCompare: (programId: string) => boolean;
  onPlanWithProgram: (program: ACCProgram) => void;
  fitScoresMap?: Record<string, number>;
}

export const PathExplorer: React.FC<PathExplorerProps> = ({
  onSelectProgram,
  onAddToCompare,
  isProgramInCompare,
  onPlanWithProgram,
  fitScoresMap = {}
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const [selectedAward, setSelectedAward] = useState<string>('All');
  const [selectedIntent, setSelectedIntent] = useState<string>('All');
  const [selectedHandsOn, setSelectedHandsOn] = useState<string>('All');
  const [selectedMathIntensity, setSelectedMathIntensity] = useState<string>('All');
  const [selectedSetting, setSelectedSetting] = useState<string>('All');
  const [selectiveOnly, setSelectiveOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'fit' | 'name' | 'duration'>('fit');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const areas: ACCAreaOfStudy[] = [
    'Applied Technologies & Trades',
    'Arts, Digital Media & Communications',
    'Business',
    'Culinary, Hospitality & Tourism',
    'Design, Manufacturing & Construction',
    'Education',
    'Health Sciences',
    'Information Technology',
    'Liberal Arts (Humanities & Social Sciences)',
    'Public & Social Services',
    'Science, Engineering & Math'
  ];

  const filteredPrograms = useMemo(() => {
    return ACC_PROGRAMS.filter(prog => {
      // Search text filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = prog.name.toLowerCase().includes(q);
        const matchesArea = prog.areaOfStudy.toLowerCase().includes(q);
        const matchesOccupations = prog.relatedOccupations.some(o => o.title.toLowerCase().includes(q) || o.socCode.includes(q));
        const matchesCourses = prog.relatedAccCourses.some(c => c.courseCode.toLowerCase().includes(q) || c.courseTitle.toLowerCase().includes(q));
        if (!matchesName && !matchesArea && !matchesOccupations && !matchesCourses) {
          return false;
        }
      }

      // Area filter
      if (selectedArea !== 'All' && prog.areaOfStudy !== selectedArea) return false;

      // Award Type filter
      if (selectedAward !== 'All') {
        if (selectedAward === 'Certificate' && !prog.awardType.includes('Certificate')) return false;
        if (selectedAward === 'AAS' && prog.awardType !== 'Associate of Applied Science (AAS)') return false;
        if (selectedAward === 'Transfer_AA_AS' && !['Associate of Arts (AA)', 'Associate of Science (AS)', 'Associate of Arts in Teaching (AAT)'].includes(prog.awardType)) return false;
        if (selectedAward === 'Bachelor' && !prog.awardType.includes('Bachelor')) return false;
      }

      // Intent filter
      if (selectedIntent !== 'All' && !prog.intent.includes(selectedIntent)) return false;

      // Hands-on level
      if (selectedHandsOn !== 'All' && prog.workContext.handsOnLevel !== selectedHandsOn) return false;

      // Math/Science Intensity
      if (selectedMathIntensity !== 'All' && prog.workContext.mathScienceIntensity !== selectedMathIntensity) return false;

      // Work setting
      if (selectedSetting !== 'All' && !prog.workContext.workSetting.includes(selectedSetting as any)) return false;

      // Selective admission
      if (selectiveOnly && !prog.selectiveAdmission) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'fit') {
        const scoreA = fitScoresMap[a.id] || 0;
        const scoreB = fitScoresMap[b.id] || 0;
        return scoreB - scoreA;
      }
      if (sortBy === 'duration') {
        return a.publishedDurationMonths - b.publishedDurationMonths;
      }
      return a.name.localeCompare(b.name);
    });
  }, [
    searchQuery,
    selectedArea,
    selectedAward,
    selectedIntent,
    selectedHandsOn,
    selectedMathIntensity,
    selectedSetting,
    selectiveOnly,
    sortBy,
    fitScoresMap
  ]);

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedArea !== 'All' ||
    selectedAward !== 'All' ||
    selectedIntent !== 'All' ||
    selectedHandsOn !== 'All' ||
    selectedMathIntensity !== 'All' ||
    selectedSetting !== 'All' ||
    selectiveOnly;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedArea('All');
    setSelectedAward('All');
    setSelectedIntent('All');
    setSelectedHandsOn('All');
    setSelectedMathIntensity('All');
    setSelectedSetting('All');
    setSelectiveOnly(false);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Search and Top Filters Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, degree, course code (e.g. 'ENGR', 'Welding', 'Cybersecurity', '1301')..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector & Filter Toggle */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-hidden"
              >
                <option value="fit">Fit Score Match</option>
                <option value="name">Alphabetical (A-Z)</option>
                <option value="duration">Fastest Duration</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1 cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Filter Dropdowns Bar */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 ${showMobileFilters ? 'block' : 'hidden md:grid'}`}>
          {/* Area of Study */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">
              Area of Study
            </label>
            <select
              value={selectedArea}
              onChange={e => setSelectedArea(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden"
            >
              <option value="All">All 11 Areas of Study</option>
              {areas.map(a => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          {/* Credential / Award Type */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">
              Credential Level
            </label>
            <select
              value={selectedAward}
              onChange={e => setSelectedAward(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden"
            >
              <option value="All">All Award Types</option>
              <option value="Certificate">Certificate (Level 1 / 2)</option>
              <option value="AAS">Associate of Applied Science (AAS)</option>
              <option value="Transfer_AA_AS">University Transfer (AA / AS / AAT)</option>
              <option value="Bachelor">Bachelor Degree (BAT / BSN)</option>
            </select>
          </div>

          {/* Hands-On Level */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">
              Hands-on Tools Intensity
            </label>
            <select
              value={selectedHandsOn}
              onChange={e => setSelectedHandsOn(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden"
            >
              <option value="All">Any Hands-On Level</option>
              <option value="High">High (Direct physical tools & equipment)</option>
              <option value="Medium">Medium (Lab & equipment mix)</option>
              <option value="Low">Low (Digital / screen problem solving)</option>
            </select>
          </div>

          {/* Math/Science Intensity */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">
              Math / Science Intensity
            </label>
            <select
              value={selectedMathIntensity}
              onChange={e => setSelectedMathIntensity(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden"
            >
              <option value="All">Any Math Intensity</option>
              <option value="Low">Low (Contemporary / Non-STEM Math)</option>
              <option value="Medium">Medium (College Algebra / Statistics)</option>
              <option value="Very High">Very High (Calculus / University Physics)</option>
            </select>
          </div>
        </div>

        {/* Active Filters and Clear Button */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-slate-500 font-semibold">Active Filters:</span>
              {selectedArea !== 'All' && <Badge variant="primary" size="sm">{selectedArea}</Badge>}
              {selectedAward !== 'All' && <Badge variant="neutral" size="sm">{selectedAward}</Badge>}
              {selectedHandsOn !== 'All' && <Badge variant="neutral" size="sm">Hands-on: {selectedHandsOn}</Badge>}
              {selectedMathIntensity !== 'All' && <Badge variant="neutral" size="sm">Math: {selectedMathIntensity}</Badge>}
            </div>
            <button
              onClick={handleResetFilters}
              className="text-rose-600 dark:text-rose-400 font-semibold hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>
          Showing <strong>{filteredPrograms.length}</strong> of <strong>{ACC_PROGRAMS.length}</strong> official ACC programs
        </span>
        <span>Verified 2026–2027 ACC Catalog</span>
      </div>

      {/* Programs Grid */}
      {filteredPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPrograms.map(prog => (
            <ProgramCard
              key={prog.id}
              program={prog}
              fitScore={fitScoresMap[prog.id]}
              onSelect={() => onSelectProgram(prog)}
              onAddToCompare={() => onAddToCompare(prog.id)}
              isInCompare={isProgramInCompare(prog.id)}
              onPlan={() => onPlanWithProgram(prog)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
          <Filter className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            No matching programs found
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
            Try adjusting your search keywords or clearing some of the filter constraints.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};
