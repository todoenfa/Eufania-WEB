import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.packs": "Packs",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    
    "hero.welcome": "BIENVENID@S A EUFANÍA",
    "hero.title.1": "Donde el diseño y la acústica",
    "hero.title.2": "se unen.",
    "hero.desc": "Optimizamos la funcionalidad, el estilo y el sonido de tu espacio: control room, sala de ensayo, home studio, oficinas y más.",
    "hero.cta.services": "Ver Servicios",
    "hero.cta.about": "Conocenos",
    "hero.gallery.title": "Algunos de nuestros proyectos",
    "hero.gallery.subtitle": "Ver Galería",

    "problem.title": "si actualmente tenés...",
    "problem.1": "Un espacio con mala acústica que afecta la calidad de la música.",
    "problem.2": "Dificultad para encontrar soluciones personalizadas y profesionales confiables.",
    "problem.3": "Espacios con eco, reverberación no deseada o confusión sobre tratamientos.",
    "problem.4": "Desafíos para integrar diseño estético con funcionalidad acústica.",
    "problem.cta": "( escribinos > ) estás en el lugar correcto!",
    
    "solution.title": "para con nosotros lograr...",
    "solution.1": "Sonido de alta calidad en tu espacio y mejoras en la experiencia de grabación.",
    "solution.2": "Un diseño interior que complemente perfectamente la acústica.",
    "solution.3": "Soluciones acústicas efectivas, alcanzables y resultados rápidos.",
    "solution.4": "Aumentar la productividad y calidad de las producciones musicales.",
    "solution.cta": "EMPEZAR AHORA",

    "consultation.title": "Charla Online (30 min)",
    "consultation.desc": "Contanos sobre tu proyecto y conocé nuestras ideas sin compromiso. ¡Estamos acá para ayudarte!",
    "consultation.free": "¡GRATIS!",
    "consultation.cta": "AGENDAR AHORA",

    "services.acoustic.title": "Servicios de",
    "services.acoustic.highlight": "acústica.",
    "services.design.title": "Servicios de",
    "services.design.highlight": "diseño.",

    "card.virtual": "Virtual",
    "card.presencial": "Presencial",
    "card.honorarios": "HONORARIOS DESDE",
    "card.desde": "DESDE",
    "card.from": "DESDE", // Used for translation key matching
    "card.want": "QUIERO!",

    "packs.title": "precios especiales x pack.",
    "packs.offer": "Oferta Especial",
    "packs.discount_tooltip": "Descuento aplicado sobre la sumatoria de los servicios individuales.",
    
    "about.title": "nosotros.",
    "about.euge.role": "Diseñadora de Interiores",
    "about.euge.desc": "Soy metódica, organizada y detallista. Pongo la función antes de la estética. ¡La mente creativa de este dúo!",
    "about.facu.role": "Especialista en sonido y acústica",
    "about.facu.desc": "Apasionado por la música y el sonido. Combino experiencia técnica con lo musical para lograr espacios acústicos ideales.",

    "follow.title": "seguinos.",
    "follow.cta": "SEGUINOS",

    "footer.title": "ponete en contacto",
    "footer.subtitle": "estamos acá para ayudarte!",
    "footer.form.title": "Envianos un mensaje",
    "footer.form.name": "Nombre y Apellido",
    "footer.form.phone": "Teléfono / Celular",
    "footer.form.email": "Email",
    "footer.form.prefer": "¿Por qué medio preferís que nos contactemos?",
    "footer.form.msg": "¿En qué podemos ayudarte?",
    "footer.form.send": "ENVIAR",
    "footer.form.sending": "ENVIANDO...",
    "footer.form.sent": "ENVIADO",
    "footer.form.error": "ERROR, REINTENTAR",
    "footer.bottom": "Soluciones acústicas y diseño",
    "footer.contact.call": "Llamada Telefónica"
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.packs": "Bundles",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    
    "hero.welcome": "WELCOME TO EUFANIA",
    "hero.title.1": "Where design and acoustics",
    "hero.title.2": "come together.",
    "hero.desc": "We optimize functionality, style, and sound in your space: control rooms, rehearsal studios, home studios, offices, and more.",
    "hero.cta.services": "View Services",
    "hero.cta.about": "Meet Us",
    "hero.gallery.title": "Some of our projects",
    "hero.gallery.subtitle": "View Gallery",

    "problem.title": "if you currently have...",
    "problem.1": "A space with poor acoustics affecting music quality.",
    "problem.2": "Difficulty finding personalized solutions and reliable professionals.",
    "problem.3": "Spaces with echo, unwanted reverb, or confusion about treatments.",
    "problem.4": "Challenges integrating aesthetic design with acoustic functionality.",
    "problem.cta": "( write to us > ) you are in the right place!",
    
    "solution.title": "to achieve with us...",
    "solution.1": "High-quality sound in your space and improved recording experience.",
    "solution.2": "Interior design that perfectly complements acoustics.",
    "solution.3": "Effective, achievable acoustic solutions with fast results.",
    "solution.4": "Increased productivity and quality of musical productions.",
    "solution.cta": "START NOW",

    "consultation.title": "Online Meeting (30 min)",
    "consultation.desc": "Tell us about your project and get our ideas without commitment. We are here to help!",
    "consultation.free": "FREE!",
    "consultation.cta": "BOOK NOW",

    "services.acoustic.title": "Acoustic",
    "services.acoustic.highlight": "services.",
    "services.design.title": "Design",
    "services.design.highlight": "services.",

    "card.virtual": "Virtual",
    "card.presencial": "In-Person",
    "card.honorarios": "FEES STARTING AT",
    "card.desde": "FROM",
    "card.from": "FROM",
    "card.want": "I WANT IT!",

    "packs.title": "special bundle prices.",
    "packs.offer": "Special Offer",
    "packs.discount_tooltip": "Discount applied on the sum of individual services.",
    
    "about.title": "about us.",
    "about.euge.role": "Interior Designer",
    "about.euge.desc": "I am methodical, organized, and detail-oriented. I put function before aesthetics. The creative mind of this duo!",
    "about.facu.role": "Sound & Acoustics Specialist",
    "about.facu.desc": "Passionate about music and sound. I combine technical experience with musicality to achieve ideal acoustic spaces.",

    "follow.title": "follow us.",
    "follow.cta": "FOLLOW US",

    "footer.title": "get in touch",
    "footer.subtitle": "we are here to help you!",
    "footer.form.title": "Send us a message",
    "footer.form.name": "Full Name",
    "footer.form.phone": "Phone / Mobile",
    "footer.form.email": "Email",
    "footer.form.prefer": "Preferred contact method?",
    "footer.form.msg": "How can we help you?",
    "footer.form.send": "SEND",
    "footer.form.sending": "SENDING...",
    "footer.form.sent": "SENT",
    "footer.form.error": "ERROR, RETRY",
    "footer.bottom": "Acoustic solutions and design",
    "footer.contact.call": "Phone Call"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string) => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};