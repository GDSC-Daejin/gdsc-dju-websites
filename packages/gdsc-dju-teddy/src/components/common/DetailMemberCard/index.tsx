import React, { useState } from 'react';
import { userStateDataType } from '../../../types';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { CardMargin, MemberName, ProfileImage } from '../MemberCard/styled';

export const DetailMemberCardInner = styled(motion.div)`
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border-style: solid;
  border-width: 0;
`;
export const DetailMemberCardWrapper = styled(motion.div)`
  background: #fcfcfc;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #f1f1f1;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.04);
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;
const Score = styled(motion.div)`
  font-size: 16px;
  font-weight: bold;
  color: #a35d29;
`;
const ScoreNameWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ScoreSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MemberBlock = styled(motion.div)`
  padding: 5px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const MemberBlockName = styled(motion.div)`
  font-size: 20px;
  color: black;
  width: 200px;
`;
const MemberBlockScore = styled(motion.div)`
  font-size: 20px;
  font-weight: bold;
  color: #a35d29;
  width: 30px;
  text-align: center;
`;
const ScoreSelectWrapper = styled(motion.div)`
  margin: 20px 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
`;
const ScoreSelect = styled(motion.div)<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 2px;
  border-bottom: 3px solid rgba(0, 0, 0, 0);
  ${({ selected }) =>
    selected &&
    css`
      border-bottom: 3px solid #a35d29;
    `}
`;

interface memberCardProps {
  username: string;
  userData: userStateDataType | undefined;
}
interface IDetailShareList {
  userData: userStateDataType;
  given: boolean;
}
interface ISelectBar {
  given: boolean;
  setGiven: (type: boolean) => void;
}

const DetailMemberCard: React.FC<memberCardProps> = ({
  username,
  userData,
}) => {
  const [given, setGiven] = useState<boolean>(true);
  return (
    <div>
      {userData && userData.user && (
        <DetailMemberCardWrapper layoutId={`memberCard-${username}`}>
          <DetailMemberCardInner>
            <>
              <ProfileWrapper>
                <ProfileImage
                  src={userData.user.avatar}
                  layoutId={`memberCard-avatar-${username}`}
                />
                <CardMargin />
                <ScoreNameWrapper>
                  <MemberName layoutId={`memberCard-name-${username}`}>
                    {userData.user.name}
                  </MemberName>
                  <Score>보낸 곰돌이: {userData.user.given}</Score>
                  <Score>받은 곰돌이: {userData.user.received}</Score>
                </ScoreNameWrapper>
              </ProfileWrapper>
              <SelectBar given={given} setGiven={setGiven} />
              <DetailShareList given={given} userData={userData} />
            </>
          </DetailMemberCardInner>
        </DetailMemberCardWrapper>
      )}
    </div>
  );
};

const SelectBar: React.FC<ISelectBar> = ({ given, setGiven }) => {
  return (
    <ScoreSelectWrapper>
      <ScoreSelect
        selected={given}
        onClick={() => {
          setGiven(true);
        }}
      >
        내가 준 사람
      </ScoreSelect>
      <ScoreSelect
        selected={!given}
        onClick={() => {
          setGiven(false);
        }}
      >
        나에게 준 사람
      </ScoreSelect>
    </ScoreSelectWrapper>
  );
};

const DetailShareList: React.FC<IDetailShareList> = ({ userData, given }) => {
  return (
    <>
      {given ? (
        <ScoreSection>
          {userData.given.map((data) => (
            <MemberBlock key={`memberBlock-${data.username}`}>
              <MemberBlockName> {data.name}</MemberBlockName>
              <MemberBlockScore>{data.scoreinc}</MemberBlockScore>
            </MemberBlock>
          ))}
        </ScoreSection>
      ) : (
        <ScoreSection>
          {userData.received.map((data) => (
            <MemberBlock key={`memberBlock-${data.username}`}>
              <MemberBlockName> {data.name}</MemberBlockName>
              <MemberBlockScore>{data.scoreinc}</MemberBlockScore>
            </MemberBlock>
          ))}
        </ScoreSection>
      )}
    </>
  );
};

export default DetailMemberCard;
