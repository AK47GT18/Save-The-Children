"use client";

import React from 'react';
import { Camera, Satellite, FileSearch, ShieldCheck } from 'lucide-react';

const verificationMethods = [
  {
    icon: Satellite,
    title: "Satellite Ground Tracking",
    description: "We use high-resolution satellite imagery to verify infrastructure progress in real-time. No building goes unmonitored."
  },
  {
    icon: Camera,
    title: "Photo-Evidence Logs",
    description: "Every distribution of supplies is documented with geo-tagged, time-stamped photography available in our portal."
  },
  {
    icon: FileSearch,
    title: "Third-Party Field Audits",
    description: "Independent regional firms conduct unannounced site visits to ensure funds are creating the impact reported."
  },
  {
    icon: ShieldCheck,
    title: "Zero-Ghost Policy",
    description: "We do not use intermediary agencies. Every dollar is tracked directly to a specific community ledger."
  }
];

const ImpactVerification = () => {
  return (
    <section className="py-24 bg-brand-light/30">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3.5rem] p-12 md:p-24 shadow-xl border border-slate-100">
          <div className="max-w-3xl mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-4 block">The Verification Protocol</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-serif tracking-tight leading-tight mb-6">
              How we eliminate <br /> <span className="text-secondary italic">operational doubt.</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Our systems are built on the principle that trust is earned through evidence, not intentions. We've developed a four-tier verification protocol that ensures total accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {verificationMethods.map((method, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 rounded-[2rem] bg-brand-light flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-secondary/5">
                  <method.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">{method.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-sm">
                    <img src={`https://randomuser.me/api/portraits/thumb/men/${i+20}.jpg`} alt="Auditor" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-brand-dark">Certified Field Auditors</p>
                <p className="text-xs text-slate-400">Verifying 326 communities across Africa</p>
              </div>
            </div>
            <button className="px-10 py-5 bg-brand-dark text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-all">
              Request Personal Audit Portal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactVerification;
