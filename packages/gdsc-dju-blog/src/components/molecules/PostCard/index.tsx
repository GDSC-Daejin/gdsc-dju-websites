import React, { memo, useCallback, useState } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useCookies } from 'react-cookie';
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
import { useSetBookMark } from '@src/hooks/useSetBookMark';
import { DetailPostDataType } from '@type/postData';
import { dateFilter } from '@utils/dateFilter';
import { hashTageSpreader } from '@utils/hashTageSpreader';
import BookmarkIcon from '@assets/icons/BookmarkIcon';
import { removeMarkdownInContent } from '@utils/removeMarkdownInContent';
import { PostTextVariants } from '@src/components/Animation';

interface Props {
  postData: DetailPostDataType;
  isScrap: boolean;
}

const PostCard: React.FC<Props> = ({ postData, isScrap }) => {
  const [IsHovered, setIsHovered] = useState(false);
  const [isMarked, setIsMarked] = useState(isScrap);
  const [cookie] = useCookies(['token']);
  const { bookMarkHandler } = useSetBookMark(
    postData.postId,
    cookie.token,
    () => setIsMarked(!isMarked),
  );

  const navigate = useNavigate();

  const linkToPost = useCallback(() => {
    navigate(`/${postData.memberInfo.nickname}/${postData.postId}`);
  }, [postData]);

  const removedMarkDownContent = removeMarkdownInContent(postData.content);

  return (
    <LayoutGroup>
      <PostCardInner onClick={linkToPost}>
        {/* 북마크 */}
        <BookMarkWrapper onClick={(e) => bookMarkHandler(e)}>
          <BookmarkIcon marked={isMarked} />
        </BookMarkWrapper>
        {/* 이미지 */}
        <PostCardThumbnailWrapper>
          <PostCardThumbnail
            src={postData.imagePath ?? '../../../assets/mocks/unknown.png'}
            alt="PostCardThumbnail"
          />
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
            {postData.memberInfo &&
              postData.memberInfo.nickname &&
              postData.memberInfo.profileImageUrl && (
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
              {dateFilter(postData.category.uploadDate)}
            </PostCardSubText>
          </PostCardSubTextWrapper>
        </PostCardBottomBox>
      </PostCardInner>
    </LayoutGroup>
  );
};

export default memo(PostCard);
