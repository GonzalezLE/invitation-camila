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
    color: {
      value: ['#D9A6A0', '#7C2834', '#C9A977'],
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
      speed: 1.2, // MÁS VELOCIDAD: Aumentamos de 0.3 a 1.2
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
      value: { min: 1, max: 4 }, // Aumentamos el tamaño máximo un poco
      // NUEVO: Animación de Tamaño (efecto de pulso)
      animation: {
        enable: true,
        speed: 1.5,
        startValue: 'random',
        destroy: 'none',
        sync: false,
      },
    },
    // NUEVO: Animación de Rotación
    rotate: {
      random: {
        enable: true,
        minimumValue: 0,
      },
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
      direction: 'random',
    },
  },
  detectRetina: true,
};