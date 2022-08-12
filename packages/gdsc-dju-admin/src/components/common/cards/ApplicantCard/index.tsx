import React from 'react';
import { IApplicantTypeWithID } from '../../../../types/applicant';
import StatusBadge from '../../Statusbadge';
import { ApplicantCardWrapper, ApplicantEmail, ApplicantText } from './styled';

const ApplicantCard: React.FC<IApplicantTypeWithID> = ({
  name,
  email,
  position,
  status,
  id,
}) => {
  return (
    <ApplicantCardWrapper layoutId={`card-${id}`}>
      <ApplicantText>{name}</ApplicantText>
      <ApplicantText>{position.split(' ')[0]}</ApplicantText>
      <ApplicantEmail>{email}</ApplicantEmail>
      <StatusBadge status={status} />
    </ApplicantCardWrapper>
  );
};

export default ApplicantCard;
