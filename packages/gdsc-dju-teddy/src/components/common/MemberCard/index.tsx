import React, { useState } from 'react';
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
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
  };
  return (
    <MemberCardWrapper>
      <MemberCardInner>
        <ProfileImage
          src={userData.profileImage}
          layoutId={`memberCard-avatar-${userData.displayName}`}
          initial={{ height: '16rem', opacity: 0 }}
          // style={{ height: imageLoading ? "6rem" : "auto" }}
          animate={{
            height: imageLoading ? '16rem' : 'auto',
            opacity: imageLoading ? 0 : 1,
          }}
          transition={{
            height: { delay: 0, duration: 0.4 },
            opacity: { delay: 0.5, duration: 0.4 },
          }}
          onLoad={imageLoaded}
        />
        <CardMargin />
        <MemberName layoutId={`memberCard-name-${userData.displayName}`}>
          {userData.displayName}
        </MemberName>
        <CardMargin />
        <MemberScore layoutId={`memberCard-score-${userData.displayName}`}>
          {userData.count}
        </MemberScore>
      </MemberCardInner>
    </MemberCardWrapper>
  );
};

export default MemberCard;
