"use client";

import React from 'react';
import Image from 'next/image';
import { Target, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useDonation } from '@/context/DonationContext';
import ImpactCards from '@/components/sections/ImpactCards';

const stories = [
  {
    name: "Amina's New Horizon",
    location: "Chiradzulu District, Malawi",
    role: "Primary Student",
    quote: "I used to walk 8km just for water. Now, with the new school and borehole, I can study until sunset.",
    impact: "First in family to attend secondary school.",
    img: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Kondwani Banda",
    location: "Rural Lusaka, Zambia",
    role: "Community Lead",
    quote: "We didn't just build a clinic; we built a future where our mothers don't have to fear childbirth.",
    impact: "Reduced local maternal mortality by 40%.",
    img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800"
  }
];

const infrastructure = [
  {
    title: "Eco-Friendly Classrooms",
    count: "124 built",
    desc: "Solar-powered learning environments designed for year-round education.",
    icon: Building2
  },
  {
    title: "Deep-Capped Boreholes",
    count: "326 operational",
    desc: "Providing permanent clean water access to over 150,000 residents.",
    icon: Target
  },
  {
    title: "Regional Health Posts",
    count: "45 clinics",
    desc: "Equipped for emergency delivery and pediatric intensive care.",
    icon: CheckCircle2
  }
];

export default function ImpactPage() {
  const { openModal } = useDonation();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-brand-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-6 block tracking-[0.3em]">The Result of Your Support</span>
            <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-8">
              Turning hope into <br /> <span className="text-secondary italic">measurable reality.</span>
            </h1>
            <p className="text-white/40 text-xl leading-relaxed max-w-xl mb-12">
              We don't just deliver aid; we build self-sustaining ecosystems. Every project is tracked, every beneficiary is known, and every dollar is accounted for.
            </p>
          </div>
        </div>
      </section>



      {/* Infrastructure Results */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-4 block">Infrastructure Results</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-serif tracking-tight leading-tight mb-8">
                Building the <span className="text-secondary">physical foundation</span> of community growth.
              </h2>
              <p className="text-slate-500 text-lg mb-12">
                Sustainable change requires more than just services. We invest in permanent, climate-resilient architecture that serves as the hub for all community transformation.
              </p>
              <div className="space-y-8">
                {infrastructure.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-bold text-brand-dark">{item.title}</h4>
                        <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-0.5 rounded-full">{item.count}</span>
                      </div>
                      <p className="text-slate-400 mt-2 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-brand-light/50 rounded-[3rem] overflow-hidden shadow-2xl skew-x-2">
                <Image src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" alt="Construction Progress" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-brand-dark font-bold mb-6">M</div>
                  <h4 className="text-2xl font-bold font-serif mb-2">Mangochi Multi-Center</h4>
                  <p className="text-white/80 text-sm">Completed Dec 2024. Serving 4,500 residents with education and healthcare integration.</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-[2rem] border-[12px] border-white shadow-xl flex flex-col items-center justify-center text-white text-center p-4">
                <span className="text-4xl font-bold font-serif">100%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Solar Powered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Anchors Integration */}
      <ImpactCards />

      {/* Final CTA */}
      <section className="py-24 bg-white text-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8 leading-tight">Ready to start your <br /> <span className="text-secondary italic">own impact story?</span></h2>
            <p className="text-slate-400 text-lg mb-12">One child, one community, one verified result at a time.</p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" size="lg" className="px-12 shadow-xl shadow-secondary/20" onClick={openModal}>Become a Sponsor</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
