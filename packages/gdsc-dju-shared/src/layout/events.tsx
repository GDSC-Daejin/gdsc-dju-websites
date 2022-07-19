import React from 'react';
import Event from '../components/Event';
import Session from '../components/Session';
import { eventsData } from '../siteDatas/eventsData';
import { ContainerInner, LayoutContainer, Title } from '../styles/layouts';

import {
  EventContour,
  EventLayoutWrapper,
  EventSection,
  EventsWrapper,
} from './events.styled';

const EventsLayout = () => {
  return (
    <EventLayoutWrapper>
      <LayoutContainer>
        <ContainerInner>
          <Title>Events</Title>
        </ContainerInner>
      </LayoutContainer>
      <EventSection>
        {eventsData.map((data, id) => (
          <EventsWrapper key={id}>
            {data.type == 'session' ? (
              <Session {...data} />
            ) : (
              <Event {...data} />
            )}
            <EventContour last={id === eventsData.length - 1} />
          </EventsWrapper>
        ))}
      </EventSection>
    </EventLayoutWrapper>
  );
};

export default EventsLayout;
