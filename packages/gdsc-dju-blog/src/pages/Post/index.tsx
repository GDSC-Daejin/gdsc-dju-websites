import { DarkModeContext, useDarkMode } from '@gdsc-dju/styled-components';
import React, { useContext } from 'react';
import { Giscus } from '@giscus/react';
import { useParams } from 'react-router-dom';

import PostHeader from './PostHeader';
import { ContentWrapper, GiscusWrapper } from './styled';
import { useGetDetailPost } from '@src/api/hooks/useGetDetailPost';
import { LayoutContainer, PostContainerInner } from '@styles/layouts';
import { ContentViewer } from '@src/components/atoms/ToastUi';

const Post = () => {
  const { postId } = useParams<{ postId: string }>();
  const { postData } = useGetDetailPost(postId);
  const { isDarkMode } = useContext(DarkModeContext);

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
            repo="GDSC-Daejin/devlog-giscus"
            repoId="R_kgDOIFUKFA"
            category="General"
            categoryId="DIC_kwDOIFUKFM4CRrNT"
            mapping="pathname"
            theme={isDarkMode ? 'dark' : 'light'}
            lang="ko"
          />
        </GiscusWrapper>
      </PostContainerInner>
    </LayoutContainer>
  );
};

export default Post;
