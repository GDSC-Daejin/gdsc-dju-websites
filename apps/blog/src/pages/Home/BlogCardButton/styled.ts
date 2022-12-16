import styled from 'styled-components';

export const BlogCardButton = styled.button<{ ButtonActive: boolean }>`
  width: 40px;
  height: 4px;
  background-color: ${({ theme, ButtonActive }) =>
    ButtonActive ? theme.colors.grey500 : theme.colors.grey300};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
