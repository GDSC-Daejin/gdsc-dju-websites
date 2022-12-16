import React, { memo, useEffect } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import { useGetPostsData } from '@src/api/hooks/useGetPostsData';
import CategoryMenu from '@src/components/atoms/CategoryMenu';
import PagingPostsContainer from '@src/components/organisms/PagingPostsContainer';
import { LayoutContainer } from '@styles/layouts';
import { Position } from '@type/position';

import {
  CategoryPageInner,
  PostLayoutWrapper,
  PostSectionWrapper,
} from './styled';
type CategoryProps = {
  category: Position;
};

const Category = ({ category }: CategoryProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  const { postListData } = useGetPostsData(category as Position, page - 1);

  const navigate = useNavigate();
  useEffect(() => {
    if (!page) {
      setSearchParams({
        page: '1',
      });
    }
  }, []);

  const categoryHandler = (category: string) =>
    navigate({
      pathname: `/category/${category}`,
      search: `?${createSearchParams({
        page: page.toString(),
      })}`,
    });

  return (
    <LayoutContainer>
      <CategoryPageInner>
        <PostLayoutWrapper>
          <CategoryMenu type={category} onClick={categoryHandler} />
          <PostSectionWrapper>
            {postListData && (
              <PagingPostsContainer
                postData={postListData.content}
                totalPage={postListData.totalPages || 0}
                currentPage={page}
                isEmpty={postListData.empty}
              />
            )}
          </PostSectionWrapper>
        </PostLayoutWrapper>
      </CategoryPageInner>
    </LayoutContainer>
  );
};

export default memo(Category);
