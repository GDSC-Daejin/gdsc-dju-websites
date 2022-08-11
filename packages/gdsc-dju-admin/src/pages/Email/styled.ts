import styled from 'styled-components';

export const EmailRightWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const EmailLeftWrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey50};
  height: 100%;
`;
