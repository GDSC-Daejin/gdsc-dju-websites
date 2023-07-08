import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ApplicantCardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  border-radius: 10px;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  height: 50px;
  width: 400px;
  background: ${({ theme }) => theme.colors.white};
`;
export const ApplicantText = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey900};
  min-width: 50px;
  max-width: 70px;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
`;
export const ApplicantEmail = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey900};
  text-overflow: ellipsis;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  display: block;
`;
