import React from 'react';
import { IApplicantTypeWithID } from '../../../types/applicant';
import CheckBoxCard from '../../molecules/CheckBoxCard';
import {
  EmailCategory,
  SelectEmailsWrapper,
  SelectedBoxSection,
} from './styled';

interface Props {
  selectApplicants: IApplicantTypeWithID[];
}
const SelectedEmailContainer = ({ selectApplicants }: Props) => {
  return (
    <SelectEmailsWrapper>
      <EmailCategory>선택한 이메일</EmailCategory>
      {selectApplicants && (
        <SelectedBoxSection>
          {selectApplicants.map((applicant) => (
            <div key={`check-${applicant.id}`}>
              <CheckBoxCard {...applicant} disabled={true} />
            </div>
          ))}
        </SelectedBoxSection>
      )}
    </SelectEmailsWrapper>
  );
};

export default SelectedEmailContainer;
