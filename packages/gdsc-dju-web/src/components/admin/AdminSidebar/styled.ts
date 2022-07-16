import styled, { css } from 'styled-components';

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
  background: ${({ theme }) => theme.colors.googleBlue};
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
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey700};
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  ${({ isCurrent }) =>
    isCurrent &&
    css`
      color: ${({ theme }) => theme.colors.googleBlue};
    `}
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.googleBlue};
  }
`;
