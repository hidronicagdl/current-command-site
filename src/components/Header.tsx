import React, { useState } from 'react';
// ELIMINADO: import { Link } from 'react-router-dom'; <--- Ya no lo necesitamos
import { SITE_CONFIG, NAV_ITEMS } from '../constants'; // ¡OJO! Asegúrate de mover este archivo también
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm font-mono">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="text-xl md:text-2xl font-bold text-industrial-blue tracking-tighter uppercase hover:opacity-90 transition-opacity"
        >
          {SITE_CONFIG.companyName}
          <span className="block text-[10px] text-steel-gray font-normal tracking-widest">
            OPERADO POR SIBI
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="text-sm font-semibold text-steel-gray hover:text-industrial-blue transition-colors uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-industrial-blue focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4">
          <nav className="flex flex-col space-y-4 px-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileOpen(false)}
                className="text-base font-semibold text-steel-gray hover:text-industrial-blue border-l-4 border-transparent hover:border-industrial-blue pl-2 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};