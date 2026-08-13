import React from 'react';
import { RIASECDimension } from '@/types';

interface RiasecChartProps {
  scores: Record<RIASECDimension, number>;
  primaryCode: string;
}

export const RiasecChart: React.FC<RiasecChartProps> = ({ scores, primaryCode }) => {
  const dimensions: { name: RIASECDimension; code: string; color: string; desc: string }[] = [
    { name: 'Realistic', code: 'R', color: 'bg-amber-500 text-amber-950', desc: 'Building, mechanical, physical trades, hands-on tools' },
    { name: 'Investigative', code: 'I', color: 'bg-blue-500 text-blue-950', desc: 'Scientific inquiry, analytical research, coding, math' },
    { name: 'Artistic', code: 'A', color: 'bg-purple-500 text-purple-950', desc: 'Creative media, visual design, digital arts, storytelling' },
    { name: 'Social', code: 'S', color: 'bg-emerald-500 text-emerald-950', desc: 'Helping, teaching, counseling, healthcare, community service' },
    { name: 'Enterprising', code: 'E', color: 'bg-orange-500 text-orange-950', desc: 'Leadership, business development, entrepreneurship, sales' },
    { name: 'Conventional', code: 'C', color: 'bg-slate-500 text-slate-950', desc: 'Data organization, accounting, compliance, structured systems' }
  ];

  // SVG Radar Polygon Coordinates (Center: 150, 150; Radius: 100)
  const cx = 150;
  const cy = 150;
  const maxRadius = 95;

  const points = dimensions.map((dim, idx) => {
    const angle = (idx * 60 - 90) * (Math.PI / 180);
    const value = (scores[dim.name] || 0) / 100;
    const r = value * maxRadius;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const gridLevels = [0.25, 0.5, 0.75, 1.0];

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* SVG Radar Chart */}
        <div className="relative w-72 h-72 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 300 300" className="w-full h-full" aria-label="RIASEC Holland Code Radar Diagram">
            {/* Background Cones & Grids */}
            {gridLevels.map((lvl, lIdx) => {
              const gridPoints = dimensions.map((_, idx) => {
                const angle = (idx * 60 - 90) * (Math.PI / 180);
                const r = lvl * maxRadius;
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);
                return `${x.toFixed(1)},${y.toFixed(1)}`;
              }).join(' ');
              return (
                <polygon
                  key={lIdx}
                  points={gridPoints}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-slate-200 dark:text-slate-800"
                />
              );
            })}

            {/* Axis Spoke Lines */}
            {dimensions.map((_, idx) => {
              const angle = (idx * 60 - 90) * (Math.PI / 180);
              const x = cx + maxRadius * Math.cos(angle);
              const y = cy + maxRadius * Math.sin(angle);
              return (
                <line
                  key={idx}
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-slate-200 dark:text-slate-800"
                />
              );
            })}

            {/* Data Polygon Fill & Stroke */}
            <polygon
              points={points}
              fill="rgba(59, 130, 246, 0.25)"
              stroke="#2563eb"
              strokeWidth="2.5"
              className="transition-all duration-500"
            />

            {/* Axis Labels */}
            {dimensions.map((dim, idx) => {
              const angle = (idx * 60 - 90) * (Math.PI / 180);
              const labelRadius = maxRadius + 22;
              const lx = cx + labelRadius * Math.cos(angle);
              const ly = cy + labelRadius * Math.sin(angle);
              return (
                <text
                  key={dim.code}
                  x={lx}
                  y={ly + 4}
                  textAnchor="middle"
                  className="text-[11px] font-bold fill-slate-700 dark:fill-slate-200"
                >
                  {dim.code} ({scores[dim.name] || 0}%)
                </text>
              );
            })}
          </svg>
        </div>

        {/* Tabular Bar Breakdown (Accessible for Screen Readers & Clarity) */}
        <div className="w-full flex-1 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                Primary Holland Profile
              </span>
              <div className="text-xl font-black text-blue-600 dark:text-blue-400">
                Code: {primaryCode || '---'}
              </div>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Scale: 0–100%
            </span>
          </div>

          <div className="space-y-2.5">
            {dimensions.map(dim => {
              const val = scores[dim.name] || 0;
              return (
                <div key={dim.name} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-800 dark:text-slate-200">
                      {dim.name} ({dim.code})
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {val}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${val}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {dim.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
