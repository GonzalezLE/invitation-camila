import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import DecorativeSeparator from '../assets/DecorativeSeparator';

// Importamos todos los iconos que necesitaremos
import { FiClock } from 'react-icons/fi';
import { FaGlassCheers, FaBirthdayCake } from "react-icons/fa";
import { IoRestaurantOutline } from "react-icons/io5";
import { GiLargeDress, GiCrown, GiHighHeel } from "react-icons/gi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { LuCandy } from "react-icons/lu";

export default function Itinerary() {
  // --- TU LISTA DE ITINERARIO COMPLETA Y EN ORDEN ---
  const schedule = [
    { time: '7:00 pm', event: 'Recepción de Invitados', icon: FaGlassCheers },
    { time: '', event: 'Entrada de la Quinceañera', icon: GiLargeDress },
    { time: '', event: 'Presentación', icon: GiLargeDress },
    { time: '', event: 'Cambio de Zapatillas', icon: GiHighHeel },
    { time: '', event: 'Corona y Última Muñeca', icon: GiCrown },
    { time: '', event: 'Cena / Banquete', icon: IoRestaurantOutline },
    { time: '', event: 'El Vals', icon: GiLargeDress },
    { time: '', event: 'Brindis', icon: FaGlassCheers },
    { time: '', event: 'Baile General (Dinámicas)', icon: BsMusicNoteBeamed },
    { time: '', event: 'Pastel', icon: FaBirthdayCake },
    { time: '', event: 'Mesa de Dulces y Carritos', icon: LuCandy },
    { time: '', event: 'Tornafiesta', icon: BsMusicNoteBeamed },
    { time: '', event: 'Despedida', icon: BsMusicNoteBeamed },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <SectionWrapper id="itinerary">
      <div className="container mx-auto px-6 max-w-2xl text-center text-dark-gray">
        <DecorativeSeparator className="h-auto w-48 mx-auto mb-10 text-gold" />
        <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-16">
          Momentos de la Noche
        </h2>

        <motion.div 
          className="space-y-4" // Reducimos el espacio vertical
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {schedule.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <motion.div key={index} variants={itemVariants} className="relative flex gap-4 text-left items-start">
                {/* Columna del Icono y la línea */}
                <div className="flex-shrink-0 flex flex-col items-center mt-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-peach/20 border-2 border-gold">
                    <IconComponent className="w-6 h-6 text-burgundy" />
                  </div>
                  {/* Línea conectora */}
                  {index < schedule.length - 1 && (
                    <div className="w-[2px] h-full min-h-[4rem] bg-peach/30 mt-2"></div>
                  )}
                </div>
                
                {/* Columna del Contenido */}
                <div className="pt-2">
                  {/* La hora solo aparece si existe */}
                  {item.time && (
                    <p className="font-sans text-xs text-gold tracking-widest flex items-center gap-1 mb-1">
                      <FiClock className="w-3 h-3" /> {item.time}
                    </p>
                  )}
                  <h3 className="font-serif text-xl font-semibold text-burgundy">{item.event}</h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}