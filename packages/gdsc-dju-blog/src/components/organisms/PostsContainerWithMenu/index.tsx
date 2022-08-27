import React from 'react';
import PostsContainer from '@src/components/molecules/PostsContainer';
import { DetailPostDataType } from '@type/postData';
import { CategoryContainer, PageBarWrapper } from './styled';
import PageBar from '@src/components/atoms/PageBar';

interface Props {
  postData: DetailPostDataType[];
  type: string;
  currentPage: number;
  totalPage: number;
  pageHandler: (page: number, limit?: number) => void;
}

const PostsContainerWithMenu = ({
  postData,
  type,
  currentPage,
  totalPage,
  pageHandler,
}: Props) => {
  return (
    <CategoryContainer>
      <PostsContainer postData={postData} />
      <PageBarWrapper>
        <PageBar
          currentPage={currentPage}
          totalPage={totalPage || 0}
          onClick={pageHandler}
        />
      </PageBarWrapper>
    </CategoryContainer>
  );
};

export default PostsContainerWithMenu;
