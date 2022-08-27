import React from 'react';
import WidthPostsContainer from '@src/components/molecules/WidthPostsContainer';
import PageBar from '@src/components/atoms/PageBar';
import { DetailPostDataType } from '@type/postData';
import {
  CategoryContainer,
  PageBarWrapper,
} from '@src/components/organisms/PostsContainerWithMenu/styled';

interface Props {
  postData: DetailPostDataType[];
  currentPage: number;
  totalPage: number;
  pageHandler: (page: number, limit?: number) => void;
}

const WidthPostsContainerWithMenu = ({
  postData,
  currentPage,
  totalPage,
  pageHandler,
}: Props) => {
  return (
    <CategoryContainer>
      <WidthPostsContainer postData={postData} />
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

export default WidthPostsContainerWithMenu;
