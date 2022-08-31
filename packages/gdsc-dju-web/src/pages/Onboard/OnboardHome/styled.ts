import { ColorToken } from '@gdsc-dju/styled-components';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const OnboardHomePhrase = styled(motion.h1)<{ colorToken?: ColorToken }>`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: 500;
  line-height: 65px;
  ${({ colorToken }) =>
    colorToken &&
    css`
      color: ${({ theme }) => theme.colors[colorToken]};
    `}
`;

export const OnboardHomePhraseWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
`;
export const OnboardHomeLogo = styled(motion.img)`
  width: 50px;
  height: 24px;
`;
