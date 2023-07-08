import React from 'react';

import styled from 'styled-components';

const StyledNotice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  color: ${({ theme }) => theme.colors.grey600};
`;
const NoticeWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  children: React.ReactNode;
};

const Notice = ({ children }: Props) => {
  return (
    <NoticeWrapper>
      <StyledNotice>{children}</StyledNotice>
    </NoticeWrapper>
  );
};

export default Notice;
