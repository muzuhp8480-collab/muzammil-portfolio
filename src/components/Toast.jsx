import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#062419] text-white shadow-2xl border border-[#00f59b]/30 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <CheckCircle2 className="w-4 h-4 text-[#00f59b] shrink-0" />
      <span className="text-xs font-medium text-stone-200">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-stone-400 hover:text-white transition-colors cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
