import React, { useState } from 'react';
import { Sparkles, Video, Target, Cpu, CheckCircle2, Layers, Zap } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCol, setActiveCol] = useState(null);

  const iconMap = {
    Sparkles: Sparkles,
    Video: Video,
    Target: Target,
    Cpu: Cpu,
  };

  const marqueeTools = [
    { name: "Kling AI", category: "Motion Diffusion" },
    { name: "Seedance", category: "AI Video" },
    { name: "ChatGPT", category: "Prompt Logic" },
    { name: "Claude", category: "Creative Direction" },
    { name: "Nano Banana", category: "Commercial AI" },
    { name: "OmniFlash", category: "Consistency Engine" },
    { name: "CapCut", category: "Dynamic Editing" },
    { name: "Meta Ads", category: "Performance Growth" },
    { name: "Canva", category: "Brand Graphics" },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech & Creative Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            What I Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">With</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed">
            A battle-tested blend of state-of-the-art AI generators, post-production suites, and performance marketing workflows.
          </p>
        </div>

        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#00f59b]/20 text-xs text-stone-300 w-fit">
          <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-pulse" />
          <span>Full Stack AI Production Workflow</span>
        </div>
      </div>

      {/* 4 Architectural Seamless Columns (Zero Box Cards!) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {skillsCategories.map((group, idx) => {
          const IconComp = iconMap[group.icon] || Sparkles;
          const isHovered = activeCol === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setActiveCol(idx)}
              onMouseLeave={() => setActiveCol(null)}
              className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group cursor-default relative overflow-hidden ${
                isHovered ? 'bg-gradient-to-b from-[#00f59b]/10 via-[#00f59b]/5 to-transparent' : 'hover:bg-white/[0.02]'
              }`}
            >
              <div>
                {/* Column Top: Number & Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-mono text-sm font-bold transition-colors ${
                    isHovered ? 'text-[#00f59b]' : 'text-stone-500 group-hover:text-[#00f59b]'
                  }`}>
                    0{idx + 1}
                  </span>

                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-[#00f59b] border border-[#00f59b]/20">
                    {group.badge}
                  </span>
                </div>

                {/* Column Title with Glowing Icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    isHovered 
                      ? 'bg-[#00f59b] text-[#04160f] scale-110 shadow-md shadow-[#00f59b]/30' 
                      : 'bg-[#00f59b]/15 text-[#00f59b] group-hover:bg-[#00f59b]/25'
                  }`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>

                {/* Skills Line Stream (No little box chips!) */}
                <ul className="space-y-3 pt-2">
                  {group.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="group/item flex items-center gap-3 text-stone-300 hover:text-white transition-colors cursor-default text-xs sm:text-sm font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b]/50 group-hover/item:bg-[#00f59b] group-hover/item:scale-125 transition-all shrink-0" />
                      <span className="group-hover/item:translate-x-0.5 transition-transform">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column Footer Indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-stone-400 flex items-center justify-between">
                <span>{group.skills.length} Capabilities</span>
                <span className="text-[#00f59b] font-mono font-medium">100% Mastered</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Endless Live Tech Stack Marquee Strip */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] uppercase tracking-widest font-mono font-semibold text-stone-400 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-[#00f59b]" />
            <span>AI Stack & Generation Engines</span>
          </span>
          <span className="text-[11px] text-[#00f59b] font-mono hidden sm:inline">
            Active Production Environment
          </span>
        </div>

        {/* Marquee Track with Fade Masks */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Left / Right Fade Gradients */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#04140e] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#04140e] to-transparent z-10" />

          {/* Marquee items repeated twice for infinite loop */}
          <div className="animate-marquee gap-4 flex items-center">
            {[...marqueeTools, ...marqueeTools].map((tool, tIdx) => (
              <div
                key={tIdx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 hover:bg-[#00f59b]/15 border border-white/10 hover:border-[#00f59b]/40 transition-all cursor-default shrink-0 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b] group-hover:scale-125 transition-transform" />
                <span className="text-xs font-bold text-white group-hover:text-[#00f59b] transition-colors">
                  {tool.name}
                </span>
                <span className="text-[10px] text-stone-400 font-mono">
                  / {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
