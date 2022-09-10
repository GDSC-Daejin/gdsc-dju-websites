import { useGetSearchPosts } from '@src/api/hooks/useGetSearchPost';
import { LayoutContainer } from '@styles/layouts';
import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import {
  BlogCardGridLayoutWrapper,
  CategoryMenuWrapper,
  LayoutInner,
  PageBarWrapper,
  SearchResultContent,
  SearchResultTitle,
  SearchResultTitleWrapper,
} from './styled';
import PostsContainer from '@src/components/molecules/PostsContainer';
import PageBar from '@src/components/atoms/PageBar';

import CategoryMenu from '@src/components/atoms/CategoryMenu';
import Notice from '@src/components/atoms/Notice';

const SearchResult = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchContent, categoryName } = useParams();
  const currentPage = Number(searchParams.get('page')) ?? 1;
  const category = categoryName ? categoryName : 'all';

  const { postListData } = useGetSearchPosts({
    searchContent: searchContent!,
    category,
    page: currentPage,
  });

  const handleClick = (page: number, limit?: number) => {
    const limitPage = limit ?? postListData?.totalPages!;
    if (currentPage > limitPage) navigate(`page=${limitPage}`);
    else setSearchParams(`page=${page}`);
  };

  const categoryHandler = (category: string) =>
    navigate({
      pathname: `/search/${searchContent}/${category}?page=1`,
    });

  return (
    <LayoutContainer>
      <LayoutInner>
        <SearchResultTitleWrapper>
          <SearchResultTitle>
            {searchContent} 를(을) 검색하신 결과입니다.
          </SearchResultTitle>
          <SearchResultContent>
            {postListData?.content.length}개의 검색결과가 있습니다
          </SearchResultContent>
        </SearchResultTitleWrapper>
        <CategoryMenuWrapper>
          <CategoryMenu type={category} onClick={categoryHandler} />
        </CategoryMenuWrapper>
        {postListData && (
          <>
            <BlogCardGridLayoutWrapper>
              {!postListData.empty ? (
                <PostsContainer postData={postListData.content} />
              ) : (
                <Notice>검색결과가 없습니다.</Notice>
              )}
              {!postListData.empty && (
                <PageBarWrapper>
                  <PageBar
                    currentPage={Number(currentPage)}
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
