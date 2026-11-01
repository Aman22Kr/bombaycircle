import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useApp();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 bg-stone-900 text-stone-100 px-5 py-3 rounded-xl shadow-2xl border border-stone-700/60 pointer-events-auto">
        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
        <span className="text-sm font-medium">{toast}</span>
      </div>
    </div>
  );
};
