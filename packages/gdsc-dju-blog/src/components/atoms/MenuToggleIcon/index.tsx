import { motion } from 'framer-motion';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MENU_KEY, menuState } from '../../../store/menu';
import { StyledMenuButton } from './styled';
import { themeState } from '../../../store/theme';
import { useTheme } from 'styled-components';

const MenuToggleIcon = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const theme = useTheme();
  return (
    <StyledMenuButton
      initial={false}
      animate={menu.appMenu ? 'open' : 'closed'}
      onClick={() => setMenu({ ...menu, [MENU_KEY.APP_MENU]: !menu.appMenu })}
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
