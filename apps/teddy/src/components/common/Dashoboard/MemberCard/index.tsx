import { useCurrentTheme, useTheme } from '@gdsc-dju/gds-theme';
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
  isSub: boolean;
};

const MemberCard = ({ userData, grade, isSub }: MemberCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [theme] = useCurrentTheme();

  const handleImageError = () => {
    setImageError(true);
  };

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
      <MemberCardInner isSub={isSub} theme={theme}>
        {imageError ? (
          <ProfileImage
            isSub={isSub}
            src="https://cdn.pixabay.com/photo/2023/04/06/15/08/rabbit-7904131_1280.jpg"
            alt="User profile image"
            // Add any styling or class names as needed for the replacement image
          />
        ) : (
          <ProfileImage
            isSub={isSub}
            src={userData.profileImage}
            alt="User profile image"
            layoutId={`memberCard-avatar-${userData.displayName}`}
            variants={listItem}
            onError={handleImageError}
          />
        )}
        <CardMargin isSub={isSub} />
        <MemberTextSection>
          <MemberName
            isSub={isSub}
            layoutId={`memberCard-name-${userData.displayName}`}
          >
            {userData.displayName}
          </MemberName>
          {!isSub && <TeddyQuantity isSub={isSub}>받은 곰인형</TeddyQuantity>}

          <MemberScore
            isSub={isSub}
            layoutId={`memberCard-score-${userData.displayName}`}
          >
            {userData.count}
          </MemberScore>
        </MemberTextSection>
      </MemberCardInner>
    </MemberCardWrapper>
  );
};

export default MemberCard;
