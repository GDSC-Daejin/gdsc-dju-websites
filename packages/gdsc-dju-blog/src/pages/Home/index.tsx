import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import PlusIcon from '@assets/icons/PlusIcon';
import { useGetMyScrapList } from '@src/api/hooks/useGetMyScrapList';
import { useGetPostsData } from '@src/api/hooks/useGetPostsData';
import CategoryMenu from '@src/components/atoms/CategoryMenu';
import HomePhrase from '@src/components/molecules/HomePhrase';
import BlogCard from '@src/components/molecules/PostCard';
import onDrag from '@src/hooks/onDrag';
import { useScroll } from '@src/hooks/useScroll';
import useWindowSize from '@src/hooks/useWindowSize';

import BlogCardScrollButton from './BlogCardButton';
import {
  BlogCardWrapper,
  ButtonWrapper,
  CardSection,
  CardSectionWrapper,
  HomeContentWrapper,
  HomeLayoutContainer,
  HomePhraseWrapper,
} from './styled';

function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollX = useScroll(scrollRef);
  const { isDrag, onDragStart, onDragEnd, onDragMove } = onDrag(scrollRef);

  const [category, setCategory] = useState('all');
  const changeCategory = (category: string) => {
    setCategory(category);
  };

  const [homeWidth, setHomeWidth] = useState(0);
  const { windowSize } = useWindowSize();

  const { postListData } = useGetPostsData(category, 0, 11);
  const { scrapList } = useGetMyScrapList();

  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    homeRef.current && setHomeWidth(homeRef.current?.offsetWidth);
  }, [windowSize.width]);

  return (
    <>
      <HomeLayoutContainer>
        <HomeContentWrapper ref={homeRef}>
          <HomePhraseWrapper>
            <HomePhrase />
          </HomePhraseWrapper>
          <CategoryMenu type={category} onClick={changeCategory} />
        </HomeContentWrapper>
      </HomeLayoutContainer>
      <CardSectionWrapper>
        <CardSection
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
                  <BlogCardWrapper
                    key={postData.postId}
                    homeWidth={`${homeWidth}px`}
                    windowWidth={`${windowSize.width}px`}
                  >
                    <BlogCard
                      postData={postData}
                      isScrap={Boolean(
                        scrapList?.find((id) => id == postData.postId),
                      )}
                    />
                  </BlogCardWrapper>
                );
              })}
          </Suspense>
          <BlogCardWrapper
            windowWidth={`${windowSize.width}px`}
            homeWidth={`${homeWidth}px`}
            className="viewmore-item"
          >
            <Link to={`/category/${category}`}>
              <button type="button" className="viewmore-item__button">
                <PlusIcon />
              </button>
            </Link>
          </BlogCardWrapper>
        </CardSection>
      </CardSectionWrapper>
      <HomeLayoutContainer>
        <ButtonWrapper>
          <BlogCardScrollButton scrollX={scrollX} scrollRef={scrollRef} />
        </ButtonWrapper>
      </HomeLayoutContainer>
    </>
  );
}

export default Home;
