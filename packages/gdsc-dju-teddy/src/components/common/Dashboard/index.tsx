import { AnimatePresence, LayoutGroup } from 'framer-motion';
import React, { useState } from 'react';
import API from '../../../api';
import {
  Background,
  CardElementWrapper,
  CardList,
} from '../../../pages/Home/styled';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import { userDataType, userStateDataType } from '../../../types';
import OutsideClickHandler from '../../../utils/OutSideClickHandler';
import GoogleSpinner from '../../GoogleSpinner';
import DetailMemberCard from '../DetailMemberCard';
import MemberCard from '../MemberCard';
import { listAnimate, listItemAnimate } from '../motions/variants';

const Dashboard: React.FC<{ scoreboard: userDataType[] | undefined }> = ({
  scoreboard,
}) => {
  const [selected, setSelected] = useState<string>('');
  const [userData, setUserData] = useState<userStateDataType | undefined>();
  const detailCardHandler = async (data: string) => {
    const res = await API.getUserState(data);
    setUserData(res.data.data);
    setSelected(data);
  };
  return (
    <LayoutGroup>
      {scoreboard && (
        <LayoutContainer>
          <ContainerInner>
            <AnimatePresence>
              {selected && (
                <>
                  {userData ? (
                    <Background
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <OutsideClickHandler
                        outsideClick={() => {
                          setSelected('');
                          setUserData(undefined);
                        }}
                      >
                        <DetailMemberCard
                          username={selected}
                          userData={userData}
                        />
                      </OutsideClickHandler>
                    </Background>
                  ) : (
                    <GoogleSpinner />
                  )}
                </>
              )}
            </AnimatePresence>
            <CardList variants={listAnimate} initial={'start'} animate={'end'}>
              {scoreboard.map((scoreboard) => (
                <CardElementWrapper
                  key={scoreboard.username}
                  variants={listItemAnimate}
                  onClick={() => {
                    setSelected(scoreboard.username);
                    detailCardHandler(scoreboard.username);
                  }}
                >
                  <MemberCard {...scoreboard} />
                </CardElementWrapper>
              ))}
            </CardList>
          </ContainerInner>
        </LayoutContainer>
      )}
    </LayoutGroup>
  );
};

export default Dashboard;
