import { useGetMyScrapData } from '@src/api/hooks/useGetMyScrapData';
import React, { useCallback, useEffect } from 'react';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import { useSearchParams } from 'react-router-dom';
import MyScrapLayout from '@src/components/layouts/MyScrapLayout';

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
        <MyScrapLayout
          page={page}
          category={category}
          scrapData={scrapData}
          pageHandler={pageHandler}
          categoryHandler={categoryHandler}
        />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default MyScrap;
