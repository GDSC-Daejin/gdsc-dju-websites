import React from 'react';
import { SessionType } from '../../types/event';
import {
  SessionCardWrapper,
  SessionTime,
  SessionTitle,
  SpeakerImage,
  SpeakerInfoWrapper,
  SpeakerName,
  SpeakerRole,
  SpeakerWrapper,
} from './styled';

const SessionCard: React.FC<SessionType> = ({
  title,
  name,
  time,
  position,
  profileImage,
}) => {
  return (
    <SessionCardWrapper>
      <div>
        <SessionTitle>{title}</SessionTitle>
        <SessionTime>{time}</SessionTime>
      </div>
      <SpeakerInfo
        name={name}
        profileImage={profileImage}
        position={position}
      />
    </SessionCardWrapper>
  );
};

export const SpeakerInfo: React.FC<{
  name: string;
  position: string;
  profileImage: string;
}> = ({ name, position, profileImage }) => {
  return (
    <SpeakerWrapper>
      <SpeakerImage src={profileImage} />
      <SpeakerInfoWrapper>
        <SpeakerName>{name}</SpeakerName>
        <SpeakerRole>{position}</SpeakerRole>
      </SpeakerInfoWrapper>
    </SpeakerWrapper>
  );
};

export default SessionCard;
