import React from 'react';

import styled from 'styled-components';
const StyledSvg = styled.svg``;
const TeddyIcon = () => {
  return (
    <StyledSvg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="24" height="26" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_244"
            transform="matrix(0.00492424 0 0 0.00454545 -0.0121212 0)"
          />
        </pattern>
        <image
          id="image0_1_244"
          width="208"
          height="220"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </StyledSvg>
  );
};

export default TeddyIcon;
