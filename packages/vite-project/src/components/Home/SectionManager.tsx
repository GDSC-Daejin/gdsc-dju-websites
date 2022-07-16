import React from 'react';
import styled from 'styled-components';
import {
  HomeSectionContainer,
  HomeSectionContainerInner,
  HomeSectionTitle,
  HomeSectionWrapper,
} from './styled';
import MemberCardV2 from '../common/MemberCardV2';
import { motion } from 'framer-motion';
import { managerData } from '../../apis/pageData/managerData';
import { listAnimate, listItemAnimate } from '../common/Variants/Variants';

const ManagerSubTitle = styled(motion.div)`
  margin-bottom: 50px;
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
const MemberCardV2Section = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
`;
const MemberCardV2Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  min-height: 300px;

  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    width: 100%;
  }
`;

const SectionManager = () => {
  return (
    <HomeSectionContainer>
      <HomeSectionContainerInner>
        <HomeSectionWrapper>
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
          <MemberCardV2Section variants={listAnimate}>
            {managerData.map((member, index) => (
              <MemberCardV2Wrapper
                key={index}
                variants={listItemAnimate}
                initial={'start'}
                whileInView={'end'}
                viewport={{ once: true }}
              >
                <MemberCardV2 member={member} />
              </MemberCardV2Wrapper>
            ))}
          </MemberCardV2Section>
        </HomeSectionWrapper>
      </HomeSectionContainerInner>
    </HomeSectionContainer>
  );
};

export default SectionManager;
