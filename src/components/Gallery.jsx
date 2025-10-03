import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import Lightbox from 'yet-another-react-lightbox';


export default function Gallery() {
  // --- AÑADE O CAMBIA LAS FOTOS DE LA QUINCEAÑERA AQUÍ ---
  const photos = [
    { src: './galeria/1.jpg' },
    { src: './galeria/2.jpg' },
    { src: './galeria/3.jpg' },
    { src: './galeria/4.jpg' },
    { src: './galeria/5.jpg' },
    { src: './galeria/6.jpg' },
    { src: './galeria/7.jpg' },
    { src: './galeria/8.jpg' },
  ];

  const [index, setIndex] = useState(-1);

  return (
    <SectionWrapper id="gallery">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-12">
          Mis Mejores Momentos
        </h2>

        {/* Galería de imágenes tipo Masonry */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div key={i} className="overflow-hidden rounded-lg break-inside-avoid" onClick={() => setIndex(i)}>
              <img
                src={photo.src}
                alt={`Foto de la galería ${i + 1}`}
                className="w-full h-auto object-cover cursor-pointer transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Componente Lightbox para ver en pantalla completa */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos}
        />
      </div>
    </SectionWrapper>
  );
}