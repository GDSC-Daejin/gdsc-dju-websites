import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BoardingPassFullWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;
export const BoardingPassWrapper = styled(motion.div)`
  width: 700px;
  height: 300px;
  background: #f4f6fa;
  border-radius: 30px;
  border-width: 0px;
  border-style: solid;
`;
export const BoardingPassTopLine = styled(motion.div)`
  width: 700px;
  height: 30px;
  background: #4385f3;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
export const BoardingPassInner = styled(motion.div)`
  display: flex;
  flex-direction: row;
  padding-left: 40px;
`;
export const BoardingPassTopElementWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin-right: 76px;
`;
export const BoardingPassSeasonWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin-right: 120px;
`;
export const BoardingPassBoardingTimeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin-right: 80px;
`;
export const BoardingPassArrivalTimeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin-right: 60px;
`;
export const BoardingPassElementWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 658px;
`;
export const BoardingPassQrWrapper = styled(motion.div)`
  height: 96px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 32px;
`;
export const BoardingPassGDSC = styled(motion.div)`
  font-size: 10px;
  color: #4385f3;
  font-weight: bold;
`;
export const BoardingPassDetailTitle = styled(motion.div)`
  font-weight: bold;
  font-size: 10px;
  margin-top: 23px;
  color: #4385f3;
`;
export const BoardingPassDetailWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-top: 15px;
`;
export const BoardingPassDetailText = styled(motion.div)`
  font-weight: bold;
  font-size: 40px;
`;
export const BoardingPassPlaneImg = styled(motion.img)`
  height: 40px;
`;
export const BoardingPassTopTextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BoardingPassBottomTextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BoardingPassCategory = styled(motion.div)`
  font-size: 12px;
  font-weight: bold;
  opacity: 30%;
  margin-top: 26px;
`;
export const BoardingPassCategoryText = styled(motion.div)`
  margin-top: 18px;
  font-size: 30px;
`;
export const BoardingTicketWrapper = styled(motion.div)`
  width: 350px;
  height: 300px;
  background: #304260;
  color: white;
  border-style: solid;
  border-width: 0px;
  border-radius: 30px;
`;
export const BoardingTicketInner = styled.div`
  margin: 33px 29px;
`;
export const BoardingTicketGDSCWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BoardingPassGDSCWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 11px;
  margin-top: 26px;
  align-items: center;
`;
export const BoardingPassGDSCLogo = styled.img`
  height: 11px;
  margin-right: 14px;
`;

export const BoardingTicketGDSC = styled.div`
  font-size: 10px;
`;
export const BoardingTicketTopElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const BoardingTicketTopTextWrapper = styled.div`
  margin-right: 20px;
`;
export const BoardingTicketDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 158px;
  margin-top: 20px;
`;
export const BoardingTicketDetailText = styled.div`
  font-size: 20px;
`;
export const BoardingTicketPlane = styled.img`
  height: 20px;
`;
export const BoardingTicketBr = styled.div`
  height: 1px;
  width: 188px;
  margin-top: 20px;
  margin-bottom: 20px;
  background: #f4f6fa;
  opacity: 10%;
`;
export const BoardingTicketElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  margin-right: 30px;
`;
export const BoardingTicketBottomElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const BoardingTicketCategory = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #f4f6fa;
  opacity: 30%;
  margin-bottom: 15px;
`;
export const BoardingTicketCategoryText = styled.div`
  font-size: 20px;
  color: #f4f6fa;
`;
