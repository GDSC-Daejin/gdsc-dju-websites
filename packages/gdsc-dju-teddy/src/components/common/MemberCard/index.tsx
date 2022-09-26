import React from 'react';
import { userDataType } from '../../../types';
import {
  CardMargin,
  MemberCardInner,
  MemberCardWrapper,
  MemberName,
  MemberScore,
  ProfileImage,
} from './styled';

export type Props = {
  userData: userDataType;
};

const MemberCard: React.FC<Props> = ({ userData }) => {
  return (
    <>
      <MemberCardWrapper
        whileHover={{
          borderColor: 'transparent',
          background: 'white',
          boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.06)',
        }}
        layoutId={`memberCard-${userData.id}`}
      >
        <MemberCardInner>
          <ProfileImage
            src={userData.profileImage}
            layoutId={`memberCard-avatar-${userData.id}`}
          />
          <CardMargin />
          <MemberName layoutId={`memberCard-name-${userData.id}`}>
            {userData.displayName}
          </MemberName>
          <CardMargin />
          <MemberScore layoutId={`memberCard-score-${userData.id}`}>
            {userData.count}
          </MemberScore>
        </MemberCardInner>
      </MemberCardWrapper>
    </>
  );
};

export default MemberCard;
