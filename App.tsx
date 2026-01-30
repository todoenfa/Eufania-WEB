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
        title: 'Medición Acústica Presencial',
        description: 'Analizamos tu espacio en detalle para ofrecerte sugerencias personalizadas de mejora.',
        price: '$160.000',
        installments: 'ó 3 cuotas de $66.667',
        link: 'https://wa.me/5491165189255?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Medicion%20Acustica%20Presencial.%20Me%20podrian%20dar%20mas%20info?'
      },
      {
        icon: 'laptop_mac',
        title: 'Análisis y Asesoramiento Virtual',
        description: 'Análisis acústico a distancia con informe detallado y recomendaciones técnicas.',
        price: '$125.000',
        installments: 'ó 3 cuotas de $51.667',
        link: 'https://wa.me/5491165189255?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Analisis%20y%20Asesoramiento%20Virtual.%20Me%20podrian%20dar%20mas%20info?'
      },
      {
        icon: 'construction',
        title: 'Instalación y Supervisión',
        description: 'Nos encargamos de todo para que la acústica de tu espacio funcione a la perfección.',
        price: '$290.000',
        installments: 'ó 3 cuotas de $120.000',
        isUpgrade: true,
        link: 'https://wa.me/5491165189255?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Instalacion%20y%20Supervision.%20Me%20podrian%20dar%20mas%20info?'
      }
    ];

    const acousticServicesEN: ServiceItem[] = [
        {
          icon: 'settings_voice',
          title: 'In-Person Acoustic Measurement',
          description: 'We analyze your space in detail to offer personalized improvement suggestions.',
          price: '$160.000',
          installments: 'or 3 installments of $66.667',
          link: 'https://wa.me/5491165189255?text=Hi,%20I\'m%20interested%20in%20In-Person%20Acoustic%20Measurement.%20More%20info?'
        },
        {
          icon: 'laptop_mac',
          title: 'Virtual Analysis & Consulting',
          description: 'Remote acoustic analysis with detailed reporting and technical recommendations.',
          price: '$125.000',
          installments: 'or 3 installments of $51.667',
          link: 'https://wa.me/5491165189255?text=Hi,%20I\'m%20interested%20in%20Virtual%20Analysis.%20More%20info?'
        },
        {
          icon: 'construction',
          title: 'Installation & Supervision',
          description: 'We handle everything to ensure your space\'s acoustics work perfectly.',
          price: '$290.000',
          installments: 'or 3 installments of $120.000',
          isUpgrade: true,
          link: 'https://wa.me/5491165189255?text=Hi,%20I\'m%20interested%20in%20Installation%20and%20Supervision.%20More%20info?'
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
        virtualPrice: 'DESDE $565.000',
        virtualInstallments: 'ó 3 cuotas de $235.000',
        presencialPrice: 'DESDE $750.000',
        presencialInstallments: 'ó 3 cuotas de $311.667',
        link: 'https://wa.me/5491165189255?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Diseno%20Integral%20y%20Renders%203D.%20Me%20podrian%20dar%20mas%20info?'
      },
      {
        icon: 'assignment',
        title: 'Documentación de Obra',
        description: 'Sumamos planos, catálogo y presupuesto detallado para que sepas como lograrlo con seguridad.',
        price: 'DESDE $170.000',
        installments: 'ó 3 cuotas de $70.000',
        isUpgrade: true,
        link: 'https://wa.me/5491165189255?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Documentacion%20de%20Obra.%20Me%20podrian%20dar%20mas%20info?'
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
        link: 'https://wa.me/5491165189255?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Direccion%20y%20Ejecucion.%20Me%20podrian%20dar%20mas%20info?'
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
          virtualPrice: 'FROM $565.000',
          virtualInstallments: 'or 3 installments of $235.000',
          presencialPrice: 'FROM $750.000',
          presencialInstallments: 'or 3 installments of $311.667',
          link: 'https://wa.me/5491165189255?text=Hi,%20I\'m%20interested%20in%20Integral%20Design.%20More%20info?'
        },
        {
          icon: 'assignment',
          title: 'Construction Documentation',
          description: 'We include plans, catalogs, and detailed budgets so you know how to achieve it safely.',
          price: 'FROM $170.000',
          installments: 'or 3 installments of $70.000',
          isUpgrade: true,
          link: 'https://wa.me/5491165189255?text=Hi,%20I\'m%20interested%20in%20Construction%20Documentation.%20More%20info?'
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
          link: 'https://wa.me/5491165189255?text=Hi,%20I\'m%20interested%20in%20Project%20Execution.%20More%20info?'
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
                                    src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop" 
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