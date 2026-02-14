"use client";

import React from 'react';
import SectionReveal from '@/components/ui/SectionReveal';

export default function MissionPage() {
  return (
    <div className="bg-white min-h-screen py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Core Purpose</span>
        <h1 className="text-5xl font-bold text-brand-dark mb-8 font-serif">Our Mission</h1>
        <p className="text-xl text-slate-500 leading-relaxed mb-12">
          To provide every child with the tools, environment, and support needed to thrive, focusing on education, health, and community sustainability.
        </p>
        <div className="bg-brand-light p-10 rounded-[2rem] border border-slate-100 italic text-brand-dark text-lg">
          &quot;We don&apos;t just build schools; we build foundations for a life of dignity and opportunity.&quot;
        </div>
      </div>
    </div>
  );
}
