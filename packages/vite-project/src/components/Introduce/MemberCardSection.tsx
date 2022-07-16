import React, { Suspense } from 'react';
import { CardList } from '../../styles/layouts';
import { listAnimate, memberCardAnimate } from '../common/Variants/Variants';
import { memberList } from '../../apis/pageData/MemberList';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { MemberCardWrapper } from '../../pages/Introduce/styled';
import MemberCardV2 from '../common/MemberCardV2';

const MemberCardSection = () => {
  return (
    <LayoutGroup>
      <CardList variants={listAnimate}>
        {memberList.map((memberInfo, id) => (
          <AnimatePresence key={id + 1}>
            <MemberCardWrapper
              variants={memberCardAnimate}
              initial={'start'}
              whileInView={'end'}
              viewport={{ once: true }}
            >
              <Suspense fallback={<>loading</>}>
                <MemberCardV2 member={memberInfo} isSquare={true} />
              </Suspense>
            </MemberCardWrapper>
          </AnimatePresence>
        ))}
      </CardList>
    </LayoutGroup>
  );
};

export default MemberCardSection;
