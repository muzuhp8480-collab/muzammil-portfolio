import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#020e09] border-t border-[#00f59b]/15 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {personalInfo.name}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#00f59b] inline-block" />
          </div>
          <p className="text-xs text-stone-400 max-w-sm">
            {personalInfo.role} — Turning ideas into cinematic AI videos, engaging visuals, and digital content that helps brands get noticed.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-300">
          <a href="#home" className="hover:text-[#00f59b] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#00f59b] transition-colors">About</a>
          <a href="#services" className="hover:text-[#00f59b] transition-colors">Services</a>
          <a href="#skills" className="hover:text-[#00f59b] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#00f59b] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#00f59b] transition-colors">Contact</a>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00f59b]/15 text-stone-400 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00f59b]/15 text-stone-400 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#00f59b]/15 text-stone-400 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#00f59b] hover:bg-[#00e599] text-[#04160f] flex items-center justify-center transition-transform hover:scale-110 shadow-lg cursor-pointer ml-2"
            title="Back to Top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>

      {/* Copyright line */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-3">
        <div>
          © {new Date().getFullYear()} Muzammil. All rights reserved.
        </div>
        <div className="flex items-center gap-1 text-stone-400">
          <span>AI Content Creator & Digital Marketer</span>
        </div>
      </div>
    </footer>
  );
}
