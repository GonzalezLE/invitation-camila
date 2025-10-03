import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import DressCodeIcon from '../assets/icons/DressCodeIcon';

export default function DressCode() {
  const code = "Formal";
  const description = "¡Es una noche de gala! Saca tus mejores atuendos para celebrar y brillar junto a mí en la pista de baile.";
  
  return (
    <SectionWrapper id="dresscode">
      {/* 1. Envolvemos el contenido principal en un motion.div */}
      <motion.div 
        className="container mx-auto px-6 max-w-2xl text-center text-dark-gray"
        // 2. Añadimos las propiedades de animación
        initial={{ opacity: 0, scale: 0.9 }} // Inicia transparente y un 10% más pequeño
        whileInView={{ opacity: 1, scale: 1 }}  // Anima a opacidad total y tamaño normal
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        
        <DressCodeIcon className="w-16 h-16 mx-auto text-gold" />

        <h3 className="font-serif text-3xl md:text-4xl text-burgundy mt-6">
          Código de Vestimenta
        </h3>
        
        <p className="font-serif text-2xl text-dark-gray mt-4">
          {code}
        </p>
        
        <p className="font-sans text-md font-light mt-4 leading-relaxed">
          {description}
        </p>
        
        <div className="mt-8 flex items-center justify-center gap-4 bg-peach/10 p-4 rounded-lg border border-peach/50 max-w-md mx-auto">
          <span className="w-6 h-6 rounded-full bg-peach border-2 border-white shadow-md block flex-shrink-0"></span>
          <p className="font-sans text-sm text-dark-gray text-left">
            P.D. El color <span className="font-semibold text-burgundy">Rosa / Durazno</span> está reservado para la quinceañera.
          </p>
        </div>
        
      </motion.div>
    </SectionWrapper>
  );
}