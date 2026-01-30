import React from 'react';
import { Icon } from './Icon';
import { ServiceItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  item: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const { t } = useLanguage();
  
  // Función auxiliar para estilizar el "DESDE"
  const renderPriceWithStyle = (
    priceString: string | undefined, 
    priceColorClass: string, 
    isPresencial: boolean = false,
    priceSizeClass: string = "text-xl"
  ) => {
    if (!priceString) return null;

    // Si es Presencial, el DESDE debe ser del color primario (verde), si no, gris suave.
    const desdeColorClass = isPresencial ? "text-primary/70" : "text-slate-400";

    // Chequeo tanto en español como inglés
    if (priceString.includes('DESDE') || priceString.includes('FROM')) {
      const cleanPrice = priceString.replace('DESDE', '').replace('FROM', '').trim();
      return (
        <div className="flex flex-col leading-none">
          <span className={`text-[10px] font-bold ${desdeColorClass} mb-1 tracking-wider uppercase`}>{t('card.from')}</span>
          <span className={`${priceSizeClass} font-bold ${priceColorClass}`}>{cleanPrice}</span>
        </div>
      );
    }

    return <p className={`${priceSizeClass} font-bold ${priceColorClass}`}>{priceString}</p>;
  };

  return (
    <div className={`rounded-4xl border transition-all duration-300 flex flex-col h-full group relative overflow-hidden 
        ${item.isUpgrade 
            ? 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 border-dashed dark:border-slate-700 p-8 pt-12 shadow-sm' 
            : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 p-8 shadow-sm'
        }
        hover:shadow-xl hover:-translate-y-1
    `}>
      
      {/* Etiqueta UPGRADE */}
      {item.isUpgrade && (
        <div className="absolute top-0 left-0 w-full bg-primary/10 text-primary py-1.5 text-[10px] font-bold tracking-widest uppercase text-center border-b border-primary/10">
            Upgrade
        </div>
      )}

      <div className={`rounded-2xl flex items-center justify-center text-primary mb-6 transition-colors duration-300 w-14 h-14 ${
          item.isUpgrade 
            ? 'bg-transparent p-0' 
            : 'bg-primary/10 group-hover:bg-primary group-hover:text-white'
      }`}>
        <Icon name={item.icon} className="text-3xl" />
      </div>
      
      <h4 className="text-xl text-slate-900 dark:text-white font-bold mb-4">
        {item.title}
      </h4>
      
      <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed flex-grow text-base">
        {item.description}
      </p>
      
      <div className="mt-auto space-y-4">
        {item.isVirtual || item.isPercentage ? (
          <div className="flex flex-col gap-4 mb-2">
            {item.isPercentage ? (
               <div className="w-full">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">{t('card.honorarios')}</p>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
               </div>
            ) : (
                <>
                {/* Opción Virtual */}
                <div className={`${item.isUpgrade ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800/50'} p-3 rounded-xl`}>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">{t('card.virtual')}</p>
                    <div className="flex flex-col">
                        {renderPriceWithStyle(item.virtualPrice, "text-slate-900 dark:text-slate-200", false, "text-xl")}
                        {item.virtualInstallments && (
                            <p className="text-xs text-slate-500 font-medium mt-1">{item.virtualInstallments}</p>
                        )}
                    </div>
                </div>
                
                {/* Opción Presencial */}
                <div className="bg-primary/5 p-3 rounded-xl border border-primary/10">
                    <p className="text-[10px] uppercase font-bold text-primary mb-1">{t('card.presencial')}</p>
                    <div className="flex flex-col">
                        {renderPriceWithStyle(item.presencialPrice, "text-primary", true, "text-xl")}
                        {item.presencialInstallments && (
                            <p className="text-xs text-slate-500 font-medium mt-1">{item.presencialInstallments}</p>
                        )}
                    </div>
                </div>
                </>
            )}
          </div>
        ) : (
          <div className="mb-2">
            {renderPriceWithStyle(item.price, "text-slate-900 dark:text-white", false, "text-3xl")}
            <div className="text-xs text-slate-400 font-medium mt-1">{item.installments}</div>
          </div>
        )}

        <a 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full border-2 border-primary text-primary dark:text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 py-4"
        >
           {t('card.want')} <Icon name="chevron_right" />
        </a>
      </div>
    </div>
  );
};