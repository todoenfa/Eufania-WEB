import React from 'react';
import { Icon } from './Icon';
import { PricingPack } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const Packs: React.FC = () => {
  const { t, language } = useLanguage();

  const packsES: PricingPack[] = [
    {
      title: "Básico",
      items: ["Medición Acústica Presencial", "Instalación y Supervisión"],
      price: "$425.000",
      installments: "ó 3 cuotas de $176.667",
      discount: "5% OFF EXTRA",
      isPopular: false,
      link: "https://wa.me/5491165189255?text=Hola,%20estoy%20interesado%20en%20el%20Pack%20Basico.%20Me%20podrian%20dar%20mas%20info?"
    },
    {
      title: "Completo",
      items: ["Medición Acústica Presencial", "Diseño Integral + Renders (Virtual)", "Documentación de Obra"],
      price: "DESDE $820.000",
      installments: "ó 3 cuotas de $341.667",
      discount: "8% OFF EXTRA",
      isPopular: true,
      link: "https://wa.me/5491165189255?text=Hola,%20estoy%20interesado%20en%20el%20Pack%20Completo.%20Me%20podrian%20dar%20mas%20info?"
    },
    {
      title: "Premium",
      items: ["Medición Acústica Presencial", "Instalación y Supervisión", "Diseño Integral (Presencial)", "Documentación de Obra", "Dirección y Ejecución de Obra"],
      price: "DESDE $1.230.000 + Obra",
      installments: "ó 3 cuotas de $511.667",
      discount: "10% OFF EXTRA",
      isPopular: false,
      link: "https://wa.me/5491165189255?text=Hola,%20estoy%20interesado%20en%20el%20Pack%20Premium.%20Me%20podrian%20dar%20mas%20info?"
    }
  ];

  const packsEN: PricingPack[] = [
    {
      title: "Basic",
      items: ["In-Person Acoustic Measurement", "Installation & Supervision"],
      price: "$425.000",
      installments: "or 3 installments of $176.667",
      discount: "5% OFF EXTRA",
      isPopular: false,
      link: "https://wa.me/5491165189255?text=Hi,%20I'm%20interested%20in%20the%20Basic%20Bundle.%20Could%20I%20get%20more%20info?"
    },
    {
      title: "Complete",
      items: ["In-Person Acoustic Measurement", "Integral Design + Renders (Virtual)", "Construction Documentation"],
      price: "FROM $820.000",
      installments: "or 3 installments of $341.667",
      discount: "8% OFF EXTRA",
      isPopular: true,
      link: "https://wa.me/5491165189255?text=Hi,%20I'm%20interested%20in%20the%20Complete%20Bundle.%20Could%20I%20get%20more%20info?"
    },
    {
      title: "Premium",
      items: ["In-Person Acoustic Measurement", "Installation & Supervision", "Integral Design (In-Person)", "Construction Documentation", "Direction & Execution"],
      price: "FROM $1.230.000 + Works",
      installments: "or 3 installments of $511.667",
      discount: "10% OFF EXTRA",
      isPopular: false,
      link: "https://wa.me/5491165189255?text=Hi,%20I'm%20interested%20in%20the%20Premium%20Bundle.%20Could%20I%20get%20more%20info?"
    }
  ];

  const packs = language === 'en' ? packsEN : packsES;

  const renderPackPrice = (priceString: string) => {
    // Check both languages key word
    if (priceString.includes('DESDE') || priceString.includes('FROM')) {
      const cleanPrice = priceString.replace('DESDE', '').replace('FROM', '').trim();
      return (
        <div className="flex flex-col items-center leading-none mb-2">
          <span className="text-[11px] font-bold text-slate-400 mb-1 tracking-wider opacity-80">{t('card.from')}</span>
          <span className="text-3xl font-bold">{cleanPrice}</span>
        </div>
      );
    }
    return <div className="text-3xl font-bold mb-1">{priceString}</div>;
  };

  return (
    <section className="mb-24 bg-slate-100 dark:bg-slate-900/50 py-20 rounded-6xl scroll-mt-24" id="packs">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Icon name="auto_awesome" className="text-sm" /> {t('packs.offer')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t('packs.title')}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {packs.map((pack, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col rounded-5xl p-10 shadow-xl transition-all duration-300 ${
                pack.isPopular 
                  ? 'bg-primary text-white scale-105 hover:scale-110 z-10 border-4 border-white dark:border-slate-900 shadow-2xl shadow-primary/20' 
                  : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:z-10 hover:scale-105'
              }`}
            >
              {/* Badge */}
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                pack.isPopular ? 'bg-white text-primary' : 'bg-slate-900 dark:bg-slate-700 text-white'
              }`}>
                {pack.title}
              </div>

              {/* Items */}
              <div className="flex-1 text-center py-8">
                <div className="space-y-4 font-medium text-sm md:text-base opacity-90">
                  {pack.items.map((item, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && (
                        <div className="flex justify-center">
                          <Icon name="add" className={`text-sm ${pack.isPopular ? 'text-white/60' : 'text-primary'}`} />
                        </div>
                      )}
                      <p>{item}</p>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Price Area */}
              <div className={`text-center pt-8 border-t ${pack.isPopular ? 'border-white/20' : 'border-slate-100 dark:border-slate-700'}`}>
                
                {renderPackPrice(pack.price)}
                
                <div className={`text-sm mb-4 italic ${pack.isPopular ? 'opacity-80' : 'text-slate-400'}`}>{pack.installments}</div>
                
                <div className="relative group inline-block mb-8">
                    <div className={`px-4 py-1 rounded-lg font-bold text-sm cursor-help ${
                        pack.isPopular ? 'bg-white text-primary' : 'bg-green-100 text-green-700'
                    }`}>
                        {pack.discount}
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-slate-800 text-white text-xs font-medium rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-center leading-tight pointer-events-none transform origin-bottom scale-90 group-hover:scale-100">
                        {t('packs.discount_tooltip')}
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"></div>
                    </div>
                </div>

                <a 
                  href={pack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-2xl font-bold transition-transform active:scale-95 shadow-lg ${
                    pack.isPopular ? 'bg-white text-primary' : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                >
                    {t('card.want')} &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};