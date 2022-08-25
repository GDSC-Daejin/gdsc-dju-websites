import React, { useState } from 'react';
import CategoryMenu from '@src/components/atoms/CategoryMenu';
import PostSectionContainer from '@src/components/molecules/PostSectionContainer';
import { DetailPostDataType } from '@type/postData';
import { Position } from '@type/position';

interface Props {
  postData: DetailPostDataType[];
  type: Position;
  setCategory: (type: string) => void;
}

const PostSectionWithCategory = ({ postData, type, setCategory }: Props) => {
  return (
    <div>
      <CategoryMenu type={type} onClick={setCategory} />
      <PostSectionContainer postData={postData} />
    </div>
  );
};

export default PostSectionWithCategory;
