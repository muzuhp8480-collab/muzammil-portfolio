import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Sparkles, Send, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function BookCallModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    topic: 'Cinematic AI Video Consultation',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      if (onShowToast) onShowToast('Please fill in your name and email.');
      return;
    }

    setIsSubmitted(true);
    if (onShowToast) onShowToast('Strategy call requested! Muzammil will confirm your slot shortly.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#020e09]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#062217] border border-[#00f59b]/30 rounded-3xl shadow-2xl shadow-[#00f59b]/20 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#00f59b]/20 bg-[#041910]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#00f59b]/20 text-[#00f59b] flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Book a Free Strategy Call</h3>
              <p className="text-[11px] text-stone-300">15-min 1-on-1 AI Creative Discovery</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#00f59b]/20 border border-[#00f59b]/30 text-[#00f59b] flex items-center justify-center mb-4">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Strategy Call Scheduled!</h4>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xs mb-6">
                Thank you, {formData.name}. Muzammil will review the slot and send a Google Meet link to <strong className="text-white">{formData.email}</strong>.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-white text-[#04160f] font-bold text-xs hover:bg-[#00f59b] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#00f59b]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rahul@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#00f59b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#04170f] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00f59b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                    Preferred Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#04170f] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00f59b]"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2 PM - 5 PM)</option>
                    <option value="Evening (6:00 PM - 9:00 PM)">Evening (6 PM - 9 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  Consultation Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#04170f] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00f59b]"
                >
                  <option value="Cinematic AI Video Consultation">Cinematic AI Video Project</option>
                  <option value="AI Advertisement Campaign">AI Brand Advertisement</option>
                  <option value="Character Consistency Pipeline">Character Consistency & Series</option>
                  <option value="Social Media Reels Strategy">Viral Social Media Reels</option>
                  <option value="General AI Creative Direction">General Creative Direction & Workflow</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  Brief Project Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any reference links, ideas, or timeline constraints..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-[#00f59b] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-white hover:bg-[#00f59b] text-[#04160f] font-bold text-sm shadow-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Confirm Call Request</span>
                <Sparkles className="w-4 h-4 text-[#04160f]" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
