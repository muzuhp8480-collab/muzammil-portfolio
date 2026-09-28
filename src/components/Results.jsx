import React from 'react';
import { Flame, Eye, Zap, Camera, TrendingUp, Sparkles } from 'lucide-react';
import { resultsPillars, personalInfo } from '../data/portfolioData';

export default function Results() {
  const iconMap = {
    Flame: Flame,
    Eye: Eye,
    Zap: Zap,
    Camera: Camera,
    TrendingUp: TrendingUp,
  };

  return (
    <section id="results" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Container Card */}
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#062217]/85 border border-[#00f59b]/20 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl backdrop-blur-md">
        
        {/* Glow ambient background */}
        <div 
          className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 245, 155, 0.4) 0%, transparent 70%)'
          }}
          aria-hidden="true"
        />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Focus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">Focus On</span>
          </h2>

          <p className="text-lg sm:text-xl text-stone-200 font-medium leading-relaxed">
            "{personalInfo.resultsIntro}"
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resultsPillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl bg-[#082d1f]/70 border border-[#00f59b]/15 p-7 hover:border-[#00f59b]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#00f59b]/15 border border-[#00f59b]/25 text-[#00f59b] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00f59b] bg-white/5 px-2.5 py-1 rounded-full border border-[#00f59b]/15">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00f59b] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-stone-300 text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Stat Metric */}
                <div className="pt-4 border-t border-white/10 flex items-baseline justify-between">
                  <span className="text-xs text-stone-400">{pillar.statLabel}</span>
                  <span className="text-2xl font-bold font-mono text-white group-hover:text-[#00f59b] transition-colors">
                    {pillar.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
