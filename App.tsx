
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import BrandShowcase from './components/BrandShowcase';
import CreatorGrid from './components/CreatorGrid';
import Workflow from './components/Workflow';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-blue-500/30">
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[1000] bg-black flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.5)]">
                <Hash size={48} className="text-white" strokeWidth={3} />
              </div>
              <p className="text-blue-500 font-bold tracking-[0.5em] uppercase text-xs">FluenceX</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <main>
        <Hero />
        <BrandShowcase />
        <Services />
        <Stats />
        <CreatorGrid />
        <Workflow />
        <CTASection />
        <ContactSection />
      </main>

      <Footer />

      {/* WhatsApp Floating Button - Fixed to the Bottom Right */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <motion.a
          href="https://wa.me/919750505481"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] p-4 md:p-5 rounded-full md:rounded-3xl shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center gap-3 text-white font-black border border-white/20"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.601 6.02L0 24l6.123-1.607a11.79 11.79 0 005.927 1.608h.005c6.637 0 12.05-5.413 12.05-12.051a11.813 11.813 0 00-3.542-8.528z"/>
          </svg>
          {/* <span className="hidden lg:inline text-sm tracking-widest uppercase"></span> */}
        </motion.a>
      </div>
    </div>
  );
};

export default App;
