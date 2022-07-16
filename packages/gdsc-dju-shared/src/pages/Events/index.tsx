import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { pageAnimate, pageTransitionAnimate } from '../../components/animation';
import EventLayout from '../../layout/events';

const EventsContainer = styled(motion.div)``;

const Events = () => {
  return (
    <EventsContainer
      initial="start"
      animate="end"
      exit="out"
      variants={pageTransitionAnimate}
      transition={pageAnimate}
    >
      <EventLayout />
    </EventsContainer>
  );
};

export default Events;
