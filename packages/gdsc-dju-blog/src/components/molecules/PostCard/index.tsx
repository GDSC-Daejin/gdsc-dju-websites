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
<<<<<<< HEAD:packages/gdsc-dju-blog/src/components/molecules/PostCard/index.tsx
import { hashTageSpreader } from '@utils/hashTageSpreader';
import { DetailPostDataType } from '@type/postData';
import { dateFilter } from '@utils/dateFilter';
import BookmarkIcon from '@assets/icons/BookmarkIcon';
=======

import { DetailPostDataType } from '@type/postData';
import BookmarkIcon from '@assets/icons/BookmarkIcon';
import { dateFilter } from '@utils/dateFilter';
import { hashTageSpreader } from '@utils/hashTageSpreader';
>>>>>>> 5ec2cca35b4258a663fac6f7f27690ad215f7067:packages/gdsc-dju-blog/src/components/common/PostCard/index.tsx

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
        <PostContent>{removeMarkdownInContent}</PostContent>
      </PostCardContentWrapper>
    </PostCardWrapper>
  );
};

export default memo(PostCard);
