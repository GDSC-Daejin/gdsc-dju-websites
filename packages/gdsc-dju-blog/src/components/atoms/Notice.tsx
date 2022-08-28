import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export const NoticeText = styled.p<{ align: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${({ theme }) => theme.colors.grey400};
  ${({ align }) =>
    align &&
    css`
      justify-content: center;
    `}
`;

interface Props {
  children: React.ReactNode;
  align?: boolean;
}

const Notice = ({ children, align = true }: Props) => {
  return <NoticeText align={align}>{children}</NoticeText>;
};

export default Notice;
