import React, { Suspense } from 'react';

import { AnimatePresence, LayoutGroup } from 'framer-motion';
import styled from 'styled-components';

import { Background } from '../../../pages/Home/styled';
import { useFilterStore } from '../../../store/filter';
import { useTeddyUserStore } from '../../../store/teddyUser';
import { UserState } from '../../../types';
import { FilterType } from '../../../types/filterType';
import OutsideClickHandler from '../../../utils/OutSideClickHandler';
import MemberCardSkeletonSection from '../../skeletons/MemberCardSkeletonSection';
import DetailMemberCard, { DetailMemberCardWrapper } from '../DetailMemberCard';
import TeddyMemberCardSection from '../TeddyMemberCardSection';

const DashboardContainer = styled.div`
  margin-top: 50px;
  min-height: 100vh;
`;

type DashboardProps = {
  scoreboard: UserState[] | undefined;
  filter: FilterType;
};

const Dashboard = () => {
  const filter = useFilterStore((state) => state.filter);
  const setTeddyUserId = useTeddyUserStore((state) => state.setTeddyUserId);
  const teddyUser = useTeddyUserStore((state) => state.teddyUser);
  return (
    <LayoutGroup>
      <DashboardContainer>
        <AnimatePresence>
          {teddyUser.id && (
            <Background
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <OutsideClickHandler
                outsideClick={() => {
                  setTeddyUserId('');
                }}
              >
                <DetailMemberCardWrapper layoutId={teddyUser.id}>
                  <Suspense fallback={<h1>카드 로딩</h1>}>
                    <DetailMemberCard
                      id={teddyUser.id}
                      filter={filter.filterType}
                    />
                  </Suspense>
                </DetailMemberCardWrapper>
              </OutsideClickHandler>
            </Background>
          )}
        </AnimatePresence>

        <Suspense fallback={<MemberCardSkeletonSection />}>
          <TeddyMemberCardSection
            filterType={filter.filterType}
            listType={filter.listType}
          />
        </Suspense>
      </DashboardContainer>
    </LayoutGroup>
  );
};

export default Dashboard;
