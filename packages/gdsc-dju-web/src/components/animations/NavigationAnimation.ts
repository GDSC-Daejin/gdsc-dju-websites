export const navigationAnimate = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const navigationItemAnimate = {
  open: {
    y: 0,
    display: '',
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.5,
      y: { stiffness: 1000, velocity: 100 },
    },
  },
};
export const sidebar = {
  open: (height: number) => ({
    x: '100vw',
    transition: {
      duration: 0.5,
    },
  }),
  closed: (height: number) => ({
    x: '-100vw',
    transition: {
      duration: 0.5,
    },
  }),
};
