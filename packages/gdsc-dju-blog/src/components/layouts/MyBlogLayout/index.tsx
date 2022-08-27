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
  const categoryHandler = (category: string) => {
    if (!category) return;
    setSearchParams({
      type: category,
      page: page.toString(),
    });
  };

  return (
    <MyBlogLayoutContainer>
      <Suspense fallback={<div>프로필 로딩</div>}>
        <MyBlogProfileBox guestData={guestData} />
      </Suspense>
      <Suspense fallback={<div>menu</div>}>
        {category && myData && categoryHandler && (
          <MyBlogMenuBox
            isGuest={myData?.role === 'GUEST'}
            categoryHandler={categoryHandler}
            category={category}
          />
        )}
      </Suspense>
      <Suspense fallback={<div>isLoading</div>}>
        {guestData && (
          <MyBlogContentBox
            category={category}
            userId={guestData.userId}
            page={page}
            pageHandler={pageHandler}
          />
        )}
      </Suspense>
    </MyBlogLayoutContainer>
  );
};

export default MyBlogLayout;
