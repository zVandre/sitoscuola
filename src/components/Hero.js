import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <motion.section
      className="hero"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Innovate Your Future
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Unisciti al TechTalk Festival 2025, l'evento dedicato alle nuove frontiere della tecnologia, del design e dell'innovazione. Preparati a vivere un'esperienza immersiva tra keynote ispiratrici, workshop interattivi ed esposizioni all'avanguardia.
      </motion.p>
      <motion.button
        className="cta-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Scopri il Programma
      </motion.button>
    </motion.section>
  );
};

export default Hero;
