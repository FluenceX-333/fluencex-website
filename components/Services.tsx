
import React from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3, Globe, Zap, Hash } from 'lucide-react';

const services = [
  {
    icon: <Users className="text-blue-400" size={36} />,
    title: 'Finding Besties',
    desc: 'We use special computer magic to find the perfect popular person who will love your brand and talk to their friends about it.'
  },
  {
    icon: <BarChart3 className="text-blue-300" size={36} />,
    title: 'Safe Growth',
    desc: 'We make sure that every dollar you spend helps your brand get bigger. No guessing, just real growth for your business.'
  },
  {
    icon: <Zap className="text-blue-500" size={36} />,
    title: 'Cool Content',
    desc: 'Our friends make videos and pictures that people actually want to watch. It is fun, exciting, and makes people happy to see your brand.'
  },
  {
    icon: <Globe className="text-blue-200" size={36} />,
    title: 'Everywhere at Once',
    desc: 'Whether it is TikTok, Instagram, or YouTube—we make sure everyone is seeing your brand at the same time!'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Vector */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="300" stroke="#2563EB" strokeWidth="2" />
          <circle cx="400" cy="400" r="200" stroke="#2563EB" strokeWidth="1" />
          <path d="M0 800L400 0" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-outfit font-black text-white mb-6 tracking-tighter uppercase">WHAT WE <span className="text-blue-500 underline decoration-white/20">DO BEST.</span></h2>
            <p className="text-gray-400 text-lg">We help brands and creators become a winning team. Simple, smart, and fun.</p>
          </div>
          <div className="hidden md:block w-32 h-32 opacity-10">
            <Hash size={128} className="text-blue-500" strokeWidth={2} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateY: 5,
                scale: 1.02,
              }}
              className="p-10 rounded-[2.5rem] glass border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Card Background Vector */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <Hash size={64} />
              </div>

              <div className="mb-8 p-5 rounded-2xl bg-blue-600/10 w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
