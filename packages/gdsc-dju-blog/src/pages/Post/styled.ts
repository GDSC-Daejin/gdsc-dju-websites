import { ColorToken } from '@gdsc-dju/styled-components-theme';

import styled, { css } from 'styled-components';

export const PostHead = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  margin-bottom: 15px;
`;

export const PostTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.titleM};
  color: ${({ theme }) => theme.colors.grey900};
  width: 100%;
  word-break: break-word;
  margin-bottom: 23px;
  margin-right: 26px;
`;
export const ContentWrapper = styled.article`
  margin-bottom: 70px;
`;
export const GiscusWrapper = styled.div`
  margin-bottom: 150px;
`;
export const PostAuthorWrapper = styled.h1`
  margin-bottom: 23px;
`;
export const PositionCircle = styled.div<{ color: string }>`
  display: flex;
  position: absolute;
  top: -10px;
  left: 45%;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  ${({ color }) => css`
    background-color: ${color};
  `}
`;
export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;
export const PostInformation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 50px;
`;
export const AuthorImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 4px;
`;
export const Author = styled.div<{
  color?: ColorToken;
  marginRight?: number;
}>`
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grey900};
  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.colors[color]};
    `};
  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight}px;
    `};
`;
export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  color: ${({ theme }) => theme.colors.grey500};
  font-weight: 400;
`;
export const HashTageSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`;
export const CategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
export const Category = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: 400;
  flex-wrap: wrap;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey900};
  display: flex;
  padding: 4px 0;
  margin-bottom: 20px;
`;
export const PostTitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
export const PostIconWrapper = styled.div`
  display: flex;
  position: relative;
  top: 12px;
  right: 0;
`;
export const BookmarkWrapper = styled.div`
  display: flex;
  margin-right: 26px;
  cursor: pointer;
`;
export const PostTrashIconWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;
export const PostEditIconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  margin-right: 24px;
`;
