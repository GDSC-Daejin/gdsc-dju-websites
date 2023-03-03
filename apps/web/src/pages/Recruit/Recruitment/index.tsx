import React from 'react';

import Banner from '@common/Banner';
import { announcementData } from '@contents/recruitment';
import RecruitmentLayout from '@src/components/layouts/RecruitmentLayout';
import { ContainerInner, LayoutContainer } from '@styles/layouts';

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
