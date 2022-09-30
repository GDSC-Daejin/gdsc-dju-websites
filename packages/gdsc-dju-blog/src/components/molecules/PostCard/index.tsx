import useMark from '@src/hooks/useMark';
import { thumbnailHandler } from '@utils/thumbnailHandler';
import React, { Suspense, memo, useCallback, useState } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useNavigate } from 'react-router';

import {
  BookMarkWrapper,
  PostCardAuthorImage,
  PostCardAuthorWrapper,
  PostCardBottomBox,
  PostCardInner,
  PostCardPostText,
  PostCardSubText,
  PostCardSubTextWrapper,
  PostCardTagWrapper,
  PostCardThumbnail,
  PostCardThumbnailWrapper,
  PostCardTitle,
  PostText,
} from './styled';
import { HashTageLight } from '@src/components/atoms/HashTage';
import { DetailPostDataType } from '@type/postData';
import { dateFilter } from '@utils/dateFilter';
import { hashTageSpreader } from '@utils/hashTageSpreader';
import BookmarkIcon from '@assets/icons/BookmarkIcon';
import { removeMarkdownInContent } from '@utils/removeMarkdownInContent';
import { PostTextVariants } from '@src/components/Animation';

interface Props {
  postData: DetailPostDataType;
}

const PostCard: React.FC<Props> = ({ postData }) => {
  const [IsHovered, setIsHovered] = useState(false);
  const { isMark, debounceSetIsMark } = useMark(postData.postId);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    debounceSetIsMark();
  };

  const navigate = useNavigate();

  const linkToPost = useCallback(() => {
    navigate(`/@${postData.memberInfo.nickname}/${postData.postId}`);
  }, [postData]);

  const removedMarkDownContent = removeMarkdownInContent(postData.content);

  return (
    <LayoutGroup>
      <PostCardInner onClick={linkToPost}>
        {/* 북마크 */}
        <BookMarkWrapper
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            handleClick(e)
          }
        >
          <BookmarkIcon marked={isMark} />
        </BookMarkWrapper>
        {/* 이미지 */}
        <PostCardThumbnailWrapper>
          <picture>
            {postData.imagePath ? (
              <PostCardThumbnail src={postData.imagePath} alt="thumbnail" />
            ) : (
              <>
                <source srcSet={thumbnailHandler(postData.postId).webp} />
                <PostCardThumbnail
                  src={thumbnailHandler(postData.postId).jpg}
                  alt="PostCardThumbnail"
                />
              </>
            )}
          </picture>
        </PostCardThumbnailWrapper>
        {/* 태그 */}
        {postData.postHashTags && (
          <PostCardTagWrapper IsHovered={IsHovered}>
            {hashTageSpreader(postData.postHashTags)
              .filter((data, index) => index < 2)
              .map((data: string, index: number) => (
                <HashTageLight key={index} text={data} />
              ))}
          </PostCardTagWrapper>
        )}
        {/* 하단 PostHeader */}
        <PostCardBottomBox
          isHovered={IsHovered}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <PostCardTitle>{postData.title}</PostCardTitle>
          <AnimatePresence>
            {IsHovered && (
              <PostCardPostText
                key="PostCardPostText"
                variants={PostTextVariants}
                initial={'initial'}
                animate={'visible'}
                exit={'exit'}
              >
                <PostText>{removedMarkDownContent}</PostText>
              </PostCardPostText>
            )}
          </AnimatePresence>
          <PostCardSubTextWrapper>
            {postData.memberInfo && (
              <PostCardAuthorWrapper>
                <PostCardAuthorImage
                  alt="AuthorImage"
                  src={postData.memberInfo.profileImageUrl}
                />

                <PostCardSubText subText={true}>by</PostCardSubText>
                <PostCardSubText bold={true}>
                  {postData.memberInfo.nickname}
                </PostCardSubText>
              </PostCardAuthorWrapper>
            )}
            <PostCardSubText subText={true}>
              {dateFilter(postData.uploadDate)}
            </PostCardSubText>
          </PostCardSubTextWrapper>
        </PostCardBottomBox>
      </PostCardInner>
    </LayoutGroup>
  );
};

export default memo(PostCard);
