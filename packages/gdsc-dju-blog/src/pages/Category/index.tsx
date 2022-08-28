import React, { memo, useCallback, useEffect } from 'react';
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import {
  CategoryPageInner,
  PostLayoutWrapper,
  PostSectionWrapper,
} from './styled';
import { useGetPostsData } from '@src/api/hooks/useGetPostsData';
import { LayoutContainer } from '@styles/layouts';
import PostSectionWithMenu from '@src/components/organisms/PostsContainerWithMenu';
import CategoryMenu from '@src/components/atoms/CategoryMenu';
import Notice from '@src/components/atoms/Notice';

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryName } = useParams();

  const category = categoryName ? categoryName : 'all';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  const { postListData } = useGetPostsData(category, page - 1);

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
              <PostSectionWithMenu
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
