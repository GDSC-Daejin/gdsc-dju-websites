import React from 'react';
import { pageAnimate, pageTransitionAnimate } from '../../components/animation';
import ContributorsLayout from '../../layout/contributors';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Contributors = () => {
  return (
    <LayoutContainer>
      <ContainerInner
        initial="start"
        animate="end"
        exit="out"
        variants={pageTransitionAnimate}
        transition={pageAnimate}
      >
        <ContributorsLayout />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Contributors;
