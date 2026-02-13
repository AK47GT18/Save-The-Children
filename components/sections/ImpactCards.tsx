import React from 'react';
import { GraduationCap, HandHeart, ShieldCheck } from 'lucide-react';

const ImpactCards = () => {
  const tiers = [
    { amount: "4,200", label: "School Supplies", impact: "Provides 1 child with books, bags, and uniforms for a full year.", icon: GraduationCap },
    { amount: "8,400", label: "Monthly Meals", impact: "Ensures no child in our programs goes to bed hungry for 30 days.", icon: HandHeart },
    { amount: "16,800", label: "Full Tuition", impact: "Covers a full year of private-quality education for a gifted student.", icon: ShieldCheck },
  ];

  return (
    <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-3 block">Decision Anchors</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1] mb-4 font-serif">Small Change. <span className="text-white/20">Big Impact.</span></h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">Choose a specific outcome. No guesswork. 100% impact.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/5 p-6 sm:p-8 rounded-[2rem] hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20">
                <tier.icon className="w-6 h-6 text-brand-dark" />
              </div>
              <div className="mb-4 flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-white">MK{tier.amount}</span>
                <span className="text-white/40 font-semibold uppercase tracking-wider text-[9px] sm:text-[10px]">/ Life Changed</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 tracking-tight">{tier.label}</h3>
              <p className="text-white/50 mb-8 leading-relaxed text-xs sm:text-sm">{tier.impact}</p>
              <button className="w-full px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-white/15 text-white hover:bg-primary hover:text-brand-dark hover:border-primary shadow-sm hover:shadow-primary/20">
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
