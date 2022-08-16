import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const BlogCardInner = styled(motion.article)`
  position: relative;
  width: 248px;
  height: 294px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 19px 32px -1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const BookMarkWrapper = styled.div`
  position: absolute;
  width: 23.33px;
  height: 30px;
  right: 17px;
  top: -3px;
  cursor: pointer;
`;

export const BlogCardThumbnailWrapper = styled.div`
  width: 248px;
  height: 294px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  overflow: hidden;
`;
export const BlogCardThumbnail = styled.img`
  height: 294px;
`;

export const BlogCardTagWrapper = styled.div<{ IsHovered: boolean }>`
  display: flex;
  position: absolute;
  bottom: ${({ IsHovered }) => (IsHovered ? '254px' : '92px')};
  transition: all 0.3s ease;
  left: 9px;
`;
export const BlogCardTag = styled.div`
  height: 17px;
  padding: 1px 10px;
  border-radius: 50px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #ffffff;
  }
`;
export const BlogCardBottomBox = styled(motion.div)<{ isHovered: boolean }>`
  position: absolute;
  border-radius: 10px;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 8px 20px 12px;
  gap: ${({ isHovered }) => (isHovered ? '170px' : '8px')};
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
`;
export const BlogCardTitle = styled(motion.h6)`
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey900};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const BlogCardSubTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BlogCardAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const BlogCardAuthorImage = styled.img`
  background: ${({ theme }) => theme.colors.grey400};
  border-radius: 100%;
  margin-right: 7px;
  height: 18px;
  width: 18px;
`;
export const BlogCardPostText = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, 0%);
  top: 53px;

  min-height: 120px;
  max-height: 120px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PostText = styled.article`
  width: 208px;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 7;
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${({ theme }) => theme.colors.grey700};
`;

export const BlogCardSubText = styled.div<{
  subText?: boolean;
  bold?: boolean;
}>`
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${({ theme }) => theme.colors.grey900};
  ${({ subText }) =>
    subText &&
    css`
      color: ${({ theme }) => theme.colors.grey400};
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 600;
    `}
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;
