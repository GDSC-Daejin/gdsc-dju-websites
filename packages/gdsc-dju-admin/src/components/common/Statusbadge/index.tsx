import { ColorScheme } from '@gdsc-dju/styled-components';
import React from 'react';
import styled, { css } from 'styled-components';

import { StatusBadgeType, StatusType } from '../../../types/applicant';

const StatusBadgeWrapper = styled.div<{
  color: keyof ColorScheme;
  disable: boolean;
}>`
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.colors[color]};
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors[color]};
    `}
  font-size: ${({ theme }) => theme.fontSize.body3};
  width: fit-content;
  border-radius: 4px;
  ${({ disable }) =>
    disable &&
    css`
      color: ${({ theme }) => theme.colors.grey400};
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.grey400};
    `}
`;
const statusData: StatusBadgeType = {
  DOCS: {
    color: 'blue900',
    text: '서류심사',
  },
  INTERVIEW: {
    color: 'yellow900',
    text: '인터뷰',
  },
  REJECTED_DOCS: {
    color: 'orange900',
    text: '서류 불합격',
  },
  REJECTED_INTERVIEW: {
    color: 'red900',
    text: '면접 불합격',
  },
  HIRED: {
    color: 'green900',
    text: '최종합격',
  },
};
const StatusBadge = ({
  status,
  disable = false,
}: {
  status: StatusType;
  disable?: boolean;
}) => {
  return (
    <StatusBadgeWrapper
      color={statusData[status].color as keyof ColorScheme}
      disable={disable}
    >
      {statusData[status].text}
    </StatusBadgeWrapper>
  );
};

export default StatusBadge;
