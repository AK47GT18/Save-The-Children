"use client";

import React from 'react';
import InteractiveMoneyChart from '@/components/ui/InteractiveMoneyChart';
import PastProjects from '@/components/sections/PastProjects';
import DonorSlider from '@/components/sections/DonorSlider';
import ImpactVerification from '@/components/sections/ImpactVerification';
import { Download, ShieldCheck, FileText, PieChart } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function FinancialsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-brand-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-6 block">Accountability Hub</span>
            <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-8">
              Every cent is <br /> <span className="text-primary italic">audited & verified.</span>
            </h1>
            <p className="text-white/40 text-xl leading-relaxed max-w-xl mb-12">
              We leverage satellite tracking and third-party ground audits to ensure 92% of your support becomes real, measurable impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="md">
                <Download className="w-4 h-4 mr-2" /> Download 2024 Audit
              </Button>
              <Button variant="dark" className="border border-white/10 bg-white/5 hover:bg-white/10 text-white shadow-none">
                <ShieldCheck className="w-4 h-4 mr-2 text-secondary" /> Tax Receipt Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Chart */}
            <div className="lg:col-span-8">
              <InteractiveMoneyChart />
            </div>

            {/* Quick Stats Column */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-brand-light/30 rounded-[2rem] p-10 border border-slate-100 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-brand-dark font-serif mb-6 leading-tight">Donor Trust Pillar</h3>
                <div className="space-y-6">
                  {[
                    { icon: FileText, title: "Open Ledger", desc: "Every transaction is logged in our real-time portal." },
                    { icon: PieChart, title: "Zero Ghost Costs", desc: "We cover logistics through institutional grants." },
                    { icon: ShieldCheck, title: "Monthly Audits", desc: "Third-party validation of every kwacha spent." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-dark">{item.title}</h4>
                        <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Verification Protocol */}
      <div className="mb-24">
        <ImpactVerification />
      </div>

      {/* Social Proof */}
      <DonorSlider />

      {/* Past Projects */}
      <PastProjects />

      {/* Final Reinforcement CTA */}
      <section className="py-24 bg-brand-light/30">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-12 md:p-24 shadow-xl border border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-[40px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark font-serif mb-6 leading-tight tracking-tight">Invest in <span className="text-secondary italic">verified futures.</span></h2>
              <p className="text-slate-400 text-lg mb-12">Join 25,000+ donors who don't just hope for change—they confirm it.</p>
              <div className="flex justify-center">
                <Button variant="secondary" size="lg" className="px-12">Sponsor a Project Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
