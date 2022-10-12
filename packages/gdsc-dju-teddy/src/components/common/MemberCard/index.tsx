import React from 'react';

import { motion } from 'framer-motion';

import { User } from '../../../types';
import GradeCrown from '../GradeCrown';

import {
  MemberCardInner,
  MemberCardWrapper,
  MemberName,
  MemberScore,
  ProfileImage,
} from './styled';

export type MemberCardProps = {
  userData: User;
  grade: number;
};

const MemberCard = ({ userData, grade }: MemberCardProps) => {
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
            layoutId={`profile-image-${userData.id}`}
            variants={listItem}
          />
          {grade < 3 && <GradeCrown />}
        </motion.div>

        <MemberName layoutId={`name-${userData.id}`}>
          {userData.displayName}
        </MemberName>

        <MemberScore layoutId={`score-${userData.id}`}>
          {userData.count}
        </MemberScore>
      </MemberCardInner>
    </MemberCardWrapper>
  );
};

export default MemberCard;
