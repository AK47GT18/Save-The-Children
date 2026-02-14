"use client";

import React from 'react';
import Image from 'next/image';

const board = [
  { name: "Hon. Jane Chimutu", role: "Chairperson", roleDesc: "Former Minister of Education with 30 years of public service experience." },
  { name: "Dr. Robert Lawson", role: "Vice Chair", roleDesc: "Global health expert and former WHO consultant for rural medicine." },
  { name: "Precious Kapita", role: "Treasurer", roleDesc: "Chartered Accountant and specialist in NGO financial sustainability." },
  { name: "Thoko Mbeki", role: "Governance", roleDesc: "Human rights lawyer focusing on child protection and legislative policy." },
];

export default function BoardPage() {
  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Leadership</span>
          <h1 className="text-5xl font-bold text-brand-dark mb-6 font-serif">Board of Trustees</h1>
          <p className="text-xl text-slate-500">
            Our board provides the strategic direction and governance required to maintain our high standards of excellence and transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {board.map((member, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="flex-none w-32 h-32 rounded-3xl bg-brand-light border border-slate-100 overflow-hidden relative shadow-md">
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center font-bold text-primary italic text-3xl">
                  {member.name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark tracking-tight">{member.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.roleDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
