import { MainText, Title } from '@common/Title/title';
import ErrorLottie from '@src/components/Lottie/ErrorLottie';
import React from 'react';

import { ErrorContainer, ErrorContentWrapper } from './styled';

const Error = ({ error }: { error?: Error }) => {
  return (
    <ErrorContainer>
      <ErrorContentWrapper>
        <Title>어딘가 문제가 생겼어요</Title>
        <MainText>{error?.message}</MainText>
      </ErrorContentWrapper>
      <ErrorLottie />
    </ErrorContainer>
  );
};

export default Error;
