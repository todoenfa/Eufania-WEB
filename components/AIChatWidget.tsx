import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icon';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: '¡Hola! Soy Aco, tu asistente de acústica. ¿En qué puedo ayudarte hoy?' }
  ]);
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

    const responseText = await sendMessageToGemini(history, userMsg.text);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText || "Hubo un error."
    };

    setIsTyping(false);
    setMessages(prev => [...prev, modelMsg]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
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
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-primary text-white rounded-br-none' 
                  : 'bg-white dark:bg-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-bl-none shadow-sm'
              }`}>
                {msg.text}
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
                placeholder="Pregunta sobre acústica..."
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
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-primary text-white w-14 h-14 rounded-full shadow-lg shadow-primary/30 hover:scale-105 transition-transform flex items-center justify-center group"
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