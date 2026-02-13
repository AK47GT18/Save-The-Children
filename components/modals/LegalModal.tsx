import React from 'react';
import { ShieldCheck, CheckCircle as Success } from 'lucide-react';
import Button from '../ui/Button';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'audit' | null;
  onClose: () => void;
}

const LegalModal = ({ type, onClose }: LegalModalProps) => {
  if (!type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      text: "At Stand for Children, we are committed to protecting your privacy. We collect minimal data necessary to process donations and provide impact updates. Your data is encrypted and never sold to third parties. We comply with all global data protection regulations to ensure your generous support remains your business."
    },
    terms: {
      title: "Terms of Service",
      text: "By using our platform, you agree to our terms of transparent giving. All donations are processed securely through certified partners. Stand for Children is a registered 501(c)(3) non-profit. Donations are tax-deductible to the extent permitted by law."
    },
    audit: {
      title: "2025 Audit Report",
      text: "Our 2025 financial audit confirms a 92% efficiency rating. For every MK1,000 donated, MK920 goes directly to field programs. Administration accounts for 5%, and fundraising for 3%. We maintain 'Platinum Transparency' status on GuideStar and are audited annually by independent firms."
    }
  }[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="bg-white rounded-[2rem] w-full max-w-lg max-h-[75vh] overflow-hidden relative z-10 shadow-3xl transform transition-all animate-in fade-in zoom-in duration-300 flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-8 pb-0 flex justify-between items-start">
          <div className="max-w-xs">
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-[10px] mb-1 block">Legal Document</span>
            <h2 className="text-2xl font-bold text-brand-dark mb-2 font-serif tracking-tight">{content.title}</h2>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 hover:text-secondary hover:bg-white transition-all"
          >
            <span className="font-serif text-xl">×</span>
          </button>
        </div>
        
        {/* Body Section with Scrolling */}
        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4 custom-scrollbar">
          <p className="text-brand-dark/60 text-[11px] leading-relaxed mb-6 italic border-l-2 border-secondary/20 pl-3">
            Updated February 13, 2026.
          </p>
          
          <div className="space-y-6 pb-4">
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              {content.text}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-brand-light flex items-center justify-center text-secondary shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <span className="text-[10px] font-bold text-brand-dark">Verified Identity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-brand-light flex items-center justify-center text-secondary shrink-0">
                  <Success className="w-3 h-3" />
                </div>
                <span className="text-[10px] font-bold text-brand-dark">92% Efficiency</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 md:p-8 bg-slate-50/50 border-t border-slate-100 flex justify-end">
          <Button onClick={onClose} size="sm" className="w-full sm:w-auto px-8 shadow-sm">Close Document</Button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
