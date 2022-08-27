import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const NoticeText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${({ theme }) => theme.colors.grey400};
`;

interface Props {
  children: React.ReactNode;
}

const Notice = ({ children }: Props) => {
  return <NoticeText>{children}</NoticeText>;
};

export default Notice;
