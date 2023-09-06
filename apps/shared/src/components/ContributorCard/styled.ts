import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContributorCardWrapper = styled(motion.div)`
  padding: 40px 60px;
  width: 320px;
  height: 270px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;
export const ContributorImage = styled(motion.img)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const ContributorName = styled(motion.h3)`
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: ${({ theme }) => theme.colors.grey900};
  margin-top: 20px;
`;
export const ContributorRole = styled(motion.h4)`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey500};
  font-weight: 400;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
export const ContributeList = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey700};
`;
export const ContributorWrapper = styled(motion.div)`
  display: flex;
  border-radius: 10px;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(30px);
`;
