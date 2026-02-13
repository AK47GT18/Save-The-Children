"use client";

import React from 'react';
import { MapPin, TrendingUp as Impact, CheckCircle as Success } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';

const Stats = () => {
  const stats = [
    { target: 326, prefix: "", suffix: "", label: "Communities Transformed", icon: MapPin },
    { target: 25, prefix: "MK", suffix: "M", label: "Direct Impact Allocated", icon: Impact },
    { target: 125, prefix: "", suffix: "", label: "Teachers & Protectors", icon: Success },
    { target: 15, prefix: "", suffix: "", label: "Years of Saving Lives", icon: Success },
  ];

  return (
    <section id="impact" className="py-14 bg-brand-light/50 border-y border-secondary/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                <stat.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-bold text-brand-dark tracking-tight">
                  <AnimatedCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
                </h3>
              </div>
              <p className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
