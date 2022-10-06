import React, { Suspense } from 'react';

import Notice from '@src/components/atoms/Notice';
import PageBar from '@src/components/atoms/PageBar';
import PostsContainer from '@src/components/molecules/PostsContainer';
import { DetailPostDataType } from '@type/postData';

import { CategoryContainer, PageBarWrapper } from './styled';

interface Props {
  postData: DetailPostDataType[];
  currentPage: number;
  totalPage: number;
  isEmpty: boolean;
}

const PagingPostsContainer = ({
  postData,
  currentPage,
  totalPage,
  isEmpty,
}: Props) => {
  return (
    <Suspense fallback={<div>isLoading</div>}>
      <CategoryContainer>
        {isEmpty ? (
          <Notice>작성된 글이 없어요!</Notice>
        ) : (
          <>
            <PostsContainer postData={postData} />
            <PageBarWrapper>
              <PageBar currentPage={currentPage} totalPage={totalPage || 0} />
            </PageBarWrapper>
          </>
        )}
      </CategoryContainer>
    </Suspense>
  );
};

export default PagingPostsContainer;
