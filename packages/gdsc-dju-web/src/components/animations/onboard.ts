export const pageAnimate = {
  // type: 'tween',
  ease: [0, 0.71, 0.2, 1.01],
  duration: 0.5,
};
export const pageTransitionAnimate = {
  start: {
    opacity: 0,
    x: '100vw',
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  out: {
    opacity: 0,
    x: '-100vw',
    transition: {
      duration: 0.4,
      delayChildren: 0.3,
    },
  },
};
export const onboardAnimate = {
  start: {
    opacity: 0,
    x: 50,
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const buttonFadeAnimate = {
  start: {
    opacity: 0,
    x: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const onboardTicketAnimate = {
  start: {
    opacity: 0,
    x: 0,
    scale: 0,
    transition: {
      duration: 1.5,
    },
  },
  end: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 1,
    transition: {
      duration: 2,
    },
  },
};
