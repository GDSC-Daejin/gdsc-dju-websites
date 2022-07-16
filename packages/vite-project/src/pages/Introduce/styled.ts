import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MemberCardWrapper = styled(motion.div)`
  width: 33.33%;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  box-sizing: border-box;
  @media screen and (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 50%;
  }
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 50%;
  }
  @media screen and (max-width: 650px) {
    min-width: 100%;
    width: 100%;
  }
`;
