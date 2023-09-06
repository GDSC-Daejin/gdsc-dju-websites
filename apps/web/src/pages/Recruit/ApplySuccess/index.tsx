import React from 'react';
import { useSearchParams } from 'react-router-dom';

import ApplySuccessLayout from '@src/components/layouts/ApplySuccessLayout';
import { ContainerInner, LayoutContainer } from '@styles/layouts';

const ApplySuccess = () => {
  const [searchParams] = useSearchParams();

  const params = Object.fromEntries(new URLSearchParams(location.search)) as {
    name: string;
    email: string;
    phone: string;
    position: string;
  };

  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <ApplySuccessLayout params={params} />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default ApplySuccess;
