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

// Data
const acousticServices: ServiceItem[] = [
  {
    icon: 'settings_voice',
    title: 'Medición Acústica Presencial',
    description: 'Analizamos tu espacio en detalle para ofrecerte sugerencias personalizadas de mejora.',
    price: '$100.500',
    installments: 'o 3 CUOTAS de $44.667'
  },
  {
    icon: 'laptop_mac',
    title: 'Análisis y Asesoramiento Virtual',
    description: 'Análisis acústico a distancia con informe detallado y recomendaciones técnicas.',
    price: '$52.500',
    installments: 'o 3 CUOTAS de $23.333'
  },
  {
    icon: 'construction',
    title: 'Instalación y Supervisión',
    description: 'Nos encargamos de todo para que la acústica de tu espacio funcione a la perfección.',
    price: '$57.000',
    installments: 'o 3 CUOTAS de $25.333'
  }
];

const designServices: ServiceItem[] = [
  {
    icon: 'view_in_ar',
    title: 'Diseño Integral + Renders 3D',
    description: 'Visualizá tu espacio antes de comenzar. ¡Llevate la idea para hacerlo realidad!',
    price: '',
    installments: '',
    isVirtual: true,
    virtualPrice: '$85.500',
    presencialPrice: '$115.500'
  },
  {
    icon: 'assignment',
    title: 'Diseño + Documentación',
    description: 'Sumamos planos, catálogo y presupuesto detallado para que el paso sea seguro.',
    price: '',
    installments: '',
    isVirtual: true,
    virtualPrice: '$106.500',
    presencialPrice: '$136.500'
  },
  {
    icon: 'home_repair_service',
    title: 'Dirección y Ejecución',
    description: 'Nos encargamos de todo de punta a punta. Acústica y diseño llave en mano.',
    price: '20% del presupuesto',
    installments: '',
    isVirtual: true,
    isPercentage: true
  }
];

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <ProblemSolution />
        <FreeConsultation />
        
        <ServicesSection 
          id="servicios"
          title="Servicios de" 
          highlight="acústica." 
          items={acousticServices} 
        />
        
        <ServicesSection 
          title="Servicios de" 
          highlight="diseño." 
          items={designServices} 
        />
        
        <Packs />
        <AboutUs />
        
        {/* Instagram/Social Proof section */}
        <section className="container mx-auto px-6 mb-24">
            <div className="bg-primary/5 rounded-6xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
                {/* 
                   IMAGEN: CELULAR.png
                */}
                <div className="relative w-64 md:w-72 shrink-0">
                    <img 
                        src="/CELULAR.png" 
                        alt="Nuestro Instagram en Celular" 
                        className="w-full h-auto drop-shadow-2xl rounded-[2rem] hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                             // Fallback: Si no hay imagen, ocultamos el contenedor de la imagen para que solo se vea el texto
                             // o mostramos una imagen de ejemplo.
                             e.currentTarget.style.opacity = "0.5"; // Reduce opacidad si falla
                        }}
                    />
                </div>
                
                <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">seguinos.</h3>
                    <a href="https://www.instagram.com/eufaniaacustica/" target="_blank" rel="noopener noreferrer" className="block text-2xl font-medium text-slate-900 dark:text-slate-300 hover:text-primary transition-colors">@eufaniaacustica</a>
                    <a 
                        href="https://www.instagram.com/eufaniaacustica/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 mx-auto md:mx-0 hover:scale-105 transition-transform w-fit"
                    >
                        SEGUINOS <Icon name="chevron_right" />
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

export default App;