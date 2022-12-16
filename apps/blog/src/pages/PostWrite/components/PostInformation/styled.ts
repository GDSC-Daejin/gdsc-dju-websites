import styled from 'styled-components';

export const PostInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0 12px 0;
`;

export const SavesButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 20px;
`;
export const PostInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 30px;
  @media (max-width: 530px) {
    margin-left: 8px;
  }
  min-width: 250px;
  flex-grow: 1;
`;
export const PostTitleInput = styled.input`
  display: flex;
  border: none;
  width: 100%;
  padding: 0 16px;
  font-size: ${({ theme }) => theme.fontSizes.titleM};
  background: ${({ theme }) => theme.colors.background};
  caret-color: ${({ theme }) => theme.colors.grey400};
  color: ${({ theme }) => theme.colors.grey900};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey500};
  }
  @media screen and (max-width: 530px) {
    font-size: ${(props) => props.theme.fontSizes.textXxl};
    padding-bottom: 4px;
  }
  &:focus {
    outline: none;
  }
`;
export const PostHashTagInput = styled.input`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.textXl};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.grey900};
  caret-color: ${({ theme }) => theme.colors.grey400};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }
  border: none;
  @media screen and (max-width: 530px) {
    font-size: ${({ theme }) => theme.fontSizes.textM};
  }
  &:focus {
    outline: none;
  }
`;
