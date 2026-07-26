import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Corporate', href: '#corporate' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/assets/logo.jpg" 
            alt="SGM Sarthak Global Mobility" 
            className="h-10 md:h-12 w-auto object-contain rounded-full shadow-md border-2 border-accent/40 group-hover:scale-105 transition-transform bg-white p-0.5" 
          />
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-extrabold tracking-tight leading-none ${isScrolled ? 'text-secondary' : 'text-white'}`}>
              <span className="font-playfair">SGM</span><span className="text-accent">GLOBAL</span>
            </span>
            <span className="text-[9px] font-bold tracking-wider uppercase text-amber-500 mt-0.5">
              Sarthak Global Mobility
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? 'text-foreground' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+919891335351" className={`flex items-center gap-2 text-sm font-bold transition-colors hover:text-accent ${isScrolled ? 'text-secondary' : 'text-white'}`}>
            <Phone size={16} /> +91 9891335351
          </a>
          <Button className="bg-accent text-secondary hover:bg-secondary hover:text-white transition-colors rounded-full px-6 font-semibold shadow-lg">
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} className={isScrolled ? 'text-secondary' : 'text-white'} /> : <Menu size={24} className={isScrolled ? 'text-secondary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl py-4 px-4 flex flex-col gap-4 lg:hidden border-t"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t pt-4 mt-2 flex flex-col gap-4">
               <a href="tel:+919891335351" className="flex items-center justify-center gap-2 text-secondary font-bold p-2 bg-slate-50 rounded-md">
                <Phone size={18} /> +91 9891335351
              </a>
              <Button className="w-full bg-accent text-secondary hover:bg-secondary hover:text-white font-semibold">
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
