import { useGetSearchPosts } from '@src/api/hooks/useGetSearchPost';
import { LayoutContainer } from '@styles/layouts';
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import {
  BlogCardGridLayoutWrapper,
  LayoutInner,
  NoResult,
  PageBarWrapper,
  SearchResultContent,
  SearchResultSubTitle,
  SearchResultTitle,
  SearchResultTitleWrapper,
} from './styled';
import BlogCardSection from '@src/components/molecules/BlogCardSection';
import PageBar from '@src/components/atoms/PageBar';

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { postContent } = useParams();
  const { postListData } = useGetSearchPosts(postContent!);
  const page = searchParams.get('page');
  const handleClick = (page: number) => {
    setSearchParams(`page=${page}`);
  };

  return (
    <LayoutContainer>
      <LayoutInner>
        <SearchResultTitleWrapper>
          <SearchResultTitle>
            {postContent}
            <SearchResultSubTitle>
              {' '}
              를(을) 검색하신 결과입니다.
            </SearchResultSubTitle>
          </SearchResultTitle>
          <SearchResultContent>
            {postListData?.content.length}개의 검색결과가 있습니다
          </SearchResultContent>
        </SearchResultTitleWrapper>
        {postListData && (
          <>
            <BlogCardGridLayoutWrapper>
              {!postListData.empty ? (
                <>
                  <BlogCardSection postData={postListData.content} />
                  <PageBarWrapper>
                    <PageBar
                      page={Number(page)}
                      totalPage={postListData.totalPages}
                      onClick={handleClick}
                    />
                  </PageBarWrapper>
                </>
              ) : (
                <NoResult>
                  <span>검색결과가 없습니다.</span>
                </NoResult>
              )}
            </BlogCardGridLayoutWrapper>
          </>
        )}
      </LayoutInner>
    </LayoutContainer>
  );
};

export default SearchResult;
