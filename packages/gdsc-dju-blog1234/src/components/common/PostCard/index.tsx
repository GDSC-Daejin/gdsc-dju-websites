import React, { memo, useState } from 'react';
import { useCookies } from 'react-cookie';

import Bookmark from '../../../assets/Bookmark';
import MockPostImage from '../../../assets/mocks/MockPostImage.jpg';
import { useSetBookMark } from '../../../hooks/useSetBookMark';
import { DetailPostDataType } from '../../../types/postData';
import { dateFilter } from '../../../Utils/dateFilter';

import { hashTageSpreader } from '../../../Utils/hashTageSpreader';
import { HashTageDark } from '../HashTage';
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
  const removeMarkdownInContent = content
    .replace(/!\[.*\]/gi, '') // ![] 제거
    .replace(/\(.*\)/gi, '') // ( ) 제거
    .replace(/\|/gi, '') // | 제거
    .replace(/#/gi, '') // # 제거
    // .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g, ' ') // # 제거
    .replace(/-/gi, ''); // @ 제거

  return (
    <PostCardWrapper
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <BookmarkWrapper onClick={bookMarkHandler}>
        <Bookmark marked={isMarked} />
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
        <PostContent>{removeMarkdownInContent}</PostContent>
      </PostCardContentWrapper>
    </PostCardWrapper>
  );
};

export default memo(PostCard);
