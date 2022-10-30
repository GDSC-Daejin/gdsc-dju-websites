import React, { memo, useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import BookmarkIcon from '@assets/icons/BookmarkIcon';
import { HashTageDark } from '@src/components/atoms/HashTage';
import { useSetBookMark } from '@src/hooks/useHandleBookMark';
import { DetailPostDataType } from '@type/postData';
import { dateFilter } from '@utils/dateFilter';
import { debounce } from '@utils/debounce';
import { removeMarkdownInContent } from '@utils/removeMarkdownInContent';
import { thumbnailHandler } from '@utils/thumbnailHandler';

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

interface Props extends DetailPostDataType {
  isScrap: boolean;
}

const WidthPostCard: React.FC<Props> = ({
  isScrap,
  postId,
  postHashTags,
  title,
  imagePath,
  content,
  memberInfo,
  example,
  likes,
  uploadDate,
  modifiedAt,
  category,
}) => {
  const [hover, setHover] = useState(false);
  const [isMarked, setIsMarked] = useState(isScrap);
  const [cookie] = useCookies(['token']);
  const { bookMarkHandler } = useSetBookMark(postId, cookie.token, () =>
    setIsMarked(!isMarked),
  );
  const debounceBookMarkHandler = debounce(bookMarkHandler, 300);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    debounceBookMarkHandler();
  };

  const removedMarkdownContent = removeMarkdownInContent(content);
  const navigate = useNavigate();

  const linkToPost = useCallback(() => {
    navigate(`/@${memberInfo.nickname}/${postId}`);
  }, [postId]);
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
          {imagePath ? (
            <WidthPostCardImage src={imagePath} alt="thumbnail" />
          ) : (
            <>
              <source srcSet={thumbnailHandler(postId).webp} />
              <WidthPostCardImage
                src={thumbnailHandler(postId).jpg}
                alt="PostCardThumbnail"
              />
            </>
          )}
        </picture>
      </WidthPostCardImageWrapper>

      <WidthPostCardContentWrapper hover={hover}>
        <PostDate>{dateFilter(uploadDate)}</PostDate>
        <PostTitle>{title}</PostTitle>
        {postHashTags && (
          <PostHashTageSection>
            {postHashTags.map((data, id) => (
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
