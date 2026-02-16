"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, CheckCircle2, Users, ArrowRight } from 'lucide-react';
import AnimatedBar from '../ui/AnimatedBar';
import AnimatedCounter from '../ui/AnimatedCounter';

const Transparency = ({ data }: { data?: any }) => {
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  const efficiency = data?.efficiencyRating || 92;
  const f1 = { percent: data?.fund1Percent || 85, category: data?.fund1Category || "Programs & Direct Aid" };
  const f2 = { percent: data?.fund2Percent || 10, category: data?.fund2Category || "Fundraising" };
  const f3 = { percent: data?.fund3Percent || 5, category: data?.fund3Category || "Administration" };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="transparency" className="py-20 bg-brand-light/30">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-100 w-full">
          <div className="flex flex-col lg:flex-row items-start gap-20">
            {/* Left Content */}
            <div className="lg:w-[55%]">
              <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-4 block">Trust & Transparency</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-[1.1] mb-6 font-serif">
                Where your money <span className="text-secondary">actually goes.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl">
                Donors don't doubt your heart—they doubt your systems. We maintain a {efficiency}% efficiency rating, meaning almost every cent reaches the field.
              </p>

              {/* Animated Allocation Bars */}
              <div className="space-y-5 mb-8">
                <AnimatedBar color="bg-secondary" percentage={f1.percent} label={f1.category} description="Classrooms, supplies, teacher salaries, clean water" delay={0} />
                <AnimatedBar color="bg-primary" percentage={f2.percent} label={f2.category} description="Growing our donor community" delay={200} />
                <AnimatedBar color="bg-slate-300" percentage={f3.percent} label={f3.category} description="Essential operations & compliance" delay={400} />
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full border border-secondary/10">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-bold text-brand-dark">Verified Non-Profit</span>
                </div>
                <div className="flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full border border-secondary/10">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-bold text-brand-dark">Audited Annually</span>
                </div>
                <div className="flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full border border-secondary/10">
                  <Users className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-bold text-brand-dark">25,000+ Donors</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary hover:text-brand-dark transition-colors">
                 View Full Audit Report <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Right: Animated Efficiency Visual */}
            <div className="lg:w-2/5 flex flex-col items-center gap-6" ref={chartRef}>
              <div className={`w-full max-w-[280px] aspect-square bg-brand-light rounded-full p-3 shadow-lg border border-secondary/5 relative flex items-center justify-center transition-all duration-700 ${chartVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                 <div className="w-full h-full rounded-full border-[40px] border-slate-100 flex items-center justify-center relative">
                    <div
                      className="absolute inset-[-40px] rounded-full border-[40px] border-secondary transition-all duration-1000 ease-out"
                      style={{ clipPath: chartVisible ? 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)' : 'polygon(50% 50%, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 50%)' }}
                    ></div>
                    <div className="text-center">
                       <p className="text-4xl font-bold text-brand-dark font-serif">{chartVisible ? efficiency : '0'}%</p>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Efficiency Rating</p>
                    </div>
                 </div>
              </div>
              
              {/* Animated Stats Under Chart */}
              <div className={`grid grid-cols-2 gap-4 w-full max-w-[280px] transition-all duration-500 delay-500 ${chartVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="bg-brand-light rounded-xl p-4 text-center border border-secondary/5">
                  <AnimatedCounter target={326} />
                  <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Communities</p>
                </div>
                <div className="bg-brand-light rounded-xl p-4 text-center border border-secondary/5">
                  <AnimatedCounter target={15} suffix="yr" />
                  <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Track Record</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
