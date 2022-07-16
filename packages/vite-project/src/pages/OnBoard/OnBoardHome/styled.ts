import { motion } from 'framer-motion';

import styled from 'styled-components';

export const OnboardingTopLogoWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const OnboardingLogo = styled(motion.img)`
  height: 22px;
`;

export const OnboardingTopText = styled(motion.div)`
  font-size: 23px;
  color: #4e4e4e;
  margin-left: 30px;
  font-weight: normal;
`;
export const OnboardingTitle = styled(motion.div)<any>`
  font-size: 65px;
  font-weight: 700;
  color: ${(props) => props.colors};
  margin-left: ${(props) => props.marginLeft}px;
`;
export const OnboardingSubTitle = styled(motion.div)`
  font-size: 19px;
  font-weight: bold;
  color: #4385f3;
`;
export const OnboardingPlaceWrapper = styled(motion.div)`
  margin-top: 19px;
  display: flex;
  flex-direction: row;
`;
export const OnboardingTravel = styled(motion.div)`
  font-size: 31px;
  font-weight: 700;
`;
export const OnboardingTravelWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 9px;
`;
export const OnboardingTravelImage = styled(motion.img)`
  height: 40px;
  margin: 0px 40px;
`;

export const OnboardingTitleWrapper = styled(motion.div)`
  margin-top: 29px;
`;
export const OnboardingBottomWrapper = styled(motion.div)`
  margin-top: 140px;
`;
export const OnboardingDetailWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-left: 85px;
`;
export const OnboardingDetailTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  opacity: 30%;
`;
export const OnboardingDetailText = styled.div`
  font-size: 22px;
  font-weight: bold;
`;
export const OnBoardingButton = styled(motion.button)`
  margin-left: 142px;
  width: 221px;
  height: 67px;
  border-radius: 42px;
  border-style: solid;
  border-width: 0px;
  background: #4385f3;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
