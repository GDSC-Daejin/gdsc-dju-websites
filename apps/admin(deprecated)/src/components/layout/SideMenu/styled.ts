import styled, { css } from 'styled-components';
export const SidebarContainer = styled.div`
  display: flex;
  z-index: 1;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;
export const SidebarInner = styled.aside`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    align-items: flex-start;
  }
`;

export const SideElementWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding-left: 30px;
  height: 40px;
  cursor: pointer;
  &:hover {
    #bar {
      height: 20px;
    }
  }
`;
export const SideElementChildrenWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding-left: 60px;
  height: 40px;
  cursor: pointer;
  &:hover {
    #bar {
      height: 20px;
    }
  }
`;
export const SideElementSelectBar = styled.div<{ isCurrent: boolean }>`
  position: absolute;
  left: 0;
  width: 4px;
  background: ${({ theme }) => theme.colors.blue900};
  border-radius: 0 3px 3px 0;
  height: 0;
  transition: all 0.2s ease-in-out;
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      height: 40px;
    `}
`;
export const SideElementText = styled.div<{ isCurrent: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey700};
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      color: ${({ theme }) => theme.colors.blue900};
    `}
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blue900};
  }
`;
