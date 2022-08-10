import React from 'react';
import { useAtom } from 'jotai';

import { useModalHandle } from '../../../hooks/useModalHandle';
import {
  RecruitmentAtom,
  recruitmentAtom,
} from '../../../store/recruitmentAtom';
import { IApplicantTypeWithID } from '../../../types/applicant';
import ToggleButton from '../../atoms/ToggleButton';
import ApplicantCard from '../../molecules/ApplicantCard';
import StatusBadgeBox from '../../molecules/StatusBadgeBox';
import {
  ApplicantCardSection,
  ApplicantCardWrapper,
  ApplicantContainer,
  ApplicantHeadWrapper,
} from './styled';

interface Props {
  applicants: IApplicantTypeWithID[];
  currentParam: string;
}

const ApplicantsLayout = ({ applicants, currentParam }: Props) => {
  const { openModal } = useModalHandle('APPLICANT');
  const [recruitStatus, setRecruitStatus] = useAtom(recruitmentAtom);
  const currentRouteRecruitStatus = () => {
    if (recruitStatus) {
      return recruitStatus[currentParam as keyof RecruitmentAtom];
    }
  };
  const currentRouteRecruitStatusHandler = () => {
    if (recruitStatus) {
      setRecruitStatus({
        ...recruitStatus,
        [currentParam]: !recruitStatus[currentParam as keyof RecruitmentAtom],
      });
    }
  };
  return (
    <ApplicantContainer>
      <ApplicantHeadWrapper>
        <StatusBadgeBox filteredApplicants={applicants} />
        <ToggleButton
          isOn={currentRouteRecruitStatus()}
          toggle={currentRouteRecruitStatusHandler}
        />
      </ApplicantHeadWrapper>
      <ApplicantCardSection>
        {applicants.map((applicant) => (
          <ApplicantCardWrapper
            key={applicant.id}
            onClick={() => openModal(applicant.id)}
          >
            <ApplicantCard {...applicant} />
          </ApplicantCardWrapper>
        ))}
      </ApplicantCardSection>
    </ApplicantContainer>
  );
};

export default ApplicantsLayout;
