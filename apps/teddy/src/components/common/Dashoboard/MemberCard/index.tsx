import React, { useState } from 'react';
import { userDataType } from '../../../../types';
import {
  CardMargin,
  MemberCardInner,
  MemberCardWrapper,
  MemberName,
  MemberScore,
  MemberTextSection,
  ProfileImage,
  TeddyQuantity,
} from './styled';

export type MemberCardProps = {
  userData: userDataType;
  grade: number;
};

const MemberCard = ({ userData, grade }: MemberCardProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { height: '80px', opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  return (
    <MemberCardWrapper>
      <MemberCardInner>
        <ProfileImage
          src={userData.profileImage}
          layoutId={`memberCard-avatar-${userData.displayName}`}
          variants={listItem}
        />
        <CardMargin />
        <MemberTextSection>
          <MemberName layoutId={`memberCard-name-${userData.displayName}`}>
            {userData.displayName}
          </MemberName>
          <TeddyQuantity>받은 곰인형</TeddyQuantity>
          <MemberScore layoutId={`memberCard-score-${userData.displayName}`}>
            {userData.count}
          </MemberScore>
        </MemberTextSection>
      </MemberCardInner>
    </MemberCardWrapper>
  );
};

export default MemberCard;
