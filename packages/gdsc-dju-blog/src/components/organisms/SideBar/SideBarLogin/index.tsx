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

const SideBarLogin: React.FC<{
  closeSideBar: () => void;
}> = ({ closeSideBar }) => {
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
    <Suspense fallback={<div>asds</div>}>
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
                closeSideBar();
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
                navigate(`/${myData.memberInfo.nickname}`);
                closeSideBar();
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
                  !postBlock && closeSideBar();
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

export default SideBarLogin;
