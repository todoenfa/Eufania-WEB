import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { ServiceItem } from '../types';
import { Icon } from './Icon';
import { useLanguage } from '../contexts/LanguageContext';

interface ServicesSectionProps {
  title: string;
  highlight: string;
  items: ServiceItem[];
  id?: string;
  isAcoustic?: boolean;
  isDesign?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  title, 
  highlight, 
  items, 
  id,
  isAcoustic = false,
  isDesign = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="container mx-auto px-6 mb-20 scroll-mt-24" id={id}>
      {/* Section Header with Expand/Collapse button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {title} <span className="text-primary">{highlight}</span>
          </h2>
          <div className="hidden sm:block h-px w-12 bg-slate-200 dark:bg-slate-800"></div>
        </div>

        {/* Dropdown Toggle Button */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 text-primary dark:text-primary bg-primary/5 hover:bg-primary hover:text-white text-sm font-bold transition-all shadow-sm w-fit group"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? t('services.toggle.collapse') : t('services.toggle.expand')}</span>
          <Icon 
            name={isExpanded ? "expand_less" : "expand_more"} 
            className="text-lg transition-transform group-hover:scale-110" 
          />
        </button>
      </div>

      {/* Minimized View: Only Icon, Title, Step Badges and subtle expand prompt (NO PRICE) */}
      {!isExpanded ? (
        <div className="relative">
          {/* Subtle banner on desktop for linked acoustic or design services */}
          {isAcoustic && (
            <div className="hidden md:flex items-center justify-start gap-2 mb-4 px-1 text-xs text-primary/90 font-medium">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                <Icon name="link" className="text-xs" />
                {t('services.linked.hint')}
              </span>
            </div>
          )}

          {isDesign && (
            <div className="hidden md:flex items-center justify-start gap-2 mb-4 px-1 text-xs text-primary/90 font-medium">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                <Icon name="route" className="text-xs" />
                {t('services.linked.design_hint')}
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {items.map((item, index) => {
              const isLinked = item.isLinkedToNext || item.isLinkedFromPrev;

              return (
                <div key={index} className="relative">
                  {/* Subtle graphical connector arrow between consecutive steps on desktop */}
                  {item.isLinkedToNext && (
                    <div className="hidden md:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-primary text-primary items-center justify-center shadow-md pointer-events-none">
                      <Icon name="arrow_forward" className="text-xs font-bold" />
                    </div>
                  )}

                  <div
                    onClick={() => setIsExpanded(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsExpanded(true); }}
                    className={`h-full flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 text-left cursor-pointer group hover:shadow-lg hover:-translate-y-0.5 ${
                      item.isUpgrade
                        ? 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 border-dashed dark:border-slate-700'
                        : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800'
                    } ${
                      isLinked ? 'border-primary/50 ring-1 ring-primary/20' : ''
                    }`}
                  >
                    {/* Top Row: Icon + Step Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                        <Icon name={item.icon} className="text-2xl" />
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        {item.stepNumber && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider text-primary bg-primary/10 border border-primary/20">
                            <Icon 
                              name={item.stepNumber === 1 ? "looks_one" : item.stepNumber === 2 ? "looks_two" : "looks_3"} 
                              className="text-xs" 
                            /> 
                            {t(`services.step.${item.stepNumber}`)}
                          </span>
                        )}

                        {item.isUpgrade && !item.stepNumber && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-primary bg-primary/10">
                            Upgrade
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Middle: Title */}
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-3 line-clamp-2">
                      {item.title}
                    </h4>

                    {/* Bottom: Subtle Expand Call-to-action (NO PRICE shown) */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 mt-auto">
                      <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors flex items-center gap-1">
                        {t('services.compact.view_options')}
                      </span>
                      <Icon 
                        name="expand_more" 
                        className="text-base text-primary transform group-hover:translate-y-0.5 transition-transform" 
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Expanded View: Full Detailed Cards with Descriptions, All Prices, Installments & CTAs */
        <div className="space-y-6 animate-fadeIn">
          {/* Subtle note about linked services on desktop */}
          {isAcoustic && (
            <div className="hidden md:flex items-center justify-start gap-2 px-1 text-xs text-primary/90 font-medium">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/25 px-3 py-1.5 rounded-full">
                <Icon name="link" className="text-sm" />
                {t('services.linked.hint')}
              </span>
            </div>
          )}

          {isDesign && (
            <div className="hidden md:flex items-center justify-start gap-2 px-1 text-xs text-primary/90 font-medium">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/25 px-3 py-1.5 rounded-full">
                <Icon name="route" className="text-sm" />
                {t('services.linked.design_hint')}
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <ServiceCard key={index} item={item} />
            ))}
          </div>

          {/* Bottom collapse button */}
          <div className="flex justify-center pt-4">
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary text-xs font-bold transition-all shadow-sm"
            >
              <span>{t('services.toggle.collapse')}</span>
              <Icon name="expand_less" className="text-sm" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};