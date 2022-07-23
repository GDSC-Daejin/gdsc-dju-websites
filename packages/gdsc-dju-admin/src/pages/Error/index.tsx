import React from 'react';

import { ErrorContainer, ErrorContentWrapper } from './styled';
import ErrorLottie from '../../components/Lottie/ErrorLottie';

const Error = ({ error }: { error?: Error }) => {
  return (
    <ErrorContainer>
      <ErrorContentWrapper>
        <h1>어딘가 문제가 생겼어요</h1>
        <p>{error?.message}</p>
      </ErrorContentWrapper>
      <ErrorLottie />
    </ErrorContainer>
  );
};

export default Error;
