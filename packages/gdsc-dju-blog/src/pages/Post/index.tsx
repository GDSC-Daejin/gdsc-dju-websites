import { Giscus } from '@giscus/react';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDetailPost } from '../../api/hooks/useGetDetailPost';
import { useGetScrap } from '../../hooks/useGetScrap';

import { LayoutContainer, PostContainerInner } from '../../styles/layouts';
import PostHeader from './PostHeader';
import { ContentBox, ContentWrapper, GiscusWrapper } from './styled';

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
            <ContentBox>
              <Viewer
                initialValue={postData.content}
                plugins={[
                  [codeSyntaxHighlight, { highlighter: Prism }],
                  tableMergedCell,
                ]}
              />
            </ContentBox>
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
