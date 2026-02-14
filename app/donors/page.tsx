"use client";

import React from 'react';
import { GraduationCap, Coffee, Home, Stethoscope } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useDonation } from '@/context/DonationContext';

const aidOptions = [
  { 
    id: "child", 
    title: "Sponsor a Child", 
    icon: GraduationCap, 
    price: "84,000", 
    desc: "Covers tuition, books, and uniforms for one student for an entire year.",
    color: "bg-primary"
  },
  { 
    id: "meals", 
    title: "Community Meals", 
    icon: Coffee, 
    price: "42,000", 
    desc: "Ensures 50 children have nutritional hot meals in their classroom for a month.",
    color: "bg-secondary"
  },
  { 
    id: "water", 
    title: "Clean Water Well", 
    icon: Home, 
    price: "150,000", 
    desc: "Provides a permanent solar-powered well for an entire community.",
    color: "bg-brand-dark"
  },
  { 
    id: "health", 
    title: "Mobile Health Clinic", 
    icon: Stethoscope, 
    price: "65,000", 
    desc: "Funding for one week of doctor visits and emergency medical supplies.",
    color: "bg-slate-500"
  },
];

export default function DonorsPage() {
  const { openModal } = useDonation();

  return (
    <div className="bg-brand-light/30 min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Select Your Impact</span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark font-serif mb-6 leading-tight">
            How would you like to <span className="text-secondary">help today?</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Choose a specific area where you want your contribution to make a difference. 100% of these funds are tracked and verified.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {aidOptions.map((option) => (
            <div key={option.id} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-2xl transition-all group">
              <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform flex-none`}>
                <option.icon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-brand-dark font-serif">MK{option.price}</span>
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Impact Cost</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 tracking-tight">{option.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">{option.desc}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" className="w-full" onClick={openModal}>Help With This</Button>
                  <Button variant="outline" className="w-full">View Progress</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-dark rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-4 font-serif">Radical transparency is our promise.</h2>
              <p className="text-white/60 mb-0 leading-relaxed">
                When you select a specific area of aid, you receive a verification code. This code allows you to track exactly when and where the funds were deployed.
              </p>
            </div>
            <div className="lg:w-1/3 text-right">
              <Button variant="primary" size="lg" className="w-full lg:w-auto">Learn About Tracking</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
