import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Zap, Award } from 'lucide-react';
import '../stylesheets/About.css';

const About = () => {
  const stats = [
    { icon: <Users className="stat-icon" />, number: '10M+', label: 'Active Users' },
    { icon: <Globe className="stat-icon" />, number: '150+', label: 'Countries' },
    { icon: <Zap className="stat-icon" />, number: '99.9%', label: 'Uptime' },
    { icon: <Award className="stat-icon" />, number: '50+', label: 'Awards' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="about-badge"
            >
              <span>About Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="about-title"
            >
              Building the Future of{' '}
              <span className="about-title-gradient">Web Development</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="about-desc-lg"
            >
              Cobalt is revolutionizing the way developers build and deploy applications. 
              Our platform combines cutting-edge technology with intuitive design to create 
              the most powerful development experience ever.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="about-desc"
            >
              Founded by a team of industry veterans, we've created a platform that 
              scales from startup to enterprise, helping thousands of companies 
              accelerate their digital transformation.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="about-stats"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="about-stat"
                >
                  <div className="about-stat-icon">
                    {stat.icon}
                  </div>
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-visual"
          >
            <div className="about-visual-container">
              {/* Background Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="about-visual-ring about-visual-ring-1"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="about-visual-ring about-visual-ring-2"
              />

              {/* Main Content Box */}
              <div className="about-visual-box">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="about-visual-content"
                >
                  <div className="about-visual-logo">
                    <span>C</span>
                  </div>
                  
                  <h3 className="about-visual-title">
                    Cobalt Platform
                  </h3>
                  
                  <p className="about-visual-desc">
                    The most advanced development platform for modern applications
                  </p>
                  
                  <div className="about-visual-dots">
                    <div className="about-visual-dot"></div>
                    <div className="about-visual-dot"></div>
                    <div className="about-visual-dot"></div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="about-floating-element about-floating-1"
              />
              
              <motion.div
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="about-floating-element about-floating-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 