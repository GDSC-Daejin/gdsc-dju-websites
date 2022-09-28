import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MemberCardWrapper = styled(motion.div)`
  background: #fcfcfc;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #f1f1f1;
  margin: 10px;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.04);
  @media (max-width: ${(props) => props.theme.windowSizes.tablet}px) {
    height: 225px;
  }
`;
export const MemberCardInner = styled.div`
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border-style: solid;
  border-width: 0;
`;
export const ProfileImage = styled(motion.img)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: #f2f2f2;

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
