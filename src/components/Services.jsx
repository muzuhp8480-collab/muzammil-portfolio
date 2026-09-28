import React from 'react';
import { 
  Sparkles, 
  Video, 
  Terminal, 
  Share2, 
  Layout, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2 
} from 'lucide-react';
import { services } from '../data/portfolioData';

export default function Services({ onOpenContact }) {
  const iconMap = {
    Sparkles: Sparkles,
    Video: Video,
    Terminal: Terminal,
    Share2: Share2,
    Layout: Layout,
    TrendingUp: TrendingUp,
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Services</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">Do</span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
          Creative AI-powered visuals, cinematic motion, prompt engineering, and digital marketing built to make brands stand out.
        </p>
      </div>

      {/* Services Grid (6 services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon] || Sparkles;
          return (
            <div
              key={service.id}
              className="relative rounded-3xl bg-[#062217]/70 hover:bg-[#083021]/90 border border-[#00f59b]/15 hover:border-[#00f59b]/50 p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl hover:shadow-[0_10px_30px_-10px_rgba(0,245,155,0.2)] backdrop-blur-md"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-stone-500 group-hover:text-[#00f59b] transition-colors">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#00f59b]/15 border border-[#00f59b]/25 text-[#00f59b] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-md bg-white/5 text-[#00f59b] text-[10px] font-semibold tracking-wider uppercase mb-2">
                  {service.tag}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-[#00f59b] transition-colors">
                  {service.title}
                </h3>

                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00f59b] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-semibold text-stone-300 group-hover:text-[#00f59b] transition-colors cursor-pointer"
              >
                <span>Request this service</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#00f59b]" />
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
