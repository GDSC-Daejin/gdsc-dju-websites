import PostSavesLayout from '@src/components/layouts/PostSavesLayout';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const PostSaves = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryName = searchParams.get('type');
  const category = categoryName ? categoryName : 'all';
  const pageParams = searchParams.get('page');
  const page = pageParams ? parseInt(pageParams) : 1;

  useEffect(() => {
    if (!pageParams && !categoryName) {
      setSearchParams({
        type: category,
        page: '1',
      });
    }
  }, []);
  const categoryHandler = (category: string) =>
    setSearchParams({ ...searchParams, type: category });
  return (
    <LayoutContainer>
      <ContainerInner>
        <PostSavesLayout
          page={page}
          category={category}
          categoryHandler={categoryHandler}
        />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default PostSaves;
