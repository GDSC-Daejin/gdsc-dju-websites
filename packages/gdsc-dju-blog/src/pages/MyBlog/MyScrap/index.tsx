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

  const categoryHandler = (category: string) =>
    setSearchParams({ ...searchParams, type: category });

  return (
    <LayoutContainer>
      <ContainerInner>
        <MyScrapLayout
          page={page}
          category={category}
          scrapData={scrapData}
          categoryHandler={categoryHandler}
        />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default MyScrap;
