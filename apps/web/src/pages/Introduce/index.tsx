import React from 'react';

import Banner from '@common/Banner';
import IntroduceLayout from '@src/components/layouts/IntroduceLayout';
import { LayoutContainer } from '@styles/layouts';

const Introduce = () => {
  return (
    <>
      <Banner color={'yellow'} />
      <LayoutContainer>
        <IntroduceLayout />
      </LayoutContainer>
    </>
  );
};

export default Introduce;
