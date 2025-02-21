import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const features = [
  {
    title: 'Keynote di Visionari',
    description: 'Ascolta interventi ispiratori da leader e pionieri del settore tech che plasmano il futuro.',
  },
  {
    title: 'Workshop Immersivi',
    description: 'Partecipa a sessioni pratiche e interattive, pensate per farti vivere la tecnologia da vicino.',
  },
  {
    title: 'Networking & Collaborazioni',
    description: 'Costruisci relazioni con professionisti, innovatori e startup in un ambiente stimolante e dinamico.',
  },
  {
    title: 'Esposizioni Interattive',
    description: 'Scopri le ultime innovazioni e prototipi delle aziende leader del settore, in spazi espositivi futuristici.',
  },
];

const Features = () => {
  return (
    <section className="features" id="program">
      <h2>Esplora le Innovazioni</h2>
      <p className="features-intro">
        Al TechTalk Festival 2025 ogni esperienza è studiata per ispirarti, educarti e connetterti con il futuro. Dai un'occhiata ai momenti clou dell'evento.
      </p>
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
