"use client";

import React from 'react';
import Image from 'next/image';
import { Shield, CheckCircle2, Globe, Users2 } from 'lucide-react';
import Button from '@/components/ui/Button';

import Leadership from '@/components/sections/Leadership';
import JoinCommunity from '@/components/sections/JoinCommunity';

const pillars = [
  { title: "Direct Funding", icon: Globe, desc: "Bypassing bureaucratic layers to get funds straight to local hands." },
  { title: "Audited Results", icon: Shield, desc: "Every project is verified by third-party auditors and satellite data." },
  { title: "Local Leadership", icon: Users2, desc: "We empower communities to lead their own transformation." },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-brand-dark text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-10 h-[1px] bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Our Institution</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif leading-tight">
              Radical transparency. <br />
              <span className="text-primary italic">Verified impact.</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
              Since 2009, we've been working to transform communities by focusing on what actually works: long-term commitment and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-light rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200" 
                  alt="Our Mission in Action" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-[240px] border border-slate-100">
                <p className="text-brand-dark font-serif italic text-lg leading-snug mb-4">"We don't just fund projects; we protect futures."</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">— Grace Mwanza</p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-brand-dark font-serif tracking-tight">Our Mission & Ethics</h2>
                <p className="text-slate-500 text-lg leading-relaxed text-balance">
                  We believe that the global education crisis isn't just a lack of funding, but a lack of transparency. Our goal is to break the cycle of poverty by ensuring that every dollar donated is tracked, verified, and deployed with maximum efficiency.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  { title: "Long-term Commitment", text: "We stay in a community for a minimum of 10 years." },
                  { title: "Measurable Progress", text: "Satellite data confirms school builds and well health." },
                  { title: "Culturally Anchored", text: "100% of our ground staff are from the regions we serve." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-none mt-1">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 px-6">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Strategic Pillars</h2>
            <p className="text-white/40 max-w-xl mx-auto">The three core methodologies that drive our 92% efficiency rating.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-brand-dark mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Leadership Section */}
      <Leadership />

      {/* Reusable Join Us CTA */}
      <JoinCommunity />
    </div>
  );
}
