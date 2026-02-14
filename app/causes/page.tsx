"use client";

import React from 'react';
import Image from 'next/image';
import { Heart, GraduationCap, Waves, Activity, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useDonation } from '@/context/DonationContext';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const GET_CAUSES = gql`
  query GetCauses {
    posts(first: 6) {
      nodes {
        id
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const missionVerticals = [
  {
    title: "Education & Literacy",
    icon: GraduationCap,
    desc: "Building schools, training local teachers, and providing curriculum materials that empower the next generation.",
    stat: "42k+ Children Enrolled"
  },
  {
    title: "Clean Water & Hygiene",
    icon: Waves,
    desc: "Drilling deep-capped boreholes and implementing community-led sanitation programs to eliminate waterborne illness.",
    stat: "150k+ Residents Reached"
  },
  {
    title: "Community Health",
    icon: Activity,
    desc: "Establishing regional health posts focused on maternal care, pediatric nutrition, and emergency response.",
    stat: "45 Clinics Built"
  }
];

export default function CausesPage() {
  const { openModal } = useDonation();
  const { loading, data } = useQuery<{ posts: { nodes: any[] } }>(GET_CAUSES);

  const blogCauses = data?.posts?.nodes || [];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-dark text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-secondary/5 skew-x-12 -translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-6 block tracking-[0.3em]">The Mission Verticals</span>
            <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-8">
              Focused on what <br /> <span className="text-primary italic">actually matters.</span>
            </h1>
            <p className="text-white/40 text-xl leading-relaxed max-w-xl mb-12">
              We specialize in deep, long-term interventions that solve the root causes of poverty. From the classroom to the clinic, our work is targeted and permanent.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Verticals Breakdown */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {missionVerticals.map((vertical, i) => (
              <div key={i} className="group p-8 rounded-[3rem] bg-brand-light/20 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                  <vertical.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">{vertical.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">{vertical.desc}</p>
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{vertical.stat}</span>
                  <Activity className="w-4 h-4 text-slate-100 group-hover:text-secondary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Community Causes (from CMS) */}
      <section className="py-24 bg-brand-light/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-4 block">Active Priorities</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-serif tracking-tight leading-tight">
                Live projects <br /> <span className="text-slate-300 italic">requiring immediate support.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              [1, 2, 3].map(i => (
                <div key={i} className="h-[500px] rounded-[2rem] bg-slate-100 animate-pulse"></div>
              ))
            ) : (
              blogCauses.map((post: any) => (
                <div key={post.id} className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 bg-white">
                  <Image 
                    src={post.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Awaiting Sponsorship</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 font-serif leading-tight">{post.title}</h3>
                    <div 
                      className="text-gray-300 text-sm mb-6 line-clamp-2 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                    <Button variant="secondary" className="w-full" onClick={openModal}>
                      Support This Cause
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Philosophy of Sustainability - Redesigned Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]"></div>
              <div className="relative z-10">
                <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-6 block tracking-[0.3em]">Our Philosophical Bridge</span>
                <h2 className="text-4xl md:text-6xl font-bold font-serif text-brand-dark leading-tight mb-8">
                  Solving problems <br /> at the <span className="text-secondary italic">source.</span>
                </h2>
                <p className="text-slate-500 text-xl leading-relaxed mb-12 border-l-4 border-secondary/20 pl-6">
                  "Giving food feeds a child for a day. Ensuring a community has irrigation and resilient seeds feeds them for generations. We choose the latter."
                </p>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "Locally Led", desc: "100% project management by community elders." },
                    { label: "Zero Waste", desc: "No intermediary agency overhead or middle-men." },
                    { label: "Verified Data", desc: "Satellite-tracked results for every funding cycle." },
                    { label: "Permanent Audit", desc: "Continuous third-party financial scrutiny." }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <p className="text-xs font-bold text-brand-dark uppercase tracking-widest">{item.label}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative pt-20 lg:pt-0">
              <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[500px]">
                <div className="col-span-8 row-span-8 bg-brand-dark rounded-[3rem] p-12 flex flex-col justify-between text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <Heart className="w-10 h-10 text-primary mb-6" />
                    <p className="text-4xl font-bold font-serif">$0.92</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-2">Goes directly to the field</p>
                  </div>
                  <div className="relative z-10 pt-12">
                     <p className="text-sm font-medium leading-relaxed text-white/60">We operate with the lowest overhead in the sector by leveraging institutional grants for logistics.</p>
                  </div>
                </div>
                <div className="col-span-4 row-span-5 bg-secondary rounded-[2.5rem] p-6 flex items-center justify-center shadow-xl shadow-secondary/20">
                   <div className="text-center">
                     <p className="text-2xl font-bold text-white font-serif tracking-tight">92%</p>
                     <p className="text-[9px] font-bold uppercase tracking-widest text-white/60">Efficiency Ratio</p>
                   </div>
                </div>
                <div className="col-start-9 col-span-4 row-start-6 row-span-7 bg-brand-light rounded-[2.5rem] border border-slate-100 flex items-center justify-center p-6">
                   <ShieldCheck className="w-12 h-12 text-secondary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </main>
  );
}
