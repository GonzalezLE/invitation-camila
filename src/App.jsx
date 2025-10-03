import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // Usaremos esta función para la carga

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
  // Esta es la función que se encargará de inicializar el motor de partículas
  const particlesInit = useCallback(async (engine) => {
    // Aquí le decimos que cargue la versión "slim" (ligera) de las partículas
    await loadSlim(engine);
  }, []);

  return (
    <div>
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
          <DressCode/>
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