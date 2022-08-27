import React from 'react';
import PostCard from '@src/components/molecules/PostCard';
import { PostCardWrapper } from './styled';
import { DetailPostDataType } from '@type/postData';
import { useGetScrap } from '@src/hooks/useGetScrap';

interface Props {
  postData: DetailPostDataType[];
}

const WidthPostsContainer = ({ postData }: Props) => {
  const { scrapList } = useGetScrap();
  return (
    <div>
      {postData.map((data) => (
        <PostCardWrapper key={data.postId}>
          <PostCard
            postData={data}
            isScrap={
              scrapList ? !!scrapList.find((id) => id == data.postId) : false
            }
          />
        </PostCardWrapper>
      ))}
    </div>
  );
};

export default WidthPostsContainer;
