import { motion } from 'framer-motion';
// Sugerencia: Verifiqué la ruta para que sea consistente con las demás.
import DecorativeSeparator from '../assets/DecorativeSeparator';
import SectionWrapper from './SectionWrapper';

export default function Message() {
  const welcomeMessage = "Con una alegría que no cabe en mi corazón, quiero que seas parte de la noche más soñada de mi vida. Cada detalle ha sido pensado para compartirlo contigo. Tu presencia será mi mejor regalo.";
  const signature = "Con cariño, Camila.";

  return (
    <SectionWrapper id="message">
      {/* 1. Envolvemos todo en un motion.div y combinamos las clases */}
      <motion.div 
        className="container mx-auto px-6 max-w-3xl text-center text-dark-gray"
        // 2. Añadimos las propiedades de animación de Framer Motion
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        <DecorativeSeparator className="h-auto w-48 mx-auto mb-10 text-gold" />

        <p className="font-sans text-xl md:text-2xl font-light leading-relaxed italic text-dark-gray/90
                       first-letter:text-5xl first-letter:font-serif first-letter:text-burgundy first-letter:float-left first-letter:pr-3 first-letter:font-normal">
          {welcomeMessage}
        </p>

        <p className="font-serif text-lg text-burgundy mt-10 clear-left">
          {signature}
        </p>
      </motion.div>
    </SectionWrapper>
  );
}