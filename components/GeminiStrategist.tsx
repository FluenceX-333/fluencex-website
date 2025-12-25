
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, X, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GeminiStrategist: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm the FluenceX AI Strategist. Tell me your brand niche and target audience, and I'll generate a custom influencer marketing strategy for you!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const generateStrategy = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are a professional Influencer Marketing Strategist for FluenceX Agency. Provide a concise, highly creative, and actionable influencer strategy including: 1. Target platform recommendations, 2. Content ideas, 3. Suggested creator niches, and 4. Estimated reach potential. Use bullet points and a modern, high-energy tone.",
        }
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.text || "I'm sorry, I couldn't generate a strategy right now." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Error connecting to AI. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.9 }}
      className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] glass rounded-[2.5rem] shadow-2xl border border-white/10 flex flex-col z-50 overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex justify-between items-center gradient-bg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <Bot size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold leading-none">FluenceX AI</h3>
            <p className="text-white/60 text-xs mt-1">Campaign Strategist</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white">
          <X size={24} />
        </button>
      </div>

      {/* Chat Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-purple-600 text-white rounded-tr-none' 
                : 'glass border border-white/10 text-gray-200 rounded-tl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="glass border border-white/10 p-4 rounded-2xl flex items-center gap-2">
              <Loader2 size={16} className="animate-spin text-purple-500" />
              <span className="text-xs text-gray-400">Analyzing trends...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-white/10">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateStrategy()}
            placeholder="e.g. Sustainable fashion brand for Gen Z..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-4 pr-12 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-all"
          />
          <button 
            onClick={generateStrategy}
            disabled={loading}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white hover:scale-105 transition-transform"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-500 mt-4">
          Powered by Gemini 3.0 Flash • © FluenceX
        </p>
      </div>
    </motion.div>
  );
};

export default GeminiStrategist;
