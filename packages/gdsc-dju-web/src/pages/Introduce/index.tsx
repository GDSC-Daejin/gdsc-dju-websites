import React from 'react';
import { MainText, Title } from '../../components/atoms/Title/title';
import Banner from '../../components/molecules/Banner';
import MemberSectionOrganism from '../../components/organisms/Introduce/MemberSectionOrganism';

import { memberList } from '../../contents/MemberList';
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
          <MemberSectionOrganism />
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default Introduce;
