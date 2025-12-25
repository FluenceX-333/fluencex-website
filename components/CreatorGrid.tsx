
import React from 'react';
import { motion } from 'framer-motion';

const creators = [
  { name: 'Lifestyle', count: '12k+', img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=600&fit=crop' },
  { name: 'Tech & Gaming', count: '8k+', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop' },
  { name: 'Real Estate', count: '5k+', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=600&fit=crop' },
  { name: 'Food & Dining', count: '9k+', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=600&fit=crop' },
];

const CreatorGrid: React.FC = () => {
  return (
    <section id="creators" className="py-24 md:py-32 px-5 bg-black relative overflow-hidden">
      {/* Background Vectors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="500" r="400" stroke="#2563EB" strokeWidth="0.5" fill="none" />
          <circle cx="500" cy="500" r="300" stroke="#2563EB" strokeWidth="0.5" fill="none" />
          <circle cx="500" cy="500" r="200" stroke="#2563EB" strokeWidth="0.5" fill="none" />
          <line x1="0" y1="500" x2="1000" y2="500" stroke="#2563EB" strokeWidth="0.5" />
          <line x1="500" y1="0" x2="500" y2="1000" stroke="#2563EB" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-outfit font-black text-white mb-6 uppercase tracking-tighter leading-none"
            >
              OUR POPULAR <span className="text-blue-500">FRIENDS.</span>
            </motion.h2>
            <p className="text-gray-400 text-lg">We have friends who love making videos about houses, tech, and yummy food!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {creators.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl border border-white/5"
            >
              <img 
                src={c.img} 
                alt={c.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-blue-400 font-bold text-xs mb-2 uppercase tracking-[0.2em]">{c.count} Creators</p>
                <h3 className="text-3xl font-outfit font-black text-white uppercase tracking-tight">{c.name}</h3>
                <div className="h-1 w-0 bg-blue-500 mt-4 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorGrid;
