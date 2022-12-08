import React from 'react';
import { useParams } from 'react-router-dom';

import Banner from '@atoms/Banner';
import { announcementData } from '@contents/recruitDetails';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import AnnouncementLayout from '@templates//AnnouncementLayout';
import { AnnouncementData, RecruitmentId } from '@type/pageData';

const Announcement = () => {
  const { id } = useParams<{ id: RecruitmentId }>();
  const aboutTeam = announcementData.find(
    (aboutTeam) => aboutTeam.id === id,
  ) as AnnouncementData;
  return (
    <>
      <Banner color={'blue'} />
      <LayoutContainer>
        <ContainerInner>
          <AnnouncementLayout aboutTeam={aboutTeam} />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Announcement;
