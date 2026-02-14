"use client";

import React from 'react';
import { useDonation } from '@/context/DonationContext';

const JoinCommunity = () => {
  const { openModal } = useDonation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative group cursor-pointer" onClick={openModal}>
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-brand-dark rounded-[3rem] p-10 md:p-16 text-center text-white overflow-hidden border border-white/5">
            <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full transition-transform duration-1000 group-hover:scale-110"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight tracking-tight">
                Be part of the <span className="text-secondary italic">92%.</span>
              </h2>
              <p className="text-base md:text-lg text-white/40 mb-10 leading-relaxed font-medium">
                Join our community of over 25,000 donors who receive verification for every cent they contribute.
              </p>
              
              <div className="inline-flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b border-primary/30 pb-1 group-hover:border-primary transition-colors">
                  Start Your Sponsorship
                </span>
                <div className="w-8 h-[1px] bg-primary/30 group-hover:w-12 transition-all"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
