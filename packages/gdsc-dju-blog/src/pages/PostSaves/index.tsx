import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useGetMyData } from '../../api/hooks/useGetMyData';
import { useGetMyPostsTempData } from '../../api/hooks/useGetMyPostsTempData';
import { useGetMyScrapList } from '../../api/hooks/useGetMyScrapList';
import { GDSCButton } from '../../components/common/Button';
import CategoryMenu from '../../components/common/CategoryMenu';
import PageBar from '../../components/common/PageBar';
import PostCard from '../../components/common/PostCard';
import { POST_KEY, postState } from '../../store/postEdit';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import {
  Notice,
  PageBarSection,
  PostCardWrapper,
  PostSectionWrapper,
  TopMenuWrapper,
} from '../MyBlog/BlogHome/styled';
import { ButtonWrapper, PostSavesTitle } from '../PostSaves/styled';

const PostSaves = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryName = searchParams.get('type');
  const category = categoryName ? categoryName : 'all';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;
  const { scrapList } = useGetMyScrapList();

  const { userData } = useGetMyData();
  const userInfoData = userData?.memberInfo;
  const { userPostTempData } = useGetMyPostsTempData(category, page - 1, 6);
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
        pathname: `/post/saves`,
        search: `?${createSearchParams({
          type: category,
          page: page.toString(),
        })}`,
      });
    }
  };
  const categoryHandler = (category: string) =>
    navigate({
      pathname: `/post/saves`,
      search: `?${createSearchParams({
        type: category,
        page: page.toString(),
      })}`,
    });
  const [post, setPost] = useRecoilState(postState);
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <PostSavesTitle>임시 저장된 글</PostSavesTitle>
          <TopMenuWrapper>
            <CategoryMenu type={category as string} onClick={categoryHandler} />
            <ButtonWrapper>
              <GDSCButton
                text={'새로작성'}
                color={'googleBlue'}
                onClick={() => navigate('/post/write')}
              />
            </ButtonWrapper>
          </TopMenuWrapper>
          {userPostTempData && (
            <PostSectionWrapper isNull={userPostTempData.empty}>
              {!userPostTempData.empty ? (
                userPostTempData.content.map((data) => (
                  <PostCardWrapper
                    key={data.postId}
                    onClick={() => {
                      setPost({ ...post, [POST_KEY.POST_TMPSTORE]: true });
                      navigate(`/post/edit/${data.postId}`);
                    }}
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
            {userPostTempData && userInfoData && !userPostTempData.empty && (
              <PageBar
                page={page}
                totalPage={userPostTempData.totalPages}
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

export default PostSaves;
