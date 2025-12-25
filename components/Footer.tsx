
import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, X, Shield, FileText, HelpCircle, Sparkles, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'help' | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    try {
      await fetch('https://formspree.io/f/mvgzqlqj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, subject: 'FluenceX Newsletter Signup' })
      });
      setSubscribed(true);
      setEmail('');
    } catch (e) {
      setSubscribed(true);
    }
  };

  const LegalModal = ({ title, content, onClose }: { title: string, content: string, onClose: () => void }) => (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
        className="w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-10 md:p-14 relative max-h-[85vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors">
          <X size={28} />
        </button>
        <h2 className="text-4xl font-outfit font-black text-white mb-8 uppercase tracking-tighter">{title}</h2>
        <div className="text-gray-400 space-y-6 font-medium leading-relaxed">
          {content.split('\n').map((line, i) => <p key={i}>{line}</p>)}
        </div>
      </motion.div>
    </motion.div>
  );

  const legalContent = {
    privacy: "Your privacy matters at FluenceX. We only collect data to make your brand-creator matches better. We never sell your personal information. Every email and detail you share with us is safe, encrypted, and used only to help your business grow.",
    terms: "By working with FluenceX, you agree to our professional partnership terms. We guarantee transparent contracts between brands and creators. All campaign content belongs to you as specified in our individual agreements.",
    help: "Our support team is always here for you. Whether you are a brand ready to launch or a creator wanting to join our network, just email us at contact.fluencex@gmail.com. We respond to all requests within 24 hours."
  };

  return (
    <footer className="pt-24 pb-12 border-t border-white/5 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          <div className="col-span-1 md:col-span-1">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>
              <Logo size="md" className="!items-start mb-8" />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
              Scaling brands to millions through high-performance influencer partnerships.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-gray-400 hover:text-blue-500 transition-all border border-white/5">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:ml-12">
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-4 text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em]">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#creators" onClick={(e) => handleLinkClick(e, '#creators')} className="hover:text-blue-500 transition-colors">Creators</a></li>
              <li><a href="#process" onClick={(e) => handleLinkClick(e, '#process')} className="hover:text-blue-500 transition-colors">Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em]">
              <li><button onClick={() => setModalType('help')} className="hover:text-blue-500 flex items-center gap-2 uppercase tracking-[0.3em]"><HelpCircle size={14} /> Help Center</button></li>
              <li><button onClick={() => setModalType('terms')} className="hover:text-blue-500 flex items-center gap-2 uppercase tracking-[0.3em]"><FileText size={14} /> Terms of Service</button></li>
              <li><button onClick={() => setModalType('privacy')} className="hover:text-blue-500 flex items-center gap-2 uppercase tracking-[0.3em]"><Shield size={14} /> Privacy Policy</button></li>
            </ul>
          </div>

          <div className="relative">
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-6">Stay ahead of the creator economy.</p>
            {subscribed ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                <Sparkles size={16} /> You're on the list!
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-4">
                <div className="relative group">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-blue-500 transition-all font-medium" 
                  />
                  <button type="submit" className="absolute right-2 top-2 bottom-2 px-6 gradient-bg rounded-xl text-white font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all">
                    Join
                  </button>
                </div>
                <p className="text-[9px] text-gray-600 uppercase tracking-[0.2em] font-medium">No spam, just impact.</p>
              </form>
            )}
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-6">
            © 2025 FluenceX. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
             <span className="text-[9px] text-gray-700 uppercase tracking-widest font-black">Secure Data</span>
             <span className="text-[9px] text-gray-700 uppercase tracking-widest font-black">Global Partnerships</span>
             <span className="text-[9px] text-gray-700 uppercase tracking-widest font-black">24/7 Strategy</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalType && (
          <LegalModal 
            title={modalType === 'privacy' ? 'Privacy Policy' : modalType === 'terms' ? 'Terms of Service' : 'Help Center'}
            content={legalContent[modalType]}
            onClose={() => setModalType(null)}
          />
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
