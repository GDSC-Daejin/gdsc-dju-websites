import React from 'react';

import WidthPostCard from '@src/components/molecules/WidthPostCard';
import { useGetScrap } from '@src/hooks/useGetScrap';
import { PostData } from '@type/postData';

import { PostCardWrapper, WidthPostsContainerInner } from './styled';

interface Props {
  postData: PostData[];
}

const WidthPostsContainer = ({ postData }: Props) => {
  const { scrapList } = useGetScrap();
  return (
    <WidthPostsContainerInner>
      {postData.map((data) => (
        <PostCardWrapper key={data.postId}>
          <WidthPostCard
            {...data}
            isScrap={
              scrapList
                ? Boolean(scrapList.find((id) => id === data.postId))
                : false
            }
          />
        </PostCardWrapper>
      ))}
    </WidthPostsContainerInner>
  );
};

export default WidthPostsContainer;
