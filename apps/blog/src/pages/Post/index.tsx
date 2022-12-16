import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { DarkModeContext } from '@gdsc-dju/styled-components-theme';

import MarkdownView from '@atoms/MarkdownView';
import { Giscus } from '@giscus/react';
import { useGetDetailPost } from '@src/api/hooks/useGetDetailPost';
import { LayoutContainer, PostContainerInner } from '@styles/layouts';

import PostHeader from './PostHeader';
import { ContentWrapper, GiscusWrapper } from './styled';

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
            <MarkdownView content={postData.content} />
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
