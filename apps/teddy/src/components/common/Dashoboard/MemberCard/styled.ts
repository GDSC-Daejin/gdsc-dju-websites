import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  display: flex;
  flex-flow: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
export const MemberCardWrapper = styled(motion.div)`
  /* border-style: solid 1px;
  border-radius: 30px;
  border-color: var(--orange100); */
  position: flex;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 300px;
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
export const MemberCardInner = styled(motion.div)`
  background: var(--orange100);
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 30px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border-style: solid;
  border-width: 0;
   */
`;
export const ProfileImage = styled(motion.img)`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: #f2f2f2;
  position: relative;
  justify-content: flex-start; /* 왼쪽 정렬 */
`;
export const MemberTextSection = styled(motion.div)`
  background-color: var(--orange100);
  display: flex;
  flex-direction: column; /* 컬럼 방향으로 정렬 */
  align-items: center; /* 수직 정렬 */
`;
export const MemberName = styled(motion.div)`
  background-color: var(--orange100);
  /* font-size: 20px;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center; */
  font-size: 20px;
  min-height: 30px;
  align-items: center;
  margin-top: 10px; /* 요소들 사이의 간격을 조정 */
  font-weight: var(--title-font-weight);
  text-align: right;
`;
export const TeddyQuantity = styled(motion.div)`
  background-color: var(--orange100);
  padding 25px 0px 8px;
  font-size: var(--caption1);
`;

export const CardMargin = styled.div`
  background-color: var(--orange100);
  height: 20px;
  width: 20px;
`;
export const MemberScore = styled(motion.div)`
  background-color: var(--orange100);
  font-size: var(--headline4);
  font-weight: var(--title-font-weight);
  color: #a35d29;

  margin-top: 10px; /* 요소들 사이의 간격을 조정 */
`;
