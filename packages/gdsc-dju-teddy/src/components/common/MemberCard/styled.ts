import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MemberCardWrapper = styled(motion.div)`
  background: ${({ theme }) => theme.colors.grey100};
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.grey100};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.grey200};
    border-color: ${({ theme }) => theme.colors.grey200};
    box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  }
  @media (max-width: ${(props) => props.theme.windowSizes.tablet}px) {
    height: 225px;
  }
`;
export const MemberCardInner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border-style: solid;
  border-width: 0;
  padding: 20px 10px;
`;
export const ProfileImage = styled(motion.img)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: #f2f2f2;
  position: relative;
  @media (max-width: ${(props) => props.theme.windowSizes.tablet}px) {
    width: 60px;
    height: 60px;
  }
`;
export const MemberName = styled(motion.div)`
  font-size: 20px;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
`;
export const CardMargin = styled.div`
  height: 20px;
  width: 20px;
`;
export const MemberScore = styled(motion.div)`
  font-size: 30px;
  font-weight: bold;
  color: #a35d29;

  @media (max-width: ${(props) => props.theme.windowSizes.tablet}px) {
    font-size: 24px;
  }
`;
