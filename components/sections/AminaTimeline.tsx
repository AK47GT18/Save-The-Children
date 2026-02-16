import React from 'react';

const AminaTimeline = ({ data }: { data?: any }) => {
  const items = [
    { 
      month: data?.time1Marker || "Month 0", 
      event: data?.time1Title || "No clean water source", 
      detail: data?.time1Desc || "Amina walks 4 hours daily. No time for school.", 
      color: "bg-slate-300" 
    },
    { 
      month: data?.time2Marker || "Month 1", 
      event: data?.time2Title || "Well installed", 
      detail: data?.time2Desc || "Clean water 100m from home. MK84,000 funded by donors.", 
      color: "bg-primary" 
    },
    { 
      month: data?.time3Marker || "Month 6", 
      event: data?.time3Title || "School attendance +40%", 
      detail: data?.time3Desc || "Amina attends school daily. Reading at grade level.", 
      color: "bg-secondary" 
    },
    { 
      month: data?.time4Marker || "Month 12", 
      event: data?.time4Title || "Literacy milestone", 
      detail: data?.time4Desc || "Top 5 in her class. Wants to be a teacher.", 
      color: "bg-secondary" 
    },
  ];

  return (
  <section className="py-14 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-3 block text-center">Continuity</span>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight text-center mb-10 font-serif">Amina&apos;s Timeline</h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-secondary/20 -translate-x-1/2"></div>
          {items.map((item, idx) => (
            <div key={idx} className={`relative flex items-start gap-6 mb-8 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:text-${idx % 2 === 0 ? 'right' : 'left'}`}>
              <div className="flex-1 hidden md:block"></div>
              <div className={`relative z-10 w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md flex-none`}>
                {idx + 1}
              </div>
              <div className="flex-1 bg-brand-light/50 rounded-xl p-4 border border-secondary/5">
                <p className="text-[10px] text-secondary font-bold uppercase tracking-wider mb-1">{item.month}</p>
                <h4 className="font-bold text-brand-dark text-sm mb-1">{item.event}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default AminaTimeline;
