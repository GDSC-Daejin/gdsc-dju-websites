import React, { useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import MyBlogLayout from '@src/components/layouts/MyBlogLayout';

const BlogHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParams = searchParams.get('type');

  const pageParams = searchParams.get('page');

  useLayoutEffect(() => {
    if (!pageParams && !categoryParams) {
      setSearchParams({
        type: 'all',
        page: '1',
      });
    }
  }, []);

  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          {categoryParams && pageParams && (
            <MyBlogLayout
              category={categoryParams}
              page={parseInt(pageParams)}
            />
          )}
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default BlogHome;
