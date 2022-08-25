import { useGetMyScrapData } from '@src/api/hooks/useGetMyScrapData';
import React, { useCallback, useEffect } from 'react';
import PostSectionWithMenu from '@src/components/molecules/PostSectionWithMenu';
import CategoryMenu from '@src/components/atoms/CategoryMenu';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import {
  ScrapSectionInner,
  ScrapSectionWrapper,
} from '@pages/MyBlog/MyScrap/styled';
import { useSearchParams } from 'react-router-dom';

const MyScrap = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParams = searchParams.get('type');
  const category = categoryParams ?? 'all';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  const { scrapData } = useGetMyScrapData(category, page - 1, 12);

  useEffect(() => {
    if (searchParams.get('type') && searchParams.get('page')) return;
    else {
      setSearchParams({
        type: 'all',
        page: '1',
      });
    }
  }, []);

  const pageHandler = useCallback((page: number, limit?: number) => {
    if (page < 1) return;
    if (page === limit) return;
    else {
      setSearchParams({
        type: category,
        page: page.toString(),
      });
    }
  }, []);

  const categoryHandler = (category: string) =>
    setSearchParams({
      type: category,
      page: page.toString(),
    });

  return (
    <LayoutContainer>
      <ContainerInner>
        <ScrapSectionWrapper>
          <ScrapSectionInner>
            <CategoryMenu type={category} onClick={categoryHandler} />
            {scrapData && (
              <PostSectionWithMenu
                postData={scrapData.content}
                type={category}
                currentPage={page}
                totalPage={scrapData.totalPages}
                pageHandler={pageHandler}
              />
            )}
          </ScrapSectionInner>
        </ScrapSectionWrapper>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default MyScrap;
