import React from 'react';
import CheckBoxCard from '@src/components/common/cards/CheckBoxCard';

import {
  EmailCategory,
  SelectEmailsWrapper,
  SelectedBoxSection,
} from './styled';
import { Application } from '@gdsc-dju/shared/types';

interface Props {
  selectApplicants: Application[];
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
