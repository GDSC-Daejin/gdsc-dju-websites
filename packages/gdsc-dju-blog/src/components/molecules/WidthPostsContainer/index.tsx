import React from 'react';

import WidthPostCard from '@src/components/molecules/WidthPostCard';
import { useGetScrap } from '@src/hooks/useGetScrap';
import { DetailPostDataType } from '@type/postData';

import { PostCardWrapper, WidthPostsContainerInner } from './styled';

interface Props {
  postData: DetailPostDataType[];
}

const WidthPostsContainer = ({ postData }: Props) => {
  const { scrapList } = useGetScrap();
  return (
    <WidthPostsContainerInner>
      {postData.map((data) => (
        <PostCardWrapper key={data.postId}>
          <WidthPostCard
            postData={data}
            isScrap={
              scrapList ? !!scrapList.find((id) => id == data.postId) : false
            }
          />
        </PostCardWrapper>
      ))}
    </WidthPostsContainerInner>
  );
};

export default WidthPostsContainer;
