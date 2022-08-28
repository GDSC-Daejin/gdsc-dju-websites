import React, { Suspense } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetGuestData } from '@src/api/hooks/useGetUserData';
import { useGetMyData } from '@src/api/hooks/useGetMyData';
import MyBlogProfileBox from '@pages/MyBlog/BlogHome/MyBlogProfileBox';
import MyBlogMenuBox from '@pages/MyBlog/BlogHome/MyBlogMenuBox';
import MyBlogContentBox from '@pages/MyBlog/BlogHome/MyBlogContentBox';
import { MyBlogLayoutContainer } from '@src/components/layouts/MyBlogLayout/styled';

interface Props {
  category: string;
  page: number;
}

const MyBlogLayout = ({ category, page }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { nickname } = useParams<{ nickname: string }>();
  const { guestData } = useGetGuestData(nickname!);
  const { myData } = useGetMyData();
  const categoryHandler = (category: string) => {
    if (!category) return;
    setSearchParams({
      type: category,
      page: page.toString(),
    });
  };

  return (
    <MyBlogLayoutContainer>
      <MyBlogProfileBox guestData={guestData} />
      <Suspense fallback={<div>menu</div>}>
        <MyBlogMenuBox
          isGuest={myData?.role === 'GUEST'}
          categoryHandler={categoryHandler}
          category={category}
        />
      </Suspense>
      <Suspense>
        {category && guestData && (
          <MyBlogContentBox
            category={category}
            userId={guestData.userId}
            page={page}
          />
        )}
      </Suspense>
    </MyBlogLayoutContainer>
  );
};

export default MyBlogLayout;
