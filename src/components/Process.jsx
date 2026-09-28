import React from 'react';
import { workflow } from '../data/portfolioData';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Process() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faede6] border border-[#f4d8cc] text-[#cf6d4e] text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Execution Workflow</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
          From Concept To <span className="font-editorial-italic font-normal text-[#cf6d4e]">Cinema</span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2">
          A disciplined, four-phase creative pipeline ensuring cinematic excellence and commercial performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workflow.map((item, index) => (
          <div
            key={index}
            className="relative rounded-3xl bg-[#fdfaf7] border border-stone-200/80 p-6 sm:p-8 flex flex-col justify-between group hover:border-[#cf6d4e]/40 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
          >
            <div>
              <span className="font-editorial-italic text-3xl font-normal text-stone-300 group-hover:text-[#cf6d4e] transition-colors">
                {item.step}
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
            
            <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 font-medium">
              <span>Phase {index + 1}</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#cf6d4e] group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
