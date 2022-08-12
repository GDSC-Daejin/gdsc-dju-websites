import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import API from '../../apis';
import ToggleButton from '../../components/common/ToggleButton';

import {
  ApplicantCardSection,
  ApplicantCardWrapper,
  ApplicantContainerInner,
  ApplicantHeadWrapper,
} from './styled';
import StatusBadgeBox from '../../components/layout/StatusBadgeBox';

import { position } from '../../context/recruitInfo';
import {
  RecruitmentAtom,
  recruitmentAtom,
  recruitmentReadOnlyAtom,
  recruitmentWriteOnlyAtom,
} from '../../store/recruitmentAtom';
import { IApplicantTypeWithID } from '../../types/applicant';
import { getApplicants } from '../../utils/applicantsHandler';
import ApplicantDetailModal from '../ApplicantDetailModal';
import { AdminContainerInner } from '../styled';

import { AdminSectionWrapper } from './styled';
import ApplicantCard from '../../components/common/cards/ApplicantCard';

const Applicants = () => {
  const [recruit] = useAtom(recruitmentReadOnlyAtom);
  const [, writeRecruitStatus] = useAtom(recruitmentWriteOnlyAtom);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { userid } = useParams<{ userid: string }>();

  const [applicants, setApplicants] = useState<IApplicantTypeWithID[]>();

  const currentParam = searchParams.get('type') as string;

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
    writeRecruitStatus();
  }, []);
  useEffect(() => {
    applicantHandler();
  }, [currentParam]);
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
            {userid && <ApplicantDetailModal userid={userid} />}
            {applicants && (
              <ApplicantContainerInner>
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
                      onClick={() =>
                        navigate(`/certified/recruit/${applicant.id}`)
                      }
                    >
                      <ApplicantCard {...applicant} />
                    </ApplicantCardWrapper>
                  ))}
                </ApplicantCardSection>
              </ApplicantContainerInner>
            )}
          </LayoutGroup>
        </AnimatePresence>
      </AdminSectionWrapper>
    </AdminContainerInner>
  );
};

export default Applicants;
