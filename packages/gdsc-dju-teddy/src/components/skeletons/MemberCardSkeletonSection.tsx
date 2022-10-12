import React from 'react';

import { CardList } from '../../pages/Home/styled';
import { MemberCardInner } from '../common/MemberCard/styled';

import Skeleton from './Skeleton';

const MemberCardSkeletonSection = () => {
  const array = new Array(10).fill(0);
  return (
    <CardList>
      {array.map((_, index) => (
        <MemberCardInner key={index}>
          <Skeleton radius={'50%'} width={'80px'} height={'80px'} />
          <Skeleton radius={'10px'} width={'100px'} height={'16px'} />
          <Skeleton radius={'10px'} width={'40px'} height={'20px'} />
        </MemberCardInner>
      ))}
    </CardList>
  );
};

export default MemberCardSkeletonSection;
