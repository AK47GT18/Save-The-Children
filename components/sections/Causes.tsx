import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';

const Causes = () => {
  const causes = [
    {
      title: "Send a Child to School Before Monday",
      desc: "Every day without education is a day lost to poverty. Your donation covers tuition and supplies.",
      raised: 14700000,
      goal: 16800000,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      urgency: "Only MK2.1M left"
    },
    {
      title: "Clean Water: The Foundation of Learning",
      desc: "Stop the 4-hour walk. Bring water to the classroom so girls like Amina can stay in school.",
      raised: 11928000,
      goal: 16800000,
      image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=800",
      urgency: "71% Funded"
    },
    {
      title: "Teacher Salaries: Protecting the Future",
      desc: "Quality education depends on quality mentors. Ensure 50 teachers are paid this month.",
      raised: 1848000,
      goal: 20160000,
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800",
      urgency: "Critical Need"
    }
  ];

  return (
    <section id="causes" className="py-20 bg-brand-light/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-3 block">Direct Intervention</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-[1] font-serif">
              Where Help is <span className="text-slate-300">Needed Now.</span>
            </h2>
          </div>
          <Button variant="outline" size="sm" className="text-xs uppercase tracking-wider">Explore Emergency Causes</Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause, idx) => (
            <div key={idx} className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <Image 
                   src={cause.image} 
                   alt={cause.title} 
                   fill 
                   className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-secondary/20">{cause.urgency}</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-secondary transition-colors leading-tight font-serif tracking-tight">{cause.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">{cause.desc}</p>
                <div className="mt-auto">
                  <ProgressBar raised={cause.raised} goal={cause.goal} />
                  <Button className="w-full mt-6" variant={idx === 0 ? 'primary' : 'secondary'} size="sm">
                    {idx === 0 ? 'Sponsor This Child' : 'Protect a Future'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;
