import React from 'react';

import {
  MemberCardWrapper,
  MemberEmail,
  MemberText,
} from '@common/cards/MemberCard/styled';
import { IUserDataType } from '@type/userDataType';

const MemberCard = ({ username, email, role, memberInfo }: IUserDataType) => {
  return (
    <MemberCardWrapper>
      <MemberEmail>{email}</MemberEmail>
      <MemberText>{username}</MemberText>
      <MemberText>{role}</MemberText>
      <MemberText>{memberInfo.positionType}</MemberText>
    </MemberCardWrapper>
  );
};

export default MemberCard;
