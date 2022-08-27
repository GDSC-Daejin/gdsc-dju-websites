import React, { memo, useCallback, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

interface Props {
  postData: DetailPostDataType;
  isScrap: boolean;
}

const PostCard: React.FC<Props> = ({ postData, isScrap }) => {
  const [hover, setHover] = useState(false);
  const [isMarked, setIsMarked] = useState(isScrap);
  const [cookie] = useCookies(['token']);
  const { bookMarkHandler } = useSetBookMark(
    postData.postId,
    cookie.token,
    () => setIsMarked(!isMarked),
  );
  const removedMarkdownContent = removeMarkdownInContent(postData.content);
  const navigate = useNavigate();

  const linkToPost = useCallback(() => {
    navigate(`/${postData.memberInfo.nickname}/${postData.postId}`);
  }, [postData]);
  return (
    <PostCardWrapper
      onClick={linkToPost}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <BookmarkWrapper onClick={bookMarkHandler}>
        <BookmarkIcon marked={isMarked} />
      </BookmarkWrapper>
      <PostCardImageWrapper>
        <PostCardImage src={postData.imagePath ?? MockPostImage} />
      </PostCardImageWrapper>
      <PostCardContentWrapper hover={hover}>
        <PostDate>{dateFilter(postData.category.uploadDate)}</PostDate>
        <PostTitle>{postData.title}</PostTitle>
        {postData.postHashTags && (
          <PostHashTageSection>
            {hashTageSpreader(postData.postHashTags).map((data, id) => (
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
