import { LayoutGroup } from 'framer-motion';
import React, { memo } from 'react';
import { memberList } from '../../pageData/MemberList';
import { MemberCardWrapper } from '../../pages/Introduce/styled';
import { CardList } from '../../styles/layouts';
import MemberCard from '../common/MemberCard';
import { listAnimate, memberCardAnimate } from '../common/Variants/Variants';

const MemberCardSection = () => {
  return (
    <LayoutGroup>
      <CardList variants={listAnimate}>
        {memberList.map((memberInfo, id) => (
          <MemberCardWrapper
            variants={memberCardAnimate}
            initial={'start'}
            whileInView={'end'}
            viewport={{ once: true }}
          >
            <MemberCard member={memberInfo} isSquare={true} />
          </MemberCardWrapper>
        ))}
      </CardList>
    </LayoutGroup>
  );
};

export default memo(MemberCardSection);
