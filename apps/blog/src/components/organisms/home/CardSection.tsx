import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { useGetMyScrapList } from '@api_hooks/useGetMyScrapList';
import { useGetPostsData } from '@api_hooks/useGetPostsData';
import PlusIcon from '@assets/icons/PlusIcon';
import onDrag from '@hooks/onDrag';
import { useScroll } from '@hooks/useScroll';
import PostCard from '@molecules/PostCard';
import { Position } from '@type/position';

type CardSectionProps = {
  category: Position;
  homeWidth: number;
  windowWidth: number;
  scrollRef: React.RefObject<HTMLDivElement>;
};

const CardSection = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ category, homeWidth, windowWidth, scrollRef }: CardSectionProps, ref) => {
    const { postListData } = useGetPostsData(category, 0, 11);
    const { scrapList } = useGetMyScrapList();

    const scrollX = useScroll(scrollRef);
    const { isDrag, onDragStart, onDragEnd, onDragMove } = onDrag(scrollRef);
    return (
      <CardSectionContainer
        ref={scrollRef}
        isDrag={isDrag}
        onMouseDown={onDragStart}
        onMouseMove={isDrag ? onDragMove : undefined}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        {postListData &&
          postListData.content.map((postData) => {
            return (
              <BlogCardWrapper
                key={postData.postId}
                homeWidth={`${homeWidth}px`}
                windowWidth={`${windowWidth}px`}
              >
                <PostCard
                  postData={postData}
                  isScrap={Boolean(
                    scrapList?.find((id) => id === postData.postId),
                  )}
                />
              </BlogCardWrapper>
            );
          })}
        <BlogCardWrapper
          windowWidth={`${windowWidth}px`}
          homeWidth={`${homeWidth}px`}
          className="viewmore-item"
        >
          <Link to={`/category/${category}`}>
            <button type="button" className="viewmore-item__button">
              <PlusIcon />
            </button>
          </Link>
        </BlogCardWrapper>
      </CardSectionContainer>
    );
  },
);
export const CardSectionContainer = styled(motion.section)<{ isDrag: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  cursor: ${(props) => (props.isDrag ? 'grabbing' : 'grab')};
  div:last-child {
    margin-right: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const BlogCardWrapper = styled(motion.div)<{
  homeWidth?: string;
  windowWidth?: string;
}>`
  width: 248px;
  height: 294px;
  margin: 0 15px;

  ${({ windowWidth, homeWidth }) =>
    homeWidth &&
    windowWidth &&
    css`
      transform: translateX(calc((${windowWidth} - ${homeWidth}) / 2 + 20px));
    `}

  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  &.viewmore-item {
    min-width: 248px;
    height: 294px;
    display: flex;
    justify-content: center;
    align-items: center;
    .viewmore-item__button {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0px 2px 12px rgba(25, 31, 40, 0.08);
      border: 1px solid #ebebeb;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export default CardSection;
