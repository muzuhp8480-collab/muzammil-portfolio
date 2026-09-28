import React from 'react';
import { Star, MessageSquareQuote, Sparkles } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Social Proof</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">Say</span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
          Feedback from brand partners, creative collaborators, and industry mentors.
        </p>
      </div>

      {/* Testimonials 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="relative rounded-3xl bg-[#062217]/75 border border-[#00f59b]/15 hover:border-[#00f59b]/40 p-8 sm:p-9 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl backdrop-blur-md"
          >
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-[#00f59b]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <MessageSquareQuote className="w-6 h-6 text-[#00f59b]/40 group-hover:text-[#00f59b] transition-colors" />
              </div>

              {/* Exact Quote from Prompt */}
              <blockquote className="text-base sm:text-lg text-stone-200 font-medium leading-relaxed mb-6 italic">
                “{item.quote}”
              </blockquote>
            </div>

            {/* Author Footer */}
            <div className="pt-5 border-t border-white/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00f59b] to-[#10b981] text-[#04160f] font-bold flex items-center justify-center text-sm shadow-md">
                {item.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#00f59b] transition-colors">
                  {item.author}
                </h4>
                <p className="text-xs text-stone-400">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
