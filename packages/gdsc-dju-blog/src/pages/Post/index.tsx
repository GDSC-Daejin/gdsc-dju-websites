import React from 'react';
import { Giscus } from '@giscus/react';
import { useParams } from 'react-router-dom';

import PostHeader from './PostHeader';
import { ContentWrapper, GiscusWrapper } from './styled';
import { useGetDetailPost } from '@src/api/hooks/useGetDetailPost';
import { LayoutContainer, PostContainerInner } from '@styles/layouts';
import { ContentViewer } from '@src/components/atoms/ToastUi';

const Post = () => {
  const { postId } = useParams<'postId'>();
  const { postData } = useGetDetailPost(postId);
  const theme = localStorage.getItem('theme') || 'light';

  return (
    <LayoutContainer>
      <PostContainerInner>
        {postId && postData && (
          <ContentWrapper>
            <PostHeader postId={Number(postId)} postData={postData} />
            <ContentViewer content={postData.content} />
          </ContentWrapper>
        )}
        <GiscusWrapper>
          <Giscus
            repo="GDSC-Daejin/gdsc-dju-blog-fe"
            repoId="R_kgDOGwlX0Q"
            category="Announcements"
            categoryId="DIC_kwDOGwlX0c4CBQA5"
            mapping="pathname"
            theme={theme}
            lang="ko"
          />
        </GiscusWrapper>
      </PostContainerInner>
    </LayoutContainer>
  );
};

export default Post;
