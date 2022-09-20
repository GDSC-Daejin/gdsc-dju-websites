import { onBoardingData } from '@src/contents/onboard';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import airplane from '../../../assets/icons/sideAirplaneIcon.svg';

const AirplaneIcon = styled(motion.img)<{ top: number }>`
  width: 36px;
  height: 36px;
  position: relative;
  top: -${({ top }) => top}px;
`;
const AirplaneWrapper = styled(motion.li)<{ isActive: boolean }>`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 4px;
  opacity: 0.2;
  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
    `}
`;
const BreadCrumbContour = styled.hr`
  border: 0;
  border-bottom: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.blue900};
  height: 0;
  width: 100%;
`;

const BreadCrumb = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${({ theme }) => theme.colors.blue900};
  text-transform: capitalize;
`;
const BreadCrumbWrapper = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: max-content;
  gap: 10px;
`;
interface AirplaneBreadcrumbProps {
  currentRoute: string;
}

const AirplaneBreadcrumb = ({ currentRoute }: AirplaneBreadcrumbProps) => {
  return (
    <AnimatePresence>
      <LayoutGroup>
        <nav>
          <BreadCrumbWrapper>
            {onBoardingData.map((data, index) => {
              const isRoute = currentRoute.includes(data.id);
              const progress = index / onBoardingData.length;
              const rotate = 30 * progress;
              const height = 50 * progress;
              return (
                <AirplaneWrapper key={data.id} isActive={isRoute} layout>
                  {isRoute && (
                    <AirplaneIcon
                      src={airplane}
                      layoutId={'airplane'}
                      top={height}
                      initial={{ opacity: 0 }}
                      animate={{
                        rotate: -rotate,
                        opacity: 1,
                      }}
                    />
                  )}
                  <BreadCrumbContour />
                  <BreadCrumb to={`/onboard/init/${data.id}`}>
                    {data.id.replace('-', ' ')}
                  </BreadCrumb>
                </AirplaneWrapper>
              );
            })}
          </BreadCrumbWrapper>
        </nav>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default AirplaneBreadcrumb;
