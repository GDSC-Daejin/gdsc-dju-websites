import { AnimatePresence, LayoutGroup } from 'framer-motion';
import React, { Suspense, useState } from 'react';
import { useGetUserState } from '../../../api/hooks/useGetUserState';
import {
  Background,
  CardElementWrapper,
  CardList,
} from '../../../pages/Home/styled';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import { userDataType } from '../../../types';
import { FilterType } from '../../../types/filterType';
import OutsideClickHandler from '../../../utils/OutSideClickHandler';
import DetailMemberCard from '../DetailMemberCard';
import MemberCard from '../MemberCard';
import { listAnimate, listItemAnimate } from '../motions/variants';

const Dashboard: React.FC<{
  scoreboard: userDataType[] | undefined;
  filter: FilterType;
}> = ({ scoreboard, filter }) => {
  const [selectedId, setSelectedId] = useState<string>('');
  const { userData } = useGetUserState(filter, selectedId);
  return (
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

      {scoreboard && (
        <CardList variants={listAnimate} initial={'start'} animate={'end'}>
          {scoreboard.map((userData) => (
            <CardElementWrapper
              key={userData.id}
              variants={listItemAnimate}
              layoutId={`memberCard-${userData.displayName}`}
              onClick={() => {
                setSelectedId(userData.id);
              }}
            >
              <MemberCard userData={userData} />
            </CardElementWrapper>
          ))}
        </CardList>
      )}
    </LayoutGroup>
  );
};

export default Dashboard;
