import React, { useRef, useState } from 'react';
import { ArrowUpRight, Film, Eye, Maximize2, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';

// Individual Video Card with Video Player Interface
function VideoCard({ project, onSelectProject }) {
  const videoRef = useRef(null);

  return (
    <div className="group rounded-3xl bg-[#062217]/80 border border-[#00f59b]/20 hover:border-[#00f59b]/50 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-[0_12px_35px_-10px_rgba(0,245,155,0.25)] backdrop-blur-md">
      
      {/* Video Player Box with Native Controls & Poster */}
      <div className="relative w-full bg-[#020e09] overflow-hidden aspect-[9/16] max-h-[520px]">
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#03140e]/85 backdrop-blur-md text-[#00f59b] border border-[#00f59b]/30">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#03140e]/85 backdrop-blur-md text-stone-200 border border-white/10 flex items-center gap-1 font-mono">
            <Eye className="w-3 h-3 text-[#00f59b]" />
            <span>{project.views}</span>
          </span>
        </div>

        {/* Quick Expand Button */}
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          title="Theater Mode / Details"
          className="absolute bottom-14 right-3 p-2 rounded-xl bg-[#03140e]/80 hover:bg-[#00f59b] text-stone-300 hover:text-[#03140e] border border-white/15 transition-all z-10 cursor-pointer opacity-0 group-hover:opacity-100"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Content Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00f59b] transition-colors leading-snug mb-2">
            {project.title}
          </h3>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4">
            {project.desc}
          </p>

          {/* Tools Used */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tools.map((tool, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] text-[#a7f3d0] border border-[#00f59b]/15 font-mono"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer with Theater View Trigger */}
        <div 
          onClick={() => onSelectProject(project)}
          className="pt-3.5 pb-1 border-t border-white/10 flex items-center justify-between text-xs text-stone-300 group-hover:text-white transition-colors cursor-pointer min-h-[44px]"
        >
          <span className="text-[#00f59b] font-medium">View Project Details & Specs</span>
          <ArrowUpRight className="w-4 h-4 text-[#00f59b] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

    </div>
  );
}

export default function Projects({ onSelectProject }) {
  // Commercial & Ads projects
  const commercialProjects = projects.filter(p => p.category === 'Commercial & Ads');
  // Narrative & Reels projects
  const reelProjects = projects.filter(p => p.category !== 'Commercial & Ads');

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] text-xs font-semibold mb-3">
          <Film className="w-3.5 h-3.5" />
          <span>Featured Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Things I’ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a7f3d0] to-[#00f59b]">Created</span>
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-2">
          Story-driven cinematic AI advertisements, commercial brand campaigns, and viral short-form reels with direct video playback.
        </p>
      </div>

      {/* 1. Commercial & Ads (Features ABBA Perfume Commercial & Kingsland) */}
      <div className="mb-14 sm:mb-18">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs uppercase font-bold tracking-widest text-[#00f59b] flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial & Ads</span>
          </span>
          <div className="flex-1 h-px bg-[#00f59b]/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
          {commercialProjects.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>

      {/* 2. Narrative & Social Media Reels */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs uppercase font-bold tracking-widest text-[#00f59b]">
            Narrative & Social Media Reels
          </span>
          <div className="flex-1 h-px bg-[#00f59b]/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reelProjects.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
