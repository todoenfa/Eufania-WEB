import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// In a real production app, ensure strict backend proxying for keys.
// For this demo, we assume the environment variable is injected safely.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are 'Aco', the AI Assistant for Eufanía, an acoustics and interior design agency.
Your tone is professional, friendly, and helpful (similar to Euge and Facu, the founders).
You specialize in:
1. Soundproofing (Aislamiento).
2. Acoustic Treatment (Acondicionamiento).
3. Interior Design for studios and home offices.

Keep answers concise (under 80 words) and encourage booking a free consultation if the query is complex.
Always speak in Spanish unless addressed in English.
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
  if (!process.env.API_KEY) {
    return "Error: API Key no configurada. Por favor contacta al administrador.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, tuve un problema procesando tu consulta. ¿Podrías intentar de nuevo?";
  }
};