import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { useGetSearchPosts } from '@src/api/hooks/useGetSearchPost';
import CategoryMenu from '@src/components/atoms/CategoryMenu';
import PagingPostsContainer from '@src/components/organisms/PagingPostsContainer';
import { LayoutContainer } from '@styles/layouts';

import {
  LayoutInner,
  PostLayoutWrapper,
  PostSectionWrapper,
  SearchResultContent,
  SearchResultTitle,
  SearchResultTitleWrapper,
} from './styled';

const SearchResult = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchContent, categoryName } = useParams();
  const currentPage = Number(searchParams.get('page')) ?? 1;
  const category = categoryName ? categoryName : 'all';
  const { postListData } = useGetSearchPosts({
    searchContent: searchContent!,
    category,
    page: currentPage - 1,
  });

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
        <PostLayoutWrapper>
          <CategoryMenu type={category} onClick={categoryHandler} />
          <PostSectionWrapper>
            {postListData && (
              <PagingPostsContainer
                postData={postListData.content}
                totalPage={postListData.totalPages || 0}
                currentPage={Number(currentPage)}
                isEmpty={postListData.empty}
              />
            )}
          </PostSectionWrapper>
        </PostLayoutWrapper>
      </LayoutInner>
    </LayoutContainer>
  );
};

export default SearchResult;
