import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontSize.h2};
  font-weight: 800;
  color: ${(props) => props.theme.colors.grey800};
  word-break: keep-all;
  margin-bottom: 10px;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: ${(props) => props.theme.fontSize.h2};
  }
  @media (max-width: 500px) {
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;
export const SubTitle = styled(motion.h2)`
  font-size: 1.7rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey600};
  margin-bottom: 10px;
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
export const SubCategory = styled(motion.h3)`
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: 700;
  color: ${(props) => props.theme.colors.grey800};
  margin-bottom: 10px;
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.h6};
  }
`;
export const MainText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${(props) => props.theme.colors.grey800};
  padding-bottom: 20px;
  line-height: 1.5;
`;
