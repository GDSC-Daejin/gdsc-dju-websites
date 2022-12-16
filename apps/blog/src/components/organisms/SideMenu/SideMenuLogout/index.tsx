import React from 'react';

import SideMenuLogo from '@assets/logos/SideMenuLogo';
import { GDSCButton } from '@src/components/atoms/Button';

import { GoogleButtonWrapper, LogoutBoxWrapper } from '../styled';

interface IProps {
  loginURL: string;
}
const SideBarLogout: React.FC<IProps> = ({ loginURL }) => {
  return (
    <LogoutBoxWrapper>
      <SideMenuLogo />
      <GoogleButtonWrapper>
        <GDSCButton
          size={'medium'}
          isGoogle={true}
          text={' Google로 계속'}
          onClick={() => {
            location.href = loginURL;
          }}
        />
      </GoogleButtonWrapper>
    </LogoutBoxWrapper>
  );
};

export default SideBarLogout;
