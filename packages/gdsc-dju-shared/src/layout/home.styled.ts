import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { EventsType } from '../types/event';

export const HomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.grey800};
  white-space: pre-line;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
`;
export const HomeLayoutWrapper = styled(motion.main)`
  margin-top: 30%;
  display: flex;
  flex-direction: column;
`;
export const StyledDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: ${({ theme }) => theme.colors.grey600};
  font-weight: bold;
  margin-top: 40px;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.h7};
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.body1};
  }
`;
export const StyledTime = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${({ theme }) => theme.colors.grey500};
  margin-top: 6px;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.body1};
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
`;
export const StyledButton = styled.button<{
  eventType?: EventsType;
  isEnd: boolean;
}>`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: #fff;
  background: ${({ theme }) => theme.colors.googleBlue};
  padding: 16px 36px;
  border: 0 solid transparent;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
  ${({ eventType }) =>
    eventType === 'session'
      ? css`
          background: ${({ theme }) => theme.colors.googleBlue};
        `
      : css`
          background: ${({ theme }) => theme.colors.googleGreen};
        `}
  ${({ isEnd }) =>
    isEnd &&
    css`
      cursor: not-allowed;
      background: ${({ theme }) => theme.colors.tossBlue200};
    `}
`;
export const StyledMoreButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey400};
  background: transparent;
  padding: 16px 36px;
  border: 0 solid transparent;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
`;
