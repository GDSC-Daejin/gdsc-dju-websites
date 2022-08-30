import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 40px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  position: relative;
  height: fit-content;
  cursor: pointer;
  box-sizing: content-box;
  background: ${({ theme }) => theme.colors.blue600};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.body1};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.blue600};
`;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const OnBoardButton = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default OnBoardButton;
