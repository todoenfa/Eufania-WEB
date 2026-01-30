import React from 'react';
import { Icon } from './Icon';
import { useLanguage } from '../contexts/LanguageContext';

export const AboutUs: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto px-6 mb-24 scroll-mt-24" id="nosotros">
      <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">{t('about.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        {/* Euge */}
        <div className="text-center space-y-6">
          <div className="relative inline-block group">
            <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-primary/20 transition-all duration-500 group-hover:border-primary/50 bg-slate-200">
              <img 
                src="/euge.png" 
                alt="Euge" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <div className="absolute -bottom-2 right-4 bg-primary text-white p-3 rounded-full shadow-lg transform group-hover:-rotate-12 transition-transform">
              <Icon name="brush" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Euge</h3>
            <p className="text-primary font-bold uppercase tracking-widest text-xs mt-1">{t('about.euge.role')}</p>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-6">
            {t('about.euge.desc')}
          </p>
        </div>

        {/* Facu */}
        <div className="text-center space-y-6">
          <div className="relative inline-block group">
            <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-primary/20 transition-all duration-500 group-hover:border-primary/50 bg-slate-200">
              <img 
                src="/facu.png" 
                alt="Facu" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <div className="absolute -bottom-2 right-4 bg-primary text-white p-3 rounded-full shadow-lg transform group-hover:rotate-12 transition-transform">
              <Icon name="graphic_eq" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Facu</h3>
            <p className="text-primary font-bold uppercase tracking-widest text-xs mt-1">{t('about.facu.role')}</p>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-6">
            {t('about.facu.desc')}
          </p>
        </div>
      </div>
    </section>
  );
};