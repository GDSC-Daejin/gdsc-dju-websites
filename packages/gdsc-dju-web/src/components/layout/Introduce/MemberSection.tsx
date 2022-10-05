import React, { memo } from 'react';
import { LayoutGroup } from 'framer-motion';
import { listAnimate, memberCardAnimate } from '@animations/variants';
import { memberList } from '@src/contents/MemberList';
import { CardList } from '@styles/layouts';

import MemberCard from '../../common/MemberCard';
import { MemberCardWrapper } from '@pages/Introduce/styled';

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
