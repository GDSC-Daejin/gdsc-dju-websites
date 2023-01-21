import React from 'react';

import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useTheme } from 'styled-components';

import { StyledMenuButton } from './styled';

const MenuToggleIcon = () => {
  const [menu, setMenu] = useAtom(menuAtom);
  const theme = useTheme();
  return (
    <StyledMenuButton
      initial={false}
      animate={menu ? 'open' : 'closed'}
      onClick={() => setMenu(!menu)}
    >
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill={theme.colors.grey900}
      >
        <motion.path
          fill={theme.colors.grey900}
          strokeWidth="3"
          stroke={theme.colors.grey900}
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          fill={theme.colors.grey900}
          strokeWidth="3"
          stroke={theme.colors.grey900}
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          fill={theme.colors.grey900}
          strokeWidth="3"
          stroke={theme.colors.grey900}
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </StyledMenuButton>
  );
};

export default MenuToggleIcon;
