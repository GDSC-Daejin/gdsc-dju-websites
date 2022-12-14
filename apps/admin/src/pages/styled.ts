import styled from 'styled-components';

export const AdminContainerInner = styled.div`
  height: 100%;
  padding: 30px 30px;
  box-sizing: border-box;
  overflow: scroll;
`;
export const AdminContainer = styled.div`
  background: ${({ theme }) => theme.colors.grey50};
  -webkit-box-flex: 1;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
export const AdminContainerWrapper = styled.div`
  padding-top: 70px;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: row;
`;
