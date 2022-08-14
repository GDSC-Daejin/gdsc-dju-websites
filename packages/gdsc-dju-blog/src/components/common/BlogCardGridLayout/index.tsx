import React from 'react';
import { useGetScrap } from '../../../hooks/useGetScrap';
import { DetailPostDataType } from '../../../types/postData';
import BlogCard from '../BlogCard/index';
import { BlogCardGridLayoutStyle, BlogCardWrapper } from './styled';

interface Props {
  postData: DetailPostDataType[];
}

const BlogCardGridLayout = ({ postData }: Props) => {
  const { scrapList } = useGetScrap();

  return (
    <BlogCardGridLayoutStyle>
      {scrapList &&
        postData.map((data) => (
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

export default BlogCardGridLayout;
