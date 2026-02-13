import React from 'react';
import Button from '../ui/Button';

const LastChanceCTA = () => (
  <section className="py-20 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-brand-dark bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight leading-[1] font-serif">
        School starts in <span className="text-secondary">48 hours.</span>
      </h2>
      <p className="text-brand-dark/70 text-lg font-medium mb-3 max-w-xl mx-auto">37 children still lack uniforms. One sponsorship changes everything.</p>
      <p className="text-brand-dark/50 text-sm mb-8">100% of your donation reaches the classroom. Verified by independent audit.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" variant="secondary">Sponsor a Child Now</Button>
        <Button size="lg" variant="dark">Follow Amina&apos;s Journey</Button>
      </div>
      <p className="text-brand-dark/40 text-xs mt-6 font-semibold">Not ready? Get monthly impact stories instead →</p>
    </div>
  </section>
);

export default LastChanceCTA;
