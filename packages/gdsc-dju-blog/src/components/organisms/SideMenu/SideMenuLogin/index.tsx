import React, { Suspense } from 'react';
import {
  BottomButtonWrapper,
  LogoutButtonWrapper,
  MyBlogButtonWrapper,
  ProfileImageWrapper,
  ProfileInformation,
  ProfileJobPosition,
  ProfileName,
  SettingIconWrapper,
  WriteButtonWrapper,
} from '../styled';

import { GDSCButton } from '@src/components/atoms/Button';
import { useNavigate } from 'react-router';
import ProfileImage from '@src/components/atoms/ProfileImage';
import { useCookies } from 'react-cookie';
import SettingIcon from '@assets/icons/SettingIcon';
import { useGetMyData } from '@src/api/hooks/useGetMyData';

const SideMenuLogin: React.FC<{
  closeSideMenu: () => void;
}> = ({ closeSideMenu }) => {
  const navigate = useNavigate();
  const [TokenCookies, setTokenCookie, removeTokenCookie] = useCookies([
    'token',
    'refresh_token',
  ]);

  const { myData } = useGetMyData();

  const postBlock = myData?.role === 'GUEST';

  const handleLogout = () => {
    removeTokenCookie('token', {
      path: '/',
    });
    removeTokenCookie('refresh_token', {
      path: '/',
    });
    sessionStorage.removeItem('user');
    window.location.href =
      import.meta.env.MODE === 'development'
        ? (window.location.href = 'http://localhost:3000/')
        : (window.location.href = 'https://gdsc-dju-blog.web.app/');
  };

  return (
    <Suspense fallback={<div>loading</div>}>
      {myData && (
        <>
          <ProfileImageWrapper>
            {myData.profileImageUrl && (
              <ProfileImage
                image={myData.profileImageUrl}
                position={myData.memberInfo.positionType}
              />
            )}
          </ProfileImageWrapper>
          <ProfileInformation>
            <ProfileName>
              {myData.memberInfo.nickname ?? myData.username}
            </ProfileName>
            <ProfileJobPosition>
              {myData.memberInfo.positionType}
            </ProfileJobPosition>
            <SettingIconWrapper
              onClick={() => {
                navigate(`/${myData.memberInfo.nickname}/edit`);
                closeSideMenu();
              }}
            >
              <SettingIcon />
            </SettingIconWrapper>
          </ProfileInformation>
          <MyBlogButtonWrapper>
            <GDSCButton
              size={'large'}
              text="내 블로그"
              onClick={() => {
                navigate(`/${myData.memberInfo.nickname}?type=all&page=1`);
                closeSideMenu();
              }}
            />
          </MyBlogButtonWrapper>
          <BottomButtonWrapper>
            <WriteButtonWrapper>
              <GDSCButton
                text="글쓰기"
                disable={postBlock}
                onClick={() => {
                  !postBlock && navigate(`/post/write`);
                  !postBlock && closeSideMenu();
                }}
              />
            </WriteButtonWrapper>
            <LogoutButtonWrapper>
              <GDSCButton text="로그아웃" onClick={handleLogout} />
            </LogoutButtonWrapper>
          </BottomButtonWrapper>
        </>
      )}
    </Suspense>
  );
};

export default SideMenuLogin;
