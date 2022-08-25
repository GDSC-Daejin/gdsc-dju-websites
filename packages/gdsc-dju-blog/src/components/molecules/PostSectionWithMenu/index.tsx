import React from 'react';
import PostSectionContainer from '@src/components/molecules/PostSectionContainer';
import { DetailPostDataType } from '@type/postData';
import {
  CategoryContainer,
  PageBarWrapper,
} from '@src/components/molecules/PostSectionWithMenu/styled';
import PageBar from '@src/components/atoms/PageBar';

interface Props {
  postData: DetailPostDataType[];
  type: string;
  currentPage: number;
  totalPage: number;
  pageHandler: (page: number, limit?: number) => void;
}

const PostSectionWithMenu = ({
  postData,
  type,
  currentPage,
  totalPage,
  pageHandler,
}: Props) => {
  return (
    <CategoryContainer>
      <PostSectionContainer postData={postData} />
      <PageBarWrapper>
        <PageBar
          type={type}
          currentPage={currentPage}
          totalPage={totalPage || 0}
          onClick={pageHandler}
        />
      </PageBarWrapper>
    </CategoryContainer>
  );
};

export default PostSectionWithMenu;
