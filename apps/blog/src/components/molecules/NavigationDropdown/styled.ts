import styled, { css } from 'styled-components';

export const NavigationDropdownWrapper = styled.div<{
  isDropdownOpen: boolean;
}>`
  padding: 10px 15px;
  box-sizing: border-box;
  position: absolute;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translate(-30%, 6px);
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.textS};
  transition: all 0.3s ease-in-out;
  ${({ isDropdownOpen }) =>
    isDropdownOpen
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;
export const DropdownContour = styled.hr`
  width: calc(100% + 2.5px);
  height: 0;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  margin: 10px 0;
`;
export const DropdownUserName = styled.strong<{ color: string }>`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ color }) => color};
  cursor: pointer;
`;
export const NavigationDropdownItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey600};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  cursor: default;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
`;
export const NavigationDropdownButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey400};
  border: none;
  background: none;
  cursor: pointer;
`;
