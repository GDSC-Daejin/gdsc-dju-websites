import React from 'react';
import {
  ScrapSectionInner,
  ScrapSectionWrapper,
} from '@pages/MyBlog/MyScrap/styled';
import CategoryMenu from '@src/components/atoms/CategoryMenu';
import PostSectionWithMenu from '@src/components/organisms/PostsContainerWithMenu';
import { PostListResponse } from '@type/postData';

interface Props {
  scrapData: PostListResponse | undefined;
  category: string;
  page: number;
  pageHandler: (page: number, limit?: number) => void;
  categoryHandler: (category: string) => void;
}

const MyScrapLayout = ({
  page,
  category,
  scrapData,
  categoryHandler,
  pageHandler,
}: Props) => {
  return (
    <ScrapSectionWrapper>
      <ScrapSectionInner>
        <CategoryMenu type={category} onClick={categoryHandler} />
        {scrapData && (
          <PostSectionWithMenu
            postData={scrapData.content}
            type={category}
            currentPage={page}
            totalPage={scrapData.totalPages}
            pageHandler={pageHandler}
          />
        )}
      </ScrapSectionInner>
    </ScrapSectionWrapper>
  );
};

export default MyScrapLayout;
