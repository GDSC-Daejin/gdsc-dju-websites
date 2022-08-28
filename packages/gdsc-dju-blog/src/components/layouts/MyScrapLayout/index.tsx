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
  categoryHandler: (category: string) => void;
}

const MyScrapLayout = ({
  page,
  category,
  scrapData,
  categoryHandler,
}: Props) => {
  return (
    <ScrapSectionWrapper>
      <ScrapSectionInner>
        <CategoryMenu type={category} onClick={categoryHandler} />
        {scrapData && (
          <PostSectionWithMenu
            isEmpty={scrapData.empty}
            postData={scrapData.content}
            currentPage={page}
            totalPage={scrapData.totalPages}
          />
        )}
      </ScrapSectionInner>
    </ScrapSectionWrapper>
  );
};

export default MyScrapLayout;