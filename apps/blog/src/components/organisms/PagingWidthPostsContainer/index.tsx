import React, { Suspense } from 'react';

import Notice from '@src/components/atoms/Notice';
import PageBar from '@src/components/atoms/PageBar';
import WidthPostsContainer from '@src/components/molecules/WidthPostsContainer';
import {
  CategoryContainer,
  PageBarWrapper,
} from '@src/components/organisms/PagingPostsContainer/styled';
import { PostListResponse } from '@type/postData';

interface Props {
  currentPage: number;
  postListResponse: PostListResponse | undefined;
}

const PagingWidthPostsContainer = ({
  postListResponse,
  currentPage,
}: Props) => {
  return (
    <Suspense fallback={<div>postList isLoading</div>}>
      {postListResponse && (
        <CategoryContainer>
          {postListResponse.empty ? (
            <Notice>작성된 글이 없어요!</Notice>
          ) : (
            <>
              <WidthPostsContainer postData={postListResponse.content} />
              <PageBarWrapper>
                <PageBar
                  currentPage={currentPage}
                  totalPage={postListResponse.totalPages || 0}
                />
              </PageBarWrapper>
            </>
          )}
        </CategoryContainer>
      )}
    </Suspense>
  );
};

export default PagingWidthPostsContainer;
