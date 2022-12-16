import React from 'react';

import PostSavesMenuBox from '@pages/PostSaves/PostSavesMenuBox';
import { PostSavesTitle } from '@pages/PostSaves/styled';
import { useGetMyPostsTempData } from '@src/api/hooks/useGetMyPostsTempData';
import { PostSavesLayoutContainer } from '@src/components/layouts/PostSavesLayout/styled';
import PagingWidthPostsContainer from '@src/components/organisms/PagingWidthPostsContainer';
import { Position } from '@type/position';

interface Props {
  category: string;
  page: number;
  categoryHandler: (category: string) => void;
}

const PostSavesLayout = ({ category, page, categoryHandler }: Props) => {
  const { userPostTempData } = useGetMyPostsTempData(
    category as Position,
    page - 1,
    6,
  );
  return (
    <PostSavesLayoutContainer>
      <PostSavesTitle>임시 저장된 글</PostSavesTitle>
      <PostSavesMenuBox category={category} categoryHandler={categoryHandler} />
      <PagingWidthPostsContainer
        postListResponse={userPostTempData}
        currentPage={page}
      />
    </PostSavesLayoutContainer>
  );
};

export default PostSavesLayout;
