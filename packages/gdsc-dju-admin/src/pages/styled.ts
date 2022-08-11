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
  height: calc(100vh - 60px);
  display: flex;
  overflow: hidden;
`;
export const SidebarContainer = styled.div`
  width: 200px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.grey100};
  flex-shrink: 0;
  padding-top: 35px;
  position: relative;
`;
