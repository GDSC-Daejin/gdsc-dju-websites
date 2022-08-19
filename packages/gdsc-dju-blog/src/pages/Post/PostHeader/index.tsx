import React from 'react';

import AuthorBox from '../AuthorBox';
import PostIconBox from '../PostIconBox';
import {
  Category,
  CategoryWrapper,
  PositionCircle,
  PostAuthorWrapper,
  PostHead,
  PostTitle,
  PostTitleWrapper,
} from '../styled';
import { positionColor } from '@src/store/positionColor';
import { DetailPostDataType } from '@type/postData';
import { useGetMyData } from '@src/api/hooks/useGetMyData';

interface Props {
  postData: DetailPostDataType;
  postId: number;
}

const PostHeader = ({ postId, postData }: Props) => {
  const { userData } = useGetMyData();
  const userInfoData = userData?.memberInfo;
  const isUser = userInfoData?.nickname == postData.memberInfo.nickname;
  return (
    <PostHead>
      <CategoryWrapper>
        <PositionCircle color={positionColor(postData.category.categoryName)} />
        <Category>{postData.category.categoryName}</Category>
      </CategoryWrapper>
      <PostTitleWrapper>
        <PostTitle>{postData.title}</PostTitle>
        {userInfoData && <PostIconBox isUser={isUser} postId={postId} />}
      </PostTitleWrapper>
      <PostAuthorWrapper>
        <AuthorBox {...postData.memberInfo} {...postData} />
      </PostAuthorWrapper>
    </PostHead>
  );
};

export default PostHeader;
