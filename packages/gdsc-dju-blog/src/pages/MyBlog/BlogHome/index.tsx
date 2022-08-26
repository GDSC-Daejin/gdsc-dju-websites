import React, { Suspense, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import MyBlogLayout from '@src/components/layouts/MyBlogLayout';

const BlogHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryName = searchParams.get('type');
  const category = categoryName ? categoryName : 'all';

  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  useEffect(() => {
    if (page) {
      setSearchParams({
        type: category,
        page: '1',
      });
    }
  }, []);

  const pageHandler = (page: number, limit?: number) => {
    if (page < 1) return;
    if (page === limit) return;
    else {
      setSearchParams({
        type: category,
        page: page.toString(),
      });
    }
  };
  const categoryHandler = (category: string) =>
    setSearchParams({
      type: category,
      page: page.toString(),
    });

  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <Suspense fallback={<div>Loading...</div>}>
            <MyBlogLayout
              category={category}
              page={page}
              categoryHandler={categoryHandler}
              pageHandler={pageHandler}
            />
          </Suspense>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default BlogHome;
