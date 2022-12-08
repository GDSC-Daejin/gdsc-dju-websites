import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import {
  DropdownContour,
  DropdownUserName,
  NavigationDropdownButton,
  NavigationDropdownItem,
  NavigationDropdownWrapper,
} from '@src/components/molecules/NavigationDropdown/styled';
import { positionColor } from '@utils/positionColor';

interface Props {
  role: string;
  nickname: string;
  isDropdownOpen: boolean;
}
const NavigationDropdown = ({ role, nickname, isDropdownOpen }: Props) => {
  const navigate = useNavigate();
  const [, , removeCookies] = useCookies(['token']);
  return (
    <NavigationDropdownWrapper isDropdownOpen={isDropdownOpen}>
      <NavigationDropdownItem>
        반가워요
        <br />
        <DropdownUserName
          color={positionColor(role)}
          onClick={() => navigate(`/@${nickname}`)}
        >
          {nickname}
        </DropdownUserName>
      </NavigationDropdownItem>
      <DropdownContour />
      <NavigationDropdownButton
        onClick={() => {
          removeCookies('token', { path: '/', domain: '.gdsc-dju.com' });
          location.href = '/';
        }}
      >
        로그아웃
      </NavigationDropdownButton>
    </NavigationDropdownWrapper>
  );
};

export default NavigationDropdown;
