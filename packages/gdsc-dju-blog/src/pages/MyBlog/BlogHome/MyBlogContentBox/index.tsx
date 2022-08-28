import React from 'react';
import { useGetUserPostsNotTempData } from '@src/api/hooks/useGetUserPostNotTempData';
import WidthPostsContainerWithMenu from '@src/components/organisms/WidthPostsContainerWithMenu';
import { MyBlogContentWrapper } from '@pages/MyBlog/BlogHome/MyBlogContentBox/styled';

interface Props {
  category: string;
  page: number;
  userId: string;
}

const MyBlogContentBox = ({ category, page, userId }: Props) => {
  const { userPostNotTempData } = useGetUserPostsNotTempData(
    userId,
    category,
    page - 1,
    6,
  );
  return (
    <MyBlogContentWrapper>
      {userPostNotTempData && (
        <WidthPostsContainerWithMenu
          postListResponse={userPostNotTempData}
          currentPage={page}
        />
      )}
    </MyBlogContentWrapper>
  );
};

export default MyBlogContentBox;
