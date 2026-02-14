"use client";

import React from 'react';
import { Briefcase, MapPin, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const jobs = [
  { title: "Field Officer", location: "Lilongwe, Malawi", type: "Full-time" },
  { title: "Regional Fundraising Lead", location: "Remote / Multiple", type: "Contract" },
  { title: "Program Evaluation Specialist", location: "Blantyre, Malawi", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Work With Us</span>
          <h1 className="text-5xl font-bold text-brand-dark mb-6 font-serif">Careers</h1>
          <p className="text-xl text-slate-500">
            Join a team of passionate individuals dedicated to delivering verified impact and sustainable change.
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <div key={i} className="p-8 bg-brand-light/30 rounded-3xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-colors group">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2 tracking-tight">{job.title}</h3>
                <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                   <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                   <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.type}</span>
                </div>
              </div>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-brand-dark group-hover:border-primary transition-all">Apply Now <ArrowRight className="w-4 h-4" /></Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
