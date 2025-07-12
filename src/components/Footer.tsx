import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import '../stylesheets/Footer.css';

const Footer = () => {
  const footerLinks = {
    Ember: [
      { name: 'About', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'DMCA', href: '#' },
      { name: 'Privacy', href: '#' },
    ],
    Resources: [
      { name: 'Safety Tips', href: '#tips' },
      { name: 'Streaming Sites', href: '#streaming' },
      { name: 'Anime', href: '#anime' },
      { name: 'Live TV', href: '#livetv' },
    ],
  };

  const socialLinks = [
    { icon: <Github className="social-icon" />, href: '#', label: 'GitHub' },
    { icon: <Twitter className="social-icon" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="social-icon" />, href: '#', label: 'LinkedIn' },
    { icon: <Mail className="social-icon" />, href: '#', label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="footer-brand"
          >
            <div className="footer-logo">
              <div className="footer-logo-badge">
                <span>🔥</span>
              </div>
              <span>Ember</span>
            </div>
            <p className="footer-desc">
              Ember is your gateway to the world of free streaming. Discover, compare, and access the best sites for movies, TV, anime, and more.
            </p>
            {/* Social Links */}
            <div className="footer-socials">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="footer-social-btn"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="footer-links-section"
            >
              <h3 className="footer-links-title">
                {category}
              </h3>
              <ul className="footer-links">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="footer-link"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p className="footer-copyright">
            © 2024 Ember. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-legal-link">
              DMCA
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 