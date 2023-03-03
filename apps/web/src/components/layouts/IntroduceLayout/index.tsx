import React from 'react';

import MemberSection from '@common/introduce/MemberSection';
import { MainText, Title } from '@common/title';
import { memberList } from '@contents/MemberList';
import { ContainerInner, TopMargin } from '@styles/layouts';

const IntroduceLayout = () => {
  return (
    <ContainerInner>
      <TopMargin />
      <Title>About us</Title>
      <TopMargin />
      <div>
        <MainText>
          GDSC와 함께 성장하는 {memberList.length}명을 소개합니다.
        </MainText>
      </div>
      <TopMargin />
      <MemberSection />
      <TopMargin />
    </ContainerInner>
  );
};

export default IntroduceLayout;
