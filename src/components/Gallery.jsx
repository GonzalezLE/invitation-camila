import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import Lightbox from 'yet-another-react-lightbox';
import { motion } from 'framer-motion';

export default function Gallery() {
  // --- AÑADE O CAMBIA LAS FOTOS DE LA QUINCEAÑERA AQUÍ ---
  const photos = [
    { src: './galeria/1.jpg' },
    { src: './galeria/2.jpg' },
    { src: './galeria/3.jpg' },
    { src: './galeria/4.jpg' },
    { src: './galeria/5.jpg' },
    { src: './galeria/6.jpg' },
    { src: './galeria/7.jpg' },
    { src: './galeria/8.jpg' },
  ];

  const [index, setIndex] = useState(-1);


  // --- Variantes para la animación de la galería ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Pequeño retraso entre cada foto
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };


 return (
    <SectionWrapper id="gallery">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-12">
          Mis Mejores Momentos
        </h2>

        {/* Galería ahora con animación */}
        <motion.div 
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Se activa cuando el 10% es visible
        >
          {photos.map((photo, i) => (
            <motion.div 
              key={i} 
              className="overflow-hidden rounded-lg break-inside-avoid shadow-lg" 
              onClick={() => setIndex(i)}
              variants={itemVariants}
            >
              <img
                src={photo.src}
                alt={`Foto de la galería ${i + 1}`}
                className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos}
        />
      </div>
    </SectionWrapper>
  );
}