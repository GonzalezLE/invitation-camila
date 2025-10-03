// Ruta: src/particlesConfig.js

export const particlesConfig = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: 'repulse',
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
    // CAMBIO AQUÍ: Usamos los colores de tu paleta
    color: {
      value: ['#D9A6A0', '#7C2834', '#C9A977'], // Los colores de tu paleta: Peach, Burgundy, Gold
    },
    links: {
      enable: false,
    },
    move: {
      direction: 'top',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: true,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 60,
    },
    opacity: {
      value: { min: 0.1, max: 0.6 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    shape: {
      type: 'star',
      options: {
        star: {
          sides: 5,
        },
      },
    },
    size: {
      value: { min: 1, max:5 },
    },
  },
  detectRetina: true,
};