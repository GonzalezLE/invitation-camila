import { useState } from 'react'; // <-- IMPORTANTE: Necesitamos useState
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

import DecorativeSeparator from '../assets/DecorativeSeparator';
import QuillIcon from './../assets/icons/QuillIcon';


export default function Guestbook() {
  // --- RECORDATORIO IMPORTANTE ---
  // Cuando recibas los mensajes por WhatsApp, tendrás que añadirlos
  // manualmente a este arreglo para que se muestren en la página.
  const wishes = [
    
  ];
  /*
  { name: 'Tus Padrinos, Familia Pérez', message: '¡Muchas felicidades, Cami! Que esta nueva etapa esté llena de luz, sueños cumplidos y muchísima alegría. Te queremos.' },
    { name: 'Sofía R.', message: 'Amiga, ¡no puedo creer que ya sean tus XV! Te espera una noche increíble. ¡A celebrar! Te adoro.' },
  */

  // Estado para guardar el nombre y el mensaje del invitado
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // --- CONFIGURACIÓN DE WHATSAPP ---
  // Reemplaza este número por el teléfono que recibirá los mensajes
  // 
  const phoneNumber = "5212213230515";
  
  // Plantilla del mensaje que se enviará
  const introText = "¡Hola! Quiero dejarle un deseo a Camila en su libro de deseos. ✨%0A%0A";
  const fromText = `*De:* ${encodeURIComponent(name)}%0A%0A`;
  const messageText = `*Mensaje:*%0A${encodeURIComponent(message)}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${introText}${fromText}${messageText}`;

const wallVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const wishVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <SectionWrapper id="guestbook">
      <motion.div 
        className="container mx-auto px-6 max-w-4xl text-center text-dark-gray"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <DecorativeSeparator className="h-auto w-48 mx-auto mb-10 text-gold" />
        <QuillIcon className="w-16 h-16 mx-auto text-gold" />
        <h2 className="font-serif text-3xl md:text-4xl text-burgundy mt-6 mb-8">
          Mi Libro de Deseos
        </h2>
        <p className="font-sans text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Significa mucho para mí que dejes un recuerdo de este día. Por favor, compárteme tus mejores deseos para esta nueva etapa.
        </p>

        {/* --- Formulario para enviar deseos por WhatsApp --- */}
        <div className="max-w-xl mx-auto mt-12 text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block text-burgundy font-sans mb-2">Tu Nombre:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 font-sans rounded-md border border-peach/50 focus:ring-2 focus:ring-gold focus:outline-none bg-white/70" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-burgundy font-sans mb-2">Tu Mensaje:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 font-sans rounded-md border border-peach/50 focus:ring-2 focus:ring-gold focus:outline-none bg-white/70"
            ></textarea>
          </div>
          <a 
            href={!name || !message ? undefined : whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full text-center bg-burgundy text-cream font-bold font-sans py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out ${!name || !message ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:bg-gold hover:text-dark-gray'}`}
          >
            Enviar mi Deseo por WhatsApp
          </a>
        </div>

        {/* --- Muro de Deseos Mostrados (ahora con animación) --- */}
        <motion.div 
          className="mt-20"
          variants={wallVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {wishes.map((wish, index) => (
            <motion.div 
              key={index} 
              className="bg-white/70 border border-peach/30 p-6 rounded-lg shadow-sm text-left mb-6 max-w-xl mx-auto"
              variants={wishVariants}
            >
              <p className="font-sans italic text-dark-gray/80">"{wish.message}"</p>
              <p className="font-serif text-burgundy text-right mt-4">- {wish.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}