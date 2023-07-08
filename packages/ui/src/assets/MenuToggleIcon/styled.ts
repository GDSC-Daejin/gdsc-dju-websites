import styled from 'styled-components';

export const StyledMenuButton = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  @media (min-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    display: none;
  }
`;
