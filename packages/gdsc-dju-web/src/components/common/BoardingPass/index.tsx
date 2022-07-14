import React from 'react';
import Plane from '../../../assets/onBoardingImages/plane-blue.svg';
import WhitePlane from '../../../assets/onBoardingImages/plane-white.svg';
import WhiteGDSC from '../../../assets/onBoardingImages/gdsc-white.svg';
import GDSC from '../../../assets/onBoardingImages/gdsc-blue.svg';
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
import Gdscqr from '../../../assets/onBoardingImages/GDSCQR';
import { useRecoilState } from 'recoil';
import { onboardingUserState } from '../../../store/onboardingUser';
import DottedLine from '../../../assets/DottedLine';
import { getCurrentDate } from '../../../store/hooks/getCurrentDate';

const BoardingPass = () => {
  const [onboardingUser] = useRecoilState(onboardingUserState);

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
                    {onboardingUser.nickname}
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
                    {onboardingUser.nickname}
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
