import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  margin-top: 15px;
`;
export const SidebarContainer = styled.div`
  width: 100%;
`;
export const AdminContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledButtonWrapper = styled.div`
  margin-right: 10px;
`;
export const AdminHeaderWrapper = styled.div`
  background: white;
`;
export const StyledAdminButton = styled.button`
  border-style: none;
  border-radius: 10px;
  font-size: 1.4rem;
  color: white;
  transition: 0.3s;
  transition-delay: 0.3ms;
  transform-style: initial;
  cursor: pointer;
  background: ${(props) => props.theme.colors.tossBlue};
  padding: 7px 20px;
  align-items: center;
  :hover {
    background: ${(props) => props.theme.colors.tossBlueActive};
  }
  @media (max-width: 500px) {
    padding: 7px 13px;
    font-size: 1.3rem;
  }
`;
export const ButtonElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
export const AdminNavigationWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 60px;
  width: 100%;
  background: ${(props) => props.theme.colors.white};
`;
export const AdminNavCategoryWrapper = styled.nav`
  display: flex;
  align-items: center;
`;
export const StyledUserName = styled.div`
  color: ${(props) => props.theme.colors.grey700};
  font-size: 1.4rem;
  font-weight: bold;
  white-space: nowrap;
  margin-left: 20px;
  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const StyledSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  transition: 0.3s;
  transition-delay: 0.3ms;
  transform-style: initial;
`;
export const AdminBlockPage = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 50%;
  background: ${(props) => props.theme.colors.grey500};
  z-index: 999;
`;
