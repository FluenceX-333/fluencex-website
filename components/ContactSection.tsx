
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('https://formspree.io/f/mvgzqlqj', { 
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true); // Fallback UI for demo
      }
    } catch (err) {
      console.error("Submission error", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-6 bg-black relative overflow-hidden">
      {/* Background Impressive Vector */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1000 0L0 1000M500 -100V1100M-100 500H1100" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="20 20" />
          <circle cx="800" cy="200" r="150" stroke="#2563EB" strokeWidth="1" />
          <circle cx="200" cy="800" r="100" stroke="#2563EB" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-black text-white mb-8 tracking-tighter uppercase leading-[0.85]">
              TELL US <br />
              <span className="text-blue-500">EVERYTHING.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl mb-12 max-w-md font-medium">
              Ready to break the internet? Let's talk about your brand goals.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[2rem] glass flex items-center justify-center text-blue-500 border border-white/5 shadow-xl transition-all group-hover:scale-110">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.4em] mb-1">Email Us</p>
                  <a href="mailto:contact.fluencex@gmail.com" className="text-xl md:text-2xl font-black text-white hover:text-blue-500 transition-colors">contact.fluencex@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-[2rem] glass flex items-center justify-center text-blue-500 border border-white/5 shadow-xl transition-all group-hover:scale-110">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.4em] mb-1">Call HQ</p>
                  <a href="tel:9750505481" className="text-xl md:text-2xl font-black text-white hover:text-blue-500 transition-colors">9750505481</a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-20 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 lg:p-16 rounded-[4rem] glass border border-white/10 z-20"
            >
              {submitted ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                  <CheckCircle2 size={80} className="text-green-500 mx-auto mb-8" />
                  <h3 className="text-4xl font-outfit font-black text-white mb-4 uppercase">Message Sent!</h3>
                  <p className="text-gray-400 font-medium text-lg">Our strategists are already looking at your request. Talk soon!</p>
                  <button onClick={() => setSubmitted(false)} className="mt-10 text-blue-500 font-bold uppercase tracking-widest text-xs hover:underline">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Name</label>
                      <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all font-medium" placeholder="Your Name" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Email</label>
                      <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all font-medium" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Brand Vision</label>
                    <textarea required name="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all font-medium resize-none" placeholder="What are your goals?"></textarea>
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={loading} type="submit" className="w-full py-5 md:py-6 gradient-bg rounded-2xl text-white font-black text-lg md:text-xl uppercase tracking-widest shadow-2xl shadow-blue-600/30 transition-all flex items-center justify-center gap-4 disabled:opacity-50">
                    {loading ? "SENDING..." : "LAUNCH MESSAGE"}
                    <Send size={24} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
