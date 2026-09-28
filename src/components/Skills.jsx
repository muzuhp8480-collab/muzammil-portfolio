import React, { useState } from 'react';
import { Sparkles, Video, Target, Cpu, Check } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const iconMap = {
    Sparkles: Sparkles,
    Video: Video,
    Target: Target,
    Cpu: Cpu,
  };

  const categories = ['All', ...skillsCategories.map(c => c.category)];

  const displayedCategories = activeCategory === 'All'
    ? skillsCategories
    : skillsCategories.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech & Creative Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            What I Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">With</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-xl">
            A battle-tested blend of state-of-the-art AI generators, post-production suites, and performance marketing workflows.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 bg-[#062217]/80 p-1.5 rounded-2xl border border-[#00f59b]/20 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#00f59b] text-[#04160f] font-bold shadow-md shadow-[#00f59b]/25'
                  : 'text-stone-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedCategories.map((group, idx) => {
          const IconComp = iconMap[group.icon] || Sparkles;
          return (
            <div
              key={idx}
              className="rounded-3xl bg-[#062217]/75 border border-[#00f59b]/15 p-6 sm:p-7 flex flex-col justify-between hover:border-[#00f59b]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg backdrop-blur-md"
            >
              <div>
                {/* Header of category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#00f59b]/15 border border-[#00f59b]/25 text-[#00f59b] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-[#00f59b] border border-[#00f59b]/15">
                    {group.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#00f59b] transition-colors">
                  {group.category}
                </h3>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#00f59b]/15 border border-white/10 hover:border-[#00f59b]/40 text-xs font-medium text-stone-200 hover:text-white transition-all inline-flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-stone-400 flex items-center justify-between">
                <span>{group.skills.length} Capabilities</span>
                <span className="text-[#00f59b] font-mono">100% Mastered</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
