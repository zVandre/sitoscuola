import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const features = [
  {
    title: 'Keynote Speakers',
    description: 'Ascolta leader del settore tecnologico.',
  },
  {
    title: 'Workshop Interattivi',
    description: 'Partecipa a sessioni pratiche e innovative.',
  },
  {
    title: 'Networking',
    description: 'Incontra professionisti e appassionati del tech.',
  },
];

const Features = () => {
  return (
    <section className="features" id="about">
      <h2>Perché partecipare?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <motion.div
            className="feature-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
