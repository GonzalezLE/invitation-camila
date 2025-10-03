import { motion } from 'framer-motion'; // Asegúrate de que la importación esté activa
import Countdown from './Countdown';

export default function Welcome() {
  const quinceaneraName = "Camila Mendieta López";
  const eventDate = "2026-02-07T19:00:00";

  return (
    <section 
      id="welcome" 
      className="min-h-screen flex flex-col justify-between text-center text-white relative overflow-hidden"
    >
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 animate-kenburns"
        style={{ 
          // 1. Limpié la URL. Los parámetros extra no son necesarios para un archivo local.
          backgroundImage: "url('./fotos/fondo.jpeg')" 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-10"></div> 

      {/* --- Contenido SUPERIOR con Framer Motion --- */}
      <motion.div 
        className="relative z-20 pt-16 md:pt-24"
        // 2. Definimos la animación con Framer Motion
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative inline-flex items-center justify-center">          
          <h2 className="font-serif text-3xl md:text-4xl text-cream drop-shadow-md">
            Mis XV Años
          </h2>
        </div>
      </motion.div>

      {/* --- Contenido INFERIOR con Framer Motion --- */}
      <motion.div 
        className="relative z-20 p-6 pb-16 md:pb-24"
        // 3. Animación con un retraso para que aparezca después
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream my-4 drop-shadow-md leading-tight">
          {quinceaneraName}
        </h1>
        
        <div className="font-sans text-md text-cream/90 mt-4 mb-8">
          <p>Sábado 7 de Febrero del 2026 &nbsp;•&nbsp; 7:00 PM</p>
        </div>
        
        <Countdown targetDate={eventDate} />
      </motion.div>
    </section>
  );
}