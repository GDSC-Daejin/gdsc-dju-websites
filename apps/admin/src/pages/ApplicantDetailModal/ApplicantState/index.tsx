import React, { useCallback } from 'react';

import { doc, updateDoc } from 'firebase/firestore';

import StatusBadge from '../../../components/common/Statusbadge';
import { recruitInfo } from '../../../context/recruitInfo';
import { db } from '../../../firebase/firebase';
import { IApplicantTypeWithID, StatusType } from '../../../types/applicant';

import { ApplicantBadgeWrapper, ApplicantInfoStateWrapper } from './styled';

const ApplicantState: React.FC<{
  applicantData: IApplicantTypeWithID;
  setApplicantData: (data: IApplicantTypeWithID) => void;
}> = ({ applicantData, setApplicantData }) => {
  const applicantRef = doc(db, recruitInfo.COLLECTION, applicantData.id);

  const updateStatus = useCallback(async (status: StatusType) => {
    await updateDoc(applicantRef, {
      status: status,
    });
    setApplicantData({
      ...applicantData,
      status: status,
    });
  }, []);

  return (
    <ApplicantInfoStateWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('DOCS')}>
        <StatusBadge
          status={'DOCS'}
          disable={applicantData.status !== 'DOCS'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('REJECTED_DOCS')}>
        <StatusBadge
          status={'REJECTED_DOCS'}
          disable={applicantData.status !== 'REJECTED_DOCS'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('INTERVIEW')}>
        <StatusBadge
          status={'INTERVIEW'}
          disable={applicantData.status !== 'INTERVIEW'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('REJECTED_INTERVIEW')}>
        <StatusBadge
          status={'REJECTED_INTERVIEW'}
          disable={applicantData.status !== 'REJECTED_INTERVIEW'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('HIRED')}>
        <StatusBadge
          status={'HIRED'}
          disable={applicantData.status !== 'HIRED'}
        />
      </ApplicantBadgeWrapper>
    </ApplicantInfoStateWrapper>
  );
};

export default ApplicantState;
