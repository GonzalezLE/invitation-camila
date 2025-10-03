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
          backgroundImage: "url('./fotos/fondo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-10"></div> 

      {/* --- Contenido SUPERIOR (con la corona) --- */}
      <div className="relative z-20 pt-16 md:pt-24 opacity-0 animate-fade-in-up">
        {/* NUEVO: Contenedor para la corona y el texto */}
        <div className="relative inline-flex items-center justify-center">          
          <h2 className="font-serif text-3xl md:text-4xl text-cream drop-shadow-md mt-4"> {/* Ajustamos mt-4 para dejar espacio */}
            Mis XV Años
          </h2>
        </div>
      </div>

      {/* --- Contenido INFERIOR (sin cambios) --- */}
      <div className="relative z-20 p-6 pb-16 md:pb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream my-4 drop-shadow-md leading-tight">
          {quinceaneraName}
        </h1>
        
        <div className="font-sans text-md text-cream/90 mt-4 mb-8">
          <p>Sábado 7 de Febrero del 2026 &nbsp;•&nbsp; 7:00 PM</p>
        </div>
        
        <Countdown targetDate={eventDate} />
      </div>
    </section>
  );
}