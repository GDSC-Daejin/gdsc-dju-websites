import SettingIcon from '@assets/icons/SettingIcon';
import { useGetMyData } from '@src/api/hooks/useGetMyData';

import { GDSCButton } from '@src/components/atoms/Button';
import ProfileImage from '@src/components/atoms/ProfileImage';
import React, { Suspense } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
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

const SideMenuLogin: React.FC<{
  closeSideMenu: () => void;
}> = ({ closeSideMenu }) => {
  const navigate = useNavigate();
  const [, , removeCookies] = useCookies(['token']);

  const { myData } = useGetMyData();

  const postBlock = myData?.role === 'GUEST';

  const handleLogout = () => {
    removeCookies('token', { path: '/', domain: '.gdsc-dju.com' });
    sessionStorage.removeItem('user');
    window.location.href = `${location.origin}`;
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
            <ProfileJobPosition>{myData.role.toLowerCase()}</ProfileJobPosition>
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
