import styled from 'styled-components';

export const ApplicationWrapper = styled.div`
  width: 100%;
  padding: 20px;
  height: calc(100vh - 50px);
  box-sizing: border-box;
  overflow: scroll;
`;
export const ApplicationHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  color: ${({ theme }) => theme.colors.grey900};
  margin-bottom: 6px;
`;
export const ApplicationText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey800};
  margin-bottom: 20px;
`;
