import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import API from '../../apis';
import ApplicantModal from '../../components/modal/ApplicantModal';

import ApplicantsLayout from '../../components/organisms/ApplicantsLayout';

import { position } from '../../context/recruitInfo';
import {
  recruitmentReadOnlyAtom,
  recruitmentWriteOnlyAtom,
} from '../../store/recruitmentAtom';
import { IApplicantTypeWithID } from '../../types/applicant';
import { getApplicants } from '../../utils/applicantsHandler';
import { AdminContainerInner } from '../styled';
import { AdminSectionWrapper } from './styled';

const Applicants = () => {
  const [recruit] = useAtom(recruitmentReadOnlyAtom);
  const [, writeRecruitStatus] = useAtom(recruitmentWriteOnlyAtom);
  const [searchParams] = useSearchParams();

  const { userid } = useParams<{ userid: string }>();

  const [applicants, setApplicants] = useState<IApplicantTypeWithID[]>();

  const currentParam = searchParams.get('type') as string;

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
    const applicants = await getApplicants(null);
    await filterApplicantsAsPosition(applicants);
  };

  useEffect(() => {
    applicantHandler();
  }, [currentParam]);

  useEffect(() => {
    writeRecruitStatus();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (recruit && token) {
      API.putRecruitStatus(recruit, token);
    }
  }, [recruit]);

  return (
    <AdminContainerInner>
      <AdminSectionWrapper>
        <AnimatePresence>
          <LayoutGroup>
            {userid && <ApplicantModal userid={userid} />}
            {applicants && (
              <ApplicantsLayout
                applicants={applicants}
                currentParam={currentParam}
              />
            )}
          </LayoutGroup>
        </AnimatePresence>
      </AdminSectionWrapper>
    </AdminContainerInner>
  );
};

export default Applicants;
