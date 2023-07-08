import styled, { css } from 'styled-components';

export const LoaderBackground = styled.div<{ background?: boolean }>`
  display: flex;
  ${(props) =>
    props.background &&
    css`
      background: rgba(0, 0, 0, 0);
    `}
  background: rgba(0, 0, 0, 0);
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
export const GoogleLoader = styled.div`
  width: 100px;
`;
