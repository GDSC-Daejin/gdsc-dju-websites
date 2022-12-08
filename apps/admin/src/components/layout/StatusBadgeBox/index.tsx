import React from 'react';

import styled from 'styled-components';

import { IApplicantTypeWithID, StatusType } from '../../../types/applicant';
import { applicantFilterByStatus } from '../../../utils/applicantsHandler';
import StatusBadge from '../../common/Statusbadge';

export const ApplicantsStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;
export const ApplicantsBadgeWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey700};
  display: flex;
  align-items: center;
  padding: 0 10px;
  flex-wrap: wrap;
  gap: 0 5px;
`;

interface Props {
  filteredApplicants: IApplicantTypeWithID[];
}

const StatusBadgeBox: React.FC<Props> = ({ filteredApplicants }) => {
  const filtered = applicantFilterByStatus(filteredApplicants);
  const statusBadgeList = {
    DOCS: filtered.DOCS.length,
    INTERVIEW: filtered.INTERVIEW.length,
    REJECTED_DOCS: filtered.REJECTED_DOCS.length,
    REJECTED_INTERVIEW: filtered.REJECTED_INTERVIEW.length,
    HIRED: filtered.HIRED.length,
  } as const;
  const keyArray = Object.keys(statusBadgeList) as StatusType[];

  return (
    <ApplicantsStatusWrapper>
      {keyArray.map((type) => (
        <ApplicantsBadgeWrapper key={type}>
          <StatusBadge status={type} />
          {statusBadgeList[type]}
        </ApplicantsBadgeWrapper>
      ))}
    </ApplicantsStatusWrapper>
  );
};
export default StatusBadgeBox;
