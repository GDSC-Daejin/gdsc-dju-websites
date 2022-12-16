import React, { memo } from 'react';

import { useGetMyData } from '@src/api/hooks/useGetMyData';
import ProfileEditLayout from '@src/components/layouts/ProfileEditLayout';
import { ContainerInner, LayoutContainer } from '@styles/layouts';

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
