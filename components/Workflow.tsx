
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText, Users, PlayCircle, Rocket } from 'lucide-react';

const steps = [
  { 
    id: '1', 
    title: 'Say Hello', 
    desc: 'Tell us about your brand. We listen and learn what makes you special.',
    icon: <MessageSquareText size={40} className="text-blue-500" />
  },
  { 
    id: '2', 
    title: 'Find Besties', 
    desc: 'We find popular creators who will love your products just like friends do.',
    icon: <Users size={40} className="text-blue-400" />
  },
  { 
    id: '3', 
    title: 'Make Magic', 
    desc: 'Creators make fun videos showing off your brand to millions of people.',
    icon: <PlayCircle size={40} className="text-blue-300" />
  },
  { 
    id: '4', 
    title: 'Watch Growth', 
    desc: 'New customers find you and your business gets bigger and better!',
    icon: <Rocket size={40} className="text-blue-600" />
  },
];

const Workflow: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 px-4 bg-black relative overflow-hidden">
      {/* Workflow Path Vector */}
      <svg className="absolute top-1/2 left-0 w-full h-24 opacity-[0.05] hidden lg:block pointer-events-none" viewBox="0 0 1200 100" fill="none">
        <path d="M0 50 C 300 0, 900 100, 1200 50" stroke="#2563EB" strokeWidth="2" strokeDasharray="10 15" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-outfit font-black text-white mb-6 uppercase tracking-tighter">
              EASY AS <span className="text-blue-500">1-2-3.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto">Here is how we help your brand become the talk of the town.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative p-10 md:p-12 rounded-[3rem] glass border border-white/5 text-center group hover:border-blue-500/30 transition-all"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center font-black text-white shadow-xl text-xl">
                {step.id}
              </div>
              <div className="mb-8 flex justify-center group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
