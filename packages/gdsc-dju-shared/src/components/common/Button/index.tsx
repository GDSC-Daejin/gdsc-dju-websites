import React from 'react';
import styled, { css } from 'styled-components';
import Calendar from '../../../assets/icons/Calendar';
import { lightColors } from '../../../styles/lightColors';

export const CalendarButtonStyle = styled.button<{ isEnd: boolean }>`
  padding: 16px 30px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey500};
  background: transparent;
  border: 0 solid transparent;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: ${(props) => props.theme.fontSize.body2};
    padding: 14px 20px;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.body3};
  }
  ${({ isEnd }) =>
    isEnd &&
    css`
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.grey300};
    `}
`;

export const EventButton = styled.button<{
  color?: keyof typeof lightColors;
  isEnd: boolean;
}>`
  padding: 16px 40px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: #fff;
  border: 0 solid transparent;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.googleBlue};
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: ${(props) => props.theme.fontSize.body2};
    padding: 14px 20px;
  }
  ${({ color }) =>
    color &&
    css`
      background: ${({ theme }) => theme.colors[color]};
    `}
  ${({ isEnd }) =>
    isEnd &&
    css`
      cursor: not-allowed;
      background: ${({ theme }) => theme.colors.tossBlue200};
    `}
`;
const CalendarButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  isEnd: boolean;
}> = ({ children, onClick, isEnd }) => {
  return (
    <CalendarButtonStyle onClick={onClick} isEnd={isEnd}>
      <Calendar isActive={!isEnd} />
      {children}
    </CalendarButtonStyle>
  );
};

export default CalendarButton;
