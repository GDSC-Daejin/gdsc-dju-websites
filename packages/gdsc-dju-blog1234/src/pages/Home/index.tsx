import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { useScroll } from 'react-use';
import { useGetMyScrapData } from '../../api/hooks/useGetMyScrapData';
import { useGetMyScrapList } from '../../api/hooks/useGetMyScrapList';
import { useGetPostsData } from '../../api/hooks/useGetPostsData';
import Plus from '../../assets/Plus';
import BlogCard from '../../components/common/BlogCard';
import CategoryMenu from '../../components/common/CategoryMenu';
import HomePhrase from '../../components/common/HomePhrase';
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
  const { x } = useScroll(scrollRef);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [category, setCategory] = useState('all');
  const [homeWidth, setHomeWidth] = useState(0);
  const { postListData } = useGetPostsData(category, 0, 11);
  const { scrapList } = useGetMyScrapList();
  const onDragStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDrag(true);
    if (scrollRef.current?.scrollLeft !== undefined)
      setStartX(e.pageX + scrollRef.current.scrollLeft);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };
  const onDragMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDrag) {
      if (scrollRef.current !== null) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        if (scrollRef.current?.scrollLeft !== undefined)
          scrollRef.current.scrollLeft = startX - e.pageX;

        if (scrollLeft === 0) {
          setStartX(e.pageX);
        } else if (scrollWidth <= clientWidth + scrollLeft) {
          setStartX(e.pageX + scrollLeft);
        }
      }
    }
  };
  const changeCategory = (category: string) => {
    setCategory(category);
  };
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    homeRef.current && setHomeWidth(homeRef.current?.offsetWidth);
  }, [homeRef]);

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
          isDrag={isDrag}
          ref={scrollRef}
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
                >
                  <BlogCard
                    postData={postData}
                    isScrap={!!scrapList?.find((id) => id == postData.postId)}
                  />
                </BlogCardWrapper>
              );
            })}
          <BlogCardWrapper
            homeWidth={`${homeWidth}px`}
            className="viewmore-item"
          >
            <Link to={`/category/${category}`}>
              <button type="button" className="viewmore-item__button">
                <Plus />
              </button>
            </Link>
          </BlogCardWrapper>
        </CardSection>
      </CardSectionWrapper>
      <HomeLayoutContainer>
        <ButtonWrapper>
          <BlogCardScrollButton scrollX={x} scrollRef={scrollRef} />
        </ButtonWrapper>
      </HomeLayoutContainer>
    </>
  );
}

export default Home;
