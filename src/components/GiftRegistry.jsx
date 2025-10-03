import SectionWrapper from './SectionWrapper';
import GiftIcon from '../assets/icons/GiftIcon';
import DecorativeSeparator from '../assets/DecorativeSeparator';


export default function GiftRegistry() {
  // --- PERSONALIZA LA MESA DE REGALOS AQUÍ ---
  const mainMessage = "Tu presencia es mi más grande regalo. Si además deseas obsequiarme un detalle, he creado una mesa de regalos para tu comodidad.";
  
  // El nombre de la tienda para mostrar en el botón
  const storeName = "Liverpool"; 
  
  // ¡IMPORTANTE! Pega aquí el enlace a tu mesa de regalos
  const registryUrl = "#"; // Ejemplo: "https://www.liverpool.com.mx/tienda/giftregistry/shared/..."

  return (
    <SectionWrapper id="gift-registry">
      <div className="container mx-auto px-6 max-w-3xl text-center text-dark-gray">
        <DecorativeSeparator className="h-auto w-48 mx-auto mb-10 text-gold" />
        <GiftIcon className="w-16 h-16 mx-auto text-gold" />

        <h2 className="font-serif text-3xl md:text-4xl text-burgundy mt-6 mb-8">
          Mesa de Regalos
        </h2>

        <p className="font-sans text-lg font-light leading-relaxed max-w-md mx-auto">
          {mainMessage}
        </p>
        
        {/* --- Botón para enlazar a la Mesa de Regalos --- */}
        <div className="mt-10">
          <a
            href={registryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block bg-burgundy text-cream font-bold font-sans py-3 px-8 rounded-lg shadow-md transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gold hover:text-dark-gray ${!registryUrl || registryUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Ver Mesa de Regalos en {storeName}
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}