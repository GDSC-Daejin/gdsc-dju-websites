import React, { memo } from 'react';
import { listAnimate, memberCardAnimate } from '@animations/variants';
import { memberList } from '@contents/MemberList';
import MemberCard from '@molecules/MemberCard';
import { CardList } from '@styles/layouts';
import { LayoutGroup } from 'framer-motion';

import { MemberCardWrapper } from './styled';

const MemberSection = () => {
  return (
    <LayoutGroup>
      <CardList variants={listAnimate}>
        {memberList.map((memberInfo, id) => (
          <MemberCardWrapper
            key={id}
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

export default memo(MemberSection);
