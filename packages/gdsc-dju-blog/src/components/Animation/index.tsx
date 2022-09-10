import React from 'react';

export const circleMotion = {
  isActive: {
    opacity: 1,
    y: 0,
  },
  isUnActive: {
    y: -20,
    opacity: 0,
  },
};

export const SideMenuAnimation = {
  isActive: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  isUnActive: {
    x: -486,
    transition: {
      duration: 0.3,
    },
  },
};

export const SideMenuCircleAnimation = {
  isActive: {
    opacity: 1,
    x: 0,
  },
  isUnActive: {
    x: -20,
    opacity: 0,
  },
};
export const SideMenuGrayBoxAnimation = {
  isActive: {
    display: 'block',
    opacity: 0.6,
    transition: {
      duration: 0.3,
    },
  },
  isUnActive: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const PostCategoryAnimation = {
  isActive: {
    translateY: -5,
    color: '#191F28',
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
    borderBottom: '1px solid #000',
  },
  isUnActive: {
    translateY: 0,
    color: '#D1D6DB',
    borderBottom: '1px solid #fff',
  },
};
export const PostCircleAnimation = {
  isActive: {
    opacity: 1,
    y: 0,
  },
  isUnActive: {
    y: -20,
    opacity: 0,
  },
};
export const PostTextVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};
