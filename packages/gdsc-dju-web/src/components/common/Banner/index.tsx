import React from 'react';
import styled from 'styled-components';

import BlueBanner from '../../../assets/BannerImages/BlueBanner.svg';
import RedBanner from '../../../assets/BannerImages/RedBanner.svg';
import YellowBanner from '../../../assets/BannerImages/YellowBanner.svg';
import GreenBanner from '../../../assets/BannerImages/GreenBanner.svg';

interface BannerProps {
  color: 'blue' | 'red' | 'yellow' | 'green';
  image?: string;
}
export const BannerInner = styled.img`
  height: 700px;
  background-position-x: 50%;
  background-position-y: 50%;
  -webkit-background-size: cover;
  background-size: cover;
`;
export const BannerWrapper = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    height: 180px;
  }
`;

const Banner: React.FC<BannerProps> = ({ color, image }) => {
  const bannerImages = {
    blue: BlueBanner,
    red: RedBanner,
    yellow: YellowBanner,
    green: GreenBanner,
  } as const;
  return (
    <BannerWrapper>
      <picture>
        <BannerInner
          src={image ? image : bannerImages[color]}
          alt={'banner-image'}
        />
      </picture>
    </BannerWrapper>
  );
};

export default Banner;
