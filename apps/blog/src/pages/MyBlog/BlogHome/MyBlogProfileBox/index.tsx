import React, { Suspense, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import SettingIcon from '@assets/icons/SettingIcon';
import { HashTageSection } from '@pages/Post/styled';
import { HashTageWrapper } from '@src/components/atoms/HashTage/styled';
import Notice from '@src/components/atoms/Notice';
import ProfileImage from '@src/components/atoms/ProfileImage';
import { positionColor } from '@src/utils/positionColor';
import { UserGuest } from '@type/userDataType';
import { hashTageSpreader } from '@utils/hashTageSpreader';

import {
  BlogName,
  BlogNamePosition,
  BlogNameWrapper,
  IntroduceText,
  ProfileDetailWrapper,
  ProfileImageWrapper,
  ProfileWrapper,
  Role,
  SettingIconWrapper,
} from './styled';

interface Props {
  guestData: UserGuest | undefined;
}

const MyBlogProfileBox = ({ guestData }: Props) => {
  const navigate = useNavigate();

  return (
    <ProfileWrapper>
      <Suspense fallback={<div>프로필 로딩</div>}>
        {guestData && (
          <>
            <ProfileImageWrapper>
              <ProfileImage
                image={guestData.profileImageUrl}
                position={guestData.positionType ?? 'NONE'}
              />
            </ProfileImageWrapper>
            <ProfileDetailWrapper>
              <Role>{guestData.role.toLowerCase()}</Role>
              <BlogNameWrapper>
                <BlogName>{guestData.nickname}</BlogName>
                <BlogNamePosition
                  color={positionColor(guestData.positionType ?? undefined)}
                >
                  &apos;s Blog
                </BlogNamePosition>
                <SettingIconWrapper onClick={() => navigate(`/profile/edit`)}>
                  <SettingIcon />
                </SettingIconWrapper>
              </BlogNameWrapper>
              <IntroduceText>{guestData.introduce ?? ''}</IntroduceText>
              <HashTageSection>
                {guestData.hashTag ? (
                  hashTageSpreader(guestData.hashTag).map((tag, id) => (
                    <HashTageWrapper key={id} light={false}>
                      # {tag}
                    </HashTageWrapper>
                  ))
                ) : (
                  <Notice align={false}>해시태그가 없어요.</Notice>
                )}
              </HashTageSection>
            </ProfileDetailWrapper>
          </>
        )}
      </Suspense>
    </ProfileWrapper>
  );
};

export default memo(MyBlogProfileBox);
