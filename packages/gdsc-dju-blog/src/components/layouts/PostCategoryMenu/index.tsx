import React from 'react';

import { positionColor } from '../../../utils/positionColor';
import { PostCategoryAnimation, PostCircleAnimation } from '../../Animation';

import {
  PostCategoryCircle,
  PostCategoryCircleWrapper,
  PostCategoryMenuWrapper,
  PostCategoryText,
  PostCategoryTextWrapper,
} from './styled';
export const PostCategoryMenuData = [
  {
    title: 'Frontend',
  },
  {
    title: 'Backend',
  },
  {
    title: 'Android',
  },
  {
    title: 'Design',
  },
  {
    title: 'Common',
  },
];
const PostCategoryMenu: React.FC<{
  onClick: (category: string) => void;
  category?: string;
}> = ({ onClick, category }) => {
  return (
    <>
      <PostCategoryMenuWrapper variants={PostCategoryAnimation}>
        {PostCategoryMenuData.map((data, id) => (
          <PostCategoryTextWrapper
            key={id}
            onClick={() => onClick(data.title)}
            className={'category'}
            isActive={data.title === category}
          >
            <PostCategoryCircleWrapper
              variants={PostCircleAnimation}
              animate={data.title === category ? 'isActive' : 'unActive'}
            >
              <PostCategoryCircle color={positionColor(data.title)} />
            </PostCategoryCircleWrapper>
            <PostCategoryText>{data.title}</PostCategoryText>
          </PostCategoryTextWrapper>
        ))}
      </PostCategoryMenuWrapper>
    </>
  );
};
export default PostCategoryMenu;
