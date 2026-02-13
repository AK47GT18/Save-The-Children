"use client";

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const SocialProof = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    const hide = setTimeout(() => setVisible(false), 8000);
    return () => { clearTimeout(timer); clearTimeout(hide); };
  }, []);

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
      <div className="bg-white rounded-xl shadow-2xl border border-slate-100 px-5 py-3 flex items-center gap-3 max-w-xs">
        <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-none">
          <Heart className="w-4 h-4 text-secondary" />
        </div>
        <div>
          <p className="text-sm font-bold text-brand-dark">12 people donated today</p>
          <p className="text-[10px] text-slate-400 font-semibold">Last sponsorship: 8 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
