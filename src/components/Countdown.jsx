import { useEffect, useState } from 'react';

// El componente recibe la fecha del evento como un prop
export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / 1000 / 60) % 60),
        Segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Actualiza el contador cada segundo
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center gap-3 md:gap-6 mt-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center bg-cream/10 backdrop-blur-sm p-3 rounded-lg min-w-[70px] border border-gold/30">
          <div className="text-3xl md:text-5xl font-bold text-cream font-serif tracking-wider">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-[10px] uppercase text-peach tracking-widest font-sans pt-1">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}