import { Application } from '@gdsc-dju/shared/types';
import React from 'react';
import StatusBadge from '../../Statusbadge';
import { ApplicantCardWrapper, ApplicantEmail, ApplicantText } from './styled';

const ApplicantCard: React.FC<Application> = ({
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
