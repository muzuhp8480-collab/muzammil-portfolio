import React, { useState } from 'react';
import { Lightbulb, Cpu, Target, BookOpen, CheckCircle2, Sparkles, ArrowUpRight, ArrowRight } from 'lucide-react';
import { whyWorkWithMe, personalInfo } from '../data/portfolioData';

export default function WhyWorkWithMe({ onOpenContact }) {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const iconMap = {
    Lightbulb,
    Cpu,
    Target,
    BookOpen,
    CheckCircle2,
  };

  return (
    <section id="why-work-with-me" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* 2-Column Split: Sticky Philosophy Left + Seamless Editorial Rows Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Fixed / Sticky Header & Value Proposition */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Competitive Edge</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
            Why Work <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">
              With Me
            </span>
          </h2>

          <div className="inline-block px-3 py-1 rounded-lg bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
            AI + Creativity + Marketing
          </div>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            "{personalInfo.philosophy}"
          </p>

          {/* Philosophy Accent Callout */}
          <div className="p-5 rounded-2xl bg-white/5 border border-[#00f59b]/20 mb-8 backdrop-blur-md">
            <p className="text-[11px] text-[#00f59b] uppercase tracking-wider font-mono font-semibold mb-1">
              Creative Philosophy
            </p>
            <p className="text-stone-200 text-sm leading-relaxed">
              I don’t create content just because AI makes it possible. I focus on creating content that has a purpose, tells a story, and gets brands remembered.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#00f59b] text-[#04160f] font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-xl shadow-black/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Let's Create Together</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column: Seamless Editorial Rows (Zero Boxes!) */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-white/10 border-y border-white/10">
          {whyWorkWithMe.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`group py-6 sm:py-7 transition-all duration-300 flex items-start gap-4 sm:gap-6 cursor-pointer ${
                  isHovered ? 'pl-3 sm:pl-5 bg-gradient-to-r from-[#00f59b]/10 via-[#00f59b]/5 to-transparent rounded-2xl' : ''
                }`}
              >
                {/* Monospace Number */}
                <span className={`font-mono text-xl sm:text-2xl font-bold transition-colors shrink-0 mt-0.5 ${
                  isHovered ? 'text-[#00f59b]' : 'text-stone-500 group-hover:text-[#00f59b]'
                }`}>
                  {item.number}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all shrink-0 ${
                      isHovered ? 'bg-[#00f59b] text-[#04160f] scale-110 shadow-md shadow-[#00f59b]/30' : 'bg-white/5 text-[#00f59b]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold transition-colors ${
                      isHovered ? 'text-white' : 'text-stone-200 group-hover:text-white'
                    }`}>
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-xl pl-11">
                    {item.desc}
                  </p>
                </div>

                {/* Trailing arrow indicator */}
                <div className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-full border transition-all shrink-0 mt-1 ${
                  isHovered 
                    ? 'border-[#00f59b] text-[#00f59b] translate-x-1' 
                    : 'border-white/10 text-stone-500 group-hover:border-[#00f59b]/50 group-hover:text-[#00f59b]'
                }`}>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
