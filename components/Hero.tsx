import React, { useState } from 'react';
import { Icon } from './Icon';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imágenes cargadas desde la carpeta public
  const galleryImages = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png"
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openGallery = () => {
    setCurrentImageIndex(0);
    setIsGalleryOpen(true);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <section className="container mx-auto px-6 py-8 md:py-12 scroll-mt-32" id="inicio">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
          
          {/* Content */}
          <div className="md:w-1/2 space-y-6 relative z-10">
            <span className="inline-block bg-primary/20 text-primary-dark dark:text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
              {t('hero.welcome')}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] text-slate-900 dark:text-white">
              {t('hero.title.1')} <span className="text-primary italic">{t('hero.title.2')}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
              {t('hero.desc')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                  href="#servicios" 
                  onClick={(e) => handleScroll(e, 'servicios')}
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:-translate-y-1 transition-transform cursor-pointer"
              >
                {t('hero.cta.services')}
              </a>
              <a 
                  href="#nosotros" 
                  onClick={(e) => handleScroll(e, 'nosotros')}
                  className="flex items-center gap-2 px-6 py-4 font-bold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors group cursor-pointer"
              >
                {t('hero.cta.about')} <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visuals - Image Interactive */}
          <div className="md:w-1/2 relative w-full">
            {/* Contenedor con rotación y estilos */}
            <div 
                className="aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl md:rotate-2 relative group bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer"
                onClick={openGallery}
            >
              
              {/* Static Image Element con animación Ken Burns */}
              <img
                src={galleryImages[0]} 
                alt="Estudio Eufanía Portada"
                className="w-full h-full object-cover animate-slow-pan group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay sutil para mejorar contraste */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:bg-black/20 transition-colors"></div>
              
              {/* Icono de ampliar al hacer hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/30 backdrop-blur-md p-4 rounded-full text-white">
                    <Icon name="visibility" className="text-3xl" />
                </div>
              </div>
            </div>
            
            {/* Floating Badge (Más chico) */}
            <div 
                className="absolute -bottom-6 -left-2 md:-left-6 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 -rotate-2 animate-bounce-slow border border-slate-100 dark:border-slate-700 z-20 cursor-pointer hover:scale-105 transition-transform"
                onClick={openGallery}
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Icon name="photo_library" className="text-lg" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900 dark:text-white">{t('hero.gallery.title')}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wide">{t('hero.gallery.subtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setIsGalleryOpen(false)}>
            <button 
                className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2 z-50"
                onClick={() => setIsGalleryOpen(false)}
            >
                <Icon name="close" className="text-4xl" />
            </button>

            <button 
                className="absolute left-4 md:left-8 text-white hover:text-primary transition-colors p-4 bg-white/10 hover:bg-white/20 rounded-full z-50"
                onClick={prevImage}
            >
                <Icon name="arrow_back_ios" className="text-2xl" />
            </button>

            <div className="max-w-6xl max-h-[85vh] w-full rounded-lg overflow-hidden relative shadow-2xl flex items-center justify-center bg-black" onClick={(e) => e.stopPropagation()}>
                <img 
                    src={galleryImages[currentImageIndex]} 
                    alt={`Proyecto Eufanía ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain max-h-[85vh]"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-1 rounded-full text-white text-sm backdrop-blur-md">
                    {currentImageIndex + 1} / {galleryImages.length}
                </div>
            </div>

            <button 
                className="absolute right-4 md:right-8 text-white hover:text-primary transition-colors p-4 bg-white/10 hover:bg-white/20 rounded-full z-50"
                onClick={nextImage}
            >
                <Icon name="arrow_forward_ios" className="text-2xl" />
            </button>
        </div>
      )}
    </>
  );
};