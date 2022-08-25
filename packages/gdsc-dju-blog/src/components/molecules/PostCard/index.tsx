import React, { memo, useState } from 'react';
import { useCookies } from 'react-cookie';
import MockPostImage from '../../../assets/mocks/MockPostImage.jpg';

import {
  BookmarkWrapper,
  PostCardContentWrapper,
  PostCardImage,
  PostCardImageWrapper,
  PostCardWrapper,
  PostContent,
  PostDate,
  PostHashTageSection,
  PostTitle,
} from './styled';
import { HashTageDark } from '@src/components/atoms/HashTage';
import { useSetBookMark } from '@src/hooks/useSetBookMark';
import { hashTageSpreader } from '@utils/hashTageSpreader';
import { DetailPostDataType } from '@type/postData';
import { dateFilter } from '@utils/dateFilter';
import BookmarkIcon from '@assets/icons/BookmarkIcon';
import { removeMarkdownInContent } from '@utils/removeMarkdownInContent';

interface Props extends DetailPostDataType {
  isScrap: boolean;
}

const PostCard: React.FC<Props> = ({
  title,
  category,
  content,
  postId,
  postHashTags,
  memberInfo,
  imagePath,
  isScrap,
}) => {
  const [hover, setHover] = useState(false);
  const [isMarked, setIsMarked] = useState(isScrap);
  const [cookie] = useCookies(['token']);
  const { bookMarkHandler } = useSetBookMark(postId, cookie.token, () =>
    setIsMarked(!isMarked),
  );
  const removedMarkdownContent = removeMarkdownInContent(content);

  return (
    <PostCardWrapper
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <BookmarkWrapper onClick={bookMarkHandler}>
        <BookmarkIcon marked={isMarked} />
      </BookmarkWrapper>
      <PostCardImageWrapper>
        <PostCardImage src={imagePath ?? MockPostImage} />
      </PostCardImageWrapper>
      <PostCardContentWrapper hover={hover}>
        <PostDate>{dateFilter(category.uploadDate)}</PostDate>
        <PostTitle>{title}</PostTitle>
        {postHashTags && (
          <PostHashTageSection>
            {hashTageSpreader(postHashTags).map((data, id) => (
              <HashTageDark text={data} key={id} />
            ))}
          </PostHashTageSection>
        )}
        <PostContent>{removedMarkdownContent}</PostContent>
      </PostCardContentWrapper>
    </PostCardWrapper>
  );
};

export default memo(PostCard);
