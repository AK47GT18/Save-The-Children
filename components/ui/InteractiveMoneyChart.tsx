"use client";

import React from 'react';
import { TrendingUp, Wallet, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const interactiveData = [
  { label: 'Q1', income: 450, expenditure: 380 },
  { label: 'Q2', income: 520, expenditure: 460 },
  { label: 'Q3', income: 610, expenditure: 540 },
  { label: 'Q4', income: 840, expenditure: 720 },
];

const InteractiveMoneyChart = () => {
  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-brand-dark font-serif">Financial Flow (2025)</h3>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Real-time revenue vs aid distribution</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Aid Disbursed</span>
          </div>
        </div>
      </div>

      <div className="relative h-64 flex items-end justify-between gap-4 px-4 border-b border-slate-100 pb-2">
        {interactiveData.map((data, i) => (
          <div key={i} className="flex-1 flex gap-2 items-end group h-full relative">
            {/* Income Bar */}
            <div 
              className="flex-1 bg-secondary/80 rounded-t-lg transition-all duration-700 hover:bg-secondary relative"
              style={{ height: `${(data.income / 1000) * 100}%` }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                ${data.income}k
              </div>
            </div>
            {/* Expenditure Bar */}
            <div 
              className="flex-1 bg-primary/80 rounded-t-lg transition-all duration-700 hover:bg-primary relative"
              style={{ height: `${(data.expenditure / 1000) * 100}%` }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                ${data.expenditure}k
              </div>
            </div>
            
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {data.label}
            </span>
          </div>
        ))}

        {/* Grid Lines */}
        <div className="absolute inset-x-0 bottom-1/4 border-b border-slate-50 border-dashed pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-2/4 border-b border-slate-50 border-dashed pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-3/4 border-b border-slate-50 border-dashed pointer-events-none"></div>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-6">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Revenue</p>
          <p className="text-2xl font-bold text-brand-dark font-serif">$2.42M</p>
          <div className="flex items-center gap-1 text-green-500 text-[10px] font-bold">
            <TrendingUp className="w-3 h-3" /> +12% YoY
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Direct Impact</p>
          <p className="text-2xl font-bold text-brand-dark font-serif">$2.21M</p>
          <div className="flex items-center gap-1 text-secondary text-[10px] font-bold">
            <Wallet className="w-3 h-3" /> 92% Ratio
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Efficiency</p>
          <p className="text-2xl font-bold text-brand-dark font-serif">92.4%</p>
          <div className="flex items-center gap-1 text-secondary text-[10px] font-bold">
            <CheckCircle2 className="w-3 h-3" /> Top Tier
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMoneyChart;
