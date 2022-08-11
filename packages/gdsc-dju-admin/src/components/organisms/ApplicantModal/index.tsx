import { AnimatePresence } from 'framer-motion';
import React, { memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IApplicantTypeWithID } from '../../../types/applicant';
import { getApplicant } from '../../../utils/applicantsHandler';
import { modalVariants } from '../../animations/modalVariants';
import { ClearButton } from '../../atoms/ModalButton';
import ApplicantChatSection from '../../molecules/ApplicantChatSection';
import ApplicantInfoCard from '../../molecules/ApplicantInfoCard';
import ApplicantInfoState from '../../molecules/ApplicantInfoState';
import Application from '../../molecules/Applicantion';

import {
  ApplicantDataWrapper,
  ApplicantInfoHeader,
  ApplicantInfoSection,
  ApplicantInfoWrapper,
  ApplicantModalInner,
} from './styled';

interface Props {
  userid: string;
}

const ApplicantModal = ({ userid }: Props) => {
  const [applicantData, setApplicantData] = useState<IApplicantTypeWithID>();

  const navigate = useNavigate();

  const applicantHandler = async () => {
    if (userid) {
      const applicant = await getApplicant(userid);
      setApplicantData(applicant);
    }
  };

  useEffect(() => {
    applicantHandler();
  }, [userid]);

  return (
    <AnimatePresence>
      <ApplicantModalInner variants={modalVariants} layoutId={`card-${userid}`}>
        {applicantData && (
          <ApplicantInfoWrapper>
            <ApplicantInfoCard applicantData={applicantData} />
            <ApplicantInfoState
              applicantData={applicantData}
              setApplicantData={setApplicantData}
            />
          </ApplicantInfoWrapper>
        )}
        <ApplicantInfoSection>
          <ApplicantInfoHeader>
            <ClearButton onClick={() => navigate(-1)} />
          </ApplicantInfoHeader>
          {applicantData && (
            <ApplicantDataWrapper>
              <Application applicantData={applicantData} />
              <ApplicantChatSection applicantId={applicantData.id} />
            </ApplicantDataWrapper>
          )}
        </ApplicantInfoSection>
      </ApplicantModalInner>
    </AnimatePresence>
  );
};

export default memo(ApplicantModal);
