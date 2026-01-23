import React from 'react';
import { Icon } from './Icon';

export const FreeConsultation: React.FC = () => {
  return (
    <section className="container mx-auto px-6 mb-24">
      <div className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-white text-center isolate shadow-2xl">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-20 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop" 
            alt="Background pattern" 
            className="w-full h-full object-cover grayscale" 
          />
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex w-16 h-16 bg-primary rounded-full items-center justify-center mb-4 shadow-[0_0_20px_rgba(163,184,142,0.5)]">
            <Icon name="videocam" className="text-3xl text-white" />
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold">Charla Online (30 min)</h3>
          <p className="text-slate-300 text-lg">
            Contanos sobre tu proyecto y conocé nuestras ideas sin compromiso. ¡Estamos acá para ayudarte!
          </p>
          
          <div className="py-4">
             <div className="inline-block px-8 py-3 bg-white text-slate-900 rounded-full font-bold text-xl shadow-lg transform -rotate-2">
                ¡GRATIS!
            </div>
          </div>

          <button className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-2 mx-auto">
            AGENDAR AHORA <Icon name="calendar_today" />
          </button>
        </div>
      </div>
    </section>
  );
};