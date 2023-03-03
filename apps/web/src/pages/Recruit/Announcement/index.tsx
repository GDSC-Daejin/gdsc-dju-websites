import React from 'react';
import { useParams } from 'react-router-dom';

import Banner from '@common/Banner';
import { announcementData } from '@contents/recruitment';
import AnnouncementLayout from '@src/components/layouts//AnnouncementLayout';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import { AnnouncementData, PositionType } from '@type/pageData';

const Announcement = () => {
  const { id } = useParams<{ id: PositionType }>();
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
