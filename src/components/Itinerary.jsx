import SectionWrapper from './SectionWrapper';

import { motion } from 'framer-motion';
// Importa los nuevos iconos
import ClockIcon from '../assets/icons/ClockIcon';
import ChampagneIcon from '../assets/icons/ChampagneIcon';
import DinnerIcon from '../assets/icons/DinnerIcon';
import DanceIcon from '../assets/icons/DanceIcon';
import CakeIcon from '../assets/icons/CakeIcon';
import DecorativeSeparator from '../assets/DecorativeSeparator';

export default function Itinerary() {
  const schedule = [
    { time: '8:00 PM', event: 'Recepción y Cóctel de Bienvenida', icon: ChampagneIcon },
    { time: '9:30 PM', event: 'Cena', icon: DinnerIcon },
    { time: '11:00 PM', event: 'El Vals', icon: DanceIcon },
    { time: '11:30 PM', event: 'Brindis y Pastel', icon: CakeIcon },
    { time: '12:00 AM', event: '¡Que comience la fiesta!', icon: DanceIcon },
  ];


   // --- Variantes para la animación en cascada ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Cada tarjeta se animará con 0.2s de diferencia
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

 return (
    <SectionWrapper id="itinerary">
      <div className="container mx-auto px-6 max-w-4xl text-center text-dark-gray">
        
        <DecorativeSeparator className="h-auto w-48 mx-auto mb-10 text-gold" />
        <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-16">
          Itinerario del Evento
        </h2>

        {/* Contenedor principal ahora animado */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {schedule.map((item, index) => {
            const IconComponent = item.icon;
            const isEven = index % 2 === 0;

            return (
              // Cada tarjeta ahora es un motion.div
              <motion.div 
                key={index} 
                className={`flex flex-col items-center p-6 rounded-lg border border-peach/30 shadow-md bg-white/70 
                           ${isEven ? 'md:col-start-1' : 'md:col-start-2'}`}
                variants={itemVariants}
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-peach/20 border-2 border-gold mb-4">
                  <IconComponent className="w-10 h-10 text-burgundy" />
                </div>
                <div className="font-sans text-md text-gold tracking-widest flex items-center gap-2 mb-2">
                  <ClockIcon className="w-5 h-5 text-gold" /> {item.time}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-burgundy">{item.event}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}