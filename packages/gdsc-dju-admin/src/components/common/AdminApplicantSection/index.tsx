import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { InformationHeader } from '../../../pages/Applicants/styled';
import { modalAtom } from '../../../store/modalAtom';
import {
  RecruitmentAtom,
  recruitmentAtom,
} from '../../../store/recruitmentAtom';
import { IApplicantTypeWithID, StatusType } from '../../../types/applicant';
import { getApplicants } from '../../../utils/applicantsHandler';
import ToggleButton from '../../atoms/ToggleButton';
import ApplicantCard from '../ApplicantCard';
import ApplicantModal from '../modal/ApplicantModal';

import StatusBadgeBox from '../StatusBadgeBox';
import {
  ApplicantCardSection,
  ApplicantCardWrapper,
  ApplicantSection,
} from './styled';

const position = {
  home: 'Home',
  frontend: 'Frontend Developer',
  backend: 'Backend Developer',
  android: 'Android Developer',
  beginner: 'Beginner',
  design: 'Designer',
  ml: 'Machine Learning',
};

const AdminApplicantSection = () => {
  const [modal, setModal] = useAtom(modalAtom);
  const [recruitStatus, setRecruitStatus] = useAtom(recruitmentAtom);
  const [applicants, setApplicants] = useState<IApplicantTypeWithID[]>();
  const [status, setStatus] = useState<StatusType | null>(null);

  const [searchParams] = useSearchParams();
  const currentParam = searchParams.get('type') as string;

  const modalHandler = (id: string) => {
    setModal({
      ...modal,
      ADMIN_APPLICANT: true,
      selectedID: id,
    });
  };

  const filterApplicantsAsPosition = async (
    applicants: IApplicantTypeWithID[],
  ) => {
    const currentPosition =
      position[currentParam as keyof typeof position].toLowerCase();
    if (applicants) {
      const list = [...applicants];
      const filteredApplicantsByPosition =
        currentParam !== 'home'
          ? list.filter((data) =>
              data.position.toLowerCase().includes(currentPosition),
            )
          : list;
      await setApplicants(filteredApplicantsByPosition);
    }
  };
  const applicantHandler = async () => {
    const applicants = await getApplicants(status);
    await filterApplicantsAsPosition(applicants);
  };
  const currentRouteRecruitStatus = () => {
    if (recruitStatus) {
      return recruitStatus[currentParam as keyof RecruitmentAtom];
    }
  };
  const currentRouteRecruitStatusHandler = () => {
    if (recruitStatus) {
      setRecruitStatus({
        ...recruitStatus,
        [currentParam]: recruitStatus[currentParam as keyof RecruitmentAtom],
      });
    }
  };
  console.log(recruitStatus);

  useEffect(() => {
    applicantHandler();
  }, [currentParam, status, modal]);

  return (
    <AnimatePresence>
      <LayoutGroup>
        {modal.ADMIN_APPLICANT && <ApplicantModal />}
        <ApplicantSection>
          <InformationHeader>
            <ToggleButton
              isOn={currentRouteRecruitStatus()}
              toggle={currentRouteRecruitStatusHandler}
            />
            {applicants && (
              <StatusBadgeBox
                status={status}
                setStatus={setStatus}
                filteredApplicants={applicants}
                setFilteredApplicants={setApplicants}
              />
            )}
          </InformationHeader>
          {applicants && (
            <ApplicantCardSection>
              {applicants.map((applicant) => (
                <ApplicantCardWrapper
                  key={applicant.id}
                  onClick={() => modalHandler(applicant.id)}
                >
                  <ApplicantCard {...applicant} />
                </ApplicantCardWrapper>
              ))}
            </ApplicantCardSection>
          )}
        </ApplicantSection>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default memo(AdminApplicantSection);
