import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { ContainerInner, LayoutContainer } from '@styles/layouts';
import ApplySuccessLayout from '@templates/ApplySuccessLayout';

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
