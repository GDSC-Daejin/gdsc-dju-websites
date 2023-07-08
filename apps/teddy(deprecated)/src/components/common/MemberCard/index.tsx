import React from 'react';

import { motion } from 'framer-motion';

import { userDataType } from '../../../types';
import GradeCrown from '../GradeCrown';

import {
  CardMargin,
  MemberCardInner,
  MemberCardWrapper,
  MemberName,
  MemberScore,
  ProfileImage,
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
        <motion.div style={{ position: 'relative' }}>
          <ProfileImage
            src={userData.profileImage}
            layoutId={`memberCard-avatar-${userData.displayName}`}
            variants={listItem}
          />
          {grade < 3 && <GradeCrown />}
        </motion.div>
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
