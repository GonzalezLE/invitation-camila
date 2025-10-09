import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import DecorativeSeparator from '../assets/DecorativeSeparator';



export default function Family() {
    /**
     * 
     * 
     * Papas  y 
     */
    const familyMembers = [
        {
            role: 'Padre',
            name: 'Sr. Victor Mendieta López',
            // Cambia esta URL por la foto real del padre
            imageUrl: './fotos/papas.jpeg'
        },
        {
            role: 'Madre',
            name: 'Sra. Margarita López Salinas',
            // Cambia esta URL por la foto real de la madre
            imageUrl: './fotos/papas.jpeg'
        },
        /*
        {
            role: 'Hermana',
            name: 'Nombre',
            // Cambia esta URL por la foto real de la hermana
            imageUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            role: 'Hermano',
            name: 'Nombre',
            // Cambia esta URL por la foto real del hermano
            imageUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600'
        }*/
    ];



    const parents = familyMembers.filter(member => member.role === 'Padre' || member.role === 'Madre');
  const siblings = familyMembers.filter(member => member.role === 'Hermano' || member.role === 'Hermana');

  // --- Definimos las variantes para las animaciones ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Cada tarjeta aparecerá con 0.3s de diferencia
      },
    },
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

        {/* --- SECCIÓN DE PADRES (AHORA ANIMADA) --- */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {parents.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <MemberCard {...member} />
            </motion.div>
          ))}
        </motion.div>

        {/* --- SECCIÓN DE HERMANOS (AHORA ANIMADA) --- */}
        {siblings.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Reemplazamos la línea simple por el separador decorativo */}
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
              {siblings.map((member) => (
                <motion.div key={member.name} variants={itemVariants}>
                  <MemberCard {...member} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}