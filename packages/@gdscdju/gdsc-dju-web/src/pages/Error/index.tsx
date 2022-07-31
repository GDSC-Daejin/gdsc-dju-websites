import React from 'react';
import { MainText, Title } from '../../components/common/Title/title';
import { ErrorContainer, ErrorContentWrapper } from './styled';
import ErrorLottie from '../../components/Lottie/ErrorLottie';

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
