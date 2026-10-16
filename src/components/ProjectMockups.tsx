import React from 'react';

export function BIPipelineMockup() {
  return (
    <div className="w-full h-48 bg-[#091311] relative overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      {/* Top bar mockup */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] text-white/40 ml-2">looker_bi_pipeline.sql</span>
        </div>
        <span className="text-[10px] text-[#83E6B2] font-semibold bg-[#83E6B2]/10 px-2 py-0.5 rounded">
          LIVE KPI
        </span>
      </div>

      {/* KPI Cards row */}
      <div className="grid grid-cols-3 gap-2 my-2">
        <div className="bg-white/5 border border-white/5 p-2 rounded">
          <div className="text-[9px] text-[#A7B6AF]">Revenue</div>
          <div className="text-xs font-bold text-white mt-0.5">$142,500</div>
          <div className="text-[8px] text-emerald-400">↑ +18.4% MoM</div>
        </div>
        <div className="bg-white/5 border border-white/5 p-2 rounded">
          <div className="text-[9px] text-[#A7B6AF]">Orders</div>
          <div className="text-xs font-bold text-white mt-0.5">3,840</div>
          <div className="text-[8px] text-emerald-400">↑ +12.1%</div>
        </div>
        <div className="bg-white/5 border border-white/5 p-2 rounded">
          <div className="text-[9px] text-[#A7B6AF]">Avg Margin</div>
          <div className="text-xs font-bold text-white mt-0.5">28.4%</div>
          <div className="text-[8px] text-teal-300">Target Met</div>
        </div>
      </div>

      {/* Bar Chart mockup */}
      <div className="flex items-end justify-between gap-1.5 h-16 pt-2 border-t border-white/5">
        {[40, 65, 50, 85, 70, 95, 60, 80, 90, 75, 100].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full bg-gradient-to-t from-[#83E6B2]/20 to-[#83E6B2] rounded-t transition-all duration-300 group-hover:from-emerald-500 group-hover:to-teal-300"
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DSSMockup() {
  return (
    <div className="w-full h-48 bg-[#091311] relative overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] text-white/40 ml-2">ahp_matrix_weights.xlsx</span>
        </div>
        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
          CR: 0.042 &lt; 0.10
        </span>
      </div>

      {/* Decision matrix weight comparison */}
      <div className="space-y-2 my-auto">
        {[
          { label: 'Quality Criterion', pct: 85, score: '0.412' },
          { label: 'Cost & Pricing', pct: 65, score: '0.285' },
          { label: 'Delivery Reliability', pct: 50, score: '0.198' },
          { label: 'Supplier Reputation', pct: 35, score: '0.105' },
        ].map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-white/80">{item.label}</span>
              <span className="text-[#83E6B2] font-bold">{item.score}</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-400 to-[#83E6B2] rounded-full transition-all duration-300 group-hover:from-emerald-400 group-hover:to-cyan-300"
                style={{ width: `${item.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RetailAnalyticsMockup() {
  return (
    <div className="w-full h-48 bg-[#091311] relative overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] text-white/40 ml-2">sales_cohort_analysis.sql</span>
        </div>
        <span className="text-[10px] text-teal-300 font-semibold bg-teal-500/10 px-2 py-0.5 rounded">
          PROFIT +32%
        </span>
      </div>

      {/* Simulated Trend Curve */}
      <div className="relative h-24 my-auto flex items-end">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradientRetail" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#83E6B2" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#83E6B2" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 Q40,40 80,50 T160,25 T240,35 T300,10 L300,80 L0,80 Z"
            fill="url(#gradientRetail)"
          />
          <path
            d="M0,60 Q40,40 80,50 T160,25 T240,35 T300,10"
            fill="none"
            stroke="#83E6B2"
            strokeWidth="2.5"
            className="transition-all duration-300 group-hover:stroke-teal-300"
          />
          <circle cx="160" cy="25" r="4" fill="#83E6B2" className="animate-ping opacity-75" />
          <circle cx="160" cy="25" r="3" fill="#83E6B2" />
        </svg>
      </div>

      <div className="flex justify-between text-[9px] text-white/50 border-t border-white/5 pt-1.5">
        <span>Q1: Initial Setup</span>
        <span>Q2: Margin Tuning</span>
        <span>Q3: Peak Volume</span>
        <span className="text-emerald-400 font-bold">Q4: Profit Max</span>
      </div>
    </div>
  );
}

export function ClusteringMockup() {
  return (
    <div className="w-full h-48 bg-[#091311] relative overflow-hidden flex flex-col justify-between p-4 font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] text-white/40 ml-2">kmeans_clustering.py</span>
        </div>
        <span className="text-[10px] text-cyan-300 font-semibold bg-cyan-500/10 px-2 py-0.5 rounded">
          K=3 CLUSTERS
        </span>
      </div>

      {/* Simulated 2D Cluster Scatter Plot */}
      <div className="relative h-24 my-auto bg-white/[0.02] border border-white/5 rounded p-2">
        {/* Cluster 1: Budget Backpacker (Teal) */}
        <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        <div className="absolute top-7 left-10 w-2 h-2 rounded-full bg-teal-400/80" />
        <div className="absolute top-10 left-8 w-2 h-2 rounded-full bg-teal-400/70" />
        <div className="absolute top-5 left-12 w-2 h-2 rounded-full bg-teal-400" />

        {/* Cluster 2: Luxury Travelers (Mint) */}
        <div className="absolute top-3 right-8 w-2.5 h-2.5 rounded-full bg-[#83E6B2] shadow-sm shadow-[#83E6B2]" />
        <div className="absolute top-7 right-14 w-2 h-2 rounded-full bg-[#83E6B2]/80" />
        <div className="absolute top-11 right-10 w-2 h-2 rounded-full bg-[#83E6B2]/70" />
        <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#83E6B2]" />

        {/* Cluster 3: Cultural & Family (Cyan) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300" />
        <div className="absolute bottom-5 left-[42%] w-2 h-2 rounded-full bg-cyan-300/80" />
        <div className="absolute bottom-6 left-[56%] w-2 h-2 rounded-full bg-cyan-300/70" />

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
            Silhouette Score: 0.68
          </span>
        </div>
      </div>

      <div className="flex justify-around text-[9px] text-white/60 pt-1">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" /> Budget
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#83E6B2]" /> Luxury
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" /> Cultural
        </span>
      </div>
    </div>
  );
}
