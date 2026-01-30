import React from 'react';
import { Icon } from './Icon';
import { useLanguage } from '../contexts/LanguageContext';

export const ProblemSolution: React.FC = () => {
  const { t } = useLanguage();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="container mx-auto px-6 mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Problems Section */}
        <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">
                    {t('problem.title')}
                </h3>
                
                <ul className="space-y-8">
                    <li className="flex gap-4 items-start">
                        <div className="w-12 h-12 min-w-[3rem] bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
                            <Icon name="hearing_disabled" />
                        </div>
                        <p className="text-slate-600 font-medium leading-tight pt-2">
                            {t('problem.1')}
                        </p>
                    </li>
                    <li className="flex gap-4 items-start">
                         <div className="w-12 h-12 min-w-[3rem] bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
                            <Icon name="manage_search" />
                        </div>
                        <p className="text-slate-600 font-medium leading-tight pt-2">
                            {t('problem.2')}
                        </p>
                    </li>
                    <li className="flex gap-4 items-start">
                         <div className="w-12 h-12 min-w-[3rem] bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
                            <Icon name="graphic_eq" />
                        </div>
                        <p className="text-slate-600 font-medium leading-tight pt-2">
                            {t('problem.3')}
                        </p>
                    </li>
                    <li className="flex gap-4 items-start">
                         <div className="w-12 h-12 min-w-[3rem] bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
                            <Icon name="design_services" />
                        </div>
                        <p className="text-slate-600 font-medium leading-tight pt-2">
                            {t('problem.4')}
                        </p>
                    </li>
                </ul>

                <div className="mt-12 text-right">
                    <a 
                        href="#contacto" 
                        onClick={(e) => handleScroll(e, 'contacto')}
                        className="inline-block text-slate-400 font-bold text-sm uppercase tracking-widest animate-pulse hover:text-primary transition-colors cursor-pointer"
                    >
                        {t('problem.cta')}
                    </a>
                </div>
            </div>
        </div>

        {/* Solutions Section */}
        <div className="bg-primary text-white rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden shadow-2xl shadow-primary/20">
            {/* Background Image Effect */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background" />
            </div>

            <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-white">
                    {t('solution.title')}
                </h3>
                
                <ul className="space-y-8">
                    <li className="flex gap-4 items-start">
                        <div className="w-12 h-12 min-w-[3rem] bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                            <Icon name="volume_up" />
                        </div>
                        <p className="text-white/90 font-medium leading-tight pt-2">
                            {t('solution.1')}
                        </p>
                    </li>
                    <li className="flex gap-4 items-start">
                         <div className="w-12 h-12 min-w-[3rem] bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                            <Icon name="brush" />
                        </div>
                        <p className="text-white/90 font-medium leading-tight pt-2">
                            {t('solution.2')}
                        </p>
                    </li>
                    <li className="flex gap-4 items-start">
                         <div className="w-12 h-12 min-w-[3rem] bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                            <Icon name="check_circle" />
                        </div>
                        <p className="text-white/90 font-medium leading-tight pt-2">
                            {t('solution.3')}
                        </p>
                    </li>
                     <li className="flex gap-4 items-start">
                         <div className="w-12 h-12 min-w-[3rem] bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                            <Icon name="trending_up" />
                        </div>
                        <p className="text-white/90 font-medium leading-tight pt-2">
                            {t('solution.4')}
                        </p>
                    </li>
                </ul>

                <div className="mt-12">
                     <a 
                        href="#contacto" 
                        onClick={(e) => handleScroll(e, 'contacto')}
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg cursor-pointer"
                     >
                        {t('solution.cta')} <Icon name="arrow_downward" />
                     </a>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};