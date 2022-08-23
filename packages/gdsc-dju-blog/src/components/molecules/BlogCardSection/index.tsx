import React from 'react';

import BlogCard from '../BlogCard';

import { BlogCardGridLayoutStyle, BlogCardWrapper } from './styled';
import { DetailPostDataType } from '@type/postData';
import { useGetScrap } from '@src/hooks/useGetScrap';

interface Props {
  postData: DetailPostDataType[];
}

const BlogCardSection = ({ postData }: Props) => {
  const { scrapList } = useGetScrap();

  return (
    <BlogCardGridLayoutStyle>
      {postData.map((data) => (
        <BlogCardWrapper key={data.postId}>
          <BlogCard
            postData={data}
            isScrap={!!scrapList?.find((id) => id == data.postId)}
          />
        </BlogCardWrapper>
      ))}
    </BlogCardGridLayoutStyle>
  );
};

export default BlogCardSection;
