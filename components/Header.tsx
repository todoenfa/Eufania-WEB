import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const navItems = ['Inicio', 'Servicios', 'Packs', 'Nosotros'];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO SECTION */}
        <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="block group">
           {/* IMAGEN: LOGO.png */}
           <img 
             src="/LOGO.png" 
             alt="Eufanía Acústica & Diseño" 
             className="h-12 md:h-14 w-auto object-contain transition-opacity duration-300"
             onError={(e) => {
               // Fallback seguro: Oculta la imagen rota y muestra el texto
               e.currentTarget.style.display = 'none';
               e.currentTarget.nextElementSibling?.classList.remove('hidden');
               e.currentTarget.nextElementSibling?.classList.add('flex');
             }}
           />
           
           {/* Fallback visual (Texto) si no hay imagen */}
           <div className="hidden items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
                <Icon name="graphic_eq" className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tighter leading-none text-slate-900">EUFANÍA</h1>
                <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">Acústica & Diseño</p>
              </div>
           </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-slate-600 hover:text-primary transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contacto" 
            onClick={(e) => handleNavClick(e, 'contacto')}
            className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 cursor-pointer"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Icon name={isMenuOpen ? "close" : "menu"} className="text-2xl text-slate-900" />
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
           {navItems.map((item) => (
            <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-lg font-medium text-slate-700 cursor-pointer"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contacto" 
            onClick={(e) => handleNavClick(e, 'contacto')}
            className="bg-primary text-white text-center py-3 rounded-xl font-bold cursor-pointer"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
};