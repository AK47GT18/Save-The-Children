"use client";

import React from 'react';
import Image from 'next/image';
import AminaTimeline from '@/components/sections/AminaTimeline';

export default function AminasJourneyPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop" 
          alt="Amina" 
          fill 
          className="object-cover transition-transform" 
        />
        <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="bg-primary px-3 py-1 rounded-full text-brand-dark text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">Featured Story</span>
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-4">Amina&apos;s Journey</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto italic">One child, one path, thousands of possibilities.</p>
        </div>
      </section>
      <AminaTimeline />
      <div className="py-24 container mx-auto px-6 max-w-4xl text-lg leading-relaxed text-slate-600">
         <p className="mb-8">
            Amina lives in a community where education was once a luxury reserved for those who didn&apos;t have to walk miles for water. Today, she is the first girl in her family to enter secondary school.
         </p>
         <p>
            Your support doesn&apos;t just pay for school; it builds the infrastructure that makes school possible. Through our radical transparency model, you can see the wells we built and the teachers we paid to make Amina&apos;s dream a reality.
         </p>
      </div>
    </div>
  );
}
