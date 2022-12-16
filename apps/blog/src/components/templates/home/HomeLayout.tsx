import React, { Suspense, useEffect, useRef, useState } from 'react';

import CategoryMenu from '@atoms/CategoryMenu';
import useWindowSize from '@hooks/useWindowSize';
import HomePhrase from '@molecules/home/HomePhrase';
import CardSection from '@organisms/home/CardSection';
import BlogCardScrollButton from '@pages/Home/BlogCardButton';
import { Position } from '@type/position';

import * as S from './styled';

const HomeLayout = () => {
  const [category, setCategory] = useState<Position>('all');
  const [homeWidth, setHomeWidth] = useState(0);
  const { windowSize } = useWindowSize();
  const homeRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
        <Suspense fallback={<div>카드 로딩</div>}>
          <CardSection
            ref={scrollRef}
            category={category}
            homeWidth={homeWidth}
            windowWidth={windowSize.width}
            scrollRef={scrollRef}
          />
        </Suspense>
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
