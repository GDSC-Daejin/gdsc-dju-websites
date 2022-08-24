import { useGetSearchPosts } from '@src/api/hooks/useGetSearchPost';
import { LayoutContainer } from '@styles/layouts';
import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import CategoryMenu from '@src/components/atoms/CategoryMenu';

import {
  BlogCardGridLayoutWrapper,
  CategoryMenuWrapper,
  LayoutInner,
  NoResult,
  PageBarWrapper,
  SearchResultContent,
  SearchResultTitle,
  SearchResultTitleWrapper,
} from './styled';
import BlogCardSection from '@src/components/molecules/BlogCardSection';
import PageBar from '@src/components/atoms/PageBar';

const SearchResult = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchContent, categoryName } = useParams();
  const nowPage = Number(searchParams.get('page')) ?? 1;
  const category = categoryName ? categoryName : 'all';

  const { postListData } = useGetSearchPosts({
    SearchContent: searchContent!,
    category,
    page: nowPage,
  });

  const handleClick = (page: number, limit?: number) => {
    const limitPage = limit ?? postListData?.totalPages!;
    if (nowPage > limitPage) navigate(`page=${limitPage}`);
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
                <>
                  <BlogCardSection postData={postListData.content} />
                  <PageBarWrapper>
                    <PageBar
                      page={Number(nowPage)}
                      totalPage={postListData.totalPages - 1}
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
