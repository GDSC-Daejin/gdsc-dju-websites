import React from 'react';

import { pageAnimate, pageTransitionAnimate } from '../../components/animation';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Faq = () => {
  return (
    <LayoutContainer>
      <ContainerInner
        initial="start"
        animate="end"
        exit="out"
        variants={pageTransitionAnimate}
        transition={pageAnimate}
      >
        faq
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Faq;
