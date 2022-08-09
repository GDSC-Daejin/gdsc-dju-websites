import { motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';
import { managerData } from '../../pageData/managerData';
import { useYClickScroll } from '../../utils/useYClickScroll';
import MemberCard from '../common/MemberCard';
import { listAnimate, listItemAnimate } from '../common/Variants/Variants';
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
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.45em;
  color: ${({ theme }) => theme.colors.grey600};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.body1};
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.body1};
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
  windowWidth: string;
  sectionWidth: string;
}>`
  display: flex;
  min-width: 250px;
  min-height: 300px;

  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    width: 100%;
  }
  ${({ sectionWidth, windowWidth }) =>
    sectionWidth &&
    windowWidth &&
    css`
      transform: translateX(
        calc((${windowWidth} - ${sectionWidth}) / 2 + 20px)
      );
      &:last-child {
        padding-right: calc((${windowWidth} - ${sectionWidth}) / 2 + 20px);
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
              variants={listItemAnimate}
              initial={'start'}
              whileInView={'end'}
              viewport={{ once: true }}
            >
              GDSC DJU 운영진을 소개해요
            </HomeSectionTitle>
            <ManagerSubTitle
              variants={listItemAnimate}
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
          ref={sessionRef}
          onMouseDown={mouseDownHandler}
          onMouseUp={mouseUpHandler}
          onMouseMove={mouseMoveHandler}
        >
          {managerData.map((member, index) => (
            <MemberCardWrapper
              windowWidth={`${windowSize.width}px`}
              sectionWidth={`${sectionWidth}px`}
              key={index}
              variants={listItemAnimate}
              initial={'start'}
              whileInView={'end'}
              viewport={{ once: true }}
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
