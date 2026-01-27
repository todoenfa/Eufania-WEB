import React from 'react';
import { Icon } from './Icon';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="container mx-auto px-6 py-8 md:py-12 scroll-mt-32" id="inicio">
      <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
        
        {/* Content */}
        <div className="md:w-1/2 space-y-6 relative z-10">
          <span className="inline-block bg-primary/20 text-primary-dark dark:text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
            BIENVENID@S A EUFANÍA
          </span>
          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] text-slate-900 dark:text-white">
            Donde el diseño y la acústica <span className="text-primary italic">se unen.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
            Optimizamos la funcionalidad y el sonido de tu espacio: control room, sala de ensayo, home studio, oficinas y más.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
                href="#servicios" 
                onClick={(e) => handleScroll(e, 'servicios')}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:-translate-y-1 transition-transform cursor-pointer"
            >
              Ver Servicios
            </a>
            <a 
                href="#nosotros" 
                onClick={(e) => handleScroll(e, 'nosotros')}
                className="flex items-center gap-2 px-6 py-4 font-bold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors group cursor-pointer"
            >
              Conocenos <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Visuals - Image instead of Video */}
        <div className="md:w-1/2 relative w-full">
          {/* Contenedor con rotación y estilos */}
          <div className="aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl md:rotate-2 relative group bg-slate-900 border border-slate-100 dark:border-slate-800">
            
            {/* Static Image Element */}
            <img
              src="/INICIO.png" 
              alt="Estudio Eufanía"
              className="w-full h-full object-cover animate-slow-pan"
            />
            
            {/* Overlay sutil para mejorar contraste */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-2 md:-left-6 bg-white dark:bg-slate-800 p-4 md:p-6 rounded-2xl shadow-xl flex items-center gap-4 -rotate-2 animate-bounce-slow border border-slate-100 dark:border-slate-700 z-20">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Icon name="bolt" />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Soluciones Reales</p>
              <p className="text-xs text-slate-500">Rápido y profesional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};