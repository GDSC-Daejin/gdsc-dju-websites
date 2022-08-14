import React from 'react';
import {
  GdscSideBlogLogoWrapper,
  GoogleButtonWrapper,
  GoogleLogoWrapper,
} from '../styled';
import GoogleLogo from '../../../../assets/GoogleLogo';
import { GDSCButton } from '../../Button';
import GdscSideBarLogo from '../../../../assets/logos/GDSCSideBarLogo';

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
