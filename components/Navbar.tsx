
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Creators', href: '#creators' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3 md:py-4 glass shadow-2xl' : 'py-6 md:py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="z-[110]">
            <Logo size="md" className="!items-start" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-400 hover:text-white transition-all font-medium text-[11px] xl:text-xs tracking-widest uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <motion.a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 xl:px-8 py-2.5 xl:py-3 rounded-xl gradient-bg text-white text-[10px] xl:text-xs font-bold tracking-widest uppercase transition-all shadow-xl shadow-blue-600/20"
            >
              Get In Touch
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white p-2 z-[110]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Off-Canvas Header / Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[105]" />
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }} 
              transition={{ type: 'spring', damping: 25, stiffness: 200 }} 
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[400px] bg-[#0A0A0A] z-[110] border-l border-white/10 p-10 flex flex-col"
            >
              <div className="mb-16">
                <Logo size="lg" className="!items-start" />
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="flex items-center justify-between text-2xl text-white font-bold tracking-tight hover:text-blue-500 py-2 group">
                    {link.name}
                    <ChevronRight size={20} className="text-blue-500 group-hover:translate-x-2 transition-transform" />
                  </a>
                ))}
              </div>
              <div className="mt-auto">
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="block w-full py-5 rounded-2xl gradient-bg text-white font-black text-center text-lg tracking-widest uppercase shadow-2xl shadow-blue-600/30">
                  Start Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
