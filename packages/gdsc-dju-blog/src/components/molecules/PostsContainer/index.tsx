import React from 'react';

import { useGetScrap } from '@src/hooks/useGetScrap';
import { DetailPostDataType } from '@type/postData';

import BlogCard from '../PostCard';

import { BlogCardSection, BlogCardWrapper } from './styled';

interface Props {
  postData: DetailPostDataType[];
}

const PostSectionContainer = ({ postData }: Props) => {
  const { scrapList } = useGetScrap();
  return (
    <BlogCardSection>
      {postData.map((data) => (
        <BlogCardWrapper key={data.postId}>
          <BlogCard
            postData={data}
            isScrap={Boolean(scrapList?.find((id) => id == data.postId))}
          />
        </BlogCardWrapper>
      ))}
    </BlogCardSection>
  );
};

export default PostSectionContainer;
