import React from 'react';
import { MapPin, ShieldCheck, TrendingUp } from 'lucide-react';

const WhyStandForChildren = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-3 block text-center">Why Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight leading-[1.1] mb-10 font-serif text-center">
          Why Stand for Children <span className="text-secondary">works.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: "Local Teams, Not Fly-In Aid", desc: "Our staff live in the communities they serve. No expensive consultants — just neighbours helping neighbours." },
            { icon: ShieldCheck, title: "Funds Released After Proof", desc: "Money is only released when outcomes are verified. No guessing. No waste. Every kwacha tracked." },
            { icon: TrendingUp, title: "3+ Year Commitments", desc: "We don’t do one-off donations. Every school we fund stays funded for a minimum of 3 years." },
          ].map((item, idx) => (
            <div key={idx} className="bg-brand-light/50 rounded-2xl p-6 border border-secondary/5 hover:shadow-lg transition-all group">
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-bold text-brand-dark mb-2 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyStandForChildren;
