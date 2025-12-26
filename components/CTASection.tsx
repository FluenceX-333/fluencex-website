
import React from 'react';
import { motion } from 'framer-motion';
import { Hash } from 'lucide-react';

const CTASection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contact = document.querySelector('#contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* External Section Decorative Vectors */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <circle cx="500" cy="500" r="400" stroke="white" strokeWidth="0.5" />
            <circle cx="500" cy="500" r="300" stroke="white" strokeWidth="0.5" />
          </g>
          <motion.path 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            d="M500 0V1000M0 500H1000" 
            stroke="white" 
            strokeWidth="0.5" 
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative p-12 md:p-18 rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
          {/* Main Gradient Background */}
          <div className="absolute inset-0 gradient-bg" />
          
          {/* Brand-Aligned Abstract Vector Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" fillOpacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotPattern)" />
              
              {/* Large Stylized Hashtag Outlines */}
              <motion.g
                animate={{ 
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              >
                <text x="75%" y="30%" fontSize="300" fontWeight="900" fill="white" fillOpacity="0.03" style={{ fontFamily: 'Outfit' }}>#</text>
                <text x="5%" y="85%" fontSize="250" fontWeight="900" fill="white" fillOpacity="0.03" style={{ fontFamily: 'Outfit' }}>#</text>
              </motion.g>

              {/* Connecting Influence Lines */}
              <motion.path 
                d="M-10% 20% Q 30% 50% 110% 10%" 
                stroke="white" 
                strokeWidth="1" 
                strokeOpacity="0.1" 
                fill="none"
                animate={{ d: ["M-10% 20% Q 30% 50% 110% 10%", "M-10% 30% Q 50% 10% 110% 40%", "M-10% 20% Q 30% 50% 110% 10%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          <div className="relative z-10 text-center text-white">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/20 backdrop-blur-md"
            >
              <Hash size={40} className="text-white" strokeWidth={3} />
            </motion.div>

            <h2 className="text-4xl md:text-7xl font-outfit font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              READY TO <br />
              <span className="text-white/80">BREAK THE WEB?</span>
            </h2>
            
            <p className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
              Don't just run ads. Build a movement. Join the world's most innovative brands growing with <span className="font-black underline decoration-white/20">FluenceX</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-14 py-6 bg-white text-blue-600 rounded-[2rem] font-black text-xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] transition-all uppercase tracking-widest"
              >
                Start Campaign
              </motion.button>
              {/* Fixed: changed 'bg' to 'backgroundColor' for correct Framer Motion property usage */}
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-14 py-6 border-2 border-white/40 text-white rounded-[2rem] font-black text-xl hover:bg-white/10 transition-all uppercase tracking-widest backdrop-blur-sm"
              >
                Get Proposal
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
