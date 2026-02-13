"use client";

// app/page.tsx
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Search, ShoppingCart, Heart, Phone, ArrowRight, Calendar, User, Clock,
  ShieldCheck, TrendingUp, CheckCircle2, Users, GraduationCap, Shield, MapPin, HandHeart,
  TrendingUp as Impact, CheckCircle as Success
} from 'lucide-react';

// --- Shared Components ---

const Button = ({ children, variant = 'primary', className = '', size = 'md', onClick }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'outline' | 'dark'; className?: string; size?: 'sm' | 'md' | 'lg'; onClick?: () => void }) => {
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3",
    lg: "px-9 py-4 text-lg"
  };
  const baseStyle = "rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95";
  const variants = {
    primary: "bg-primary text-brand-dark hover:bg-yellow-400 shadow-[0_8px_16px_-8px_rgba(250,204,21,0.5)]",
    secondary: "bg-secondary text-white hover:bg-green-700 shadow-[0_8px_16px_-8px_rgba(21,128,61,0.5)]",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white bg-transparent",
    dark: "bg-brand-dark text-white hover:bg-green-950",
  };
  return <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}>{children}</button>;
};

const ProgressBar = ({ raised, goal }: { raised: number; goal: number }) => {
  const percentage = Math.min((raised / goal) * 100, 100);
  return (
    <div className="mt-3">
      <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
        <span>Raised: <span className="text-secondary">MK{raised.toLocaleString()}</span></span>
        <span>{percentage.toFixed(0)}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
        <div className="bg-secondary h-full rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="text-right text-[10px] text-slate-400 mt-1.5 font-semibold uppercase tracking-wider">Goal: MK{goal.toLocaleString()}</div>
    </div>
  );
};

// --- Sections ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-9 h-9 bg-secondary rounded-xl flex items-center justify-center text-primary font-bold text-lg shadow-md group-hover:rotate-6 transition-transform">S</div>
        <span className="text-xl font-bold text-brand-dark tracking-tight">Stand for Children</span>
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-7 font-semibold text-slate-500 text-xs uppercase tracking-wider">
        {[
          { name: 'Home', id: '#home' },
          { name: 'Impact', id: '#impact' },
          { name: 'Causes', id: '#causes' },
          { name: 'Transparency', id: '#transparency' },
          { name: 'Contact', id: '#contact' }
        ].map((item) => (
          <a key={item.name} href={item.id} className="hover:text-secondary transition-colors relative group py-2">
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button variant="secondary" size="sm">Get Involved</Button>
      </div>
    </div>
  </nav>
);

const SectionReveal = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const LegalModal = ({ type, onClose }: { type: 'privacy' | 'terms' | 'audit' | null; onClose: () => void }) => {
  if (!type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      text: "At Stand for Children, we are committed to protecting your privacy. We collect minimal data necessary to process donations and provide impact updates. Your data is encrypted and never sold to third parties. We comply with all global data protection regulations to ensure your generous support remains your business."
    },
    terms: {
      title: "Terms of Service",
      text: "By using our platform, you agree to our terms of transparent giving. All donations are processed securely through certified partners. Stand for Children is a registered 501(c)(3) non-profit. Donations are tax-deductible to the extent permitted by law."
    },
    audit: {
      title: "2025 Audit Report",
      text: "Our 2025 financial audit confirms a 92% efficiency rating. For every MK1,000 donated, MK920 goes directly to field programs. Administration accounts for 5%, and fundraising for 3%. We maintain 'Platinum Transparency' status on GuideStar and are audited annually by independent firms."
    }
  }[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="bg-white rounded-[2rem] w-full max-w-lg max-h-[75vh] overflow-hidden relative z-10 shadow-3xl transform transition-all animate-in fade-in zoom-in duration-300 flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-8 pb-0 flex justify-between items-start">
          <div className="max-w-xs">
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-[10px] mb-1 block">Legal Document</span>
            <h2 className="text-2xl font-bold text-brand-dark mb-2 font-serif tracking-tight">{content.title}</h2>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 hover:text-secondary hover:bg-white transition-all"
          >
            <span className="font-serif text-xl">×</span>
          </button>
        </div>
        
        {/* Body Section with Scrolling */}
        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4 custom-scrollbar">
          <p className="text-brand-dark/60 text-[11px] leading-relaxed mb-6 italic border-l-2 border-secondary/20 pl-3">
            Updated February 13, 2026.
          </p>
          
          <div className="space-y-6 pb-4">
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              {content.text}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-brand-light flex items-center justify-center text-secondary shrink-0">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <span className="text-[10px] font-bold text-brand-dark">Verified Identity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-brand-light flex items-center justify-center text-secondary shrink-0">
                  <Success className="w-3 h-3" />
                </div>
                <span className="text-[10px] font-bold text-brand-dark">92% Efficiency</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 md:p-8 bg-slate-50/50 border-t border-slate-100 flex justify-end">
          <Button onClick={onClose} size="sm" className="w-full sm:w-auto px-8 shadow-sm">Close Document</Button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <div id="home" className="relative h-[75vh] w-full flex items-center overflow-hidden">
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
    <div className="container mx-auto px-6 relative z-10 text-white">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-primary px-3 py-1 rounded-full text-brand-dark text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20">
            Emergency Appeal
          </span>
          <span className="text-white/50 text-xs font-medium uppercase tracking-wider hidden sm:block">Global Education Crisis</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1] mb-6 tracking-tight font-serif">
          Every hour <span className="text-primary italic">without school</span> costs a child their future.
        </h1>
        <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
          Amina walks 6km just to fetch water. She should be walking to school. 
          Help us put 1,000 children back in classrooms before school starts Monday.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" variant="primary">Change Amina&apos;s Life Today</Button>
          <button className="px-9 py-4 text-base rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-white/25 text-white bg-white/10 hover:bg-white/20 group">
            See Where Your Money Goes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const StorySpotlight = () => (
  <section className="py-20 bg-brand-light relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 skew-x-12 translate-x-1/2"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Story Image */}
        <div className="relative group">
          <div className="absolute -inset-3 bg-secondary/10 rounded-[3rem] group-hover:scale-105 transition-transform duration-700"></div>
          <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" 
              alt="Amina's Journey" 
              fill 
              className="object-cover" 
            />
            {/* Outcome Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white">
              <div className="flex items-center gap-3 mb-2 text-secondary font-bold uppercase text-[10px] tracking-widest">
                <CheckCircle2 className="w-4 h-4" /> Visible Outcome
              </div>
              <p className="text-brand-dark font-bold text-xl leading-tight font-serif italic">
                &ldquo;I used to walk 4 hours for water. Now, I spend those 4 hours in the library.&rdquo;
              </p>
              <p className="text-slate-500 mt-3 font-semibold uppercase tracking-wider text-[10px]">— Amina, Age 9</p>
            </div>
          </div>
          {/* Floating Intervention Card */}
          <div className="absolute -top-8 -right-8 bg-brand-dark text-white p-6 rounded-[2rem] shadow-xl max-w-[220px] hidden md:block border border-white/10 group-hover:-translate-y-2 transition-transform">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-3">
              <HandHeart className="w-5 h-5 text-brand-dark" />
            </div>
            <h4 className="font-bold text-lg mb-1.5 tracking-tight">The Moment Everything Changed</h4>
            <p className="text-white/50 text-sm leading-relaxed">Your MK84,000 donation provided the well that freed Amina&apos;s future.</p>
          </div>
        </div>

        {/* Right: Narrative Arc */}
        <div>
          <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-4 block">Human Story Arc</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8 tracking-tight leading-[1] font-serif">
            Faces <span className="text-secondary/20">≠</span> Stories.
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 group">
              <div className="flex-none w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center font-bold text-xl text-slate-300 group-hover:bg-primary group-hover:text-brand-dark transition-colors shadow-sm">1</div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-1.5 tracking-tight">The Specific Problem</h3>
                <p className="text-slate-500 leading-relaxed text-base">
                  At 5 AM, Amina began her haul. 20 liters of water is heavy for a 9-year-old. Education was a luxury her community couldn&apos;t afford.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-none w-12 h-12 rounded-xl bg-secondary flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-secondary/20">2</div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-1.5 tracking-tight">The Visible Outcome</h3>
                <p className="text-slate-500 leading-relaxed text-base">
                  We installed a well 100m from her home. Suddenly, the 4-hour walk became a 4-minute walk to school.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 items-center border-t border-slate-200 pt-8">
            <Button size="md" variant="secondary">Sponsor Her Education</Button>
            <div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Direct Support Line</p>
              <p className="text-lg font-bold text-brand-dark tracking-tight">+265 (0) 999 123 456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => {
  const stats = [
    { target: 326, prefix: "", suffix: "", label: "Communities Transformed", icon: MapPin },
    { target: 25, prefix: "MK", suffix: "M", label: "Direct Impact Allocated", icon: Impact },
    { target: 125, prefix: "", suffix: "", label: "Teachers & Protectors", icon: ShieldCheck },
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

const WhyStandForChildren = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-3 block text-center">Why Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight leading-[1.1] mb-10 font-serif text-center">
          Why Stand for Children <span className="text-secondary">works.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: "Local Teams, Not Fly-In Aid", desc: "Our staff live in the communities they serve. No expensive consultants — just neighbours helping neighbours." },
            { icon: ShieldCheck, title: "Funds Released After Proof", desc: "Money is only released when outcomes are verified. No guessing. No waste. Every kwacha tracked." },
            { icon: TrendingUp, title: "3+ Year Commitments", desc: "We don\u2019t do one-off donations. Every school we fund stays funded for a minimum of 3 years." },
          ].map((item, idx) => (
            <div key={idx} className="bg-brand-light/50 rounded-2xl p-6 border border-secondary/5 hover:shadow-lg transition-all group">
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-bold text-brand-dark mb-2 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AminaTimeline = () => (
  <section className="py-14 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-3 block text-center">Continuity</span>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight text-center mb-10 font-serif">Amina&apos;s Timeline</h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-secondary/20 -translate-x-1/2"></div>
          {[
            { month: "Month 0", event: "No clean water source", detail: "Amina walks 4 hours daily. No time for school.", color: "bg-slate-300" },
            { month: "Month 1", event: "Well installed", detail: "Clean water 100m from home. MK84,000 funded by donors.", color: "bg-primary" },
            { month: "Month 6", event: "School attendance +40%", detail: "Amina attends school daily. Reading at grade level.", color: "bg-secondary" },
            { month: "Month 12", event: "Literacy milestone", detail: "Top 5 in her class. Wants to be a teacher.", color: "bg-secondary" },
          ].map((item, idx) => (
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

const DonationFlow = () => (
  <section className="py-14 bg-brand-light/30 border-y border-secondary/5">
    <div className="container mx-auto px-6">
      <div className="text-center mb-8">
        <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-2 block">Process Clarity</span>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight font-serif">What happens after you donate?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[
          { step: "1", title: "You Sponsor a Child", desc: "Choose an amount. Payment is instant and secure.", icon: Heart },
          { step: "2", title: "Funds Released in 72hrs", desc: "Money reaches our local partner within 3 business days.", icon: Clock },
          { step: "3", title: "Photo + Update in 30 Days", desc: "You receive a personal update with proof of impact.", icon: CheckCircle2 },
        ].map((item, idx) => (
          <div key={idx} className="text-center group">
            <div className="w-14 h-14 bg-white rounded-2xl border border-secondary/10 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-lg group-hover:scale-105 transition-all">
              <item.icon className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-[10px] text-secondary font-bold uppercase tracking-wider mb-1">Step {item.step}</div>
            <h3 className="font-bold text-brand-dark text-sm mb-1">{item.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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

const ImpactCards = () => {
  const tiers = [
    { amount: "4,200", label: "School Supplies", impact: "Provides 1 child with books, bags, and uniforms for a full year.", icon: GraduationCap },
    { amount: "8,400", label: "Monthly Meals", impact: "Ensures no child in our programs goes to bed hungry for 30 days.", icon: HandHeart },
    { amount: "16,800", label: "Full Tuition", impact: "Covers a full year of private-quality education for a gifted student.", icon: ShieldCheck },
  ];

  return (
    <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-3 block">Decision Anchors</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1] mb-4 font-serif">Small Change. <span className="text-white/20">Big Impact.</span></h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">Choose a specific outcome. No guesswork. 100% impact.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-[2rem] hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20">
                <tier.icon className="w-6 h-6 text-brand-dark" />
              </div>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight font-serif text-white">MK{tier.amount}</span>
                <span className="text-white/40 font-semibold uppercase tracking-wider text-[10px]">/ Life Changed</span>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{tier.label}</h3>
              <p className="text-white/50 mb-8 leading-relaxed text-sm">{tier.impact}</p>
              <button className="w-full px-7 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-2 border-white/15 text-white hover:bg-white hover:text-[#14532d]">Sponsor This Today</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AuthorityQuote = () => (
  <section className="py-20 bg-brand-light/20 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto bg-brand-dark rounded-[2.5rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[0_30px_60px_-15px_rgba(20,83,45,0.4)] border border-white/5">
        <div className="relative flex-none">
          <div className="w-24 h-24 rounded-3xl bg-secondary flex items-center justify-center text-white font-bold text-3xl font-serif shadow-2xl rotate-3">GM</div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg -rotate-12 border-2 border-brand-dark">
            <ShieldCheck className="w-5 h-5 text-brand-dark" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Leadership Statement</p>
          <blockquote className="text-white text-2xl md:text-3xl leading-snug mb-8 font-serif italic font-medium">
            &ldquo;We reject short-term aid. If we can&apos;t fund a child for <span className="text-primary italic">at least 3 years</span>, we don&apos;t start. That&apos;s our promise to them.&rdquo;
          </blockquote>
          <div className="flex flex-col md:flex-row md:items-center gap-4 border-t border-white/10 pt-8">
            <div>
              <p className="text-white font-bold text-xl tracking-tight leading-none mb-1">Grace Mwanza</p>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">Regional Director, Sub-Saharan Africa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AnimatedCounter = ({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={counterRef}>{prefix}{count}{suffix}</span>;
};

const AnimatedBar = ({ color, percentage, label, description, delay }: { color: string; percentage: number; label: string; description: string; delay: number }) => {
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
        <span className={`font-bold text-sm ${color === 'bg-secondary' ? 'text-secondary' : 'text-brand-dark'}`}>{percentage}%</span>
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

const Transparency = () => {
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

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
              <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-4 block">Trust &amp; Transparency</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-[1.1] mb-6 font-serif">
                Where your money <span className="text-secondary">actually goes.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl">
                Donors don&apos;t doubt your heart—they doubt your systems. We maintain a 92% efficiency rating, meaning almost every cent reaches the field.
              </p>

              {/* Animated Allocation Bars */}
              <div className="space-y-5 mb-8">
                <AnimatedBar color="bg-secondary" percentage={85} label="Programs &amp; Direct Aid" description="Classrooms, supplies, teacher salaries, clean water" delay={0} />
                <AnimatedBar color="bg-primary" percentage={10} label="Fundraising" description="Growing our donor community" delay={200} />
                <AnimatedBar color="bg-slate-300" percentage={5} label="Administration" description="Essential operations &amp; compliance" delay={400} />
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
                       <p className="text-4xl font-bold text-brand-dark font-serif">{chartVisible ? '92' : '0'}%</p>
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

const LastChanceCTA = () => (
  <section className="py-20 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-brand-dark bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight leading-[1] font-serif">
        School starts in <span className="text-secondary">48 hours.</span>
      </h2>
      <p className="text-brand-dark/70 text-lg font-medium mb-3 max-w-xl mx-auto">37 children still lack uniforms. One sponsorship changes everything.</p>
      <p className="text-brand-dark/50 text-sm mb-8">100% of your donation reaches the classroom. Verified by independent audit.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" variant="secondary">Sponsor a Child Now</Button>
        <Button size="lg" variant="dark">Follow Amina&apos;s Journey</Button>
      </div>
      <p className="text-brand-dark/40 text-xs mt-6 font-semibold">Not ready? Get monthly impact stories instead →</p>
    </div>
  </section>
);

const Footer = ({ onOpenLegal }: { onOpenLegal: (type: 'privacy' | 'terms' | 'audit') => void }) => (
  <footer id="contact" className="bg-brand-dark text-white py-14 border-t border-white/5 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand Block */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-brand-dark font-bold text-base shadow-lg">S</div>
            <span className="text-xl font-bold text-white tracking-tighter">Stand for Children</span>
          </div>
          <p className="leading-relaxed text-white/40 text-sm max-w-xs">
            Transforming communities through radical transparency and verified impact since 2009.
          </p>
          <div className="flex gap-3">
             {[Users, Heart, Shield].map((Icon, i) => (
               <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-brand-dark transition-all duration-300 cursor-pointer group">
                 <Icon className="w-4 h-4 text-white group-hover:text-brand-dark transition-colors" />
               </div>
             ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div>
          <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6">Navigation</h4>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
            {[
              { name: 'Mission', id: '#home' },
              { name: 'Financials', id: '#transparency' },
              { name: 'Board', id: '#impact' },
              { name: 'Impact', id: '#impact' },
              { name: 'Careers', id: '#' },
              { name: 'Causes', id: '#causes' }
            ].map(l => (
              <li key={l.name}><a href={l.id} className="text-white/40 hover:text-white transition-colors text-sm font-medium">{l.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Regions */}
        <div>
          <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6">Active Regions</h4>
          <ul className="space-y-3">
            {['Sub-Saharan Africa', 'Southeast Asia', 'Latin America'].map((region, i) => (
              <li key={i} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-pointer group">
                <MapPin className="w-3 h-3 text-secondary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{region}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Compact */}
        <div>
          <h4 className="text-white font-bold text-base mb-3 tracking-tight">Stay Connected</h4>
          <p className="mb-4 text-white/30 text-sm leading-relaxed">Verified impact stories, delivered monthly.</p>
          <div className="flex flex-col gap-2">
            <div className="relative group">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 w-full pl-4 pr-12 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm text-white placeholder:text-white/20" />
              <button className="absolute right-1 top-1 bottom-1 bg-primary px-3 rounded-lg text-brand-dark flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-white/10 italic">Join 25,000+ donors today.</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20">
         <p className="text-xs font-medium uppercase tracking-[0.1em]">© 2026 Stand for Children NGO. 501(c)(3) Registered.</p>
         <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            {[
              { name: 'Privacy', type: 'privacy' },
              { name: 'Terms', type: 'terms' },
              { name: 'Audit', type: 'audit' }
            ].map(link => (
              <span 
                key={link.name} 
                className="hover:text-primary transition-all cursor-pointer" 
                onClick={() => onOpenLegal(link.type as any)}
              >
                {link.name}
              </span>
            ))}
         </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'audit' | null>(null);

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-text-main selection:bg-primary selection:text-brand-dark">
      <SocialProof />
      <Navbar />
      <Hero />
      <SectionReveal><Stats /></SectionReveal>
      <SectionReveal><WhyStandForChildren /></SectionReveal>
      <SectionReveal><StorySpotlight /></SectionReveal>
      <SectionReveal><AminaTimeline /></SectionReveal>
      <SectionReveal><ImpactCards /></SectionReveal>
      <SectionReveal><DonationFlow /></SectionReveal>
      <SectionReveal><Causes /></SectionReveal>
      <SectionReveal><AuthorityQuote /></SectionReveal>
      <SectionReveal><Transparency /></SectionReveal>
      <SectionReveal><LastChanceCTA /></SectionReveal>
      <Footer onOpenLegal={setLegalModal} />
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </main>
  );
}