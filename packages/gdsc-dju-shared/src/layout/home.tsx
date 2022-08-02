import React from 'react';
import { useNavigate } from 'react-router-dom';
import { eventsData } from '../siteDatas/eventsData';
import { checkEventEnd } from '../utils/checkEventEnd';
import { eventDateFilter, eventTimeFilter } from '../utils/eventDateFilter';
import {
  ButtonWrapper,
  HomeLayoutWrapper,
  HomeTitle,
  StyledButton,
  StyledDate,
  StyledMoreButton,
  StyledTime,
} from './home.styled';

const HomeLayout = () => {
  const currentEvent = eventsData[0];
  return (
    <HomeLayoutWrapper>
      <HomeTitle>{currentEvent.title}</HomeTitle>
      <StyledDate>{currentEvent.description}</StyledDate>
      <StyledTime>
        {eventDateFilter(currentEvent.start, currentEvent.end)}
        {' | '}
        {eventTimeFilter(currentEvent.start, currentEvent.end)}
      </StyledTime>
      <ButtonWrapper>
        <StyledButton
          isEnd={checkEventEnd(currentEvent.end)}
          onClick={() =>
            !checkEventEnd(currentEvent.end) &&
            window.open(currentEvent.applyLink + 'register/tickets', '_blank')
          }
          eventType={currentEvent.type}
        >
          {!checkEventEnd(currentEvent.end)
            ? currentEvent.type == 'session'
              ? '세션 신청하기'
              : '이벤트 신청하기'
            : '종료된 이벤트에요'}
        </StyledButton>
        <StyledMoreButton
          onClick={() => window.open('https://gdsc-dju.web.app/', '_blank')}
        >
          더 알아보기
        </StyledMoreButton>
      </ButtonWrapper>
    </HomeLayoutWrapper>
  );
};

export default HomeLayout;
