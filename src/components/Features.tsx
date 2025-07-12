import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Code, Database, Cloud } from 'lucide-react';
import '../stylesheets/Features.css';

const Features = () => {
  const features = [
    {
      icon: <Zap className="feature-icon" />,
      title: "Lightning Fast",
      description: "Built for speed with optimized performance and minimal latency.",
      color: "yellow"
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance.",
      color: "green"
    },
    {
      icon: <Globe className="feature-icon" />,
      title: "Global CDN",
      description: "Deploy worldwide with our distributed content delivery network.",
      color: "blue"
    },
    {
      icon: <Code className="feature-icon" />,
      title: "Developer First",
      description: "Built by developers, for developers with modern tooling.",
      color: "purple"
    },
    {
      icon: <Database className="feature-icon" />,
      title: "Scalable Infrastructure",
      description: "Auto-scaling infrastructure that grows with your business.",
      color: "indigo"
    },
    {
      icon: <Cloud className="feature-icon" />,
      title: "Cloud Native",
      description: "Built for the cloud with containerization and microservices.",
      color: "teal"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="features-header"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="features-badge"
          >
            <span>Features</span>
          </motion.div>
          
          <h2 className="features-title">
            Why Choose <span className="features-title-gradient">Cobalt</span>
          </h2>
          
          <p className="features-desc">
            Experience the next generation of web development with our comprehensive platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="features-grid"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="features-card"
            >
              <div className={`features-icon features-icon-${feature.color}`}>
                {feature.icon}
              </div>
              
              <h3 className="features-card-title">
                {feature.title}
              </h3>
              
              <p className="features-card-desc">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="features-cta"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="features-cta-btn"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 