import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  width: 216px;
  display: flex;
  justify-content: end;
  cursor: pointer;
  height: min-content;
`;
export const PostSavesTitle = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.titleM};
  font-weight: 700;
`;
