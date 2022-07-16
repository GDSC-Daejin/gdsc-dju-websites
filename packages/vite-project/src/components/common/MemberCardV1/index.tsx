import React from 'react';
import {
  MemberImg,
  Name,
  Nickname,
  Role,
  Skeleton,
  StyledMemberCard,
} from './styled';
import { memberDataType } from '../../../types/member';

interface IMemberCardType extends memberDataType {
  id: number;
}

const MemberCardV1: React.FC<IMemberCardType> = ({
  id,
  name,
  nickname,
  role,
  image,
}) => {
  return (
    <StyledMemberCard layoutId={String(id)}>
      {image ? (
        <MemberImg src={image} layoutId={`memberImage-section-${String(id)}`} />
      ) : (
        <Skeleton layoutId={`memberImage-section-${String(id)}`} />
      )}
      <Nickname layoutId={`nickname-section-${String(id)}`}>
        {nickname}
      </Nickname>
      <Name layoutId={`name-section-${String(id)}`}>{name}</Name>
      <Role layoutId={`role-section-${String(id)}`}>{role}</Role>
    </StyledMemberCard>
  );
};
export default MemberCardV1;
