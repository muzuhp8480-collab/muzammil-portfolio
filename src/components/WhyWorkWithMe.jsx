import React from 'react';
import { Lightbulb, Cpu, Target, BookOpen, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import { whyWorkWithMe, personalInfo } from '../data/portfolioData';

export default function WhyWorkWithMe({ onOpenContact }) {
  const iconMap = {
    Lightbulb: Lightbulb,
    Cpu: Cpu,
    Target: Target,
    BookOpen: BookOpen,
    CheckCircle2: CheckCircle2,
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="relative rounded-[28px] sm:rounded-[40px] bg-[#062217]/85 border border-[#00f59b]/20 p-6 sm:p-10 lg:p-16 overflow-hidden shadow-2xl backdrop-blur-md">
        
        {/* Glow ambient background */}
        <div 
          className="pointer-events-none absolute -bottom-10 right-10 w-[450px] h-[450px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 245, 155, 0.45) 0%, transparent 70%)'
          }}
          aria-hidden="true"
        />

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Competitive Edge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
            Why Work With Me
          </h2>

          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b] mb-4">
            AI + Creativity + Marketing
          </h3>

          <p className="text-base sm:text-lg text-stone-200 font-medium leading-relaxed">
            "{personalInfo.philosophy}"
          </p>
        </div>

        {/* 5 Points Horizontal / Grid Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {whyWorkWithMe.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl bg-[#082e20]/60 hover:bg-[#0b3d2b]/80 border border-[#00f59b]/15 hover:border-[#00f59b]/40 transition-all duration-300 group flex flex-col justify-between shadow-lg ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-stone-500 group-hover:text-[#00f59b] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#00f59b]/15 text-[#00f59b] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#00f59b] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-stone-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with CTA */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Ready to create content that people remember?
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm">
              Let's combine creative vision with cutting-edge AI production.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#00f59b] text-[#04160f] font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
