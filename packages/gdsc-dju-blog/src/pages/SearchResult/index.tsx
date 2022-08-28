import { useGetSearchPosts } from '@src/api/hooks/useGetSearchPost';
import { LayoutContainer } from '@styles/layouts';
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import {
  BlogCardGridLayoutWrapper,
  LayoutInner,
  PageBarWrapper,
  SearchResultContent,
  SearchResultSubTitle,
  SearchResultTitle,
  SearchResultTitleWrapper,
} from './styled';
import BlogCardSection from '@src/components/molecules/PostsContainer';
import PageBar from '@src/components/atoms/PageBar';

import CategoryMenu from '@src/components/atoms/CategoryMenu';
import Notice from '@src/components/atoms/Notice';

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { postContent } = useParams();
  const { postListData } = useGetSearchPosts(postContent!);
  const page = searchParams.get('page');

  return (
    <LayoutContainer>
      <LayoutInner>
        {postListData && (
          <>
            <SearchResultTitleWrapper>
              <SearchResultTitle>
                {postContent}
                <SearchResultSubTitle>
                  {' '}
                  를(을) 검색하신 결과입니다.
                </SearchResultSubTitle>
              </SearchResultTitle>
              <SearchResultContent>
                {postListData.content.length}개의 검색결과가 있습니다
              </SearchResultContent>
            </SearchResultTitleWrapper>
            <CategoryMenu type={'frontend'} onClick={() => null} />
            <BlogCardGridLayoutWrapper>
              {!postListData.empty ? (
                <BlogCardSection postData={postListData.content} />
              ) : (
                <Notice>검색결과가 없습니다.</Notice>
              )}
              {!postListData.empty && (
                <PageBarWrapper>
                  <PageBar
                    currentPage={Number(page)}
                    totalPage={postListData.totalPages}
                  />
                </PageBarWrapper>
              )}
            </BlogCardGridLayoutWrapper>
          </>
        )}
      </LayoutInner>
    </LayoutContainer>
  );
};

export default SearchResult;
