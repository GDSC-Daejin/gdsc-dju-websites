import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ApplicantModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;
export const ApplicantModalInner = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;

  width: 1300px;
  height: 800px;
  border-radius: 20px;
`;
export const ApplicantInfoWrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey100};
  height: 100%;
  width: 280px;
  padding: 10px 10px;
  box-sizing: border-box;
  border-radius: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;
export const ApplicantInfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ApplicantInfoHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 14px;
  flex-wrap: wrap;
  gap: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
`;
export const ApplicantDataWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const ApplicantInfoInner = styled.div`
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 14px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 14px;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.white};
`;
export const ApplicantNameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;
export const ApplicantName = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: bold;
`;
export const ApplicantInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ApplicantInfoText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${({ theme }) => theme.colors.grey900};
  min-width: 60px;
  max-width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const ApplicantInfoLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${({ theme }) => theme.colors.tossBlue};
  min-width: 60px;
  max-width: 150px;
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const ApplicantInfoStateWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 10px;
  gap: 10px;
`;
export const ApplicantBadgeWrapper = styled.div`
  display: flex;
  height: fit-content;
`;
export const ApplicationWrapper = styled.div`
  width: 100%;
  padding: 20px;
  height: 760px;
  box-sizing: border-box;
  overflow: scroll;
`;
export const ApplicationHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h7};
  color: ${({ theme }) => theme.colors.grey900};
  margin-bottom: 6px;
`;
export const ApplicationText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey800};
  margin-bottom: 20px;
`;
