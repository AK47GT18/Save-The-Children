import React from 'react';
import { Heart, Clock, CheckCircle2 } from 'lucide-react';

const DonationFlow = () => (
  <section className="py-14 bg-brand-light/30 border-y border-secondary/5">
    <div className="container mx-auto px-6">
      <div className="text-center mb-8">
        <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-2 block">Process Clarity</span>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight font-serif">What happens after you donate?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { step: "1", title: "You Sponsor a Child", desc: "Choose an amount. Payment is instant and secure.", icon: Heart },
          { step: "2", title: "Funds Released in 72hrs", desc: "Money reaches our local partner within 3 business days.", icon: Clock },
          { step: "3", title: "Photo + Update in 30 Days", desc: "You receive a personal update with proof of impact.", icon: CheckCircle2 },
        ].map((item, idx) => (
          <div key={idx} className="text-center group">
            <div className="w-14 h-14 bg-white rounded-2xl border border-secondary/10 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-lg group-hover:scale-105 transition-all">
              <item.icon className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-[10px] text-secondary font-bold uppercase tracking-wider mb-1">Step {item.step}</div>
            <h3 className="font-bold text-brand-dark text-sm mb-1">{item.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DonationFlow;
