import React, { useState } from 'react';
import { Icon } from './Icon';

export const Footer: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const myForm = e.currentTarget;
    const formData = new FormData(myForm);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    // Construcción de datos para Formspree
    const data = {
        name: name,
        phone: phone,
        email: email,
        message: message,
        _subject: `Consulta via WEB de ${name}`, // Asunto dinámico solicitado
        _replyto: email // Permite responder directamente al cliente desde Gmail
    };

    try {
        const response = await fetch("https://formspree.io/f/xwvoadaa", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            setFormState('success');
            myForm.reset();
            // Resetear estado después de 3 segundos
            setTimeout(() => setFormState('idle'), 3000);
        } else {
            console.error("Formspree error:", response.statusText);
            setFormState('error');
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        setFormState('error');
    }
  };

  return (
    <footer className="bg-primary text-white pt-24 pb-12 rounded-t-[3rem] mt-24 scroll-mt-32" id="contacto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          
          {/* Contact Info */}
          <div className="max-w-md space-y-8">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">ponete en contacto</h2>
                <p className="text-white/80 text-xl italic font-light">estamos acá para ayudarte!</p>
            </div>
            <div className="space-y-6">
              <a href="https://wa.me/5491165189255?text=Hola,%20estoy%20interesado%20en%20mejorar%20la%20acustica%20de%20mi%20espacio.%20Podrian%20asesorarme?" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg md:text-xl hover:translate-x-2 transition-transform group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                  <Icon name="phone" />
                </div>
                +54 9 11 6518 9255
              </a>
              <a href="mailto:eufania.acustica@gmail.com" className="flex items-center gap-4 text-lg md:text-xl hover:translate-x-2 transition-transform group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                  <Icon name="email" />
                </div>
                eufania.acustica@gmail.com
              </a>
              <a href="https://www.instagram.com/eufaniaacustica/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg md:text-xl hover:translate-x-2 transition-transform group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                  <Icon name="alternate_email" />
                </div>
                @eufaniaacustica
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="bg-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md border border-white/20 shadow-2xl">
              <h4 className="text-2xl font-bold mb-6">Envianos un mensaje</h4>
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <input 
                    type="text" 
                    name="name"
                    placeholder="Nombre y Apellido" 
                    required
                    autoComplete="name"
                    className="w-full bg-white/20 border-none rounded-2xl p-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:outline-none transition-all"
                />
                
                <input 
                    type="tel" 
                    name="phone"
                    placeholder="Teléfono / Celular" 
                    autoComplete="tel"
                    className="w-full bg-white/20 border-none rounded-2xl p-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:outline-none transition-all"
                />

                <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    required
                    autoComplete="email"
                    className="w-full bg-white/20 border-none rounded-2xl p-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:outline-none transition-all"
                />
                <textarea 
                    name="message"
                    rows={4} 
                    placeholder="¿En qué podemos ayudarte?" 
                    required
                    className="w-full bg-white/20 border-none rounded-2xl p-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:outline-none transition-all resize-none"
                ></textarea>
                
                <button 
                    type="submit" 
                    disabled={formState === 'submitting' || formState === 'success'}
                    className={`w-full font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 ${
                        formState === 'success' 
                        ? 'bg-green-500 text-white cursor-default' 
                        : formState === 'error'
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-primary hover:bg-slate-100'
                    }`}
                >
                    {formState === 'idle' && 'ENVIAR'}
                    {formState === 'submitting' && <Icon name="sync" className="animate-spin" />}
                    {formState === 'success' && <><Icon name="check" /> ENVIADO</>}
                    {formState === 'error' && 'ERROR, REINTENTAR'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center">
              <Icon name="graphic_eq" className="text-sm" />
            </div>
            <span className="font-bold tracking-tight text-white">EUFANÍA. 2024</span>
          </div>
          <p className="text-sm">Diseño de Interiores & Soluciones Acústicas</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/eufaniaacustica/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all opacity-70 hover:opacity-100"><Icon name="photo_camera" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};