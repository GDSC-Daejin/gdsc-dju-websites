import React from 'react';

import { ErrorContainer, ErrorContentWrapper } from './styled';

const Error = ({ error }: { error?: Error }) => {
  return (
    <ErrorContainer>
      <ErrorContentWrapper>
        <h1>어딘가 문제가 생겼어요</h1>
        <div>{error?.message}</div>
      </ErrorContentWrapper>
    </ErrorContainer>
  );
};

export default Error;
