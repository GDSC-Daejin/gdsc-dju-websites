import React from 'react';

import { FileInput, Input, TagInput, TextArea } from '@gdsc-dju/gds-ui';

import styled from 'styled-components';

import { ContainerInner, LayoutContainer } from '../styles/layouts';

const StyledH1 = styled.h1`
  color: var(--grey900);
`;

const Home = () => {
  return (
    <LayoutContainer>
      <ContainerInner>
        <StyledH1>home</StyledH1>
        <Input placeholder={'임시 플레이스 홀더입니다.'} />
        <TextArea placeholder={'임시 플레이스 홀더입니다.'} />
        <FileInput placeholder={'임시 플레이스 홀더입니다.'} />
        <TagInput
          placeholder={'임시 플레이스 홀더입니다.'}
          onChange={(e) => console.log(e)}
        />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Home;
