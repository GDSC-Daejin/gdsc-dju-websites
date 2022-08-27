import React, { memo } from 'react';
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
import ProfileImage from '@src/components/atoms/ProfileImage';
import { positionColor } from '@src/store/positionColor';
import SettingIcon from '@assets/icons/SettingIcon';
import { HashTageSection } from '@pages/Post/styled';
import { hashTageSpreader } from '@utils/hashTageSpreader';
import { HashTageWrapper } from '@src/components/atoms/HashTage/styled';
import { UserGuest } from '@type/userDataType';
import { useNavigate } from 'react-router-dom';
import Notice from '@src/components/atoms/Notice';

interface Props {
  guestData: UserGuest | undefined;
}

const MyBlogProfileBox = ({ guestData }: Props) => {
  const navigate = useNavigate();

  return (
    <ProfileWrapper>
      {guestData && (
        <>
          <ProfileImageWrapper>
            <ProfileImage
              image={guestData.profileImageUrl}
              position={guestData.positionType ?? 'NONE'}
            />
          </ProfileImageWrapper>
          <ProfileDetailWrapper>
            <Role>{guestData.role}</Role>
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
                <Notice>해시태그가 없어요.</Notice>
              )}
            </HashTageSection>
          </ProfileDetailWrapper>
        </>
      )}
    </ProfileWrapper>
  );
};

export default memo(MyBlogProfileBox);
