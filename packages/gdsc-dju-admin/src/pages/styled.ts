import styled from 'styled-components';

export const AdminContainerInner = styled.div`
  height: 100%;
  padding: 30px 30px;
  overflow: scroll;
`;
export const AdminContainer = styled.div`
  background: ${({ theme }) => theme.colors.grey50};
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
export const AdminContainerWrapper = styled.div`
  padding-top: 70px;
  height: calc(100vh - 70px);
  display: flex;
  overflow: hidden;
`;
