import React from 'react';
import {
  PostCategoryCircle,
  PostCategoryCircleWrapper,
  PostCategoryMenuWrapper,
  PostCategoryText,
  PostCategoryTextWrapper,
} from './styled';
import { PostCategoryMenuData } from '../../../pages/PostWrite';
import { PostCategoryAnimation, PostCircleAnimation } from '../Animation';
import { positionColor } from '../../../store/positionColor';

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
