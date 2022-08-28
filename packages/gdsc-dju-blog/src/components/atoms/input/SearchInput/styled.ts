import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Search = styled.input`
  min-width: 400px;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.grey900};
  background: ${({ theme }) => theme.colors.background};
  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    min-width: 280px;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    display: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey300};
  }
`;
export const SearchIconWrapper = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 5px;
  right: 14px;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    position: static;
  }
`;
