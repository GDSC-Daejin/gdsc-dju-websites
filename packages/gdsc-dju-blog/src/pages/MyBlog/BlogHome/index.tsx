import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import MyBlogLayout from '@src/components/layouts/MyBlogLayout';

const BlogHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParams = searchParams.get('type');

  const pageParams = searchParams.get('page');

  useEffect(() => {
    if (!pageParams && !categoryParams) {
      setSearchParams({
        type: 'all',
        page: '1',
      });
    }
  }, [pageParams, categoryParams]);

  return (
    <LayoutContainer>
      <ContainerInner>
        <MyBlogLayout />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default BlogHome;
