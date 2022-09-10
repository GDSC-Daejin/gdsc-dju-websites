import React, { memo } from 'react';
import { useGetMyData } from '@src/api/hooks/useGetMyData';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import ProfileEditLayout from '@src/components/layouts/ProfileEditLayout';

const ProfileEdit = () => {
  const { myData } = useGetMyData();
  return (
    <LayoutContainer>
      <ContainerInner>
        {myData && <ProfileEditLayout myData={myData} />}
      </ContainerInner>
    </LayoutContainer>
  );
};

export default memo(ProfileEdit);
