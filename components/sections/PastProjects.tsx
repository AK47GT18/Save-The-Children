"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Users, Calendar } from 'lucide-react';

const projects = [
  {
    title: "Mchinji Secondary School",
    location: "Malawi",
    impact: "450 Students",
    date: "Dec 2024",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Clean Water Initiative",
    location: "Zambia",
    impact: "12,000 People",
    date: "Aug 2024",
    status: "Completed",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Women's Health Center",
    location: "Mozambique",
    impact: "85 Full-time Staff",
    date: "Feb 2025",
    status: "Active",
    img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800"
  },
];

const PastProjects = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-4 block">Proven Track Record</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-serif tracking-tight leading-tight">
              Where your trust is <br /> <span className="text-slate-300 italic">turned into results.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${project.status === 'Completed' ? 'bg-secondary text-white' : 'bg-primary text-brand-dark'}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-8 space-y-6 flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <MapPin className="w-3 h-3" /> {project.location}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50 font-bold uppercase tracking-widest text-[9px]">
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-300">Impact</span>
                    <span className="text-brand-dark flex items-center gap-1">
                      <Users className="w-3 h-3 text-secondary" /> {project.impact}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-300">Date</span>
                    <span className="text-brand-dark flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-secondary" /> {project.date}
                    </span>
                  </div>
                </div>

                <button className="w-full py-4 rounded-xl border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  View Full Audit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastProjects;
