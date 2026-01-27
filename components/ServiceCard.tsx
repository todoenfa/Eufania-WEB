import React from 'react';
import { Icon } from './Icon';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  item: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-4xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full group">
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon name={item.icon} className="text-3xl" />
      </div>
      
      <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{item.title}</h4>
      <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
        {item.description}
      </p>
      
      <div className="mt-auto space-y-4">
        {item.isVirtual || item.isPercentage ? (
          <div className="flex flex-col gap-4 mb-2">
            {item.isPercentage ? (
               <div className="w-full">
                  <p className="text-[10px] uppercase font-bold text-slate-400">HONORARIOS DESDE</p>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
               </div>
            ) : (
                <>
                {/* Opción Virtual */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Virtual</p>
                    <div className="flex flex-col">
                        <p className="text-xl font-bold text-slate-900 dark:text-slate-200">{item.virtualPrice}</p>
                        {item.virtualInstallments && (
                            <p className="text-xs text-slate-500 font-medium">{item.virtualInstallments}</p>
                        )}
                    </div>
                </div>
                
                {/* Opción Presencial */}
                <div className="bg-primary/5 p-3 rounded-xl border border-primary/10">
                    <p className="text-[10px] uppercase font-bold text-primary mb-1">Presencial</p>
                    <div className="flex flex-col">
                        <p className="text-xl font-bold text-primary">{item.presencialPrice}</p>
                        {item.presencialInstallments && (
                            <p className="text-xs text-slate-500 font-medium">{item.presencialInstallments}</p>
                        )}
                    </div>
                </div>
                </>
            )}
          </div>
        ) : (
          <div className="mb-2">
            <div className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">{item.price}</div>
            <div className="text-xs text-slate-400 font-medium">{item.installments}</div>
          </div>
        )}

        <a 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 border-2 border-primary text-primary dark:text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
        >
           QUIERO! <Icon name="chevron_right" />
        </a>
      </div>
    </div>
  );
};