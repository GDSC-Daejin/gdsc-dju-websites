export const pageTransitionAnimate = {
  start: {
    opacity: 0,
    scale: 0.92,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.42,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  out: {
    opacity: 0,
    scale: 0.92,
    transition: {
      duration: 0.18,
    },
  },
};
export const pageAnimate = {
  type: 'tween',
  ease: 'anticipate',
};
export const contributorAnimate = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0.5,
    transition: {
      duration: 0.3,
    },
  },
};
export const sidebar = {
  open: {
    x: '100vw',
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    x: '-100vw',
    transition: {
      duration: 0.5,
    },
  },
};
