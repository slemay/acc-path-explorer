import React from 'react';
import { ShieldAlert, BookOpen, ExternalLink, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenGovernance: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGovernance }) => {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-300 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Mandatory Product Purpose & Disclaimers */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Independent Exploration Disclosures</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>ACC Path Explorer</strong> is an independent, private decision-support tool created for student exploration. It is <strong>not affiliated with, maintained by, or endorsed by Austin Community College</strong>, O*NET, the U.S. Department of Labor, or any destination university.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Recommendations are treated as <strong>hypotheses to test</strong>, not diagnostic verdicts or career guarantees. Program requirements, tuition policies, course availability, and transfer articulation agreements are subject to change by respective institutions.
            </p>
          </div>

          {/* Column 2: Data Sources & Catalog Verification */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Verified Sources & Verification Policy</span>
            </div>
            <ul className="text-xs text-slate-400 space-y-1.5">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>ACC Academic Catalog (2026–2027)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Texas General Education Core Curriculum (42 SCH)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>O*NET Occupational Profiler v28 / US DOL</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Texas Workforce Commission (Austin-Round Rock MSA)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>UT Austin, Texas State & Texas A&M Transfer Guides</span>
              </li>
            </ul>
            <div>
              <button
                onClick={onOpenGovernance}
                className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium cursor-pointer transition-colors"
              >
                <span>Open Data Governance & Source Verification Audit</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Column 3: Advising & Privacy Guarantees */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Local Privacy & Academic Advising</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>100% Local Privacy:</strong> All assessment answers and saved action plans are stored strictly in your browser’s local storage. No data is sent to external advertising trackers or third-party servers.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Always schedule an appointment with an <strong>ACC Area of Study Advisor</strong> or <strong>Transfer Services Specialist</strong> to finalize semester course registration, verify TSI liability, and confirm degree plan applicability.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              Last Verified Catalog Cycle: <strong>2026–2027</strong>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          ACC Path Explorer • Open Decision Support • Austin Community College Student Exploration
        </div>
      </div>
    </footer>
  );
};
