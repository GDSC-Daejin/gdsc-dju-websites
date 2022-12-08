import React from 'react';

import { MainText, Title } from '@atoms/title';
import RecruitmentCard from '@molecules/RecruitmentCard';
import { TopMargin } from '@styles/layouts';
import { AnnouncementData } from '@type/pageData';

type RecruitmentLayoutProps = {
  announcementData: AnnouncementData[];
};

const RecruitmentLayout = ({ announcementData }: RecruitmentLayoutProps) => {
  return (
    <>
      <TopMargin />
      <Title>함께 성장할 동료를 모집합니다</Title>
      <TopMargin />
      <MainText>
        열정적인 동료를 얻기 위해 이 자리에 모였습니다.
        <br />
        우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
      </MainText>
      <TopMargin />
      {announcementData.map((data) => (
        <div key={data.id}>
          <RecruitmentCard {...data} />
        </div>
      ))}
      <TopMargin />
    </>
  );
};

export default RecruitmentLayout;
