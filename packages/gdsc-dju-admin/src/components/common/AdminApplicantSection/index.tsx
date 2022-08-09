import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { modalAtom } from '../../../atoms/modalAtom';
import { recruitmentAtom } from '../../../atoms/recruitmentAtom';
import {
  Handle,
  InformationHeader,
  Switch,
  ToggleButton,
} from '../../../pages/Admin/AdminApplicants/styled';
import { IApplicantTypeWithID, StatusType } from '../../../types/applicant';
import { getApplicants } from '../../../utils/applicantsHandler';
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

  useEffect(() => {
    applicantHandler();
  }, [currentParam, status, modal]);

  return (
    <AnimatePresence>
      <LayoutGroup>
        {modal.ADMIN_APPLICANT && <ApplicantModal />}
        <ApplicantSection>
          <InformationHeader>
            <AnnouncementToggle currentParam={currentParam} />
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

const AnnouncementToggle = ({ currentParam }: { currentParam: string }) => {
  const [recruit, setRecruit] = useAtom(recruitmentAtom);

  const switchHandler = (key: keyof typeof recruit) => {
    return setRecruit({ ...recruit, [key]: !recruit[key] });
  };
  const isOn = (key: keyof typeof recruit) => {
    return recruit[key];
  };
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <ToggleButton>
      <Switch
        data-ison={isOn(currentParam as keyof typeof recruit)}
        onClick={() => switchHandler(currentParam as keyof typeof recruit)}
      >
        <Handle layout transition={spring} />
      </Switch>
    </ToggleButton>
  );
};

export default memo(AdminApplicantSection);
