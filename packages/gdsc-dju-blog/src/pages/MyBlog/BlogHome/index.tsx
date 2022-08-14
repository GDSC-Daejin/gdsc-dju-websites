import React, { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { useGetMyData } from '../../../api/hooks/useGetMyData';
import { useGetMyPostsNotTempData } from '../../../api/hooks/useGetMyPostsNotTempData';
import { useGetMyScrapList } from '../../../api/hooks/useGetMyScrapList';
import Setting from '../../../assets/Setting';
import { GDSCButton } from '../../../components/common/Button';
import CategoryMenu from '../../../components/common/CategoryMenu';
import { HashTageWrapper } from '../../../components/common/HashTage/styled';
import PageBar from '../../../components/common/PageBar';
import PostCard from '../../../components/common/PostCard';
import ProfileImage from '../../../components/common/ProfileImage';
import { positionColor } from '../../../store/positionColor';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import { hashTageSpreader } from '../../../Utils/hashTageSpreader';
import { HashTageSection } from '../../Post/styled';
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

const BlogHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryName = searchParams.get('type');
  const category = categoryName ? categoryName : 'all';

  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  const { userData } = useGetMyData();
  const userInfoData = userData?.memberInfo;
  const { userPostNotTempData } = useGetMyPostsNotTempData(
    category,
    page - 1,
    6,
  );
  const { scrapList } = useGetMyScrapList();
  const navigate = useNavigate();

  useEffect(() => {
    if (page) {
      setSearchParams({
        type: category,
        page: '1',
      });
    }
  }, []);

  const pageHandler = (page: number, limit?: number) => {
    if (page < 1) {
      return;
    }
    if (page === limit) {
      return;
    } else {
      navigate({
        pathname: `/${userInfoData?.nickname}`,
        search: `?${createSearchParams({
          type: category,
          page: page.toString(),
        })}`,
      });
    }
  };
  const categoryHandler = (category: string) =>
    navigate({
      pathname: `/${userInfoData?.nickname}`,
      search: `?${createSearchParams({
        type: category,
        page: page.toString(),
      })}`,
    });
  const postBlock = userData?.role === 'GUEST';
  const name = userData?.memberInfo.nickname ?? userData?.username;
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          {userInfoData && (
            <>
              <ProfileWrapper>
                <ProfileImageWrapper>
                  <Suspense fallback={<div>이미지</div>}>
                    <ProfileImage
                      image={userData.profileImageUrl}
                      position={userInfoData.positionType}
                    />
                  </Suspense>
                </ProfileImageWrapper>
                <ProfileDetailWrapper>
                  {userData.role && <Role>{userData.role}</Role>}
                  <BlogNameWrapper>
                    <BlogName>{name}</BlogName>
                    <BlogNamePosition
                      color={positionColor(userInfoData.positionType)}
                    >
                      &apos;s Blog
                    </BlogNamePosition>
                    <SettingIconWrapper
                      onClick={() =>
                        navigate({
                          pathname: `/${name}/edit`,
                        })
                      }
                    >
                      <Setting />
                    </SettingIconWrapper>
                  </BlogNameWrapper>
                  <IntroduceText>{userInfoData.introduce ?? ''}</IntroduceText>
                  <HashTageSection>
                    {userInfoData.hashTag ? (
                      hashTageSpreader(userInfoData.hashTag).map((tag, id) => (
                        <HashTageWrapper key={id} light={false}>
                          # {tag}
                        </HashTageWrapper>
                      ))
                    ) : (
                      <Notice>해시태그가 없어요.</Notice>
                    )}
                  </HashTageSection>
                </ProfileDetailWrapper>
              </ProfileWrapper>
              <TopMenuWrapper>
                <CategoryMenu
                  type={category as string}
                  onClick={categoryHandler}
                />
                <ButtonWrapper>
                  <GDSCButton
                    text={'스크랩'}
                    onClick={() => navigate(`/${name}/likes`)}
                  />
                  <GDSCButton
                    text={'글쓰기'}
                    disable={postBlock}
                    onClick={() => navigate('/post/write')}
                  />
                </ButtonWrapper>
              </TopMenuWrapper>
            </>
          )}
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
                      isScrap={!!scrapList?.find((id) => id == data.postId)}
                    />
                  </PostCardWrapper>
                ))
              ) : (
                <Notice>작성된 글이 없습니다.</Notice>
              )}
            </PostSectionWrapper>
          )}
          <PageBarSection>
            {userPostNotTempData &&
              userInfoData &&
              !userPostNotTempData.empty && (
                <PageBar
                  page={page}
                  totalPage={userPostNotTempData.totalPages}
                  nickname={userInfoData.nickname}
                  type={category}
                  onClick={pageHandler}
                />
              )}
          </PageBarSection>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default BlogHome;
