import SectionWrapper from './SectionWrapper';

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
            imageUrl: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            role: 'Madre',
            name: 'Sra. Margarita López Salinas',
            // Cambia esta URL por la foto real de la madre
            imageUrl: 'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
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
        }
    ];



    // Filtramos el arreglo para separar padres de hermanos
    const parents = familyMembers.filter(member => member.role === 'Padre' || member.role === 'Madre');
    const siblings = familyMembers.filter(member => member.role === 'Hermano' || member.role === 'Hermana');

    // Componente reutilizable para mostrar cada miembro
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
        <SectionWrapper id="family" className="text-dark-gray py-20 md:py-28">

            <div className="container mx-auto px-6 max-w-4xl text-center">

                <h2 className="font-serif text-3xl md:text-4xl text-burgundy mb-16">
                    Con la bendición de mis Padres
                </h2>

                {/* --- SECCIÓN DE PADRES --- */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 mb-16">
                    {parents.map((member) => (
                        <MemberCard key={member.name} {...member} />
                    ))}
                </div>

                {/* --- SECCIÓN DE HERMANOS (Solo aparece si hay hermanos) --- */}
                {siblings.length > 0 && (
                    <div>
                        <h3 className="font-serif text-2xl text-burgundy mb-12 pt-8 border-t border-peach/50">
                            Y la compañía de mis Hermanos
                        </h3>
                        <div className="flex flex-wrap justify-center items-start gap-12 md:gap-16">
                            {siblings.map((member) => (
                                <MemberCard key={member.name} {...member} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </SectionWrapper>
    );
}