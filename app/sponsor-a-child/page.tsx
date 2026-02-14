"use client";

import React from 'react';
import DonorsPage from '../donors/page';

export default function SponsorAChildPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="pt-24 text-center px-6 mb-12">
        <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Individual Sponsorship</span>
        <h1 className="text-5xl font-bold text-brand-dark font-serif mb-6">Sponsor a Child Now</h1>
      </div>
      <DonorsPage />
    </div>
  );
}
