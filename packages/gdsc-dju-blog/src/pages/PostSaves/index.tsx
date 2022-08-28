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
import PostSavesLayout from '@src/components/layouts/PostSavesLayout';

const PostSaves = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryName = searchParams.get('type');
  const category = categoryName ? categoryName : 'all';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  useEffect(() => {
    if (!pageParams && !categoryName) {
      setSearchParams({
        type: category,
        page: '1',
      });
    }
  }, []);
  const categoryHandler = (category: string) =>
    setSearchParams({ ...searchParams, type: category });
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <PostSavesLayout
            page={page}
            category={category}
            categoryHandler={categoryHandler}
          />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default PostSaves;
