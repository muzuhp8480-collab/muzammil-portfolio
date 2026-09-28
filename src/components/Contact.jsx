import React, { useState } from 'react';
import { Mail, Phone, Check, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("muzammilparappallath@gmail.com");
    setCopied(true);
    if (onShowToast) onShowToast("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      <div className="relative rounded-[28px] sm:rounded-[44px] bg-[#062217]/90 border border-[#00f59b]/25 p-6 sm:p-12 lg:p-16 overflow-hidden shadow-2xl backdrop-blur-md text-center">
        
        {/* Glow halo */}
        <div 
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div 
            className="w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(0, 245, 155, 0.5) 0%, transparent 70%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            Let’s Create <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">
              Something
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-stone-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl">
            Have an idea for an AI video, advertisement, brand visual, or social media project? <br className="hidden sm:inline" />
            <strong className="text-white font-semibold">Let’s turn that idea into something people remember.</strong>
          </p>

          {/* Direct Email (Copy on Touch) & Contact Number (Call on Touch) */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
            
            {/* Email - Click/Touch to Copy */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-2 sm:gap-2.5 text-stone-200 hover:text-[#00f59b] transition-colors text-xs sm:text-base lg:text-lg font-normal cursor-pointer focus:outline-none max-w-full"
              title="Click to copy email address"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00f59b]/15 border border-[#00f59b]/25 flex items-center justify-center text-[#00f59b] group-hover:scale-110 transition-transform shrink-0">
                {copied ? <Check className="w-4 h-4 text-[#00f59b]" /> : <Mail className="w-4 h-4" />}
              </div>
              <span className="hover:underline underline-offset-4 break-all sm:break-normal text-left">
                muzammilparappallath@gmail.com
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#00f59b] font-medium px-2 py-0.5 rounded-md bg-[#00f59b]/10 border border-[#00f59b]/20 shrink-0">
                {copied ? 'Copied!' : 'Copy'}
              </span>
            </button>

            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/20" />

            {/* Contact Number - Click/Touch to Call */}
            <a
              href="tel:+918590368480"
              className="group inline-flex items-center gap-2 sm:gap-2.5 text-stone-200 hover:text-[#00f59b] transition-colors text-sm sm:text-base lg:text-lg font-normal cursor-pointer"
              title="Click to call +91 8590368480"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00f59b]/15 border border-[#00f59b]/25 flex items-center justify-center text-[#00f59b] group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hover:underline underline-offset-4 tracking-normal">
                +91 8590368480
              </span>
            </a>

          </div>

          {/* Social Channels: Instagram & LinkedIn */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-white/10 w-full max-w-md">
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-2xl bg-white/5 hover:bg-[#00f59b]/15 border border-white/10 hover:border-[#00f59b]/40 text-stone-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 inline-flex items-center gap-2.5 group"
            >
              <InstagramIcon className="w-4 h-4 text-[#00f59b] group-hover:scale-110 transition-transform" />
              <span>Instagram: <strong className="text-white">muzuai</strong></span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#00f59b] transition-colors" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-2xl bg-white/5 hover:bg-[#00f59b]/15 border border-white/10 hover:border-[#00f59b]/40 text-stone-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 inline-flex items-center gap-2.5 group"
            >
              <LinkedinIcon className="w-4 h-4 text-[#00f59b] group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#00f59b] transition-colors" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
