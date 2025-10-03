// Configuración para un efecto de partículas "aesthetic"
export const particlesConfig = {
  background: {
    color: {
      value: 'transparent', // Fondo transparente para que se vea el contenido
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'repulse', // Las partículas se alejan del cursor
      },
    },
    modes: {
      repulse: {
        distance: 80,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ['#D9A6A0', '#7C2834', '#C9A977'], // ¡Nuestros colores! Peach, Burgundy, Gold
    },
    links: {
      enable: false, // No queremos líneas entre las partículas
    },
    move: {
      direction: 'top', // Se mueven hacia arriba
      enable: true,
      outModes: {
        default: 'out',
      },
      random: true,
      speed: 0.5, // Velocidad lenta y sutil
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 40, // Cantidad de partículas, no demasiadas
    },
    opacity: {
      value: { min: 0.3, max: 0.7 }, // Opacidad aleatoria
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 4 }, // Tamaño aleatorio
    },
  },
  detectRetina: true,
};