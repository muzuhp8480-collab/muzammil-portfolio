import React from 'react';
import { ArrowUpRight, MessageSquare, ArrowRight } from 'lucide-react';
import { personalInfo, heroPillars } from '../data/portfolioData';

export default function Hero({ onOpenContact, onExploreWork }) {
  const handlePillarClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[96vh] sm:min-h-screen w-full bg-[#03170f] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 overflow-hidden select-none"
    >
      {/* 1. Deep Atmospheric Emerald Glow and Lighting expanding edge-to-edge */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Giant Wide Ambient Emerald Dome spanning across full viewport */}
        <div 
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[140vw] max-w-[2400px] h-[750px] lg:h-[950px] rounded-[100%] blur-[120px] sm:blur-[160px] opacity-70 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(0, 245, 155, 0.35) 0%, rgba(16, 185, 129, 0.22) 35%, rgba(4, 38, 24, 0.08) 65%, transparent 85%)'
          }}
        />

        {/* Left Side Light Fill so the left side never feels cut off */}
        <div 
          className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full blur-[140px] opacity-45 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 245, 155, 0.28) 0%, rgba(4, 38, 24, 0.1) 60%, transparent 80%)'
          }}
        />

        {/* Right Side Light Fill so the right side never feels cut off */}
        <div 
          className="absolute top-1/4 -right-32 w-[550px] h-[550px] rounded-full blur-[140px] opacity-45 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 245, 155, 0.28) 0%, rgba(4, 38, 24, 0.1) 60%, transparent 80%)'
          }}
        />
      </div>

      {/* 2. Full-bleed Edge-to-Edge Hero Central Subject & Backdrop for Desktop / Large Displays */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 w-full h-full overflow-hidden hidden lg:flex items-end justify-center"
        aria-hidden="true"
      >
        <img
          src="/muzammil-emerald-hero.jpg"
          alt="Muzammil — AI Content Creator"
          className="w-full h-full object-cover object-bottom sm:object-[center_bottom] filter contrast-[1.03] brightness-[1.01] opacity-95 pointer-events-none"
          loading="eager"
        />
        {/* Subtle bottom fade gradient so bottom pillars stay 100% readable */}
        <div className="absolute inset-x-0 bottom-0 h-40 sm:h-52 bg-gradient-to-t from-[#03170f] via-[#03170f]/75 to-transparent pointer-events-none" />
      </div>

      {/* 3. Main Hero Interactive Content Layer */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-auto pt-6 sm:pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 items-center">
          
          {/* Left Column: "Hey, I'm AI Content Creator" + Emerald Swoosh */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            <span className="text-stone-300 text-base sm:text-xl font-normal tracking-wide mb-1 sm:mb-2">
              Hey, I’m
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-bold text-white tracking-tight leading-[1.08] sm:leading-[1.06] mb-1">
              AI Content <br className="hidden sm:inline" />
              <span className="relative inline-block text-white">
                Creator
                {/* Reference signature emerald green curved brush swoosh */}
                <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full flex">
                  <svg 
                    viewBox="0 0 280 20" 
                    fill="none" 
                    className="w-full h-3.5 sm:h-5 text-[#00f59b]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M3 11C42 4 125 3 277 10C205 16 105 17 3 11Z" 
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Mobile / Tablet Badge */}
            <div className="mt-4 sm:mt-6 mb-2 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#06291b]/90 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-ping" />
              <span>Available for Collaborations</span>
            </div>

            {/* Mobile & Tablet Dedicated Portrait Card */}
            <div className="lg:hidden w-full max-w-[260px] sm:max-w-[300px] aspect-[4/5] mx-auto my-5 relative rounded-3xl overflow-hidden border border-[#00f59b]/30 shadow-2xl bg-[#03150e]">
              <img
                src="/muzammil-hero-mobile.jpg"
                alt="Muzammil — AI Content Creator"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03170f] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-full bg-[#03140e]/85 backdrop-blur-md border border-[#00f59b]/30 text-xs text-[#00f59b] font-medium shadow-md">
                <span>Muzammil</span>
                <span className="text-stone-300 font-normal">AI Creator</span>
              </div>
            </div>
          </div>

          {/* Center Column Spacer for Desktop */}
          <div className="hidden lg:block lg:col-span-2 min-h-[320px] pointer-events-none" />

          {/* Right Column: "We turn attention into action." + Copy + Buttons */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right z-20">
            <div className="max-w-md flex flex-col items-center lg:items-end">
              <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight leading-snug mb-3">
                {personalInfo.heroSubtitle}
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
                {personalInfo.tagline}
              </p>

              {/* Action Buttons: [ View My Work ] & [ Contact Me ] with full-width mobile support */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href={personalInfo.driveWorkLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-[#04160f] hover:bg-[#00f59b] hover:text-[#04160f] font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-xl shadow-black/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#06281b]/80 hover:bg-[#0c442e] text-white border border-[#00f59b]/30 hover:border-[#00f59b] font-medium text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
                >
                  <span>Contact Me</span>
                  <MessageSquare className="w-3.5 h-3.5 text-[#00f59b]" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Bottom Numbered Pillars matching reference (#01, #02, #03, #04) spanning full width */}
      <div className="relative z-20 w-full border-t border-[#00f59b]/15 pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {heroPillars.map((pillar) => (
              <div
                key={pillar.number}
                onClick={() => handlePillarClick(pillar.section)}
                className="group cursor-pointer flex flex-col items-start transition-transform hover:-translate-y-0.5"
              >
                <span className="font-bold text-sm sm:text-base text-[#00f59b] tracking-wider mb-1 font-mono">
                  {pillar.number}
                </span>
                <span className="text-white text-xs sm:text-sm font-semibold tracking-tight group-hover:text-[#00f59b] transition-colors">
                  {pillar.title}
                </span>
                <span className="text-stone-400 text-[11px] sm:text-xs hidden sm:inline-block">
                  {pillar.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
