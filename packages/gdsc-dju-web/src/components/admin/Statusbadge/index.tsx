import React from 'react';
import styled, { css } from 'styled-components';
import { lightTheme } from '../../../styles/theme';
import { StatusBadgeType, StatusType } from '../../../types/applicant';

const StatusBadgeWrapper = styled.div<{
  color?: keyof typeof lightTheme.colors;
  disable?: boolean;
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
    color: 'googleBlue',
    text: '서류심사',
  },
  INTERVIEW: {
    color: 'googleYellow',
    text: '인터뷰',
  },
  REJECTED_DOCS: {
    color: 'orange900',
    text: '서류 불합격',
  },
  REJECTED_INTERVIEW: {
    color: 'googleRed',
    text: '면접 불합격',
  },
  HIRED: {
    color: 'googleGreen',
    text: '최종합격',
  },
};
const StatusBadge = ({
  status,
  disable,
}: {
  status?: StatusType;
  disable?: boolean;
}) => {
  return (
    <>
      {status && (
        <StatusBadgeWrapper
          color={statusData[status].color as keyof typeof lightTheme.colors}
          disable={disable}
        >
          {statusData[status].text}
        </StatusBadgeWrapper>
      )}
    </>
  );
};

export default StatusBadge;
