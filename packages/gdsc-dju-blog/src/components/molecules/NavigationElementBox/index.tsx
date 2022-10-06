import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import { useGetMyData } from '@src/api/hooks/useGetMyData';
import TokenService from '@src/api/TokenService';
import { GDSCButton } from '@src/components/atoms/Button';
import SearchInput from '@src/components/atoms/input/SearchInput';
import ProfileImage from '@src/components/atoms/ProfileImage';
import NavigationDropdown from '@src/components/molecules/NavigationDropdown';
import {
  NavigationElementBoxInner,
  NavigationElementBoxWrapper,
} from '@src/components/molecules/NavigationElementBox/styled';
import OutsideClickHandler from '@utils/OutsideClickHandler';

const NavigationElementBox = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [cookies] = useCookies(['token']);
  const { myData } = useGetMyData();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!inputRef.current) return;
    if (inputRef.current.value.trim() !== '')
      navigate(`/search/${inputRef.current.value}?type=all&page=1`);
  };
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);
  return (
    <OutsideClickHandler outsideClick={() => setIsDropdownOpen(false)}>
      <NavigationElementBoxWrapper>
        <SearchInput
          onClick={handleSubmit}
          ref={inputRef}
          placeholder="Search"
        />
        {cookies.token ? (
          <NavigationElementBoxInner>
            <div style={{ position: 'relative' }}>
              {myData && (
                <>
                  <ProfileImage
                    image={myData.profileImageUrl}
                    size={'small'}
                    onClick={() => {
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                  />
                  <NavigationDropdown
                    nickname={myData.memberInfo.nickname}
                    role={myData.memberInfo.positionType}
                    isDropdownOpen={isDropdownOpen}
                  />
                </>
              )}
            </div>
            <GDSCButton
              text={'글쓰기'}
              onClick={() => navigate('post/write')}
            />
          </NavigationElementBoxInner>
        ) : (
          <NavigationElementBoxInner>
            <GDSCButton
              text={'로그인'}
              onClick={() => (location.href = TokenService.getRedirectURL())}
            />
          </NavigationElementBoxInner>
        )}
      </NavigationElementBoxWrapper>
    </OutsideClickHandler>
  );
};

export default NavigationElementBox;
