import React, { Suspense } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { useRouter } from '@hooks/routing';
import MyBlogContentBox from '@pages/MyBlog/BlogHome/MyBlogContentBox';
import MyBlogMenuBox from '@pages/MyBlog/BlogHome/MyBlogMenuBox';
import MyBlogProfileBox from '@pages/MyBlog/BlogHome/MyBlogProfileBox';
import { useGetGuestData } from '@src/api/hooks/useGetGuestData';
import { useGetMyData } from '@src/api/hooks/useGetMyData';
import { MyBlogLayoutContainer } from '@src/components/layouts/MyBlogLayout/styled';
import { Position } from '@type/position';

type Props = {
  category: Position;
};

const MyBlogLayout = ({ category }: Props) => {
  const [searchParams] = useSearchParams();
  const { nickname } = useParams<{ nickname: string }>();
  const { guestData } = useGetGuestData(nickname);
  const { myData } = useGetMyData();
  const { push } = useRouter();
  const page = searchParams.get('page') ?? '1';

  const categoryHandler = (category: Position) => {
    push(`/@${nickname}/${category}`, { page: '1' });
  };

  return (
    <MyBlogLayoutContainer>
      <Suspense fallback={<div>profile</div>}>
        <MyBlogProfileBox guestData={guestData} />
      </Suspense>
      <Suspense fallback={<div>menu</div>}>
        <MyBlogMenuBox
          isGuest={myData?.role === 'GUEST'}
          categoryHandler={categoryHandler}
          category={category}
        />
      </Suspense>
      <Suspense fallback={<div>posts loading</div>}>
        {guestData && (
          <MyBlogContentBox
            category={category}
            userId={guestData?.userId}
            page={parseInt(page)}
          />
        )}
      </Suspense>
    </MyBlogLayoutContainer>
  );
};

export default MyBlogLayout;
