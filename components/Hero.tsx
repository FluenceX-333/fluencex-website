
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer2, Sparkles, Instagram, Youtube, Twitter, Facebook, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingIcons = [
    { icon: <Instagram />, color: 'text-pink-500', top: '15%', left: '10%', delay: 0 },
    { icon: <Youtube />, color: 'text-red-500', top: '25%', right: '15%', delay: 1 },
    { icon: <Twitter />, color: 'text-blue-400', bottom: '25%', left: '20%', delay: 2 },
    { icon: <Facebook />, color: 'text-blue-600', bottom: '35%', right: '12%', delay: 0.5 },
    { icon: <Send />, color: 'text-blue-300', top: '40%', left: '5%', delay: 1.5 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden bg-[#050505]">
      {/* Impressive Unique "Influence Network" Vector Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Connection Mesh SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Subtle Grid Background */}
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.2" />
          
          {/* Dynamic Connection Lines */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {/* These paths represent the "Network of Influence" */}
            <path d="M-100,200 C200,100 400,500 800,300 S1200,600 1500,200" stroke="#2563EB" strokeWidth="0.5" fill="none" strokeDasharray="5,10" />
            <path d="M-50,600 C300,400 600,800 1000,500 S1300,100 1600,400" stroke="#2563EB" strokeWidth="0.5" fill="none" strokeDasharray="10,5" />
            
            {/* Pulsing Intersections (Nodes) */}
            {[
              {x: '20%', y: '30%'}, {x: '45%', y: '65%'}, {x: '75%', y: '25%'}, 
              {x: '85%', y: '70%'}, {x: '10%', y: '75%'}, {x: '60%', y: '45%'}
            ].map((node, i) => (
              <motion.circle
                key={i}
                cx={node.x}
                cy={node.y}
                r="3"
                fill="#2563EB"
                animate={{ r: [3, 6, 3], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, delay: i * 0.7, repeat: Infinity }}
              />
            ))}
          </motion.g>
        </svg>

        {/* Brand Aura (Large Glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(37,99,235,0.07)_0%,transparent_60%)] pointer-events-none" />
      </div>

      {/* Floating Social Logos */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: [1, 1.2, 1],
            y: [0, -40, 0],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ 
            duration: 10, 
            delay: item.delay, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className={`absolute pointer-events-none hidden lg:block ${item.color}`}
          style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right }}
        >
          <div className="scale-[3] md:scale-[5] opacity-60">
            {item.icon}
          </div>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/10 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-12"
        >
          <Sparkles size={16} className="text-blue-500 animate-pulse" />
          <span>Elevating Brands through the Creator Economy</span>
        </motion.div>
        
        <div className="perspective-1000">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-9xl font-outfit font-black text-white leading-[0.9] mb-12 tracking-tighter uppercase"
          >
            GET <br />
            <span className="gradient-text">FAMOUS.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium px-4"
        >
          Influencer marketing is when popular people show cool products to their friends. <span className="text-white font-bold">FluenceX</span> helps you find these people so you can sell more and grow faster!
        </motion.p>

       
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hidden md:flex">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MousePointer2 size={20} className="text-white" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
