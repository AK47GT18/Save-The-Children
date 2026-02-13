import React from 'react';
import Image from 'next/image';
import { CheckCircle2, HandHeart } from 'lucide-react';
import Button from '../ui/Button';

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

export default StorySpotlight;
