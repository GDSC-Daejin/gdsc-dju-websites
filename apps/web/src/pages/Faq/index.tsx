import React from 'react';

import Banner from '@common/Banner';
import FaqLayout from '@src/components/layouts/FaqLayout';
import { ContainerInner, LayoutContainer } from '@styles/layouts';

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
