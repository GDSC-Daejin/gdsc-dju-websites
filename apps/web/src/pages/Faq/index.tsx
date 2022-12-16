import React from 'react';

import Banner from '@atoms/Banner';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import FaqLayout from '@templates/FaqLayout';

const Faq = () => {
  return (
    <>
      <Banner color={'green'} />
      <LayoutContainer>
        <ContainerInner>
          <FaqLayout />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Faq;
