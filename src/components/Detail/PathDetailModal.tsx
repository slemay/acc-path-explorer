import React from 'react';
import { ACCProgram } from '@/types';
import { Modal } from '@/components/UI/Modal';
import { Badge } from '@/components/UI/Badge';
import { getSourceById } from '@/data/sourceManifest';
import {
  Clock,
  DollarSign,
  GraduationCap,
  Sparkles,
  FlaskConical,
  ExternalLink,
  ShieldCheck,
  Building,
  CheckCircle2,
  AlertTriangle,
  FileText,
  MapPin,
  TrendingUp,
  Briefcase
} from 'lucide-react';

interface PathDetailModalProps {
  program: ACCProgram | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCompare: (programId: string) => void;
  isInCompare: boolean;
  onPlan: (program: ACCProgram) => void;
}

export const PathDetailModal: React.FC<PathDetailModalProps> = ({
  program,
  isOpen,
  onClose,
  onAddToCompare,
  isInCompare,
  onPlan
}) => {
  if (!program) return null;

  const primaryOccupation = program.relatedOccupations[0];
  const exploratoryCourse = program.relatedAccCourses.find(c => c.isFirstSemesterExploratory);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={program.name}
      subtitle={`${program.areaOfStudy} • ${program.awardType} • ${program.intent}`}
      maxWidth="4xl"
    >
      <div className="space-y-8">
        {/* Verification Status Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              ACC Catalog Verification:
            </span>
            <Badge variant="success" size="sm">
              {program.verificationStatus} (2026–2027)
            </Badge>
          </div>
          <div className="text-slate-500">
            Last Verified: {program.lastVerifiedDate}
          </div>
        </div>

        {/* Overview Stat Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
            <div className="text-[11px] text-slate-500 uppercase font-semibold">Duration</div>
            <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
              ~{program.publishedDurationMonths} Months
            </div>
            <div className="text-[10px] text-slate-400">{program.totalCredits} Credit Hours</div>
          </div>

          <div className="p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
            <div className="text-[11px] text-slate-500 uppercase font-semibold">Estimated Tuition</div>
            <div className="text-base font-bold text-blue-600 dark:text-blue-400 mt-0.5">
              {program.estimatedTuitionInDistrict.split(' ')[0]}
            </div>
            <div className="text-[10px] text-slate-400">In-District Baseline</div>
          </div>

          <div className="p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
            <div className="text-[11px] text-slate-500 uppercase font-semibold">Austin Median Wage</div>
            <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
              {primaryOccupation?.medianWageAustin.split(' ')[0] || 'N/A'}
            </div>
            <div className="text-[10px] text-slate-400">TWC LMCI (Austin MSA)</div>
          </div>

          <div className="p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
            <div className="text-[11px] text-slate-500 uppercase font-semibold">Regional Growth</div>
            <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
              {primaryOccupation?.growthRateAustin.split(' ')[0] || 'Steady'}
            </div>
            <div className="text-[10px] text-slate-400">5-Year Outlook</div>
          </div>
        </div>

        {/* Free Tuition & Additional Costs Breakdown */}
        <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-200">
            <DollarSign className="w-4 h-4 text-blue-600" />
            <span>ACC Free Tuition & Out-of-Pocket Estimates</span>
          </div>
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Tuition Category:</strong> {program.tuitionCategory}.
          </div>
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Tools, Textbooks & Fees Note:</strong> {program.additionalCostsNotes}
          </div>
        </div>

        {/* Work Context & Daily Environment */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
            Work Setting & Daily Dynamics
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
              <span className="text-slate-500 block">Hands-On Level</span>
              <strong className="text-slate-900 dark:text-white">{program.workContext.handsOnLevel}</strong>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
              <span className="text-slate-500 block">Math & Science Load</span>
              <strong className="text-slate-900 dark:text-white">{program.workContext.mathScienceIntensity}</strong>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
              <span className="text-slate-500 block">Social Interaction</span>
              <strong className="text-slate-900 dark:text-white">{program.workContext.peopleInteraction}</strong>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
              <span className="text-slate-500 block">Physical Demand</span>
              <strong className="text-slate-900 dark:text-white">{program.workContext.physicalDemand}</strong>
            </div>
          </div>
          <div className="mt-2 text-xs text-slate-600 dark:text-slate-400">
            Work Environments: <strong>{program.workContext.workSetting.join(', ')}</strong> • Workflow Pace: <strong>{program.workContext.paceOfChange}</strong>
          </div>
        </div>

        {/* Coursework & Exploratory Course Highlight */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
            Coursework & 1st-Semester Exploratory Course
          </h4>
          <div className="space-y-2.5">
            {program.relatedAccCourses.map((c, cIdx) => (
              <div
                key={cIdx}
                className={`p-3.5 rounded-xl border text-xs ${
                  c.isFirstSemesterExploratory
                    ? 'border-blue-300 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/30'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <strong className="font-bold text-slate-900 dark:text-white">
                      {c.courseCode}: {c.courseTitle}
                    </strong>
                    <span className="text-slate-500">({c.creditHours} cr)</span>
                  </div>
                  {c.isFirstSemesterExploratory && (
                    <Badge variant="primary" size="sm">
                      Recommended 1st-Term Intro Test
                    </Badge>
                  )}
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* University Transfer Matrix */}
        {program.transferPathways.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Texas University Transfer Pathways & Applicability
            </h4>
            <div className="space-y-3">
              {program.transferPathways.map((tp, tIdx) => (
                <div
                  key={tIdx}
                  className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl text-xs space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-bold text-sm text-slate-900 dark:text-white">
                      {tp.university} — {tp.degreeName}
                    </div>
                    <Badge variant="info" size="sm">
                      {tp.articulationType}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Core Satisfied: {tp.coreSatisfied ? 'Yes (42 SCH)' : 'Partial'}
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      General Credit: {tp.generalCreditAccepted ? 'Accepted' : 'Review Required'}
                    </span>
                  </div>
                  <div className="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>Major Applicability & Caveats:</strong> {tp.majorApplicabilityNotes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Low-Cost Validation Experiment Callout */}
        <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-200">
            <FlaskConical className="w-4 h-4 text-emerald-600" />
            <span>Recommended Low-Cost Validation Experiment: {program.lowCostValidationExperiment.title}</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {program.lowCostValidationExperiment.description}
          </p>
          <div className="flex items-center gap-4 font-semibold text-slate-600 dark:text-slate-400">
            <span>Time: ~{program.lowCostValidationExperiment.estimatedTimeHours} hours</span>
            <span>Cost: {program.lowCostValidationExperiment.costEstimate}</span>
            <span>Format: {program.lowCostValidationExperiment.type}</span>
          </div>
        </div>

        {/* Source Citations */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 space-y-1">
          <div className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Authoritative Sources Consulted
          </div>
          <ul className="list-disc list-inside space-y-1">
            {program.sourceIds.map(sid => {
              const src = getSourceById(sid);
              return src ? (
                <li key={sid}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>{src.title} ({src.organization}, {src.academicYear})</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ) : null;
            })}
          </ul>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <a
            href={program.programMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span>Open Official ACC Program Map in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onAddToCompare(program.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${
                isInCompare
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-200'
              }`}
            >
              {isInCompare ? 'In Comparison Table' : '+ Add to Compare'}
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onPlan(program);
              }}
              className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              Build 1st-Semester Schedule Plan →
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
