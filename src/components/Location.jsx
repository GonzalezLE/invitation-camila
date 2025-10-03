import SectionWrapper from './SectionWrapper';
import LocationIcon from '../assets/icons/LocationIcon';
import DecorativeSeparator from '../assets/DecorativeSeparator';

export default function Location() {
  // --- PERSONALIZA LA INFORMACIÓN DEL SALÓN AQUÍ ---
  const salonName = "Salón castillo real Dumont";
  const address = "Av. 16 Ote. 4005, Resurgimiento Cd. Nte, 72330 Heroica Puebla de Zaragoza, Pue";

  // URL de una foto del salón
  const salonImageUrl = "./fotos/salon.jpeg";
  // URL del iframe de Google Maps. ¡OJO! Se obtiene del botón "Compartir" -> "Incorporar un mapa" en Google Maps
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7542.927236350022!2d-98.16916717838447!3d19.04334320233544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc04e2e00c711%3A0x3b52b9db94fe57e7!2sCastillo%20Real%20Dumonth!5e0!3m2!1ses-419!2smx!4v1759516483695!5m2!1ses-419!2smx";
  // URL para confirmar asistencia (puede ser un link a un formulario de Google, WhatsApp, etc.)
  
    
  const phoneNumber = "522213863050"; 
   const message = `¡Hola! Con mucha alegría confirmo nuestra asistencia para celebrar los XV Años de Camila. %0A%0AFamilia/Nombre:%0A%0AAsistiremos:%0A%0A¡Muchas gracias, nos vemos en la fiesta!`;
  const rsvpLink = `https://wa.me/${phoneNumber}?text=${message}`;


  return (
    <SectionWrapper id="location">
      <div className="container mx-auto px-6 max-w-4xl text-center text-dark-gray">
        
        <DecorativeSeparator className="h-auto w-48 mx-auto mb-10 text-gold" />
        <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-12">
          Lugar de la Recepción
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna de Información */}
          <div className="text-center md:text-left">
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
          </div>

          {/* Columna del Mapa */}
          <div className="w-full h-96 md:h-full rounded-lg overflow-hidden shadow-xl border-4 border-peach">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        {/* Botón de Confirmación de Asistencia */}
        <div className="mt-16">
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
        </div>
      </div>
    </SectionWrapper>
  );
}