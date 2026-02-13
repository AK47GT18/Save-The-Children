import React from 'react';

interface ProgressBarProps {
  raised: number;
  goal: number;
}

const ProgressBar = ({ raised, goal }: ProgressBarProps) => {
  const percentage = Math.min((raised / goal) * 100, 100);
  
  return (
    <div className="mt-3">
      <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
        <span>Raised: <span className="text-secondary">MK{raised.toLocaleString()}</span></span>
        <span>{percentage.toFixed(0)}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
        <div 
          className="bg-secondary h-full rounded-full transition-all duration-1000" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-right text-[10px] text-slate-400 mt-1.5 font-semibold uppercase tracking-wider">
        Goal: MK{goal.toLocaleString()}
      </div>
    </div>
  );
};

export default ProgressBar;
