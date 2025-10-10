import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import DecorativeSeparator from '../assets/DecorativeSeparator';



export default function Family() {
  // --- NUEVA SECCIÓN: Datos de los papás juntos ---
  const parentsData = {
    fatherName: 'Sr. Victor Mendieta Domínguez',
    motherName: 'Sra. Margarita López Salinas',
    // Ruta a la foto de los papás (recuerda que debe estar en la carpeta "public")
    imageUrl: './fotos/papas.jpeg'
  };

  const familyMembers = [
    /*
    {
      role: 'Hermano',
      name: 'Mateo Mendieta López',
      imageUrl: '/fotos/hermano.jpeg'
    }
    */
  ];



// La lógica de filtro ahora solo busca hermanos
  const siblings = familyMembers.filter(member => member.role === 'Hermano' || member.role === 'Hermana');

  // --- Variantes de animación (sin cambios) ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  const MemberCard = ({ name, imageUrl, role }) => (
    <div className="text-center flex flex-col items-center">
      <img
        src={imageUrl}
        alt={`Foto de ${name}`}
        className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-full mx-auto shadow-lg border-4 border-peach"
      />
      <p className="font-serif text-xl mt-4">{name}</p>
      <p className="font-sans text-sm text-gold tracking-widest">{role}</p>
    </div>
  );

  return (
    <SectionWrapper id="family">
      <div className="container mx-auto px-6 max-w-4xl text-center text-dark-gray">
        <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-16">
          Con la bendición de mis Padres
        </h2>

        {/* --- SECCIÓN DE PADRES (MODIFICADA) --- */}
        <motion.div 
          className="flex flex-col items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={parentsData.imageUrl}
            alt="Foto de los padres"
            className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full mx-auto shadow-lg border-4 border-peach"
          />
          <p className="font-serif text-xl mt-4">{parentsData.fatherName}</p>
          <p className="font-serif text-xl">&</p>
          <p className="font-serif text-xl">{parentsData.motherName}</p>
        </motion.div>

        {/* --- SECCIÓN DE HERMANOS (sin cambios en la lógica) --- */}
        {siblings.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <DecorativeSeparator className="h-auto w-48 mx-auto mb-10 text-peach/70" />
            <h3 className="font-serif text-2xl text-burgundy mb-12">
              Y la compañía de mis Hermanos
            </h3>
            <motion.div 
              className="flex flex-wrap justify-center items-start gap-12 md:gap-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {siblings.map((member, index) => (
                <motion.div key={`${member.role}-${index}`} variants={itemVariants}>
                  <MemberCard name={member.name} imageUrl={member.imageUrl} role={member.role} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}

// Asegúrate de tener el MemberCard aquí si no lo tienes ya
const MemberCard = ({ name, imageUrl, role }) => (
  <div className="text-center flex flex-col items-center">
    <img
      src={imageUrl}
      alt={`Foto de ${name}`}
      className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-full mx-auto shadow-lg border-4 border-peach"
    />
    <p className="font-serif text-xl mt-4">{name}</p>
    <p className="font-sans text-sm text-gold tracking-widest">{role}</p>
  </div>
);