import React from 'react';
import { ServiceCard } from './ServiceCard';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  title: string;
  highlight: string;
  items: ServiceItem[];
  id?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ title, highlight, items, id }) => {
  return (
    <section className="container mx-auto px-6 mb-24 scroll-mt-24" id={id}>
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          {title} <span className="text-primary">{highlight}</span>
        </h2>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};