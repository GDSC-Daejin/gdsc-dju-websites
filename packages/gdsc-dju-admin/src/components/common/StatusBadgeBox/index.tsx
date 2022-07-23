import React, { useEffect } from 'react';
import { IApplicantTypeWithID, StatusType } from '../../../types/applicant';
import StatusBadge from '../Statusbadge';
import styled from 'styled-components';
import { applicantFilterByStatus } from '../../../utils/applicantsHandler';

export const ApplicantsStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;
export const ApplicantsBadgeWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey700};
  display: flex;
  align-items: center;
  padding: 0 10px;
  flex-wrap: wrap;
  gap: 0 5px;
`;

interface IStatusBadgeFilter {
  status: StatusType | null;
  setStatus: (status: StatusType | null) => void;
  filteredApplicants: IApplicantTypeWithID[];
  setFilteredApplicants: (list: IApplicantTypeWithID[]) => void;
}

const StatusBadgeBox: React.FC<IStatusBadgeFilter> = ({
  status,
  setStatus,
  filteredApplicants,
  setFilteredApplicants,
}) => {
  const filtered = applicantFilterByStatus(filteredApplicants);
  const statusBadgeList = {
    DOCS: filtered.DOCS.length,
    INTERVIEW: filtered.INTERVIEW.length,
    REJECTED_DOCS: filtered.REJECTED_DOCS.length,
    REJECTED_INTERVIEW: filtered.REJECTED_INTERVIEW.length,
    HIRED: filtered.HIRED.length,
  } as const;
  const keyArray = Object.keys(statusBadgeList) as StatusType[];
  // console.log(statusBadgeList);
  const handleClick = (type: StatusType) => {
    status === type ? setStatus(null) : setStatus(type);
  };

  useEffect(() => {
    setFilteredApplicants(status ? filtered[status] : filteredApplicants);
  }, [status]);

  return (
    <ApplicantsStatusWrapper>
      {keyArray.map((type) => (
        <ApplicantsBadgeWrapper key={type} onClick={() => handleClick(type)}>
          <StatusBadge status={type} disable={!(type === status)} />
          {statusBadgeList[type]}
        </ApplicantsBadgeWrapper>
      ))}
    </ApplicantsStatusWrapper>
  );
};
export default StatusBadgeBox;
