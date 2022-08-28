import React, { Suspense } from 'react';
import { PostSavesTitle } from '@pages/PostSaves/styled';
import WidthPostsContainerWithMenu from '@src/components/organisms/PagingWidthPostsContainer';
import { useGetMyPostsTempData } from '@src/api/hooks/useGetMyPostsTempData';
import PostSavesMenuBox from '@pages/PostSaves/PostSavesMenuBox';
import { PostSavesLayoutContainer } from '@src/components/layouts/PostSavesLayout/styled';

interface Props {
  category: string;
  page: number;
  categoryHandler: (category: string) => void;
}

const PostSavesLayout = ({ category, page, categoryHandler }: Props) => {
  const { userPostTempData } = useGetMyPostsTempData(category, page - 1, 6);
  return (
    <PostSavesLayoutContainer>
      <PostSavesTitle>임시 저장된 글</PostSavesTitle>
      <PostSavesMenuBox category={category} categoryHandler={categoryHandler} />
      <WidthPostsContainerWithMenu
        postListResponse={userPostTempData}
        currentPage={page}
      />
    </PostSavesLayoutContainer>
  );
};

export default PostSavesLayout;
