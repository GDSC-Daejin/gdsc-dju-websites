import React from 'react';
import WidthPostCard from '@src/components/molecules/WidthPostCard';
import { PostCardWrapper, WidthPostsContainerInner } from './styled';
import { DetailPostDataType } from '@type/postData';

interface Props {
  postData: DetailPostDataType[];
}

const WidthPostsContainer = ({ postData }: Props) => {
  return (
    <WidthPostsContainerInner>
      {postData.map((data) => (
        <PostCardWrapper key={data.postId}>
          <WidthPostCard postData={data} />
        </PostCardWrapper>
      ))}
    </WidthPostsContainerInner>
  );
};

export default WidthPostsContainer;
