import React, { useState } from 'react';
import { Flame, Eye, Zap, Camera, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { resultsPillars, personalInfo } from '../data/portfolioData';

export default function Results() {
  const [activeIdx, setActiveIdx] = useState(null);

  const iconMap = {
    Flame,
    Eye,
    Zap,
    Camera,
    TrendingUp,
  };

  const workflowSteps = [
    { step: "01", name: "Visual Hook", desc: "Instant 3-sec capture" },
    { step: "02", name: "Story & Emotion", desc: "Human connection" },
    { step: "03", name: "Cinema 4K Polish", desc: "Studio-grade diffusion" },
    { step: "04", name: "Growth & Recall", desc: "Measurable brand impact" },
  ];

  return (
    <section id="results" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header with Large Editorial Manifesto */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Focus & Impact</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
          What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">Focus On</span>
        </h2>

        <p className="text-lg sm:text-2xl text-stone-200 font-medium leading-relaxed max-w-2xl mx-auto">
          "{personalInfo.resultsIntro}"
        </p>
      </div>

      {/* 5-Column Metric Horizon (Zero Box Cards!) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-y border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {resultsPillars.map((pillar, idx) => {
          const Icon = iconMap[pillar.icon] || Sparkles;
          const isHovered = activeIdx === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              className={`p-6 sm:p-7 lg:p-6 xl:p-8 flex flex-col justify-between transition-all duration-300 relative cursor-default group overflow-hidden ${
                isHovered ? 'bg-gradient-to-b from-[#00f59b]/15 via-[#00f59b]/5 to-transparent' : 'hover:bg-white/[0.02]'
              } ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Subtle top indicator bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                isHovered ? 'bg-[#00f59b]' : 'bg-transparent'
              }`} />

              <div>
                {/* Top Row: Index & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className={`font-mono text-xs font-bold transition-colors ${
                    isHovered ? 'text-[#00f59b]' : 'text-stone-500 group-hover:text-[#00f59b]'
                  }`}>
                    0{idx + 1}
                  </span>

                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    isHovered 
                      ? 'bg-[#00f59b] text-[#04160f] scale-110 shadow-md shadow-[#00f59b]/30' 
                      : 'bg-[#00f59b]/15 text-[#00f59b] group-hover:bg-[#00f59b]/25'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Giant Typographic Stat */}
                <div className="mb-4">
                  <div className="font-mono text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#00f59b] transition-transform duration-300 group-hover:scale-105 origin-left">
                    {pillar.stat}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#00f59b] font-mono font-semibold mt-1">
                    {pillar.statLabel}
                  </div>
                </div>

                {/* Pillar Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00f59b] transition-colors">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Highlight Tag */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-300 group-hover:text-[#00f59b] transition-colors inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b]" />
                  {pillar.highlight}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Production Formula Strip: How It All Connects */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#00f59b] flex items-center gap-2 mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Execution Standard</span>
          </span>
          <p className="text-stone-300 text-sm">
            Every project follows a tested visual framework built for maximum retention and brand recall.
          </p>
        </div>

        {/* 4-Step Pipeline Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {workflowSteps.map((ws, wIdx) => (
            <div
              key={wIdx}
              className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10px] text-[#00f59b] font-bold">{ws.step}</span>
                {wIdx < 3 && <ArrowRight className="w-3 h-3 text-stone-600 hidden sm:inline" />}
              </div>
              <span className="text-xs font-bold text-white">{ws.name}</span>
              <span className="text-[10px] text-stone-400 font-mono mt-0.5">{ws.desc}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
