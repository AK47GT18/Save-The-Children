import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => (
  <div id="home" className="relative min-h-[90vh] md:h-[75vh] w-full flex items-center overflow-hidden py-20 md:py-0">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <Image 
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop" 
        alt="Child Smiling" 
        fill
        className="object-cover blur-[2px] scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/60 to-transparent"></div>
    </div>

    {/* Content */}
    <div className="container mx-auto px-4 sm:px-6 relative z-10 text-white">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-primary px-3 py-1 rounded-full text-brand-dark text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20">
            Emergency Appeal
          </span>
          <span className="text-white/50 text-[10px] font-medium uppercase tracking-wider hidden sm:block">Global Education Crisis</span>
        </div>
        <h1 className="text-4xl xs:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight font-serif">
          Every hour <span className="text-primary italic">without school</span> costs a child their future.
        </h1>
        <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
          Amina walks 6km just to fetch water. She should be walking to school. 
          Help us put 1,000 children back in classrooms before school starts Monday.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" variant="primary" className="w-full sm:w-auto text-sm sm:text-base">Change Amina&apos;s Life Today</Button>
          <button className="px-6 sm:px-9 py-3 sm:py-4 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-white/25 text-white bg-white/10 hover:bg-white/20 group w-full sm:w-auto">
            See Where Your Money Goes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
