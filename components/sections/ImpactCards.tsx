"use client";

import React from 'react';
import { GraduationCap, HandHeart, ShieldCheck } from 'lucide-react';
import { useDonation } from '@/context/DonationContext';

const ImpactCards = ({ data }: { data?: any }) => {
  const { openModal } = useDonation();
  const tiers = [
    { 
      amount: data?.tier1Amount || "4,200", 
      label: data?.tier1Title || "School Supplies", 
      impact: data?.tier1Desc || "Provides 1 child with books, bags, and uniforms for a full year.", 
      icon: GraduationCap 
    },
    { 
      amount: data?.tier2Amount || "8,400", 
      label: data?.tier2Title || "Monthly Meals", 
      impact: data?.tier2Desc || "Ensures no child in our programs goes to bed hungry for 30 days.", 
      icon: HandHeart 
    },
    { 
      amount: data?.tier3Amount || "16,800", 
      label: data?.tier3Title || "Teacher Fund", 
      impact: data?.tier3Desc || "Supports salary and training for community-led educators in rural zones.", 
      icon: ShieldCheck 
    },
  ];

  return (
    <section id="impact" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-secondary/5 -translate-y-1/2 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 px-6">
          <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-3 block">Decision Anchors</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1] mb-4 font-serif">Small Change. <span className="text-white/20">Big Impact.</span></h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">Choose a specific outcome. No guesswork. 100% impact.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-[2.5rem] hover:bg-white/10 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-brand-dark transition-all">
                <tier.icon className="w-8 h-8" />
              </div>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-primary text-sm font-bold uppercase tracking-widest">MK</span>
                <span className="text-4xl sm:text-5xl font-bold tracking-tighter">{tier.amount}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 tracking-tight">{tier.label}</h3>
              <p className="text-white/50 mb-8 leading-relaxed text-xs sm:text-sm">{tier.impact}</p>
              <button 
                className="w-full px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-white/15 text-white hover:bg-primary hover:text-brand-dark hover:border-primary shadow-sm hover:shadow-primary/20"
                onClick={openModal}
              >
                Sponsor This Today
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCards;
