import React from 'react';

import { SubtitleContent } from '@common/BulletList';
import InformationBar from '@common/InformationBar';
import RecruitFaqButton from '@common/RecruitFaqButton';
import { Title } from '@common/title';
import { recruitDefaultText } from '@contents/recruitment';
import { TopMargin } from '@styles/layouts';
import { AnnouncementData } from '@type/pageData';

import {
  IntroduceWrapper,
  JoinInner,
  JoinWrapper,
  MobileBottomElementWrapper,
  MobileTopElementWrapper,
  SectionWrapper,
} from './styled';

type AnnouncementLayoutProps = {
  aboutTeam: AnnouncementData;
};

const AnnouncementLayout = ({ aboutTeam }: AnnouncementLayoutProps) => {
  return (
    <>
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
            title={'GDG on Campus에 합류하면 얻는 혜택이에요'}
            bulletText={`${recruitDefaultText.benefits}`}
          />
          <TopMargin />
          <SubtitleContent
            title={'GDG on Campus DJU로의 합류여정'}
            bulletText={`${recruitDefaultText.process} `}
          />
          <TopMargin />
        </IntroduceWrapper>
        <JoinWrapper>
          <JoinInner>
            <InformationBar name={aboutTeam.name} />
            <TopMargin />
            <RecruitFaqButton name={aboutTeam.id} />
            <TopMargin />
          </JoinInner>
        </JoinWrapper>
      </SectionWrapper>
      <MobileBottomElementWrapper>
        <RecruitFaqButton name={aboutTeam.id} />
      </MobileBottomElementWrapper>
    </>
  );
};

export default AnnouncementLayout;
