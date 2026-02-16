"use client";

import React from 'react';
import { MapPin, TrendingUp as Impact, CheckCircle as Success, HeartHandshake } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';


const iconMap: any = {
  'users': MapPin,
  'circle-dollar-sign': Impact,
  'graduation-cap': Success,
  'heart-handshake': HeartHandshake,
};

const Stats = ({ data }: { data?: any }) => {
  const stats = [
    { 
      target: parseInt(data?.stat1Number) || 326, 
      label: data?.stat1Label || "Communities Transformed", 
      icon: iconMap[data?.stat1Icon] || MapPin 
    },
    { 
      target: parseInt(data?.stat2Number) || 25, 
      prefix: "MK", 
      suffix: "M", 
      label: data?.stat2Label || "Direct Impact Allocated", 
      icon: iconMap[data?.stat2Icon] || Impact 
    },
    { 
      target: parseInt(data?.stat3Number) || 125, 
      label: data?.stat3Label || "Teachers & Protectors", 
      icon: iconMap[data?.stat3Icon] || Success 
    },
    { 
      target: parseInt(data?.stat4Number) || 15, 
      label: data?.stat4Label || "Years of Saving Lives", 
      icon: iconMap[data?.stat4Icon] || HeartHandshake 
    },
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
