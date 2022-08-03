import { ColorToken } from '@gdsc-dju/styled-components';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import React, { memo, useState } from 'react';
import { useLocation } from 'react-router';
import styled, { css } from 'styled-components';
import { IMemberCardType } from '../../../types/member';
import { positionColorHandler } from '../../../utils/positionColorHandler';
import { memberCardAnimate } from '../Variants/Variants';

const MemberCardContainer = styled(motion.div)<{ isSquare: boolean }>`
  position: relative;
  min-width: 250px;
  min-height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  ${({ isSquare }) =>
    isSquare &&
    css`
      min-height: 250px;
    `}
`;
const MemberCardInner = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: max-content;
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
  z-index: -1;
  height: 300px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position-x: 50%;
  background-position-y: 50%;
  border-radius: 16px;
  ${({ isSquare }) =>
    isSquare &&
    css`
      height: 250px;
    `}
`;
const Position = styled(motion.p)<{ positionColor: ColorToken | undefined }>`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: 24px;
  ${({ positionColor }) =>
    positionColor &&
    css`
      color: ${({ theme }) => theme.colors[positionColor]};
    `};
`;
const Nickname = styled(motion.p)`
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: #fff;
`;
const Name = styled(motion.p)`
  height: 24px;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.body1};
  line-height: 24px;
  color: #fff;
`;
const Role = styled(motion.p)`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.blue900};
`;
const CardText = styled(motion.div)`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: #fff;
  display: block;
`;
const CardTextWrapper = styled(motion.div)<{ isClicked?: boolean }>`
  position: absolute;
  padding: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0) 40%;
  border: 0 solid transparent;
  border-radius: 16px;
  ${({ isClicked }) =>
    isClicked
      ? css`
          background: rgba(0, 0, 0, 0.4) 40%;
          backdrop-filter: blur(2px);
        `
      : css`
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.1) 40%,
            rgba(0, 0, 0, 0.4) 100%
          );
          transition: background 0.2s ease-in-out;
        `}
`;

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
          <MemberCardInner
            layoutId={`card-inner-${nickname}-${location.pathname}`}
          >
            <CardTextWrapper isClicked={isClicked}>
              {!isClicked ? (
                <>
                  <Nickname
                    layoutId={`nickname-${nickname}-${location.pathname}`}
                  >
                    {nickname}
                  </Nickname>
                  <Name layoutId={`name-${nickname}-${location.pathname}`}>
                    {name}
                  </Name>
                  <Role
                    layoutId={`role-${nickname}-${location.pathname}`}
                    variants={memberCardAnimate}
                  >
                    {role}
                  </Role>
                </>
              ) : (
                <>
                  <Position
                    layoutId={`position-${nickname}-${location.pathname}`}
                    variants={memberCardAnimate}
                    positionColor={positionColorHandler(position)}
                  >
                    {position}
                  </Position>
                  <Nickname
                    layoutId={`nickname-${nickname}-${location.pathname}`}
                  >
                    {nickname}
                  </Nickname>
                  <Name layoutId={`name-${nickname}-${location.pathname}`}>
                    {name}
                  </Name>
                  <CardText
                    layoutId={`text-${nickname}-${location.pathname}`}
                    variants={memberCardAnimate}
                  >
                    {text}
                  </CardText>
                </>
              )}
            </CardTextWrapper>
            <picture>
              <MemberCardImage
                alt={`${nickname}-profile-image`}
                src={image}
                isSquare={isSquare}
                layoutId={`background-${nickname}-${location.pathname}`}
              />
            </picture>
          </MemberCardInner>
        </MemberCardContainer>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default memo(MemberCardV2);
