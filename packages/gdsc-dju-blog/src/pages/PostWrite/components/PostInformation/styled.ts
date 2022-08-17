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
  padding-left: 30px;
  margin-right: 20px;
`;
export const PostTitleInput = styled.input`
  display: flex;
  border: none;
  width: 100%;
  padding-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.h4};
  background: ${({ theme }) => theme.colors.background};
  caret-color: ${({ theme }) => theme.colors.grey400};
  color: ${({ theme }) => theme.colors.grey900};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }
  @media screen and (max-width: 530px) {
    font-size: ${(props) => props.theme.fontSize.h6};
    padding-bottom: 4px;
`;
export const PostHashTagInput = styled.input`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.body1};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.grey900};
  caret-color: ${({ theme }) => theme.colors.grey400};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }
  border: none;
  @media screen and (max-width: 530px) {
    font-size: ${({ theme }) => theme.fontSize.body3};
`;
