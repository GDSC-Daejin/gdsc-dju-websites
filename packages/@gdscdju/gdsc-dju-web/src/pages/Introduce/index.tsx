import React from 'react';

import Banner from '../../components/common/Banner';
import { MainText, Title } from '../../components/common/Title/title';
import MemberCardSection from '../../components/IntroduceSection/MemberCardSection';

import { memberList } from '../../pageData/MemberList';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';

const Introduce = () => {
  return (
    <>
      <Banner color={'yellow'} />
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>About us</Title>
          <TopMargin />

          <div>
            <MainText>
              GDSC와 함께 성장하는 멋진 {memberList.length}명을 소개해요
            </MainText>
          </div>
          <TopMargin />
          <MemberCardSection />
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default Introduce;
