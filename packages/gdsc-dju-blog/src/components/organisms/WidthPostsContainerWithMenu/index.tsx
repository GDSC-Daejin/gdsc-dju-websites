import React, { Suspense } from 'react';
import WidthPostsContainer from '@src/components/molecules/WidthPostsContainer';
import PageBar from '@src/components/atoms/PageBar';
import { PostListResponse } from '@type/postData';
import {
  CategoryContainer,
  PageBarWrapper,
} from '@src/components/organisms/PostsContainerWithMenu/styled';
import Notice from '@src/components/atoms/Notice';

interface Props {
  currentPage: number;
  postListResponse: PostListResponse | undefined;
}

const WidthPostsContainerWithMenu = ({
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

export default WidthPostsContainerWithMenu;
