import React, { Suspense } from 'react';
import {
  BlogName,
  BlogNamePosition,
  BlogNameWrapper,
  ButtonWrapper,
  IntroduceText,
  Notice,
  PageBarSection,
  PostCardWrapper,
  PostSectionWrapper,
  ProfileDetailWrapper,
  ProfileImageWrapper,
  ProfileWrapper,
  Role,
  SettingIconWrapper,
  TopMenuWrapper,
} from './styled';
import ProfileImage from '@src/components/atoms/ProfileImage';
import { positionColor } from '@src/store/positionColor';
import SettingIcon from '@assets/icons/SettingIcon';
import { HashTageSection } from '@pages/Post/styled';
import { hashTageSpreader } from '@utils/hashTageSpreader';
import { HashTageWrapper } from '@src/components/atoms/HashTage/styled';
import CategoryMenu from '@src/components/atoms/CategoryMenu';
import { GDSCButton } from '@src/components/atoms/Button';
import PostCard from '@src/components/molecules/PostCard';
import PageBar from '@src/components/atoms/PageBar';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetUserPostsNotTempData } from '@src/api/hooks/useGetUserPostNotTempData';
import { useGetMyScrapList } from '@src/api/hooks/useGetMyScrapList';
import { useGetGuestData } from '@src/api/hooks/useGetUserData';
import { useGetMyData } from '@src/api/hooks/useGetMyData';

interface Props {
  category: string;
  page: number;
  categoryHandler: (category: string) => void;
  pageHandler: (page: number, limit?: number) => void;
}

const MyBlogLayout = ({
  categoryHandler,
  pageHandler,
  category,
  page,
}: Props) => {
  const navigate = useNavigate();
  const { nickname } = useParams<{ nickname: string }>();

  const { guestData } = useGetGuestData(nickname!);
  const { myData } = useGetMyData();
  const { scrapList } = useGetMyScrapList();
  const { userPostNotTempData } = useGetUserPostsNotTempData(
    guestData?.userId,
    category,
    page - 1,
    6,
  );

  return (
    <div>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <Suspense fallback={<div>이미지</div>}>
            {guestData && (
              <ProfileImage
                image={guestData.profileImageUrl}
                position={guestData.positionType ?? 'NONE'}
              />
            )}
          </Suspense>
        </ProfileImageWrapper>
        <Suspense fallback={<div>이미지</div>}>
          {guestData && (
            <ProfileDetailWrapper>
              <Role>{guestData.role}</Role>
              <BlogNameWrapper>
                <BlogName>{guestData.nickname}</BlogName>
                <BlogNamePosition
                  color={positionColor(guestData.positionType ?? undefined)}
                >
                  &apos;s Blog
                </BlogNamePosition>
                <SettingIconWrapper
                  onClick={() =>
                    navigate(`/${myData?.memberInfo.nickname}/edit`)
                  }
                >
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
          )}
        </Suspense>
      </ProfileWrapper>
      {myData?.userId === guestData?.userId && (
        <TopMenuWrapper>
          <CategoryMenu type={category} onClick={categoryHandler} />
          <ButtonWrapper>
            <GDSCButton
              text={'스크랩'}
              disable={false}
              onClick={() =>
                navigate(
                  `/${myData?.memberInfo.nickname}/likes?type=all&page=1`,
                )
              }
            />
            <GDSCButton
              text={'글쓰기'}
              disable={myData?.role === 'GUEST' ?? true}
              onClick={() => navigate('/post/write')}
            />
          </ButtonWrapper>
        </TopMenuWrapper>
      )}
      <Suspense fallback={<div>isLoading</div>}>
        {userPostNotTempData && (
          <PostSectionWrapper isNull={userPostNotTempData.empty}>
            {!userPostNotTempData.empty ? (
              userPostNotTempData.content.map((data) => (
                <PostCardWrapper
                  key={data.postId}
                  onClick={() =>
                    navigate(`/${data.memberInfo.nickname}/${data.postId}`)
                  }
                >
                  <PostCard
                    {...data}
                    isScrap={
                      scrapList
                        ? !!scrapList.find((id) => id == data.postId)
                        : false
                    }
                  />
                </PostCardWrapper>
              ))
            ) : (
              <Notice>작성된 글이 없습니다.</Notice>
            )}
          </PostSectionWrapper>
        )}
      </Suspense>
      <Suspense fallback={<div>pageBar</div>}>
        {userPostNotTempData && (
          <PageBarSection>
            {!userPostNotTempData.empty && (
              <PageBar
                currentPage={page}
                totalPage={userPostNotTempData.totalPages}
                type={category}
                onClick={pageHandler}
              />
            )}
          </PageBarSection>
        )}
      </Suspense>
    </div>
  );
};

export default MyBlogLayout;
