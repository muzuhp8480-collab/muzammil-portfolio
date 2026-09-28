import React, { useEffect, useRef } from 'react';
import { X, Play, ExternalLink, CheckCircle2, Wrench, Video } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#020e09]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#062217] border border-[#00f59b]/25 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#00f59b]/20 bg-[#041910]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#00f59b]/20 text-[#00f59b] border border-[#00f59b]/30">
              {project.category}
            </span>
            <span className="text-xs text-stone-300 font-medium hidden sm:inline">
              Client: {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Main Video or Visual Preview */}
          <div className={`relative rounded-2xl overflow-hidden bg-[#03150e] shadow-2xl border border-[#00f59b]/20 flex items-center justify-center ${
            project.aspect === 'portrait' ? 'aspect-[9/16] max-h-[560px] max-w-[320px] mx-auto' : 'aspect-video w-full'
          }`}>
            {project.video ? (
              <video
                ref={videoRef}
                src={project.video}
                controls
                autoPlay
                playsInline
                poster={project.poster}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062217] via-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-[#00f59b] text-xs font-medium w-fit mb-2 border border-[#00f59b]/30">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Visual Showcase • {project.views}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Title and views */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <span className="text-xs font-mono text-[#00f59b] bg-[#00f59b]/10 px-3 py-1 rounded-full border border-[#00f59b]/20 w-fit">
              {project.views}
            </span>
          </div>

          {/* Tagline / Overview */}
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {project.desc}
          </p>

          {/* Key Deliverables / Highlights */}
          {project.features && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#00f59b]">
                Key Creative Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00f59b] mt-0.5 shrink-0" />
                    <span className="text-xs text-stone-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools Used */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#00f59b]" />
              <span>AI Stack & Production Software</span>
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-[#a7f3d0] border border-[#00f59b]/20 font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-[#041910] border-t border-[#00f59b]/20 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-stone-300 font-medium">
            Have a project in mind? Let's discuss creative direction.
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-[#00f59b] text-[#04160f] font-bold text-xs shadow-md transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Discuss This Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
