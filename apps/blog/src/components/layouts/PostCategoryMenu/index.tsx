import React from 'react';

import { Position } from '@type/position';
import { positionColor } from '@utils/positionColor';

import { PostCategoryAnimation, PostCircleAnimation } from '../../Animation';

import {
  PostCategoryCircle,
  PostCategoryCircleWrapper,
  PostCategoryMenuWrapper,
  PostCategoryText,
  PostCategoryTextWrapper,
} from './styled';

const PostCategoryMenu: React.FC<{
  onClick: (category: string) => void;
  category?: string;
}> = ({ onClick, category: defaultCategory }) => {
  const category = ['Frontend', 'Backend', 'Client', 'Design', 'Ml'];
  return (
    <PostCategoryMenuWrapper variants={PostCategoryAnimation}>
      {category.map((data, id) => {
        const categoryValue = category[id].toLowerCase() as Position;
        return (
          <PostCategoryTextWrapper
            key={id}
            onClick={() => onClick(categoryValue)}
            className={'category'}
            isActive={categoryValue === defaultCategory}
          >
            <PostCategoryCircleWrapper
              variants={PostCircleAnimation}
              animate={
                categoryValue === defaultCategory ? 'isActive' : 'unActive'
              }
            >
              <PostCategoryCircle color={positionColor(categoryValue)} />
            </PostCategoryCircleWrapper>
            <PostCategoryText>{categoryValue}</PostCategoryText>
          </PostCategoryTextWrapper>
        );
      })}
    </PostCategoryMenuWrapper>
  );
};
export default PostCategoryMenu;
