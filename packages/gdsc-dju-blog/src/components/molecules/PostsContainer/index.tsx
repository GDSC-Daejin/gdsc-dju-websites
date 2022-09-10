import React from 'react';

import BlogCard from '../PostCard';

import { BlogCardSection, BlogCardWrapper } from './styled';
import { DetailPostDataType } from '@type/postData';
import { useGetScrap } from '@src/hooks/useGetScrap';

interface Props {
  postData: DetailPostDataType[];
}

const PostSectionContainer = ({ postData }: Props) => {
  const { scrapList } = useGetScrap();
  return (
    <BlogCardSection>
      {scrapList &&
        postData.map((data) => (
          <BlogCardWrapper key={data.postId}>
            <BlogCard
              postData={data}
              isScrap={!!scrapList?.find((id) => id == data.postId)}
            />
          </BlogCardWrapper>
        ))}
    </BlogCardSection>
  );
};

export default PostSectionContainer;
