import React, { memo, useCallback, useEffect } from 'react';
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { Notice } from '../MyBlog/BlogHome/styled';
import {
  CategoryMenuWrapper,
  CategoryPageInner,
  PageBarWrapper,
  PostLayoutWrapper,
  PostSectionWrapper,
} from './styled';
import BlogCardSection from '../../components/molecules/PostSectionContainer';
import CategoryMenu from '@src/components/atoms/CategoryMenu';
import { useGetPostsData } from '@src/api/hooks/useGetPostsData';
import PageBar from '@src/components/atoms/PageBar';
import { LayoutContainer } from '@styles/layouts';

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryName } = useParams();

  const category = categoryName ? categoryName : 'all';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  const { postListData } = useGetPostsData(category, page - 1);

  const navigate = useNavigate();
  useEffect(() => {
    if (page) {
      setSearchParams({
        page: '1',
      });
    }
  }, []);

  const pageHandler = useCallback((page: number, limit?: number) => {
    if (page < 1) {
      return;
    }
    if (page === limit) {
      return;
    } else {
      navigate({
        pathname: `/category/${category}`,
        search: `?${createSearchParams({
          page: page.toString(),
        })}`,
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
          <CategoryMenuWrapper>
            <CategoryMenu type={category} onClick={categoryHandler} />
          </CategoryMenuWrapper>
          <PostSectionWrapper>
            {postListData && (
              <>
                {postListData.empty ? (
                  <Notice>포스팅된 글이 없습니다</Notice>
                ) : (
                  <BlogCardSection postData={postListData.content} />
                )}
              </>
            )}
          </PostSectionWrapper>
        </PostLayoutWrapper>
        {postListData && !postListData.empty && (
          <PageBarWrapper>
            <PageBar
              type={category}
              page={page}
              totalPage={postListData?.totalPages || 0}
              onClick={pageHandler}
            />
          </PageBarWrapper>
        )}
      </CategoryPageInner>
    </LayoutContainer>
  );
};

export default memo(Category);
