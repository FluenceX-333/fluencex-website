
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  'Lululemon', 'Nike', 'Tesla', 'Adobe', 'Shopify', 
  'Sephora', 'Beats', 'Revolut', 'Gymshark', 'Glossier',
  'Lululemon', 'Nike', 'Tesla', 'Adobe', 'Shopify', 
  'Sephora', 'Beats', 'Revolut', 'Gymshark', 'Glossier'
];

const BrandShowcase: React.FC = () => {
  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.01] overflow-hidden whitespace-nowrap flex group">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex gap-20 items-center px-10"
      >
        {brands.map((brand, i) => (
          <div key={i} className="text-2xl md:text-4xl font-outfit font-black text-white/40 hover:text-blue-500 transition-colors cursor-default uppercase tracking-tighter">
            {brand}<span className="text-blue-600">.</span>
          </div>
        ))}
      </motion.div>
      {/* Duplicate for seamless effect */}
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        aria-hidden="true"
        className="flex gap-20 items-center px-10"
      >
        {brands.map((brand, i) => (
          <div key={`dup-${i}`} className="text-2xl md:text-4xl font-outfit font-black text-white/40 hover:text-blue-500 transition-colors cursor-default uppercase tracking-tighter">
            {brand}<span className="text-blue-600">.</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default BrandShowcase;
