import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const LoaderBackground = styled(motion.div)<{ background?: boolean }>`
  display: flex;
  background: rgba(255, 255, 255, 0.7);
  ${(props) =>
    props.background &&
    css`
      background: rgba(0, 0, 0, 0.7);
    `}

  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
`;
export const GoogleLoader = styled(motion.div)`
  width: 100px;
  height: 100px;
  z-index: 2000;
`;
