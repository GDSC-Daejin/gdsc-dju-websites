import React, { useState } from 'react';

import { AnimatePresence, LayoutGroup } from 'framer-motion';
import styled from 'styled-components';

import { useGetUserState } from '../../../api/hooks/useGetUserState';
import {
  Background,
  CardElementWrapper,
  CardList,
} from '../../../pages/Home/styled';
import { userDataType } from '../../../types';
import { FilterType } from '../../../types/filterType';
import OutsideClickHandler from '../../../utils/OutSideClickHandler';
import { dataSort } from '../../../utils/sortData';
import DetailMemberCard from '../DetailMemberCard';
import MemberCard from '../MemberCard';
import { listAnimate, listItemAnimate } from '../motions/variants';
import Notice from '../Notice';

const DashboardContainer = styled.div`
  margin-top: 50px;
`;

type DashboardProps = {
  scoreboard: userDataType[] | undefined;
  filter: FilterType;
};

const Dashboard = ({ scoreboard, filter }: DashboardProps) => {
  const [selectedId, setSelectedId] = useState<string>('');
  const { userData } = useGetUserState(filter, selectedId);

  return (
    <DashboardContainer>
      <LayoutGroup>
        <AnimatePresence>
          {selectedId && (
            <Background
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <OutsideClickHandler
                outsideClick={() => {
                  setSelectedId('');
                }}
              >
                {userData && <DetailMemberCard userData={userData} />}
              </OutsideClickHandler>
            </Background>
          )}
        </AnimatePresence>

        {scoreboard ? (
          <CardList variants={listAnimate} initial={'start'} animate={'end'}>
            {dataSort(scoreboard, 'count').map((userData, index) => (
              <CardElementWrapper
                key={userData.id}
                variants={listItemAnimate}
                layoutId={`memberCard-${userData.displayName}`}
                onClick={() => {
                  setSelectedId(userData.id);
                }}
              >
                <MemberCard userData={userData} grade={index} />
              </CardElementWrapper>
            ))}
          </CardList>
        ) : (
          <Notice>칭찬한 멤버가 없어요.</Notice>
        )}
      </LayoutGroup>
    </DashboardContainer>
  );
};

export default Dashboard;
