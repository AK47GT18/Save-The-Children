"use client";

import React, { useState, useEffect, useRef } from 'react';

interface AnimatedBarProps {
  color: string;
  percentage: number;
  label: string;
  description: string;
  delay: number;
}

const AnimatedBar = ({ color, percentage, label, description, delay }: AnimatedBarProps) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percentage), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [percentage, delay]);

  return (
    <div ref={barRef}>
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 ${color} rounded-full`}></div>
          <span className="font-bold text-brand-dark text-sm">{label}</span>
        </div>
        <span className={`font-bold text-sm ${color === 'bg-secondary' ? 'text-secondary' : 'text-brand-dark'}`}>
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
        <div
          className={`${color} h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">{description}</p>
    </div>
  );
};

export default AnimatedBar;
