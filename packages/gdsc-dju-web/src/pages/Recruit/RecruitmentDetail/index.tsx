import React from 'react';
import { useParams } from 'react-router-dom';

import Banner from '@common/Banner';
import { SubtitleContent } from '@common/BulletList';
import { Title } from '@common/Title/title';
import {
  RecruitDetails,
  recruitDefaultText,
} from '@src/contents/recruitDetails';
import { ContainerInner, TopMargin } from '@styles/layouts';
import { LayoutContainer } from '@styles/layouts';

import InformationBar from './InformationBar';
import RecruitFaqButton from './RecruitFaqButton';
import {
  IntroduceWrapper,
  JoinInner,
  JoinWrapper,
  MobileBottomElementWrapper,
  MobileTopElementWrapper,
  SectionWrapper,
} from './styled';

const RecruitmentDetail: React.FC = () => {
  const { id } = useParams();
  const aboutTeam = RecruitDetails.find((aboutTeam) => aboutTeam.id === id);
  return (
    <>
      <Banner color={'blue'} />
      {aboutTeam && (
        <LayoutContainer>
          <ContainerInner>
            <TopMargin />
            <Title>{aboutTeam?.name}</Title>
            <TopMargin />
            <MobileTopElementWrapper>
              <JoinInner>
                <InformationBar name={aboutTeam.name} />
              </JoinInner>
              <TopMargin />
            </MobileTopElementWrapper>
            <SectionWrapper>
              <IntroduceWrapper>
                <SubtitleContent
                  title={`${aboutTeam.name} 포지션을 소개해요`}
                  bulletText={aboutTeam.introduction}
                />
                <TopMargin />
                <SubtitleContent
                  title={`${aboutTeam.name}는 이런 것들을 해요`}
                  bulletText={aboutTeam.activity}
                />
                <TopMargin />
                <SubtitleContent
                  title={'이런 분을 찾고 있어요'}
                  bulletText={`${aboutTeam.people}`}
                />
                <TopMargin />
                <SubtitleContent
                  title={'이런 경험이 있다면 더 좋아요'}
                  bulletText={`${aboutTeam.plus}`}
                />
                <TopMargin />
                <SubtitleContent
                  title={'GDSC에 합류하면 얻는 혜택이에요'}
                  bulletText={`${recruitDefaultText.benefits}`}
                />
                <TopMargin />
                <SubtitleContent
                  title={'GDSC DJU로의 합류여정'}
                  bulletText={`${recruitDefaultText.process} `}
                />
              </IntroduceWrapper>
              <JoinWrapper>
                <JoinInner>
                  <InformationBar name={aboutTeam.name} />
                  <TopMargin />
                  <RecruitFaqButton name={id as string} />
                  <TopMargin />
                </JoinInner>
              </JoinWrapper>
            </SectionWrapper>
            <MobileBottomElementWrapper>
              <RecruitFaqButton name={id as string} />
            </MobileBottomElementWrapper>
          </ContainerInner>
        </LayoutContainer>
      )}
      <TopMargin />
    </>
  );
};

export default RecruitmentDetail;
