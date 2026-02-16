"use client";

import React from 'react';
import Button from '../ui/Button';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { openModal } = useDonation();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Impact', href: '/impact' },
    { name: 'Causes', href: '/causes' },
    { name: 'Financials', href: '/financials' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 bg-secondary rounded-xl flex items-center justify-center text-primary font-bold text-lg shadow-md group-hover:rotate-6 transition-transform">S</div>
          <span className="text-xl font-bold text-brand-dark tracking-tight">Stand for Children</span>
        </Link>

        {/* Desktop Menu & Actions */}
        <div className="flex items-center gap-7">
          <div className="hidden md:flex gap-7 font-bold text-slate-500 text-xs uppercase tracking-wider">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href.startsWith('/#') && pathname === '/');
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`transition-colors relative group py-2 ${isActive ? 'text-secondary' : 'hover:text-secondary'}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/sponsor-a-child" className="hidden xs:block">
              <Button variant="secondary" size="sm">Sponsor a Child</Button>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-brand-light border border-slate-100 flex items-center justify-center text-brand-dark hover:bg-white hover:shadow-md transition-all active:scale-95"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Toast Menu */}
      <div className={`md:hidden fixed top-20 right-4 w-64 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-slate-100 p-6 transition-all duration-300 transform origin-top-right ${isMenuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 border-b border-slate-50 pb-2">Navigation</p>
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-bold uppercase tracking-wider py-2 flex items-center justify-between group ${isActive ? 'text-secondary' : 'text-slate-500 hover:text-secondary'}`}
              >
                {item.name}
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>}
              </Link>
            );
          })}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link href="/sponsor-a-child" onClick={() => setIsMenuOpen(false)}>
              <Button variant="secondary" size="sm" className="w-full">Sponsor a Child</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
