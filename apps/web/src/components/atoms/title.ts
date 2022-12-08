import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes.titleXxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.grey800};
  word-break: keep-all;
  margin-bottom: 10px;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.titleXl};
  }
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSizes.titleL};
  }
`;
export const SubTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.grey600};
  margin-bottom: 10px;
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSizes.textXxl};
  }
`;
export const SubCategory = styled(motion.h3)`
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey800};
  margin-bottom: 10px;
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }
`;
export const MainText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  color: ${({ theme }) => theme.colors.grey700};
  padding-bottom: 10px;
  line-height: 1.5;
`;
