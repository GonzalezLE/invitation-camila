import { useEffect, useState, useRef } from 'react'; // <-- AÑADIMOS useRef
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // Usaremos esta función para la carga


import MusicPlayer from './components/MusicPlayer';

// Importamos el resto de nuestros componentes y la configuración
import { particlesConfig } from './particlesConfig';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Family from './components/Family';
import Gallery from './components/Gallery';
import DressCode from './components/DressCode';
import Itinerary from './components/Itinerary';
import Location from './components/Location';
import GiftRegistry from './components/GiftRegistry';
import SectionWrapper from './components/SectionWrapper';
import Guestbook from './components/Guestbook';

function App() {

  const [init, setInit] = useState(false);
  const audioRef = useRef(null); // Referencia al elemento <audio>
  const [isPlaying, setIsPlaying] = useState(false); // Estado para saber si la música suena

  // Lógica para el autoplay y el primer clic
  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("El autoplay fue bloqueado por el navegador.");
        // Si el autoplay falla, esperamos el primer clic del usuario
        const handleFirstClick = () => {
          playAudio();
          window.removeEventListener('click', handleFirstClick);
        };
        window.addEventListener('click', handleFirstClick);
      }
    };
    playAudio();
  }, []);

   // Función para pausar/reanudar la música con el botón
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  // Esta es la función que se encargará de inicializar el motor de partículas
  const particlesInit = useCallback(async (engine) => {
    // Aquí le decimos que cargue la versión "slim" (ligera) de las partículas
    await loadSlim(engine);
  }, []);

  return (
    <div>
           {/* Elemento de audio (no visible) */}
      <audio ref={audioRef} src="./audio/cancion.mp3" loop />
      
      {/* Botón flotante para controlar la música */}
      <MusicPlayer isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
      <main>
        <Welcome />

        <div className="relative  bg-cream">
          <Particles
            id="tsparticles"
            // La prop "init" es la forma moderna y segura de cargar las partículas
            init={particlesInit}
            options={particlesConfig}
            className="absolute inset-0 z-0"
          />

          <Message />
          <Family />
          <Gallery />
          <DressCode />
          <Itinerary />
          <Location />
          <GiftRegistry />


          <Guestbook />
        </div>
      </main>
    </div>
  );
}

export default App;