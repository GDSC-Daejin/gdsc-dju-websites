import React, { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { ButtonWrapper, PostSavesTitle } from '../PostSaves/styled';
import { useGetMyPostsTempData } from '@src/api/hooks/useGetMyPostsTempData';
import CategoryMenu from '@src/components/atoms/CategoryMenu';
import { useGetMyScrapList } from '@src/api/hooks/useGetMyScrapList';
import { postState } from '@src/store/postEdit';
import { GDSCButton } from '@src/components/atoms/Button';
import { useGetMyData } from '@src/api/hooks/useGetMyData';
import { ContainerInner, LayoutContainer } from '@styles/layouts';

import WidthPostsContainerWithMenu from '@src/components/organisms/WidthPostsContainerWithMenu';

const PostSaves = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryName = searchParams.get('type');
  const category = categoryName ? categoryName : 'all';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

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
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <PostSavesTitle>임시 저장된 글</PostSavesTitle>

          <CategoryMenu type={category as string} onClick={categoryHandler} />
          <ButtonWrapper>
            <GDSCButton
              text={'새로작성'}
              color={'googleBlue'}
              onClick={() => navigate('/post/write')}
            />
          </ButtonWrapper>

          <Suspense fallback={<div>isLoading</div>}>
            {userPostTempData && (
              <WidthPostsContainerWithMenu
                postData={userPostTempData.content}
                pageHandler={pageHandler}
                currentPage={page}
                totalPage={userPostTempData.totalPages}
              />
            )}
          </Suspense>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default PostSaves;
