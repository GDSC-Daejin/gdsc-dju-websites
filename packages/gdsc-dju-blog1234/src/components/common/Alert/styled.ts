import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const AlertInnerWrapper = styled.div<{ alertColor: string }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 100%;
  z-index: 3;
`;
export const AlertIcon = styled.img`
  margin-right: 3px;
`;
export const AlertText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  opacity: 100%;
  margin-left: 5px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey800};
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.body1};
  }
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
`;
export const AlertInner = styled(motion.div)`
  position: fixed;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.grey300};
  padding: 7px 20px;
  top: 100px;
  right: 7%;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 9999;
  & :hover {
    cursor: default;
  }
`;
export const AlertWrapper = styled(motion.div)`
  position: fixed;
  top: 100px;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
