import React from 'react';

import BlogCard from '../PostCard';

import { BlogCardSection, BlogCardWrapper } from './styled';
import { DetailPostDataType } from '@type/postData';

interface Props {
  postData: DetailPostDataType[];
}

const PostSectionContainer = ({ postData }: Props) => {
  return (
    <BlogCardSection>
      {postData.map((data) => (
        <BlogCardWrapper key={data.postId}>
          <BlogCard postData={data} />
        </BlogCardWrapper>
      ))}
    </BlogCardSection>
  );
};

export default PostSectionContainer;
