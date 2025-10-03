import SectionWrapper from './SectionWrapper';
import LocationIcon from '../assets/icons/LocationIcon';
import DecorativeSeparator from '../assets/DecorativeSeparator';
import { motion } from 'framer-motion';


export default function Location() {
  // --- PERSONALIZA LA INFORMACIÓN DEL SALÓN AQUÍ ---
  const salonName = "Salón castillo real Dumont";
  const address = "Av. 16 Ote. 4005, Resurgimiento Cd. Nte, 72330 Heroica Puebla de Zaragoza, Pue";

  // URL de una foto del salón
  const salonImageUrl = "./fotos/salon.jpeg";
  // URL del iframe de Google Maps. ¡OJO! Se obtiene del botón "Compartir" -> "Incorporar un mapa" en Google Maps
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7542.927236350022!2d-98.16916717838447!3d19.04334320233544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc04e2e00c711%3A0x3b52b9db94fe57e7!2sCastillo%20Real%20Dumonth!5e0!3m2!1ses-419!2smx!4v1759516483695!5m2!1ses-419!2smx";
  // URL para confirmar asistencia (puede ser un link a un formulario de Google, WhatsApp, etc.)
  
    
  const phoneNumber = "5212213863050"; 
   const message = `¡Hola! Con mucha alegría confirmo nuestra asistencia para celebrar los XV Años de Camila. %0A%0AFamilia/Nombre:%0A%0AAsistiremos:%0A%0A¡Muchas gracias, nos vemos en la fiesta!`;
  const rsvpLink = `https://wa.me/${phoneNumber}?text=${message}`;


   // --- Variantes de Animación ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const itemLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const itemRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <SectionWrapper id="location">
      <motion.div 
        className="container mx-auto px-6 max-w-4xl text-center text-dark-gray"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants}>
          <DecorativeSeparator className="h-auto w-48 mx-auto mb-10 text-gold" />
          <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-12">
            Lugar de la Recepción
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna de Información */}
          <motion.div variants={itemLeftVariants} className="text-center md:text-left">
            <img 
              src={salonImageUrl} 
              alt={`Foto del ${salonName}`}
              className="rounded-lg shadow-xl w-full h-64 object-cover mb-6"
            />
            <div className="flex justify-center md:justify-start items-center gap-3">
              <LocationIcon className="w-8 h-8 text-gold flex-shrink-0" />
              <h3 className="font-serif text-2xl text-burgundy">{salonName}</h3>
            </div>
            <p className="font-sans mt-2 ml-11">{address}</p>
          </motion.div>

          {/* Columna del Mapa */}
          <motion.div variants={itemRightVariants} className="w-full h-96 md:h-full rounded-lg overflow-hidden shadow-xl border-4 border-peach">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
        
        {/* Botón de Confirmación de Asistencia */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="font-serif text-2xl text-burgundy mb-4">Confirma tu Asistencia</h3>
          <p className="font-sans max-w-md mx-auto mb-6">Por favor, ayúdame a saber si contaré contigo en esta noche tan especial. ¡Espero verte ahí!</p>
          <a
            href={rsvpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-burgundy text-cream font-bold font-sans py-3 px-8 rounded-lg shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gold hover:text-dark-gray"
          >
            Confirmar Asistencia
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}