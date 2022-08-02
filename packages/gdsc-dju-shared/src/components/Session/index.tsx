import React, { useEffect, useRef, useState } from 'react';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';
import { SessionEventType } from '../../types/event';
import { checkEventEnd } from '../../utils/checkEventEnd';
import { google } from '../../utils/createGoogleCalendarLink';
import { eventDateFilter, eventTimeFilter } from '../../utils/eventDateFilter';
import CalendarButton, { EventButton } from '../common/Button';

import { StyledSectionBar } from '../Event/styled';
import SessionCard from '../SessionCard';

import {
  EventApplyWrapper,
  EventDate,
  EventDateWrapper,
  EventDescription,
  EventInfoWrapper,
  EventSectionWrapper,
  EventTime,
  EventTitle,
  SessionCardSection,
  SessionCardWrapper,
  SessionHeader,
} from './styled';

const Session: React.FC<SessionEventType> = ({
  title,
  description,
  start,
  end,
  applyLink,
  sessions,
}) => {
  const [sectionWidth, setSectionWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState({
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const sessionRef = useRef<HTMLDivElement>(null);

  const mouseDownHandler = function (e: React.MouseEvent<HTMLDivElement>) {
    if (sessionRef.current) {
      sessionRef.current.style.cursor = 'grabbing';
      sessionRef.current.style.userSelect = 'none';
      setScrollPosition({
        // The current scroll
        left: sessionRef.current.scrollLeft,
        top: sessionRef.current.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      });
    }
  };
  const mouseMoveHandler = function (e: React.MouseEvent<HTMLDivElement>) {
    // How far the mouse has been moved
    const dx = e.clientX - scrollPosition.x;
    const dy = e.clientY - scrollPosition.y;
    if (sessionRef.current && sessionRef.current.style.cursor == 'grabbing') {
      sessionRef.current.scrollTop = scrollPosition.top - dy;
      sessionRef.current.scrollLeft = scrollPosition.left - dx;
    }
  };
  const mouseUpHandler = function () {
    if (sessionRef.current) {
      sessionRef.current.style.cursor = 'grab';
      sessionRef.current.style.removeProperty('user-select');
    }
  };

  useEffect(() => {
    sectionRef.current && setSectionWidth(sectionRef.current?.offsetWidth);
  }, [sectionRef]);
  return (
    <EventSectionWrapper>
      <LayoutContainer>
        <ContainerInner ref={sectionRef}>
          <SessionHeader>
            <EventInfoWrapper>
              <EventTitle>{title}</EventTitle>
              <EventDescription>{description}</EventDescription>
              <EventDateWrapper>
                <EventDate type={'session'}>
                  {eventDateFilter(start, end)}
                </EventDate>
                <StyledSectionBar />
                <EventTime>{eventTimeFilter(start, end)}</EventTime>
              </EventDateWrapper>
            </EventInfoWrapper>
            <EventApplyWrapper>
              <EventButton
                onClick={() =>
                  !checkEventEnd(end) &&
                  window.open(applyLink + 'register/tickets', '_blank')
                }
                isEnd={checkEventEnd(end)}
              >
                {checkEventEnd(end) ? '종료된 세션' : '세션 신청하기'}
              </EventButton>
              <CalendarButton
                isEnd={checkEventEnd(end)}
                onClick={() =>
                  !checkEventEnd(end) &&
                  window.open(
                    google({
                      start: `${start} +09:00`,
                      end: `${end} +09:00`,
                      title: title,
                      description: description,
                      organizer: {
                        name: 'GDSC DJU',
                        email: 'gdscdju@gmail.com',
                      },
                    }),
                    '_blank',
                  )
                }
              >
                구글 캘린더에 추가하기
              </CalendarButton>
            </EventApplyWrapper>
          </SessionHeader>
        </ContainerInner>
      </LayoutContainer>
      <SessionCardSection
        ref={sessionRef}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onMouseMove={mouseMoveHandler}
      >
        {sessions &&
          sessions.map((sessionData, id) => (
            <SessionCardWrapper key={id} sectionWidth={`${sectionWidth}px`}>
              <SessionCard {...sessionData} />
            </SessionCardWrapper>
          ))}
      </SessionCardSection>
    </EventSectionWrapper>
  );
};

export default Session;
