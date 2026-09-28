import React from 'react';
import { stats } from '../data/portfolioData';

export default function Stats() {
  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-[#f7f2ed]/80 border border-stone-200/60 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4 py-2 border-r last:border-r-0 border-stone-200/60"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight font-editorial">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-stone-700 mt-1">
              {stat.label}
            </span>
            <span className="text-[11px] text-[#cf6d4e] font-medium mt-0.5">
              {stat.change}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
