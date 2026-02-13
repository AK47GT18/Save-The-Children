import React from 'react';
import { ShieldCheck } from 'lucide-react';

const AuthorityQuote = () => (
  <section className="py-20 bg-brand-light/20 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto bg-brand-dark rounded-[2.5rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[0_30px_60px_-15px_rgba(20,83,45,0.4)] border border-white/5">
        <div className="relative flex-none">
          <div className="w-24 h-24 rounded-3xl bg-secondary flex items-center justify-center text-white font-bold text-3xl font-serif shadow-2xl rotate-3">GM</div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg -rotate-12 border-2 border-brand-dark">
            <ShieldCheck className="w-5 h-5 text-brand-dark" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Leadership Statement</p>
          <blockquote className="text-white text-2xl md:text-3xl leading-snug mb-8 font-serif italic font-medium">
            &ldquo;We reject short-term aid. If we can&apos;t fund a child for <span className="text-primary italic">at least 3 years</span>, we don&apos;t start. That&apos;s our promise to them.&rdquo;
          </blockquote>
          <div className="flex flex-col md:flex-row md:items-center gap-4 border-t border-white/10 pt-8">
            <div>
              <p className="text-white font-bold text-xl tracking-tight leading-none mb-1">Grace Mwanza</p>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">Regional Director, Sub-Saharan Africa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AuthorityQuote;
