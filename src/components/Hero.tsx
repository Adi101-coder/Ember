import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import '../stylesheets/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Animated Background */}
      <div className="hero-bg"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="floating-element"
        style={{ position: 'absolute', top: '20%', left: '10%', width: '16px', height: '16px', background: '#3B82F6', borderRadius: '50%', opacity: 0.6 }}
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="floating-element"
        style={{ position: 'absolute', top: '40%', right: '20%', width: '24px', height: '24px', background: '#a855f7', borderRadius: '50%', opacity: 0.4 }}
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="floating-element"
        style={{ position: 'absolute', bottom: '40%', left: '20%', width: '12px', height: '12px', background: '#3B82F6', borderRadius: '50%', opacity: 0.5 }}
      />

      {/* Main Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content-inner"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-badge"
          >
            <Star className="star-icon" />
            <span>Trusted by 10,000+ companies</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-title"
          >
            <span>Transform Your</span>
            <br />
            <span className="hero-title-gradient">Digital Experience</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-subtitle"
          >
            Build, deploy, and scale your applications with our cutting-edge platform. 
            Experience the future of web development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-cta-group"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-cta"
            >
              <span>Get Started Free</span>
              <ArrowRight className="arrow-icon" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-demo-btn"
            >
              <div className="demo-icon">
                <Play className="play-icon" />
              </div>
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="hero-stats"
          >
            {[
              { number: '99.9%', label: 'Uptime' },
              { number: '50ms', label: 'Response Time' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="hero-stat">
                <div className="hero-stat-number">{stat.number}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="scroll-indicator"
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-dot"
          style={{ width: '24px', height: '40px', border: '2px solid #3B82F6', borderRadius: '999px', display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="scroll-inner"
            style={{ width: '4px', height: '12px', background: '#3B82F6', borderRadius: '999px', marginTop: '8px' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 