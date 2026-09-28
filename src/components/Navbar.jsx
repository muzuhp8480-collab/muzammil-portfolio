import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'skills', 'projects', 'results', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-4 sm:px-8 pt-4 sm:pt-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Brand: Modern clean sans-serif matching reference "Aniviox" style */}
        <a
          href="#home"
          className="pointer-events-auto flex items-center gap-1.5 group focus:outline-none"
          aria-label="Muzammil Portfolio"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#00f59b] transition-colors">
            {personalInfo.name}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b] inline-block mb-1" />
        </a>

        {/* Center / Right Nav Links */}
        <nav
          className={`pointer-events-auto hidden md:flex items-center gap-1 sm:gap-2 px-5 py-2 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#04160f]/90 backdrop-blur-xl border border-[#00f59b]/20 shadow-2xl shadow-black/80'
              : 'bg-[#062419]/60 backdrop-blur-md border border-white/10'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold bg-[#00f59b]/15 text-[#00f59b] shadow-xs'
                    : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button: Exact Pill Button matching reference "Get in touch" with green arrow */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenContact}
            className="group flex items-center gap-2 pl-3.5 sm:pl-5 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-full bg-white text-[#04160f] font-bold text-xs sm:text-sm shadow-lg shadow-black/40 hover:bg-[#d1fae5] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get in touch</span>
            <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#00f59b] text-[#04160f] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.5]" />
            </span>
          </button>

          {/* Mobile Menu Button with comfortable touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[40px] min-h-[40px] p-2 rounded-full text-stone-200 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#00f59b]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-3 mx-auto w-full max-w-sm bg-[#062419]/95 backdrop-blur-2xl border border-[#00f59b]/25 rounded-3xl p-5 shadow-2xl flex flex-col gap-3 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00f59b]">
              NAVIGATION
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-full text-stone-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-stone-200 hover:text-white hover:bg-[#00f59b]/10 transition-all flex items-center justify-between active:scale-[0.98]"
              >
                <span>{item.name}</span>
                <span className="text-[#00f59b]">→</span>
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-2 py-3 rounded-full bg-white text-[#04160f] text-xs font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-[#00f59b] transition-all cursor-pointer active:scale-95"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
}
