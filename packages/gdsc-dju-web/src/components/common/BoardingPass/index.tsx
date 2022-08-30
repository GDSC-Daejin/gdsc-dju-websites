import { onboardAtom } from '@src/store/onboardAtom';
import { useAtom } from 'jotai';
import React from 'react';
import Plane from '../../../img/onBoardingImg/plane-blue.svg';
import WhitePlane from '../../../img/onBoardingImg/plane-white.svg';
import WhiteGDSC from '../../../img/onBoardingImg/gdsc-white.svg';
import GDSC from '../../../img/onBoardingImg/gdsc-blue.svg';
import {
  BoardingPassArrivalTimeWrapper,
  BoardingPassBoardingTimeWrapper,
  BoardingPassBottomTextWrapper,
  BoardingPassCategory,
  BoardingPassCategoryText,
  BoardingPassDetailText,
  BoardingPassDetailTitle,
  BoardingPassDetailWrapper,
  BoardingPassElementWrapper,
  BoardingPassFullWrapper,
  BoardingPassGDSC,
  BoardingPassGDSCLogo,
  BoardingPassGDSCWrapper,
  BoardingPassInner,
  BoardingPassPlaneImg,
  BoardingPassQrWrapper,
  BoardingPassSeasonWrapper,
  BoardingPassTopElementWrapper,
  BoardingPassTopLine,
  BoardingPassTopTextWrapper,
  BoardingPassWrapper,
  BoardingTicketBottomElementWrapper,
  BoardingTicketBr,
  BoardingTicketCategory,
  BoardingTicketCategoryText,
  BoardingTicketDetailText,
  BoardingTicketDetailWrapper,
  BoardingTicketElementWrapper,
  BoardingTicketGDSC,
  BoardingTicketGDSCWrapper,
  BoardingTicketInner,
  BoardingTicketPlane,
  BoardingTicketTopElementWrapper,
  BoardingTicketTopTextWrapper,
  BoardingTicketWrapper,
} from './styled';
import Gdscqr from '../../../img/onBoardingImg/GDSCQR';

import DottedLine from '../../../img/DottedLine';
import { getCurrentDate } from '@pages/Onboard/OnboardHome';

const BoardingPass = () => {
  const [onboardingUser] = useAtom(onboardAtom);

  return (
    <>
      <BoardingPassFullWrapper>
        <BoardingPassWrapper>
          <BoardingPassTopLine />
          <BoardingPassInner>
            <BoardingPassElementWrapper>
              <BoardingPassGDSCWrapper>
                <BoardingPassGDSCLogo src={GDSC} />
                <BoardingPassGDSC>
                  Google Developer Student Clubs
                </BoardingPassGDSC>
              </BoardingPassGDSCWrapper>
              <BoardingPassTopTextWrapper>
                <BoardingPassTopElementWrapper>
                  <BoardingPassDetailTitle>
                    Boarding Details
                  </BoardingPassDetailTitle>
                  <BoardingPassDetailWrapper>
                    <BoardingPassDetailText>NWB</BoardingPassDetailText>
                    <BoardingPassPlaneImg src={Plane} />
                    <BoardingPassDetailText>DJU</BoardingPassDetailText>
                  </BoardingPassDetailWrapper>
                </BoardingPassTopElementWrapper>
                <BoardingPassElementWrapper>
                  <BoardingPassCategory>Name</BoardingPassCategory>
                  <BoardingPassCategoryText>
                    {onboardingUser?.nickname}
                  </BoardingPassCategoryText>
                </BoardingPassElementWrapper>
              </BoardingPassTopTextWrapper>
              <BoardingPassBottomTextWrapper>
                <BoardingPassSeasonWrapper>
                  <BoardingPassCategory>Season</BoardingPassCategory>
                  <BoardingPassCategoryText>1 th</BoardingPassCategoryText>
                </BoardingPassSeasonWrapper>
                <BoardingPassBoardingTimeWrapper>
                  <BoardingPassCategory>Boarding Time</BoardingPassCategory>
                  <BoardingPassCategoryText>
                    {getCurrentDate()}
                  </BoardingPassCategoryText>
                </BoardingPassBoardingTimeWrapper>
                <BoardingPassArrivalTimeWrapper>
                  <BoardingPassCategory>Arrival Time</BoardingPassCategory>
                  <BoardingPassCategoryText>2022. 8</BoardingPassCategoryText>
                </BoardingPassArrivalTimeWrapper>
                <BoardingPassQrWrapper>
                  <Gdscqr />
                </BoardingPassQrWrapper>
              </BoardingPassBottomTextWrapper>
            </BoardingPassElementWrapper>
            <DottedLine />
          </BoardingPassInner>
        </BoardingPassWrapper>
        <BoardingTicketWrapper>
          <BoardingTicketInner>
            <BoardingTicketGDSCWrapper>
              <BoardingPassGDSCLogo src={WhiteGDSC} />
              <BoardingTicketGDSC>
                Google Developer Student Clubs
              </BoardingTicketGDSC>
            </BoardingTicketGDSCWrapper>
            <BoardingTicketTopElementWrapper>
              <BoardingTicketTopTextWrapper>
                <BoardingTicketDetailWrapper>
                  <BoardingTicketDetailText>NWB</BoardingTicketDetailText>
                  <BoardingTicketPlane src={WhitePlane} />
                  <BoardingTicketDetailText>DJU</BoardingTicketDetailText>
                </BoardingTicketDetailWrapper>
                <BoardingTicketBr />
                <BoardingTicketElementWrapper>
                  <BoardingTicketCategory>Name</BoardingTicketCategory>
                  <BoardingTicketCategoryText>
                    {onboardingUser?.nickname}
                  </BoardingTicketCategoryText>
                </BoardingTicketElementWrapper>
              </BoardingTicketTopTextWrapper>
              <BoardingPassQrWrapper>
                <Gdscqr />
              </BoardingPassQrWrapper>
            </BoardingTicketTopElementWrapper>
            <BoardingTicketBottomElementWrapper>
              <BoardingTicketElementWrapper>
                <BoardingTicketCategory>Boarding Time</BoardingTicketCategory>
                <BoardingTicketCategoryText>
                  {getCurrentDate()}
                </BoardingTicketCategoryText>
              </BoardingTicketElementWrapper>
              <BoardingTicketElementWrapper>
                <BoardingTicketCategory>Arrival Time</BoardingTicketCategory>
                <BoardingTicketCategoryText>2022. 8</BoardingTicketCategoryText>
              </BoardingTicketElementWrapper>
            </BoardingTicketBottomElementWrapper>
          </BoardingTicketInner>
        </BoardingTicketWrapper>
      </BoardingPassFullWrapper>
    </>
  );
};

export default BoardingPass;
