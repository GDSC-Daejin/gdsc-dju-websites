import { ColorToken } from '@gdsc-dju/styled-components-theme';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const AlertInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 100%;
  opacity: 80%;
  z-index: 3;
`;
export const AlertText = styled.div<{ alertColor: ColorToken }>`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey900};
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSizes.textXxl};
  }
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }
  ${({ alertColor }) =>
    alertColor &&
    css`
      color: ${({ theme }) => theme.colors[alertColor]};
    `};
`;
export const AlertInner = styled(motion.div)`
  position: fixed;
  background: ${({ theme }) => theme.colors.grey100};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  padding: 15px 20px;
  top: 100px;
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
  z-index: 9999;
`;
