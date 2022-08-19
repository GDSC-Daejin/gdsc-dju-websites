import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const LoaderBackground = styled(motion.div)<{ background?: boolean }>`
  display: flex;
  background: white;
  ${(props) =>
    props.background &&
    css`
      background: rgba(0, 0, 0, 0);
    `}

  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
`;
export const GoogleIcon = styled.div`
  width: 100px;
`;
