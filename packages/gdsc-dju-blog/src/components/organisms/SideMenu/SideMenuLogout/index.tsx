import React from 'react';
import {
  GdscSideBlogLogoWrapper,
  GoogleButtonWrapper,
  GoogleLogoWrapper,
} from '../styled';

import { GDSCButton } from '@src/components/atoms/Button';
import GoogleLogo from '@assets/logos/GoogleLogo';
import GdscSideBarLogo from '@assets/logos/GDSCSideBarLogo';

interface IProps {
  loginURL: string;
}
const SideBarLogout: React.FC<IProps> = ({ loginURL }) => {
  return (
    <>
      <GdscSideBlogLogoWrapper>
        <GdscSideBarLogo />
      </GdscSideBlogLogoWrapper>
      <GoogleButtonWrapper>
        <GDSCButton
          text={' Google로 계속'}
          onClick={() => {
            location.href = loginURL;
          }}
        />
        <GoogleLogoWrapper>
          <GoogleLogo />
        </GoogleLogoWrapper>
      </GoogleButtonWrapper>
    </>
  );
};

export default SideBarLogout;
