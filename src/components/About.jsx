import React from 'react';
import { ArrowUpRight, Sparkles, GraduationCap, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ onOpenContact }) {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Container with dark emerald glass styling */}
      <div className="relative rounded-[28px] sm:rounded-[40px] bg-[#062217]/85 border border-[#00f59b]/20 p-6 sm:p-10 lg:p-16 overflow-hidden shadow-2xl">
        
        {/* Ambient Emerald Glow in background */}
        <div 
          className="pointer-events-none absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 245, 155, 0.4) 0%, transparent 70%)'
          }}
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Visual Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border border-[#00f59b]/25 shadow-2xl bg-[#03150e] group">
              <img
                src="/muzammil.jpg"
                alt="Muzammil Portrait"
                className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03170f] via-[#03170f]/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#00f59b] font-bold mb-1">
                  ABOUT ME
                </span>
                <h3 className="text-2xl font-bold tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-stone-300">
                  {personalInfo.role}
                </p>
              </div>
            </div>

            {/* Quick Education / Background Badge */}
            <div className="mt-5 w-full max-w-[340px] flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-[#00f59b]/15 text-stone-300">
              <div className="w-8 h-8 rounded-xl bg-[#00f59b]/15 text-[#00f59b] flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">BCA & Digital Marketing</span>
                <span className="text-stone-400">Technical Logic + Creative Growth</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Little About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Turning Simple Ideas Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">
                Unforgettable AI Content
              </span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
              {personalInfo.bio}
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed mb-6">
              {personalInfo.extendedBio}
            </p>

            {/* Goal Highlight Card */}
            <div className="w-full p-5 sm:p-6 rounded-2xl bg-white/5 border border-[#00f59b]/25 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f59b]/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00f59b] text-[#04160f] flex items-center justify-center font-bold shrink-0 mt-0.5 shadow-md">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#00f59b] mb-1">
                    My Goal Is Simple
                  </h4>
                  <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                    "{personalInfo.goal}"
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#00f59b] text-[#04160f] text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2.5 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Let's Create Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-200 border border-white/15 text-xs sm:text-sm font-medium transition-all inline-flex items-center justify-center"
              >
                Explore Portfolio
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
