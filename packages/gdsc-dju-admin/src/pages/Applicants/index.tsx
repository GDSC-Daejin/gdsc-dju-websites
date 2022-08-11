import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import API from '../../apis';
import ApplicantModal from '../../components/molecules/modal/ApplicantModal';
import ApplicantsLayout from '../../components/organisms/ApplicantsLayout';
import { useModalHandle } from '../../hooks/useModalHandle';
import { position } from '../../context/recruitInfo';
import {
  recruitmentReadOnlyAtom,
  recruitmentWriteOnlyAtom,
} from '../../store/recruitmentAtom';
import { IApplicantTypeWithID } from '../../types/applicant';
import { getApplicants } from '../../utils/applicantsHandler';
import { AdminSectionWrapper } from './styled';
import { AdminContainerInner } from '../styled';

const Applicants = () => {
  const [recruit] = useAtom(recruitmentReadOnlyAtom);
  const [, writeRecruitStatus] = useAtom(recruitmentWriteOnlyAtom);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const { modal } = useModalHandle('APPLICANT');

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
  }, [currentParam, modal]);

  useEffect(() => {
    writeRecruitStatus();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (recruit && token) {
      API.putRecruitStatus(recruit, token);
    }
  }, [recruit]);

  useEffect(() => {
    !searchParams.get('type') &&
      setSearchParams({
        type: 'home',
      });
  }, [location.pathname]);

  return (
    <AdminContainerInner>
      <AdminSectionWrapper>
        <AnimatePresence>
          <LayoutGroup>
            {modal.isOpen === 'APPLICANT' && <ApplicantModal />}
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
