import React from 'react';

import { useGetMyData } from '@src/api/hooks/useGetMyData';
import { positionColor } from '@src/utils/positionColor';
import { DetailPostDataType } from '@type/postData';

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

interface Props {
  postData: DetailPostDataType;
  postId: number;
}

const PostHeader = ({ postId, postData }: Props) => {
  const { myData } = useGetMyData();
  const userInfoData = myData?.memberInfo;
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
