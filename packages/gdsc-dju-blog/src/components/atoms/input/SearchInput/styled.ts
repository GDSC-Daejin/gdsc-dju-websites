import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Search = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  height: 30px;
  box-sizing: border-box;
  padding: 5px 0;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.grey900};
  background: ${({ theme }) => theme.colors.background};
  transition: all 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.windowSizes.desk}px) {
    min-width: 200px;
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    display: none;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey300};
    font-size: ${({ theme }) => theme.fontSizes.textM};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;
export const SearchIconWrapper = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 3px;
  right: 14px;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    position: static;
  }
`;
