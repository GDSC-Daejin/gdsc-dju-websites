import React, { memo, useState } from 'react';
import { useLocation } from 'react-router';
import { memberCardAnimate } from '@animations/variants';
import { IMemberCardType } from '@type/member';
import { positionColorHandler } from '@utils/positionColorHandler';
import { AnimatePresence, LayoutGroup } from 'framer-motion';

import {
  CardText,
  CardTextWrapper,
  MemberCardContainer,
  MemberCardImage,
  MemberCardInner,
  Name,
  Nickname,
  Position,
  Role,
} from './styled';

interface IMemberCardProps {
  member: IMemberCardType;
  isSquare?: boolean;
}

const MemberCard: React.FC<IMemberCardProps> = ({
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
          onMouseOver={() => setIsClicked(true)}
          onMouseLeave={() => setIsClicked(false)}
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

export default memo(MemberCard);
