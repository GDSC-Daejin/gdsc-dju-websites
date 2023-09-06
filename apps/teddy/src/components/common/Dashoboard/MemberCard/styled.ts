import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const CardContainer = styled.div<{ isSub: boolean }>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 1.25rem 0rem;

  ${({ isSub }) =>
    isSub
      ? css`
          align-items: center;
        `
      : css`
          display: flex;
          flex-wrap: wrap;
        `}
`;

export const MemberCardWrapper = styled(motion.div)`
  /* border-style: solid 1px;
  border-radius: 30px;
  border-color: var(--orange100); */
  position: flex;
  margin-right: 20px;

  /* width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  
  transition: all 0.2s ease-in-out; 
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;*/
`;

export const MemberCardInner = styled(motion.div)<{
  isSub: boolean;
  theme: string;
}>`
  align-items: center;
  text-align: center;
  border-radius: 20px;

  ${({ isSub, theme }) =>
    isSub
      ? theme === 'dark'
        ? css`
            width: 14rem;
            height: 16.25rem;
            flex-shrink: 0;
            border-radius: 1.25rem;
            background: var(--white);
          `
        : css`
            width: 14rem;
            height: 16.25rem;
            flex-shrink: 0;
            border-radius: 1.25rem;
            background: var(--grey100);
          `
      : theme === 'dark'
      ? css`
          display: flex;
          background: var(--grey50);
          border: none;
          flex-direction: row;
          padding: 30px;
        `
      : css`
          display: flex;
          background: var(--orange100);
          border: none;
          flex-direction: row;
          padding: 30px;
        `}
`;
export const ProfileImage = styled(motion.img)<{ isSub: boolean }>`
  ${({ isSub }) =>
    isSub
      ? css`
          margin-top: 1.25rem;
          width: 6.25rem;
          height: 6.25rem;
          flex-shrink: 0;
          border-radius: 6.25rem;
          position: relative;
        `
      : css`
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border-style: solid;
          border-width: 1px;
          border-color: #f2f2f2;
          position: relative;
          justify-content: flex-start; /* 왼쪽 정렬 */
        `}
`;
export const MemberTextSection = styled(motion.div)`
  background: none;
  display: flex;
  flex-direction: column; /* 컬럼 방향으로 정렬 */
  align-items: center;
`;
export const MemberName = styled(motion.div)<{ isSub: boolean }>`
  font-size: 20px;
  align-items: center;
  margin-top: 10px;
  font-weight: var(--title-font-weight);
  text-align: right;
  background: none;
`;
export const TeddyQuantity = styled(motion.div)<{ isSub: boolean }>`
  background: none;
  padding 25px 0px 8px;
  font-size: var(--caption1);
  
`;

export const CardMargin = styled.div<{ isSub: boolean }>`
  background: none;
  width: 20px;
`;
export const MemberScore = styled(motion.div)<{ isSub: boolean }>`
  background: none;
  font-size: var(--headline4);
  font-weight: var(--title-font-weight);
  color: #a35d29;
  margin-top: 10px;
`;
