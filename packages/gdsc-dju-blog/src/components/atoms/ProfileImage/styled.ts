import styled, { css } from 'styled-components';

export const StyledImage = styled.img<{ size: 'small' | 'medium' }>`
  width: 170px;
  height: 170px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
    ${({ size }) =>
      size === 'small' &&
      css`
        width: 36px;
        height: 36px;
      `}
  }
  ${({ size }) =>
    size === 'small' &&
    css`
      width: 36px;
      height: 36px;
    `}
`;
export const PositionCircle = styled.div<{ color?: string }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 10px;
  background: ${(props) => props.color};
  z-index: 1;
  @media screen and (max-width: 500px) {
    width: 18px;
    height: 18px;
  }
`;
export const StyledImageWrapper = styled.div<{ isHaveClickEvent?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${({ isHaveClickEvent }) =>
    isHaveClickEvent &&
    css`
      cursor: pointer;
    `}
`;
