import React from 'react';

import {
  ApplyCardBlueLine,
  ApplyCardContent,
  ApplyCardContentWrapper,
  ApplyCardInner,
  ApplyCardWrapper,
} from './styled';

interface Props {
  name?: string;
  email?: string;
  phoneNumber?: string;
  position?: string;
}

const ApplySuccessCard = (props: Props) => {
  const { name, email, phoneNumber, position } = props;
  return (
    <ApplyCardWrapper>
      <ApplyCardBlueLine />
      <ApplyCardInner>
        <ApplyCardContentWrapper>
          <ApplyCardContent>이름</ApplyCardContent>
          <ApplyCardContent>{name}</ApplyCardContent>
        </ApplyCardContentWrapper>
        <ApplyCardContentWrapper>
          <ApplyCardContent>포지션</ApplyCardContent>
          <ApplyCardContent>{position}</ApplyCardContent>
        </ApplyCardContentWrapper>
        <ApplyCardContentWrapper>
          <ApplyCardContent>이메일</ApplyCardContent>
          <ApplyCardContent>{email}</ApplyCardContent>
        </ApplyCardContentWrapper>
        <ApplyCardContentWrapper>
          <ApplyCardContent>전화번호</ApplyCardContent>
          <ApplyCardContent>{phoneNumber}</ApplyCardContent>
        </ApplyCardContentWrapper>
      </ApplyCardInner>
    </ApplyCardWrapper>
  );
};

export default ApplySuccessCard;
