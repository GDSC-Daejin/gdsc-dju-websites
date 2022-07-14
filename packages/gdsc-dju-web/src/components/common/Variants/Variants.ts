export const listItemAnimate = {
  start: {
    opacity: 0,
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
export const listAnimate = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const homeBannerAnimate = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      delayChildren: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const titleAnimate = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const titleItemAnimate = {
  start: {
    opacity: 0,
    y: -30,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const bannerItemAnimate = {
  start: {
    opacity: 0,
    y: -30,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const memberCardAnimate = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const rightLineItemAnimate = {
  start: {
    opacity: 0,
    x: 30,
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const leftLineItemAnimate = {
  start: {
    opacity: 0,
    x: -30,
    rotate: 180,
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const listTageItemAnimate = {
  start: {
    opacity: 0,
    x: 30,
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const topToBottomAnimate = {
  start: {
    opacity: 0,
    y: -30,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const pageTransitionAnimate = {
  start: {
    opacity: 0,
    x: '100vw',
    // scale: 1.2,
  },
  end: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  out: {
    opacity: 0,
    x: '-100vw',
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};
export const onboardingAnimate = {
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
export const onboardingTicketAnimate = {
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

export const pageAnimate = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};
