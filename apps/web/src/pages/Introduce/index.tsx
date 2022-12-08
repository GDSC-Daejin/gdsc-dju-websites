import React from 'react';

import Banner from '@atoms/Banner';
import { LayoutContainer } from '@styles/layouts';
import IntroduceLayout from '@templates/IntroduceLayout';

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
