import React, { memo } from 'react';
import styled from 'styled-components';

import browser from 'browser-detect';
import { Line1, Line1ForSafari } from '../../assets/HomeAssets/Line1';
import { Line2, Line2ForSafari } from '../../assets/HomeAssets/Line2';
import { Line3, Line3ForSafari } from '../../assets/HomeAssets/Line3';

const SolarSystemLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SolarSystem = () => {
  const browserInfo = browser();
  const isSafari = browserInfo.name === 'safari';
  return (
    <div>
      <SolarSystemLineWrapper>
        {isSafari ? <Line1ForSafari /> : <Line1 />}
      </SolarSystemLineWrapper>
      <SolarSystemLineWrapper>
        {isSafari ? <Line2ForSafari /> : <Line2 />}
      </SolarSystemLineWrapper>
      <SolarSystemLineWrapper>
        {isSafari ? <Line3ForSafari /> : <Line3 />}
      </SolarSystemLineWrapper>
    </div>
  );
};

export default memo(SolarSystem);
