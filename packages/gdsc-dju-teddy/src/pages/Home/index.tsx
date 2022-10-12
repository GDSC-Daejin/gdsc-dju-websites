import React from 'react';

import Dashboard from '../../components/common/Dashboard';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Home = () => {
  return (
    <LayoutContainer>
      <ContainerInner>
        <Dashboard />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Home;
