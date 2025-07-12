import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import '../stylesheets/Services.css';

const Services = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'SSL certificates',
        'CDN included'
      ],
      popular: false,
      color: "blue"
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 projects',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'Custom domains',
        'Team collaboration',
        'API access',
        'Advanced security'
      ],
      popular: true,
      color: "purple"
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited projects',
        '1TB storage',
        'Enterprise analytics',
        '24/7 phone support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'Dedicated support'
      ],
      popular: false,
      color: "pink"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="services-header"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="services-badge"
          >
            <span>Pricing</span>
          </motion.div>
          
          <h2 className="services-title">
            Choose Your <span className="services-title-gradient">Plan</span>
          </h2>
          
          <p className="services-desc">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="services-grid"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`services-card ${plan.popular ? 'services-card-popular' : ''}`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="services-popular-badge"
                >
                  <Star className="star-icon" />
                  <span>Most Popular</span>
                </motion.div>
              )}
              
              <div className="services-card-content">
                <div className="services-card-header">
                  <h3 className="services-card-title">{plan.name}</h3>
                  <p className="services-card-desc">{plan.description}</p>
                  
                  <div className="services-card-price-container">
                    <span className="services-card-price">{plan.price}</span>
                    <span className="services-card-period">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="services-card-features">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="services-card-feature"
                    >
                      <div className={`services-feature-icon services-feature-icon-${plan.color}`}>
                        <Check className="check-icon" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`services-card-btn ${plan.popular ? 'services-card-btn-popular' : ''}`}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="services-cta"
        >
          <p className="services-cta-desc">
            Need a custom plan? Contact our sales team for enterprise solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="services-cta-btn"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 