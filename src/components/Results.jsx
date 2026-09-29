import React, { useState, useEffect, useRef } from 'react';
import { 
  Flame, 
  Eye, 
  Zap, 
  Camera, 
  TrendingUp, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { resultsPillars, personalInfo } from '../data/portfolioData';

export default function Results() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const iconMap = {
    Flame,
    Eye,
    Zap,
    Camera,
    TrendingUp,
  };

  const totalSlides = resultsPillars.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch Swipe Handlers for mobile & desktop drag
  const minSwipeDistance = 45;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Smooth Auto-advance timer (pauses when user hovers or interacts)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const currentPillar = resultsPillars[activeIndex];
  const CurrentIcon = iconMap[currentPillar.icon] || Sparkles;

  return (
    <section 
      id="results" 
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* 1. Header: Manifesto & Title (Completely Borderless) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Focus & Results</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">Focus On</span>
          </h2>
        </div>

        <p className="text-stone-300 text-sm sm:text-base max-w-md font-normal leading-relaxed">
          "{personalInfo.resultsIntro}"
        </p>
      </div>

      {/* 2. Floating Horizon Timeline (Zero Boxes! Just a glowing line with interactive nodes) */}
      <div className="relative mb-12 sm:mb-16">
        {/* Subtle Horizontal Hairline Rule */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
          {/* Animated Glowing Mint Indicator Beam */}
          <div 
            className="absolute top-0 h-0.5 bg-[#00f59b] shadow-[0_0_15px_#00f59b] transition-all duration-500 ease-out"
            style={{
              left: `${(activeIndex / (totalSlides - 1)) * 80}%`,
              width: '20%'
            }}
          />
        </div>

        {/* 5 Interactive Floating Nodes */}
        <div className="grid grid-cols-5 pt-4 text-center">
          {resultsPillars.map((p, idx) => {
            const isActive = activeIndex === idx;
            const Icon = iconMap[p.icon] || Sparkles;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none transition-all"
              >
                {/* Node Pip */}
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#00f59b] ring-4 ring-[#00f59b]/20 scale-125 shadow-md shadow-[#00f59b]' 
                    : 'bg-white/30 group-hover:bg-white/60'
                }`} />

                {/* Node Label */}
                <span className={`font-mono text-[11px] sm:text-xs font-bold transition-colors ${
                  isActive ? 'text-[#00f59b]' : 'text-stone-500 group-hover:text-stone-300'
                }`}>
                  0{idx + 1}
                </span>

                <span className={`text-xs font-medium hidden sm:inline transition-colors ${
                  isActive ? 'text-white' : 'text-stone-400 group-hover:text-stone-200'
                }`}>
                  {p.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. The 100% Borderless, Cardless Swipe Stage */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full cursor-grab active:cursor-grabbing select-none py-4 sm:py-8"
      >
        
        {/* Soft Ambient Radial Light in the Background (Zero Border!) */}
        <div 
          className="pointer-events-none absolute -top-10 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(0, 245, 155, 0.7) 0%, rgba(16, 185, 129, 0.2) 40%, transparent 70%)'
          }}
          aria-hidden="true"
        />

        {/* Sliding Stream Track (Each slide is borderless typography + giant glowing stats) */}
        <div 
          className="flex transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {resultsPillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;
            const isCurrent = activeIndex === idx;

            return (
              <div
                key={idx}
                className="w-full shrink-0 px-2 sm:px-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  
                  {/* Left Column: Massive Floating Kinetic Stat (NO BOX!) */}
                  <div className="lg:col-span-6 flex flex-col items-start">
                    
                    {/* Floating Pill Tag with Pulsing Light */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#00f59b]/15 border border-[#00f59b]/30 flex items-center justify-center text-[#00f59b]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs uppercase font-mono tracking-wider text-[#00f59b] font-bold">
                        {pillar.highlight}
                      </span>
                    </div>

                    {/* Massive Kinetic Stat Numerals */}
                    <div className="font-mono text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-stone-100 to-[#00f59b]/90 my-2">
                      {pillar.stat}
                    </div>

                    {/* Metric Subtitle */}
                    <div className="font-mono text-sm sm:text-base uppercase tracking-widest text-[#00f59b] font-semibold mt-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-ping" />
                      <span>{pillar.statLabel}</span>
                    </div>
                  </div>

                  {/* Right Column: Floating Narrative, Title & Impact (NO BOX!) */}
                  <div className="lg:col-span-6 flex flex-col items-start text-left">
                    <span className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-2 font-bold">
                      Focus Pillar 0{idx + 1} of 0{totalSlides}
                    </span>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                      {pillar.title}
                    </h3>

                    <p className="text-stone-300 text-base sm:text-xl leading-relaxed mb-6 font-normal">
                      {pillar.desc}
                    </p>

                    {/* Value Props & Execution Guarantees */}
                    <div className="pt-6 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b]" />
                        <span>High-Converting Video Architecture</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b]" />
                        <span>Audience Attention & Recall</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 4. Bottom Fluid Swipe Navigation (Minimalist borderless controls) */}
      <div className="pt-10 sm:pt-14 border-t border-white/10 flex items-center justify-between">
        
        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="group inline-flex items-center gap-2.5 text-stone-400 hover:text-white transition-colors text-xs sm:text-sm font-semibold cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#00f59b] text-stone-400 group-hover:text-[#04160f] border border-white/10 group-hover:border-[#00f59b] flex items-center justify-center transition-all">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <span className="hidden sm:inline">Previous Focus</span>
        </button>

        {/* Center Progress Counter & Swipe Gesture Hint */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 mb-1">
            {resultsPillars.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === i
                    ? 'w-6 h-1.5 bg-[#00f59b]'
                    : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Jump to slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-mono text-stone-500">
            Swipe or use arrows to navigate
          </span>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="group inline-flex items-center gap-2.5 text-stone-400 hover:text-white transition-colors text-xs sm:text-sm font-semibold cursor-pointer focus:outline-none"
        >
          <span className="hidden sm:inline">Next Focus</span>
          <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#00f59b] text-stone-400 group-hover:text-[#04160f] border border-white/10 group-hover:border-[#00f59b] flex items-center justify-center transition-all">
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </button>

      </div>

    </section>
  );
}
