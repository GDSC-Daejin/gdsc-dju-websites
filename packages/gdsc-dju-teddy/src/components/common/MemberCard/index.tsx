import React from 'react';
import {
  CardMargin,
  MemberCardInner,
  MemberCardWrapper,
  MemberName,
  MemberScore,
  ProfileImage,
} from './styled';

export type Iprops = {
  username: string;
  name: string;
  avatar: string;
  memberType: string;
  score: number;
};

const MemberCard: React.FC<Iprops> = ({
  username,
  name,
  avatar,
  memberType,
  score,
}) => {
  return (
    <>
      <MemberCardWrapper
        whileHover={{
          borderColor: 'transparent',
          background: 'white',
          boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.06)',
        }}
        layoutId={`memberCard-${username}`}
      >
        <MemberCardInner>
          <ProfileImage
            src={avatar}
            layoutId={`memberCard-avatar-${username}`}
          />
          <CardMargin />
          <MemberName layoutId={`memberCard-name-${username}`}>
            {name}
          </MemberName>
          <CardMargin />
          <MemberScore layoutId={`memberCard-score-${username}`}>
            {score}
          </MemberScore>
        </MemberCardInner>
      </MemberCardWrapper>
    </>
  );
};

export default MemberCard;
