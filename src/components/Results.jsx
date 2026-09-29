import React, { useState, useEffect, useRef } from 'react';
import { 
  Flame, 
  Eye, 
  Zap, 
  Camera, 
  TrendingUp, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  ArrowRight
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

  // Touch Swipe Handlers for mobile & tablet
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

  // Auto-play timer with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  return (
    <section 
      id="results" 
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Core Focus</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
          What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">Focus On</span>
        </h2>

        <p className="text-base sm:text-xl text-stone-300 font-medium leading-relaxed max-w-2xl mx-auto">
          "{personalInfo.resultsIntro}"
        </p>

        {/* Mobile Swipe Hint */}
        <p className="text-[11px] text-[#00f59b] sm:hidden mt-3 font-mono flex items-center justify-center gap-1.5 opacity-80">
          <span>←</span> Swipe left or right to explore <span>→</span>
        </p>
      </div>

      {/* Top Interactive Capsule Bar: Click any to jump directly */}
      <div className="hidden sm:flex items-center justify-center gap-2 mb-8 flex-wrap">
        {resultsPillars.map((pillar, idx) => {
          const isActive = activeIndex === idx;
          const IconComp = iconMap[pillar.icon] || Sparkles;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-[#00f59b] text-[#04160f] shadow-lg shadow-[#00f59b]/30 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border border-white/10'
              }`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-[#04160f]' : 'text-[#00f59b]'}`} />
              <span>{pillar.title}</span>
            </button>
          );
        })}
      </div>

      {/* The Animated Swipe Carousel Stage */}
      <div className="relative">
        
        {/* Main Swipeable Viewport */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full overflow-hidden rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#06291b]/95 via-[#031d13]/90 to-[#020e09] border border-[#00f59b]/25 shadow-2xl backdrop-blur-xl"
        >
          
          {/* Ambient Glowing Halo in Background */}
          <div 
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <div 
              className="w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 transition-all duration-700"
              style={{
                background: 'radial-gradient(circle, rgba(0, 245, 155, 0.6) 0%, transparent 70%)'
              }}
            />
          </div>

          {/* Sliding Track */}
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {resultsPillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.icon] || Sparkles;
              return (
                <div 
                  key={idx} 
                  className="w-full shrink-0 p-7 sm:p-12 lg:p-16 flex flex-col justify-between relative z-10"
                >
                  
                  {/* Top Bar inside slide: Category badge & Counter */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 sm:mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#00f59b]/25 text-xs text-[#00f59b] font-medium">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{pillar.highlight}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-[#00f59b]">
                        0{idx + 1}
                      </span>
                      <span className="text-stone-500 text-xs font-mono">/ 0{totalSlides}</span>
                    </div>
                  </div>

                  {/* Main Slide Content: 2-Column Responsive Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Giant Stat & Metric Focus */}
                    <div className="lg:col-span-5 flex flex-col items-start">
                      <div className="w-14 h-14 rounded-2xl bg-[#00f59b]/15 border border-[#00f59b]/30 text-[#00f59b] flex items-center justify-center mb-5 shadow-lg shadow-[#00f59b]/10">
                        <IconComponent className="w-7 h-7 stroke-[2.2]" />
                      </div>

                      <div className="font-mono text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#00f59b] mb-2">
                        {pillar.stat}
                      </div>

                      <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#00f59b] font-semibold">
                        {pillar.statLabel}
                      </div>
                    </div>

                    {/* Right Column: Title, Narrative & Impact */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                      <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                        {pillar.title}
                      </h3>

                      <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                        {pillar.desc}
                      </p>

                      {/* Deliverables / Value bullets */}
                      <div className="w-full pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                          <span className="w-2 h-2 rounded-full bg-[#00f59b]" />
                          <span>Purposeful Creative Direction</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                          <span className="w-2 h-2 rounded-full bg-[#00f59b]" />
                          <span>Tested Audience Retention</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Slide Bottom Progress Bar Indicator */}
                  <div className="mt-8 sm:mt-12 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
                    <span className="font-mono">
                      Metric Strategy #{idx + 1}
                    </span>

                    {/* Interactive Dot Track */}
                    <div className="flex items-center gap-1.5">
                      {resultsPillars.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={() => setActiveIndex(dotIdx)}
                          className={`transition-all duration-300 rounded-full cursor-pointer ${
                            activeIndex === dotIdx
                              ? 'w-6 h-2 bg-[#00f59b]'
                              : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                          }`}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    <span className="text-[#00f59b] font-mono hidden sm:inline">
                      100% Proven Impact
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Floating Left Navigation Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#03150e]/90 hover:bg-[#00f59b] text-stone-200 hover:text-[#04160f] border border-[#00f59b]/30 hover:border-[#00f59b] flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
          title="Previous focus point"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Floating Right Navigation Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#03150e]/90 hover:bg-[#00f59b] text-stone-200 hover:text-[#04160f] border border-[#00f59b]/30 hover:border-[#00f59b] flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
          title="Next focus point"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

      </div>

    </section>
  );
}
