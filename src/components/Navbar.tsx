import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="navbar-logo"
        >
          <div className="navbar-logo-badge">
            <span>C</span>
          </div>
          <span>Ember</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navItems.filter(item => item.name !== 'Safety Tips').map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2 }}
              className="navbar-link"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="navbar-cta"
        >
          Browse Sites
        </motion.button>

        {/* Mobile menu button */}
        <div className="navbar-mobile">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-mobile-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="navbar-mobile-menu"
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="navbar-cta"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 