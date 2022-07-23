import React, { memo, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { IMemberCardType } from '../../../types/member';
import { positionColorHandler } from '../../../utils/positionColorHandler';
import { useLocation } from 'react-router';

const MemberCardContainer = styled(motion.div)<{ isSquare: boolean }>`
  position: relative;
  width: 250px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  ${({ isSquare }) =>
    isSquare &&
    css`
      height: 250px;
    `}
`;
const MemberCardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  z-index: 0;
`;
const MemberCardImage = styled(motion.img)<{ isSquare: boolean }>`
  position: absolute;
  z-index: -1;
  height: 300px;
  background-position-x: 50%;
  background-position-y: 50%;
  border-radius: 16px;
  ${({ isSquare }) =>
    isSquare &&
    css`
      height: 250px;
    `}
`;
const Position = styled(motion.p)<{ positionColor?: string }>`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: 24px;
  color: ${({ positionColor }) => positionColor};
`;
const Nickname = styled(motion.p)`
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: ${({ theme }) => theme.colors.white};
`;
const Name = styled(motion.p)`
  height: 24px;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.body1};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;
const Role = styled(motion.p)`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.tossBlue};
`;
const CardText = styled(motion.div)`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.white};
  display: block;
`;
const CardTextWrapper = styled(motion.div)<{ isClicked?: boolean }>`
  position: absolute;
  padding: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.greyOpacity100};
  border: 0 solid transparent;
  border-radius: 16px;
  ${({ isClicked }) =>
    isClicked
      ? css`
          background: ${({ theme }) => theme.colors.greyOpacity500};
          backdrop-filter: blur(2px);
        `
      : css`
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0%,
            ${({ theme }) => theme.colors.greyOpacity50} 40%,
            ${({ theme }) => theme.colors.greyOpacity400} 100%
          );
          transition: background 0.2s ease-in-out;
        `}
`;
const memberCardAnimate = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
interface IMemberCardProps {
  member: IMemberCardType;
  isSquare?: boolean;
}

const MemberCardV2: React.FC<IMemberCardProps> = ({
  member,
  isSquare = false,
}) => {
  const { name, nickname, role, image, position, text } = member;
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const randomKey = useMemo(
    () => Math.random().toString(),
    [location.pathname],
  );
  return (
    <AnimatePresence>
      <LayoutGroup>
        <MemberCardContainer
          onClick={() => setIsClicked(!isClicked)}
          variants={memberCardAnimate}
          initial="hidden"
          animate={'visible'}
          exit="exit"
          isSquare={isSquare}
        >
          <picture>
            <MemberCardInner layoutId={`card-inner-${nickname}-${randomKey}`}>
              <CardTextWrapper isClicked={isClicked}>
                {!isClicked ? (
                  <>
                    <Nickname layoutId={`nickname-${nickname}-${randomKey}`}>
                      {nickname}
                    </Nickname>
                    <Name layoutId={`name-${nickname}-${randomKey}`}>
                      {name}
                    </Name>
                    <Role
                      layoutId={`role-${nickname}-${randomKey}`}
                      variants={memberCardAnimate}
                    >
                      {role}
                    </Role>
                  </>
                ) : (
                  <>
                    <Position
                      layoutId={`position-${nickname}-${randomKey}`}
                      variants={memberCardAnimate}
                      positionColor={positionColorHandler(position)}
                    >
                      {position}
                    </Position>
                    <Nickname layoutId={`nickname-${nickname}-${randomKey}`}>
                      {nickname}
                    </Nickname>
                    <Name layoutId={`name-${nickname}-${randomKey}`}>
                      {name}
                    </Name>
                    <CardText
                      layoutId={`text-${nickname}-${randomKey}`}
                      variants={memberCardAnimate}
                    >
                      {text}
                    </CardText>
                  </>
                )}
              </CardTextWrapper>

              <MemberCardImage
                alt={`${nickname}-profile-image`}
                src={image}
                isSquare={isSquare}
                layoutId={`background-${nickname}-${randomKey}`}
              />
            </MemberCardInner>
          </picture>
        </MemberCardContainer>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default memo(MemberCardV2);
