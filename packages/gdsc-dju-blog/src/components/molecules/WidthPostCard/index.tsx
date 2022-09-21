import BookmarkIcon from '@assets/icons/BookmarkIcon';
import { HashTageDark } from '@src/components/atoms/HashTage';
import { useSetBookMark } from '@src/hooks/useHandleBookMark';
import { DetailPostDataType } from '@type/postData';
import { dateFilter } from '@utils/dateFilter';
import { debounce } from '@utils/debounce';
import { hashTageSpreader } from '@utils/hashTageSpreader';
import { removeMarkdownInContent } from '@utils/removeMarkdownInContent';
import { thumbnailHandler } from '@utils/thumbnailHandler';
import React, { Suspense, memo, useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import {
  BookmarkWrapper,
  PostContent,
  PostDate,
  PostHashTageSection,
  PostTitle,
  WidthPostCardContentWrapper,
  WidthPostCardImage,
  WidthPostCardImageWrapper,
  WidthPostCardWrapper,
} from './styled';

interface Props {
  postData: DetailPostDataType;
  isScrap: boolean;
}

const WidthPostCard: React.FC<Props> = ({ postData, isScrap }) => {
  const [hover, setHover] = useState(false);
  const [isMarked, setIsMarked] = useState(isScrap);
  const [cookie] = useCookies(['token']);
  const { bookMarkHandler } = useSetBookMark(
    postData.postId,
    cookie.token,
    () => setIsMarked(!isMarked),
  );
  const debounceBookMarkHandler = debounce(bookMarkHandler, 300);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    debounceBookMarkHandler();
  };

  const removedMarkdownContent = removeMarkdownInContent(postData.content);
  const navigate = useNavigate();

  const linkToPost = useCallback(() => {
    navigate(`/${postData.memberInfo.nickname}/${postData.postId}`);
  }, [postData]);
  return (
    <WidthPostCardWrapper
      onClick={linkToPost}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <BookmarkWrapper
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          handleClick(e)
        }
      >
        <BookmarkIcon marked={isMarked} />
      </BookmarkWrapper>

      <WidthPostCardImageWrapper>
        <picture>
          <Suspense fallback={<div>loading...</div>}>
            {postData.imagePath ? (
              <WidthPostCardImage src={postData.imagePath} alt="thumbnail" />
            ) : (
              <>
                <source srcSet={thumbnailHandler(postData.postId).jpg} />
                <WidthPostCardImage
                  src={thumbnailHandler(postData.postId).jpg}
                  alt="PostCardThumbnail"
                />
              </>
            )}
          </Suspense>
        </picture>
      </WidthPostCardImageWrapper>

      <WidthPostCardContentWrapper hover={hover}>
        <PostDate>{dateFilter(postData.uploadDate)}</PostDate>
        <PostTitle>{postData.title}</PostTitle>
        {postData.postHashTags && (
          <PostHashTageSection>
            {hashTageSpreader(postData.postHashTags).map((data, id) => (
              <HashTageDark text={data} key={id} />
            ))}
          </PostHashTageSection>
        )}
        <PostContent>{removedMarkdownContent}</PostContent>
      </WidthPostCardContentWrapper>
    </WidthPostCardWrapper>
  );
};

export default memo(WidthPostCard);
