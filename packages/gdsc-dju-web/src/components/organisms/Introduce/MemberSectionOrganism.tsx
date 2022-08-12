import { LayoutGroup } from 'framer-motion';
import React, { memo } from 'react';
import { memberList } from '../../../contents/MemberList';
import { MemberCardWrapper } from '../../../pages/Introduce/styled';
import { CardList } from '../../../styles/layouts';
import { listAnimate, memberCardAnimate } from '../../Variants/Variants';
import MemberCard from '../../molecules/MemberCard';

const MemberSectionOrganism = () => {
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

export default memo(MemberSectionOrganism);
