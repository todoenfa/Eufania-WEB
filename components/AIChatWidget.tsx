import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icon';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const AIChatWidget: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  
  // Initial message depends on language
  const initialMsgES = '¡Hola! Soy Eufa, tu asistente de acústica y diseño. ¿En qué puedo ayudarte hoy?';
  const initialMsgEN = 'Hi! I am Eufa, your acoustics and design assistant. How can I help you today?';

  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: initialMsgES }
  ]);
  
  // Update initial message when language changes (only if it's the only message)
  useEffect(() => {
      if (messages.length === 1 && messages[0].id === '1') {
          setMessages([{ id: '1', role: 'model', text: language === 'en' ? initialMsgEN : initialMsgES }]);
      }
  }, [language]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Format history for Gemini
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    // Pass language to service
    const responseText = await sendMessageToGemini(history, userMsg.text, language);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText || "Error."
    };

    setIsTyping(false);
    setMessages(prev => [...prev, modelMsg]);
  };

  // Helper para renderizar texto con enlaces Markdown [texto](url)
  const formatMessage = (text: string) => {
    // Regex para detectar enlaces [texto](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }
        parts.push(
            <a 
                key={match.index} 
                href={match[2]} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline font-bold text-inherit hover:opacity-80"
            >
                {match[1]}
            </a>
        );
        lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Tooltip / Ventana Emergente */}
      {showTooltip && !isOpen && (
        <div className="pointer-events-auto mb-4 mr-2 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 relative max-w-[250px] animate-bounce-slow">
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    setShowTooltip(false);
                }}
                className="absolute top-1 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
            >
                <Icon name="close" className="text-sm" />
            </button>
            <div className="flex gap-3 items-start pr-4">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                    <Icon name="support_agent" className="text-primary text-xl" />
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-tight mt-1">
                    {language === 'es' ? 'Si tenés dudas, escribile a Eufa.' : 'Any questions? Ask Eufa.'}
                </p>
            </div>
            {/* Triangulito del tooltip */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-slate-800 border-b border-r border-slate-200 dark:border-slate-700 transform rotate-45"></div>
        </div>
      )}

      {/* Chat Window */}
      <div className={`pointer-events-auto bg-white dark:bg-slate-900 shadow-2xl rounded-2xl w-[350px] max-w-[calc(100vw-40px)] transition-all duration-300 origin-bottom-right overflow-hidden border border-slate-200 dark:border-slate-800 ${isOpen ? 'opacity-100 scale-100 mb-4' : 'opacity-0 scale-90 h-0 mb-0'}`}>
        
        {/* Header */}
        <div className="bg-primary p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-1.5 rounded-full">
               <Icon name="smart_toy" className="text-sm" />
            </div>
            <div>
                <h3 className="font-bold text-sm">Asistente Eufanía</h3>
                <p className="text-xs opacity-80">Powered by Gemini AI</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
            <Icon name="close" className="text-lg" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === 'user' 
                  ? 'bg-primary text-white rounded-br-none' 
                  : 'bg-white dark:bg-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-bl-none shadow-sm'
              }`}>
                {formatMessage(msg.text)}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2">
            <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={language === 'es' ? "Pregunta sobre acústica..." : "Ask about acoustics..."}
                className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white"
            />
            <button 
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="bg-primary text-white p-2 rounded-xl hover:bg-primary-dark disabled:opacity-50 transition-colors"
            >
                <Icon name="send" className="text-lg" />
            </button>
        </form>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setShowTooltip(false); // Ocultar tooltip al abrir chat
        }}
        className="pointer-events-auto bg-primary text-white w-14 h-14 rounded-full shadow-lg shadow-primary/30 hover:scale-105 transition-transform flex items-center justify-center group border border-slate-900/20"
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0 absolute' : 'scale-100'}`}>
             <Icon name="chat_bubble" className="text-2xl" />
        </div>
        <div className={`transition-transform duration-300 ${!isOpen ? '-rotate-90 scale-0 absolute' : 'scale-100'}`}>
             <Icon name="expand_more" className="text-3xl" />
        </div>
        
        {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center font-bold">1</span>
            </span>
        )}
      </button>
    </div>
  );
};