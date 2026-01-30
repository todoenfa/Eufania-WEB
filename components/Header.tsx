import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { useLanguage } from '../contexts/LanguageContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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

  const navKeys = [
      { key: 'nav.home', id: 'inicio' },
      { key: 'nav.services', id: 'servicios' },
      { key: 'nav.packs', id: 'packs' },
      { key: 'nav.about', id: 'nosotros' }
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO SECTION */}
        <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="flex items-center gap-3 group">
           {/* Logo Circular con borde */}
           <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-primary/30 border-2 border-white ring-2 ring-primary">
             <Icon name="graphic_eq" className="text-2xl" />
           </div>
           <div className="flex flex-col">
             <span className="font-bold text-2xl tracking-tight text-slate-800 dark:text-white group-hover:text-primary transition-colors leading-none">
               EUFANÍA
             </span>
             <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
               Acústica & Diseño
             </span>
           </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
          {navKeys.map((item) => (
            <a 
              key={item.key} 
              href={`#${item.id}`} 
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-slate-600 hover:text-primary transition-colors cursor-pointer"
            >
              {t(item.key)}
            </a>
          ))}
          
          {/* Language Selector Desktop */}
          <div className="relative">
            <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-200 transition-colors text-xs font-bold text-slate-700"
            >
                <Icon name="language" className="text-sm" />
                {language.toUpperCase()}
                <Icon name="expand_more" className="text-sm" />
            </button>
            {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden min-w-[100px] flex flex-col">
                    <button 
                        onClick={() => { setLanguage('es'); setIsLangMenuOpen(false); }}
                        className={`px-4 py-2 text-left text-sm hover:bg-slate-50 ${language === 'es' ? 'font-bold text-primary' : 'text-slate-600'}`}
                    >
                        Español
                    </button>
                    <button 
                        onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                        className={`px-4 py-2 text-left text-sm hover:bg-slate-50 ${language === 'en' ? 'font-bold text-primary' : 'text-slate-600'}`}
                    >
                        English
                    </button>
                </div>
            )}
          </div>

          <a 
            href="#contacto" 
            onClick={(e) => handleNavClick(e, 'contacto')}
            className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 cursor-pointer"
          >
            {t('nav.contact')}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex gap-4 items-center md:hidden">
            {/* Language Mobile */}
             <button 
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="bg-slate-100 px-2 py-1 rounded-md text-xs font-bold text-slate-700 uppercase"
            >
                {language}
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? "close" : "menu"} className="text-2xl text-slate-900" />
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
           {navKeys.map((item) => (
            <a 
                key={item.key} 
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-lg font-medium text-slate-700 cursor-pointer"
            >
              {t(item.key)}
            </a>
          ))}
          <a 
            href="#contacto" 
            onClick={(e) => handleNavClick(e, 'contacto')}
            className="bg-primary text-white text-center py-3 rounded-xl font-bold cursor-pointer"
          >
            {t('nav.contact')}
          </a>
        </div>
      )}
    </header>
  );
};