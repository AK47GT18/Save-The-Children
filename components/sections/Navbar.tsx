import React from 'react';
import Button from '../ui/Button';

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

export default Navbar;
