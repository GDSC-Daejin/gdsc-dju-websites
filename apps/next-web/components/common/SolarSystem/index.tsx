import React, { memo } from 'react';

import styled from 'styled-components';

import { Line1 } from './Line1';
import { Line2 } from './Line2';
import { Line3 } from './Line3';

const SolarSystemLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SolarSystem = () => {
  return (
    <div>
      <SolarSystemLineWrapper>
        <Line1 />
      </SolarSystemLineWrapper>
      <SolarSystemLineWrapper>
        <Line2 />
      </SolarSystemLineWrapper>
      <SolarSystemLineWrapper>
        <Line3 />
      </SolarSystemLineWrapper>
    </div>
  );
};

export default memo(SolarSystem);
