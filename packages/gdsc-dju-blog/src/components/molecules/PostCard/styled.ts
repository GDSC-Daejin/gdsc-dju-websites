import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const PostCardWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  box-sizing: border-box;
`;
export const PostCardImage = styled.img`
  //background: black;
  height: 150%;
  position: relative;
`;
export const PostCardImageWrapper = styled.div`
  height: 100%;
  width: 50%;
  overflow: hidden;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const PostCardContentWrapper = styled(motion.div)<{ hover: boolean }>`
  box-sizing: border-box;
  height: 240px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
  padding: 30px 40px;
  z-index: 2;
  background: ${({ theme }) => theme.colors.background};
  left: 30%;
  width: 70%;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  ${({ hover }) =>
    hover &&
    css`
      left: 5%;
      width: 95%;
    `}
`;
export const PostDate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey600};
  margin-bottom: 12px;
`;
export const BookmarkWrapper = styled.div`
  position: absolute;
  top: -4px;
  right: 40px;
  transition: all 0.3s ease;
  z-index: 3;
`;
export const PostTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: ${({ theme }) => theme.colors.grey900};
  margin-bottom: 16px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PostHashTageSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  transition: all 0.2s;
`;
export const PostContent = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
  box-sizing: border-box;
  transition: all 0.3s ease;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: normal;
  -webkit-line-clamp: 3;
`;
