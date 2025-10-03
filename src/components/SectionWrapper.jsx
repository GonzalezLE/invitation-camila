import CornerOrnament from "../assets/CornerOrnament";

export default function SectionWrapper({ children, id }) {
  return (
    <div id={id} className="relative py-20 md:py-28">
      {/* Adornos en las 4 esquinas */}
      
      <CornerOrnament className="absolute top-4 left-4 w-16 h-16 text-peach/30 transform" />
      <CornerOrnament className="absolute top-4 right-4 w-16 h-16 text-peach/30 transform scale-x-[-1]" />
      <CornerOrnament className="absolute bottom-4 left-4 w-16 h-16 text-peach/30 transform scale-y-[-1]" />
      <CornerOrnament className="absolute bottom-4 right-4 w-16 h-16 text-peach/30 transform -scale-x-1 -scale-y-1" />
      
      {/* Aquí irá el contenido de cada sección */}
      {children}
    </div>
  );
}