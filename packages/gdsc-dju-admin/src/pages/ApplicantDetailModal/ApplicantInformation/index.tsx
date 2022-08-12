import React from 'react';
import StatusBadge from '../../../components/common/Statusbadge';
import { IApplicantTypeWithID } from '../../../types/applicant';
import { timeFilter } from '../../../utils/timeFilter';

import {
  ApplicantInfoInner,
  ApplicantInfoLink,
  ApplicantInfoText,
  ApplicantInfoTextWrapper,
  ApplicantName,
  ApplicantNameWrapper,
} from './styled';

const ApplicantInfoCard: React.FC<{
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

export default ApplicantInfoCard;
