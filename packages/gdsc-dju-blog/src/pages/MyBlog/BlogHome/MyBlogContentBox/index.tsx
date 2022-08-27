import React from 'react';
import { useGetUserPostsNotTempData } from '@src/api/hooks/useGetUserPostNotTempData';
import WidthPostsContainerWithMenu from '@src/components/organisms/WidthPostsContainerWithMenu';
import Notice from '@src/components/atoms/Notice';
import { MyBlogContentWrapper } from '@pages/MyBlog/BlogHome/MyBlogContentBox/styled';

interface Props {
  category: string;
  page: number;
  userId: string;
  pageHandler: (page: number, limit?: number) => void;
}

const MyBlogContentBox = ({ category, page, userId, pageHandler }: Props) => {
  const { userPostNotTempData } = useGetUserPostsNotTempData(
    userId,
    category,
    page - 1,
    6,
  );
  return (
    <MyBlogContentWrapper>
      {userPostNotTempData &&
        (userPostNotTempData.empty ? (
          <Notice>작성한 글이 없어요</Notice>
        ) : (
          <WidthPostsContainerWithMenu
            postData={userPostNotTempData.content}
            pageHandler={pageHandler}
            currentPage={page}
            totalPage={userPostNotTempData.totalPages}
          />
        ))}
    </MyBlogContentWrapper>
  );
};

export default MyBlogContentBox;
