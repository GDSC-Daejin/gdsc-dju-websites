import React from 'react';

import Banner from '@atoms/Banner';
import { announcementData } from '@contents/recruitDetails';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import RecruitmentLayout from '@templates/RecruitmentLayout';

const Recruitment = () => {
  return (
    <>
      <Banner color={'blue'} />
      <LayoutContainer>
        <ContainerInner>
          <RecruitmentLayout announcementData={announcementData} />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default Recruitment;
