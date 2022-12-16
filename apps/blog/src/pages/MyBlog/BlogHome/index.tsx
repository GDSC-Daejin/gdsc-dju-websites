import React from 'react';

import MyBlogLayout from '@src/components/layouts/MyBlogLayout';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import { Position } from '@type/position';

type Props = {
  position: Position;
};

const BlogHome = ({ position }: Props) => {
  return (
    <LayoutContainer>
      <ContainerInner>
        <MyBlogLayout category={position} />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default BlogHome;
