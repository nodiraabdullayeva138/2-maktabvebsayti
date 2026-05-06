import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onLogin: () => void;
}

export default function Header({ onLogin }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bosh sahifa', href: '#home' },
    { name: 'Maktab haqida', href: '#about' },
    { name: 'O\'qituvchilar', href: '#teachers' },
    { name: 'Galereya', href: '#gallery' },
    { name: 'Yangiliklar', href: '#news' },
    { name: 'Bog\'lanish', href: '#contact' },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-school-primary rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-school-primary">2-MAKTAB</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">Bilim va kelajak</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium hover:text-school-secondary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onLogin}
              className="px-5 py-2 border border-school-primary text-school-primary text-sm font-bold rounded-full hover:bg-school-primary hover:text-white transition-all flex items-center gap-2"
            >
              <LogIn size={18} /> Kirish
            </button>
            <button className="px-5 py-2 bg-school-primary text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-blue-900/20">
              Bog'lanish
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-school-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium py-2 border-b border-gray-50"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2 flex flex-col gap-3">
                <button 
                  onClick={() => { setIsOpen(false); onLogin(); }}
                  className="w-full py-3 border border-school-primary text-school-primary rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <LogIn size={18} /> Kirish
                </button>
                <button className="w-full py-3 bg-school-primary text-white rounded-xl font-medium shadow-md">
                  Bog'lanish
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
