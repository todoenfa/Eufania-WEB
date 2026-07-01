import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { FreeConsultation } from './components/FreeConsultation';
import { ServicesSection } from './components/ServicesSection';
import { Packs } from './components/Packs';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import { AIChatWidget } from './components/AIChatWidget';
import { Icon } from './components/Icon';
import { ServiceItem } from './types';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// App Content Component to use Context
const AppContent = () => {
    const { t, language } = useLanguage();

    // Data Definitions inside component to react to language changes
    const acousticServicesES: ServiceItem[] = [
      {
        icon: 'settings_voice',
        title: 'Tratamiento Acústico: Medición/Asesoramiento',
        description: 'Analizamos tu espacio en detalle para ofrecerte un mejor confort acústico',
        price: '',
        installments: '',
        isVirtual: true,
        virtualPrice: '$150.000',
        virtualInstallments: 'ó 3 cuotas de $61.667',
        presencialPrice: '$210.000',
        presencialInstallments: 'ó 3 cuotas de $86.667',
        link: 'https://wa.me/5491123369909?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Tratamiento%20Acustico.%20Me%20podrian%20dar%20mas%20info?'
      },
      {
        icon: 'laptop_mac',
        title: 'Aislamiento Acústico: Medición',
        description: 'Analizamos la estructura de tu espacio en detalle para atenuar el ingreso de ruidos externos o evitar que el sonido salga al exterior.',
        price: '$280.000',
        installments: 'ó 3 cuotas de $116.667',
        link: 'https://wa.me/5491123369909?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Aislamiento%20Acustico.%20Me%20podrian%20dar%20mas%20info?'
      },
      {
        icon: 'construction',
        title: 'Instalación y Supervisión',
        description: 'Nos encargamos de todo para que la acústica de tu espacio funcione a la perfección.',
        price: 'DESDE $330.000',
        installments: 'ó 3 cuotas de $138.333',
        isUpgrade: true,
        link: 'https://wa.me/5491123369909?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Instalacion%20y%20Supervision.%20Me%20podrian%20dar%20mas%20info?'
      }
    ];

    const acousticServicesEN: ServiceItem[] = [
        {
          icon: 'settings_voice',
          title: 'Acoustic Treatment: Measurement/Consulting',
          description: 'We analyze your space in detail to offer you better acoustic comfort.',
          price: '',
          installments: '',
          isVirtual: true,
          virtualPrice: '$150.000',
          virtualInstallments: 'or 3 installments of $61.667',
          presencialPrice: '$210.000',
          presencialInstallments: 'or 3 installments of $86.667',
          link: 'https://wa.me/5491123369909?text=Hi,%20I\'m%20interested%20in%20Acoustic%20Treatment.%20More%20info?'
        },
        {
          icon: 'laptop_mac',
          title: 'Acoustic Isolation: Measurement',
          description: 'We analyze your space\'s structure in detail to attenuate external noise ingress or prevent sound from escaping.',
          price: '$280.000',
          installments: 'or 3 installments of $116.667',
          link: 'https://wa.me/5491123369909?text=Hi,%20I\'m%20interested%20in%20Acoustic%20Isolation.%20More%20info?'
        },
        {
          icon: 'construction',
          title: 'Installation & Supervision',
          description: 'We handle everything to ensure your space\'s acoustics work perfectly.',
          price: 'FROM $330.000',
          installments: 'or 3 installments of $138.333',
          isUpgrade: true,
          link: 'https://wa.me/5491123369909?text=Hi,%20I\'m%20interested%20in%20Installation%20and%20Supervision.%20More%20info?'
        }
    ];

    const designServicesES: ServiceItem[] = [
      {
        icon: 'view_in_ar',
        title: 'Diseño Integral + Renders 3D',
        description: 'Armamos una propuesta de diseño a tu medida y hacemos que puedas visualizarla por completo antes de comenzar. ¡Llevate la idea para hacerlo realidad!',
        price: '',
        installments: '',
        isVirtual: true,
        virtualPrice: 'DESDE $680.000',
        virtualInstallments: 'ó 3 cuotas de $283.333',
        presencialPrice: 'DESDE $910.000',
        presencialInstallments: 'ó 3 cuotas de $380.000',
        link: 'https://wa.me/5491123369909?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Diseno%20Integral%20y%20Renders%203D.%20Me%20podrian%20dar%20mas%20info?'
      },
      {
        icon: 'assignment',
        title: 'Documentación de Obra',
        description: 'Sumamos planos, catálogo y presupuesto detallado para que sepas como lograrlo con seguridad.',
        price: 'DESDE $195.000',
        installments: 'ó 3 cuotas de $81.667',
        isUpgrade: true,
        link: 'https://wa.me/5491123369909?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Documentacion%20de%20Obra.%20Me%20podrian%20dar%20mas%20info?'
      },
      {
        icon: 'home_repair_service',
        title: 'Dirección y Ejecución',
        description: 'Nos encargamos de todo de punta a punta. Diseño llave en mano.',
        price: '20% del presupuesto',
        installments: '',
        isVirtual: true,
        isPercentage: true,
        isUpgrade: true,
        link: 'https://wa.me/5491123369909?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Direccion%20y%20Ejecucion.%20Me%20podrian%20dar%20mas%20info?'
      }
    ];

    const designServicesEN: ServiceItem[] = [
        {
          icon: 'view_in_ar',
          title: 'Integral Design + 3D Renders',
          description: 'We create a custom design proposal and let you visualize it completely before starting. Take the idea to make it a reality!',
          price: '',
          installments: '',
          isVirtual: true,
          virtualPrice: 'FROM $680.000',
          virtualInstallments: 'or 3 installments of $283.333',
          presencialPrice: 'FROM $910.000',
          presencialInstallments: 'or 3 installments of $380.000',
          link: 'https://wa.me/5491123369909?text=Hi,%20I\'m%20interested%20in%20Integral%20Design.%20More%20info?'
        },
        {
          icon: 'assignment',
          title: 'Construction Documentation',
          description: 'We include plans, catalogs, and detailed budgets so you know how to achieve it safely.',
          price: 'FROM $195.000',
          installments: 'or 3 installments of $81.667',
          isUpgrade: true,
          link: 'https://wa.me/5491123369909?text=Hi,%20I\'m%20interested%20in%20Construction%20Documentation.%20More%20info?'
        },
        {
          icon: 'home_repair_service',
          title: 'Direction & Execution',
          description: 'We handle everything from start to finish. Turnkey design.',
          price: '20% of budget',
          installments: '',
          isVirtual: true,
          isPercentage: true,
          isUpgrade: true,
          link: 'https://wa.me/5491123369909?text=Hi,%20I\'m%20interested%20in%20Project%20Execution.%20More%20info?'
        }
    ];

    const acousticServices = language === 'en' ? acousticServicesEN : acousticServicesES;
    const designServices = language === 'en' ? designServicesEN : designServicesES;

    return (
        <div className="min-h-screen">
          <Header />
          
          <main>
            <Hero />
            <ProblemSolution />
            <FreeConsultation />
            
            <ServicesSection 
              id="servicios"
              title={t('services.acoustic.title')} 
              highlight={t('services.acoustic.highlight')} 
              items={acousticServices} 
            />
            
            <ServicesSection 
              title={t('services.design.title')} 
              highlight={t('services.design.highlight')} 
              items={designServices} 
            />
            
            <Packs />
            <AboutUs />
            
            {/* Instagram/Social Proof section */}
            <section className="container mx-auto px-6 mb-24">
                <div className="bg-primary/5 rounded-6xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-center gap-16 text-center md:text-left">
                    
                    {/* 
                       IMAGEN: CELULAR.png con Marco de Teléfono CSS
                    */}
                    <div className="relative shrink-0 select-none pointer-events-none">
                        {/* Marco del teléfono */}
                        <div className="relative border-slate-900 bg-slate-900 border-[12px] rounded-[2.5rem] h-auto w-64 md:w-72 shadow-2xl overflow-hidden">
                            {/* Notch superior */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-slate-900 rounded-b-xl z-20"></div>
                            
                            {/* Botones laterales simulados */}
                            <div className="absolute top-20 -left-[15px] w-[3px] h-10 bg-slate-800 rounded-l-lg"></div>
                            <div className="absolute top-36 -left-[15px] w-[3px] h-16 bg-slate-800 rounded-l-lg"></div>
                            <div className="absolute top-28 -right-[15px] w-[3px] h-20 bg-slate-800 rounded-r-lg"></div>
    
                            {/* Contenedor de la imagen */}
                            <div className="relative w-full h-full bg-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                                 <img 
                                    src="/celular.png" 
                                    alt="Instagram" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{t('follow.title')}</h3>
                        <a href="https://www.instagram.com/eufaniaacustica/" target="_blank" rel="noopener noreferrer" className="block text-2xl font-medium text-slate-900 dark:text-slate-300 hover:text-primary transition-colors">@eufaniaacustica</a>
                        <a 
                            href="https://www.instagram.com/eufaniaacustica/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 mx-auto md:mx-0 hover:scale-105 transition-transform w-fit"
                        >
                            {t('follow.cta')} <Icon name="chevron_right" />
                        </a>
                    </div>
                </div>
            </section>
    
          </main>
    
          <Footer />
          
          {/* Expert Feature: AI Assistant */}
          <AIChatWidget />
        </div>
      );
}

function App() {
  return (
    <LanguageProvider>
        <AppContent />
    </LanguageProvider>
  );
}

export default App;