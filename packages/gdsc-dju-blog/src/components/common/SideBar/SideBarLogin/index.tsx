import React from 'react';
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
import ProfileImage from '../../ProfileImage';
import SettingIcon from '../../../../assets/SettingIcon';
import { GDSCButton, GDSCButtonL } from '../../Button';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { menuState } from '../../../../store/menu';
import { useCookies } from 'react-cookie';
import { IUserDataType } from '../../../../types/userDataType';

const SideBarLogin: React.FC<{
  userData: IUserDataType | undefined;
  closeSideBar: () => void;
}> = ({ userData, closeSideBar }) => {
  const navigate = useNavigate();
  const [TokenCookies, setTokenCookie, removeTokenCookie] = useCookies([
    'token',
    'refresh_token',
  ]);
  const postBlock = userData?.role === 'GUEST';

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
    <>
      {userData && (
        <>
          <ProfileImageWrapper>
            {userData.profileImageUrl && (
              <ProfileImage
                image={userData.profileImageUrl}
                position={userData.memberInfo.positionType}
              />
            )}
          </ProfileImageWrapper>
          <ProfileInformation>
            <ProfileName>
              {userData.memberInfo.nickname ?? userData.username}
            </ProfileName>
            <ProfileJobPosition>
              {userData.memberInfo.positionType}
            </ProfileJobPosition>
            <SettingIconWrapper
              onClick={() => {
                navigate(`/${userData.memberInfo.nickname}/edit`);
                closeSideBar();
              }}
            >
              <SettingIcon />
            </SettingIconWrapper>
          </ProfileInformation>
          <MyBlogButtonWrapper>
            <GDSCButtonL
              text="내 블로그"
              onClick={() => {
                navigate(`/${userData.memberInfo.nickname}`);
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
    </>
  );
};

export default SideBarLogin;
