import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import PlusIcon from '@assets/icons/PlusIcon';
import CategoryMenu from '@atoms/CategoryMenu';
import onDrag from '@hooks/onDrag';
import { useScroll } from '@hooks/useScroll';
import useWindowSize from '@hooks/useWindowSize';
import HomePhrase from '@molecules/home/HomePhrase';
import PostCard from '@molecules/PostCard';
import BlogCardScrollButton from '@pages/Home/BlogCardButton';
import { Position } from '@type/position';
import { PostListResponse, ScrapList } from '@type/postData';

import * as S from './styled';

type Props = {
  category: Position;
  setCategory: (category: Position) => void;
  postListData: PostListResponse | undefined;
  scrapList: ScrapList | undefined;
};

const HomeLayout = ({
  category,
  setCategory,
  postListData,
  scrapList,
}: Props) => {
  const [homeWidth, setHomeWidth] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollX = useScroll(scrollRef);
  const { isDrag, onDragStart, onDragEnd, onDragMove } = onDrag(scrollRef);
  const homeRef = useRef<HTMLDivElement>(null);
  const { windowSize } = useWindowSize();

  useEffect(() => {
    homeRef.current && setHomeWidth(homeRef.current?.clientWidth);
  }, [windowSize.width]);
  return (
    <>
      <S.HomeLayoutContainer>
        <S.HomeContentWrapper ref={homeRef}>
          <S.HomePhraseWrapper>
            <HomePhrase />
          </S.HomePhraseWrapper>
          <CategoryMenu type={category} onClick={setCategory} />
        </S.HomeContentWrapper>
      </S.HomeLayoutContainer>
      <S.CardSectionWrapper>
        <S.CardSection
          ref={scrollRef}
          isDrag={isDrag}
          onMouseDown={onDragStart}
          onMouseMove={isDrag ? onDragMove : undefined}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
        >
          <Suspense fallback={<div>카드 로딩</div>}>
            {postListData &&
              postListData.content.map((postData) => {
                return (
                  <S.BlogCardWrapper
                    key={postData.postId}
                    homeWidth={`${homeWidth}px`}
                    windowWidth={`${windowSize.width}px`}
                  >
                    <PostCard
                      postData={postData}
                      isScrap={Boolean(
                        scrapList?.find((id) => id === postData.postId),
                      )}
                    />
                  </S.BlogCardWrapper>
                );
              })}
          </Suspense>
          <S.BlogCardWrapper
            windowWidth={`${windowSize.width}px`}
            homeWidth={`${homeWidth}px`}
            className="viewmore-item"
          >
            <Link to={`/category/${category}`}>
              <button type="button" className="viewmore-item__button">
                <PlusIcon />
              </button>
            </Link>
          </S.BlogCardWrapper>
        </S.CardSection>
      </S.CardSectionWrapper>
      <S.HomeLayoutContainer>
        <S.ButtonWrapper>
          <BlogCardScrollButton scrollX={scrollX} scrollRef={scrollRef} />
        </S.ButtonWrapper>
      </S.HomeLayoutContainer>
    </>
  );
};

export default HomeLayout;
