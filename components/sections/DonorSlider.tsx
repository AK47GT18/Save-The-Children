"use client";

import React from 'react';

const donors = [
  { name: "The Global Fund", type: "Institutional", contribution: "Grants & Logistics" },
  { name: "Oxfam International", type: "NGO Partner", contribution: "Program Implementation" },
  { name: "Vanguard Philanthropy", type: "Private Equity", contribution: "Core Funding" },
  { name: "Mastercard Foundation", type: "Corporate", contribution: "Infrastructure" },
  { name: "Bill & Melinda Gates", type: "Legacy Member", contribution: "Strategic Advisory" },
  { name: "Unilever Africa", type: "Corporate", contribution: "Supply Chain" },
];

const DonorSlider = () => {
  return (
    <div className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12">
        <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] text-center">Institutional & Legacy Partners</h3>
      </div>
      
      <div className="flex gap-12 whitespace-nowrap animate-infinite-scroll">
        {[...donors, ...donors].map((donor, i) => (
          <div key={i} className="inline-flex flex-col items-center justify-center px-12 py-10 rounded-[2rem] bg-white/5 border border-white/10 min-w-[300px] group hover:bg-white/10 transition-all cursor-pointer">
            <span className="text-white text-2xl font-bold font-serif mb-2 group-hover:text-primary transition-colors">{donor.name}</span>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{donor.type}</span>
              <span className="w-1 h-1 rounded-full bg-white/10"></span>
              <span className="text-[9px] font-bold text-primary uppercase tracking-widest">{donor.contribution}</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DonorSlider;
