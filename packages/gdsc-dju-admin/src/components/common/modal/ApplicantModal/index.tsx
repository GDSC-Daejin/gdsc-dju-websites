import { doc, updateDoc } from 'firebase/firestore';
import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { modalAtom } from '../../../../store/modalAtom';
import { db } from '../../../../firebase/firebase';
import {
  QuestionType,
  applicationQuestions,
  recruitInfo,
} from '../../../../pageData/recruitInfo';
import { IApplicantTypeWithID, StatusType } from '../../../../types/applicant';
import { getApplicant } from '../../../../utils/applicantsHandler';
import OutsideClickHandler from '../../../../utils/OutsideClickHandler';
import { timeFilter } from '../../../../utils/timeFilter';
import { modalVariants } from '../../../animations/modalVariants';
import ApplicantChatSection from '../../ApplicantChatSection';
import { ClearButton } from '../../ModalButton';
import StatusBadge from '../../Statusbadge';

import {
  ApplicantBadgeWrapper,
  ApplicantDataWrapper,
  ApplicantInfoHeader,
  ApplicantInfoInner,
  ApplicantInfoLink,
  ApplicantInfoSection,
  ApplicantInfoStateWrapper,
  ApplicantInfoText,
  ApplicantInfoTextWrapper,
  ApplicantInfoWrapper,
  ApplicantModalInner,
  ApplicantModalWrapper,
  ApplicantName,
  ApplicantNameWrapper,
  ApplicationHeader,
  ApplicationText,
  ApplicationWrapper,
} from './styled';

const ApplicantModal = () => {
  const [applicantData, setApplicantData] = useState<IApplicantTypeWithID>();
  const [modal, setModal] = useAtom(modalAtom);

  const closeModal = () => {
    setModal({
      ...modal,
      ADMIN_APPLICANT: false,
    });
  };
  const applicantHandler = async () => {
    const applicant = await getApplicant(modal.selectedID);
    setApplicantData(applicant);
  };

  useEffect(() => {
    applicantHandler();
  }, [modal.selectedID]);

  return (
    <AnimatePresence>
      {modal.ADMIN_APPLICANT && modal.selectedID && (
        <ApplicantModalWrapper>
          <OutsideClickHandler outsideClick={closeModal}>
            <ApplicantModalInner
              variants={modalVariants}
              layoutId={`card-${modal.selectedID}`}
            >
              {applicantData && (
                <ApplicantInfoWrapper>
                  <ApplicantInfo applicantData={applicantData} />
                  <ApplicantInfoState
                    applicantData={applicantData}
                    setApplicantData={setApplicantData}
                  />
                </ApplicantInfoWrapper>
              )}
              <ApplicantInfoSection>
                <ApplicantInfoHeader>
                  <ClearButton onClick={closeModal} />
                </ApplicantInfoHeader>
                {applicantData && (
                  <ApplicantDataWrapper>
                    <Application applicantData={applicantData} />
                    <ApplicantChatSection applicantId={applicantData.id} />
                  </ApplicantDataWrapper>
                )}
              </ApplicantInfoSection>
            </ApplicantModalInner>
          </OutsideClickHandler>
        </ApplicantModalWrapper>
      )}
    </AnimatePresence>
  );
};
const ApplicantInfoState: React.FC<{
  applicantData: IApplicantTypeWithID;
  setApplicantData: (data: IApplicantTypeWithID) => void;
}> = ({ applicantData, setApplicantData }) => {
  const applicantRef = doc(db, recruitInfo.COLLECTION, applicantData.id);

  const updateStatus = useCallback(async (status: StatusType) => {
    await updateDoc(applicantRef, {
      status: status,
    });
    setApplicantData({
      ...applicantData,
      status: status,
    });
  }, []);

  return (
    <ApplicantInfoStateWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('DOCS')}>
        <StatusBadge
          status={'DOCS'}
          disable={applicantData.status !== 'DOCS'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('REJECTED_DOCS')}>
        <StatusBadge
          status={'REJECTED_DOCS'}
          disable={applicantData.status !== 'REJECTED_DOCS'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('INTERVIEW')}>
        <StatusBadge
          status={'INTERVIEW'}
          disable={applicantData.status !== 'INTERVIEW'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('REJECTED_INTERVIEW')}>
        <StatusBadge
          status={'REJECTED_INTERVIEW'}
          disable={applicantData.status !== 'REJECTED_INTERVIEW'}
        />
      </ApplicantBadgeWrapper>
      <ApplicantBadgeWrapper onClick={() => updateStatus('HIRED')}>
        <StatusBadge
          status={'HIRED'}
          disable={applicantData.status !== 'HIRED'}
        />
      </ApplicantBadgeWrapper>
    </ApplicantInfoStateWrapper>
  );
};
const Application: React.FC<{
  applicantData: IApplicantTypeWithID;
}> = ({ applicantData }) => {
  const getQuestions = (applicantData: IApplicantTypeWithID) => {
    return {
      question1: applicantData.question1,
      question2: applicantData.question2,
      question3: applicantData.question3,
      question4: applicantData.question4,
      question5: applicantData.question5,
    };
  };
  const questionArray = Object.keys(
    getQuestions(applicantData),
  ) as QuestionType[];
  return (
    <ApplicationWrapper>
      {questionArray.map((key, index) => (
        <div key={index}>
          <ApplicationHeader>{applicationQuestions[key]}</ApplicationHeader>
          <ApplicationText>
            {getQuestions(applicantData)[key] ?? '없음'}
          </ApplicationText>
        </div>
      ))}
    </ApplicationWrapper>
  );
};

const ApplicantInfo: React.FC<{
  applicantData: IApplicantTypeWithID;
}> = ({ applicantData }) => {
  function removeHttp(address: string) {
    return address === ''
      ? '없음'
      : address.replace(/^(https?:\/\/)?(www\.)?/, '');
  }

  return (
    <ApplicantInfoInner>
      <ApplicantNameWrapper>
        <ApplicantName>{applicantData.name}</ApplicantName>
        <StatusBadge status={applicantData.status} />
      </ApplicantNameWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>이메일</ApplicantInfoText>
        <ApplicantInfoText>{applicantData.email}</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>전화번호</ApplicantInfoText>
        <ApplicantInfoText>{applicantData.phoneNumber}</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>전공</ApplicantInfoText>
        <ApplicantInfoText>{applicantData.major}</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>학번</ApplicantInfoText>
        <ApplicantInfoText>{applicantData.studentID}</ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>첨부파일</ApplicantInfoText>
        <ApplicantInfoLink href={applicantData.fileURL} target={'_blank'}>
          {removeHttp(applicantData.fileURL ?? '')}
        </ApplicantInfoLink>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>Link0</ApplicantInfoText>
        <ApplicantInfoLink href={applicantData.link0} target={'_blank'}>
          {removeHttp(applicantData.link0 ?? '')}
        </ApplicantInfoLink>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>Link1</ApplicantInfoText>
        <ApplicantInfoLink href={applicantData.link1} target={'_blank'}>
          {removeHttp(applicantData.link1 ?? '')}
        </ApplicantInfoLink>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>추천인</ApplicantInfoText>
        <ApplicantInfoText>
          {applicantData.recommender == '' ? '없음' : applicantData.recommender}
        </ApplicantInfoText>
      </ApplicantInfoTextWrapper>
      <ApplicantInfoTextWrapper>
        <ApplicantInfoText>지원 일자</ApplicantInfoText>
        <ApplicantInfoText>
          {timeFilter(applicantData.uploadDate.seconds).fullDate}
        </ApplicantInfoText>
      </ApplicantInfoTextWrapper>
    </ApplicantInfoInner>
  );
};

export default memo(ApplicantModal);
