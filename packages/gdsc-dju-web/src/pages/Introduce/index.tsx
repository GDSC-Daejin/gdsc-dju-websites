import Banner from '@common/Banner';
import { MainText, Title } from '@common/Title/title';
import MemberSection from '@layout/Introduce/MemberSection';
import { memberList } from '@src/contents/MemberList';
import { ContainerInner, LayoutContainer, TopMargin } from '@styles/layouts';
import React from 'react';

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
          <MemberSection />
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default Introduce;
