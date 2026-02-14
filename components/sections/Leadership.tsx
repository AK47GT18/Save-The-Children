"use client";

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const team = [
  { 
    name: "Grace Mwanza", 
    role: "Regional Director", 
    bio: "Grace brings 15 years of experience in regional development across East Africa. She leads our ground operations with a focus on sustainable infrastructure.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" 
  },
  { 
    name: "David Phiri", 
    role: "Head of Operations", 
    bio: "A logistics expert dedicated to ensuring that 92% of every kwacha reaches the intended recipient without delay.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" 
  },
  { 
    name: "Sarah Jere", 
    role: "Community Lead", 
    bio: "Sarah works directly with village elders and families to ensure our programs are culturally resonant and community-driven.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800" 
  },
  { 
    name: "Michael Banda", 
    role: "Financial Oversight", 
    bio: "Ensuring radical transparency through monthly audits and real-time fund tracking systems.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800" 
  },
];

const MemberCard = ({ member }: { member: any }) => (
  <div className="group">
    <div className="relative h-[380px] rounded-[2rem] overflow-hidden mb-6 shadow-xl border border-white/50">
      <Image 
        src={member.img} 
        alt={member.name} 
        fill 
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
      />
      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent">
        <p className="text-white/80 text-xs leading-relaxed italic line-clamp-4">"{member.bio}"</p>
      </div>
    </div>
    <h4 className="text-xl font-bold text-brand-dark tracking-tight mb-1">{member.name}</h4>
    <p className="text-secondary font-bold uppercase tracking-widest text-[9px]">{member.role}</p>
  </div>
);

const Leadership = () => {
  return (
    <section className="py-24 bg-brand-light/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-3 block">The Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-serif leading-tight tracking-tight">Meet the people <br /> <span className="text-slate-300 italic">guiding the mission.</span></h2>
          </div>
          <Button variant="outline" size="sm" className="px-8">Join the Team</Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <MemberCard key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
