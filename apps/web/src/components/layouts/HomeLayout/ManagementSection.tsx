import React from 'react';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { listAnimate, managerCardAnimate } from '@animations/variants';
import MemberCard from '@common/MemberCard';
import { managerData } from '@contents/managerData';
import { useYClickScroll } from '@utils/useYClickScroll';

import {
  HomeSectionContainer,
  HomeSectionContainerInner,
  HomeSectionTitle,
  HomeSectionWrapper,
} from './styled';

const ManagerSectionInner = styled(HomeSectionContainerInner)`
  min-width: 320px;
  min-height: fit-content;
`;
const ManagerSectionWrapper = styled(HomeSectionWrapper)`
  padding-top: 0;
`;
const ManagerSubTitle = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.45em;
  color: ${({ theme }) => theme.colors.grey600};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
`;
const MemberCardSection = styled(motion.section)`
  display: flex;
  width: 100%;
  gap: 30px;
  overflow-x: scroll;
  cursor: grab;
  z-index: 50;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MemberCardWrapper = styled(motion.div)<{
  width: string;
}>`
  display: flex;
  min-width: 250px;
  min-height: 300px;

  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    width: 100%;
  }
  ${({ width }) =>
    width &&
    css`
      &:last-child {
        padding-right: calc((${width}) / 2 + 20px);
      }
    `}
`;

const ManagementSection = () => {
  const {
    windowSize,
    sessionRef,
    sectionRef,
    sectionWidth,
    mouseDownHandler,
    mouseMoveHandler,
    mouseUpHandler,
  } = useYClickScroll();

  return (
    <>
      <HomeSectionContainer>
        <ManagerSectionInner>
          <ManagerSectionWrapper ref={sectionRef}>
            <HomeSectionTitle
              variants={listAnimate}
              initial={'start'}
              whileInView={'end'}
              viewport={{ once: true }}
            >
              GDG on Campus DJU 운영진을 소개해요
            </HomeSectionTitle>
            <ManagerSubTitle
              variants={listAnimate}
              initial={'start'}
              whileInView={'end'}
              viewport={{ once: true }}
            >
              구성원의 도움을 받아 커뮤니티의 문화를 만들어나가고 있어요
            </ManagerSubTitle>
          </ManagerSectionWrapper>
        </ManagerSectionInner>
        <MemberCardSection
          variants={listAnimate}
          initial={'start'}
          whileInView={'end'}
          viewport={{ once: true }}
          ref={sessionRef}
          onMouseDown={mouseDownHandler}
          onMouseUp={mouseUpHandler}
          onMouseMove={mouseMoveHandler}
        >
          {managerData.map((member, index) => (
            <MemberCardWrapper
              variants={managerCardAnimate}
              custom={windowSize.width - sectionWidth}
              width={`${windowSize.width - sectionWidth}px`}
              key={index}
            >
              <MemberCard member={member} />
            </MemberCardWrapper>
          ))}
        </MemberCardSection>
      </HomeSectionContainer>
    </>
  );
};

export default ManagementSection;
