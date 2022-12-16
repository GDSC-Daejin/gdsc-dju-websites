import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CategoryWrapper = styled(motion.div)`
  display: flex;
  padding: 24px 0;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
  clip-path: inset(2% round 1%);
  &:hover {
    border-radius: 10px;
    clip-path: inset(0% round 1%);
    background: ${({ theme }) => theme.colors.grey100};
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    margin-right: 10px;
  }
  @media (max-width: 500px) {
    border-radius: 10px;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }
`;

export const CategoryInner = styled.div`
  padding-left: 40px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 0.6fr;
  flex-direction: row;
  align-items: center;
  min-width: 320px;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    padding-left: 10px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 320px;
    align-items: flex-start;
    padding-left: 10px;
  }
`;
export const SubCategory = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.grey600};
`;

export const Category = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.grey900};
`;
