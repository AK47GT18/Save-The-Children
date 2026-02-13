import React from 'react';
import { Users, Heart, Shield, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'audit') => void;
}

const Footer = ({ onOpenLegal }: FooterProps) => (
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

export default Footer;
