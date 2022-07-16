import React from 'react';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';
import { MainText, Title } from '../../components/common/Title/title';

import { memberList } from '../../apis/pageData/MemberList';

import Banner from '../../components/common/Banner';
import MemberCardSection from '../../components/Introduce/MemberCardSection';
import ReactHelmet from '../../components/common/ReactHelmet';

const Introduce = () => {
  return (
    <>
      <ReactHelmet
        title={'팀원 소개'}
        description={'GDSC DJU와 함께하는 멋진 팀원을 소개합니다.'}
      />
      <Banner color={'yellow'} />
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>About us</Title>
          <TopMargin />
          <MainText>
            GDSC와 함께 성장하는 멋진 {memberList.length}명을 소개해요
          </MainText>
          <TopMargin />
          <MemberCardSection />
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default Introduce;
