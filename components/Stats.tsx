
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Verified Creators', value: '12K', suffix: '+' },
  { label: 'Successful Launches', value: '500', suffix: '+' },
  { label: 'Happy Brands', value: '150', suffix: '+' },
  { label: 'Billion Reach', value: '1', suffix: 'B+' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-blue-900/10 relative overflow-hidden">
      {/* Impressive Data Vector Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,200 Q360,100 720,200 T1440,200" stroke="#2563EB" strokeWidth="2" fill="none" />
          <path d="M0,250 Q360,150 720,250 T1440,250" stroke="#2563EB" strokeWidth="1" fill="none" />
          <path d="M0,150 Q360,50 720,150 T1440,150" stroke="#2563EB" strokeWidth="1" fill="none" />
          {/* Animated data points */}
          <motion.circle 
            animate={{ cx: [0, 1440], cy: [200, 200] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            r="4" fill="#2563EB" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-outfit font-black text-white mb-2 uppercase">
                <span className="gradient-text">{stat.value}</span>
                <span className="text-blue-500">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
