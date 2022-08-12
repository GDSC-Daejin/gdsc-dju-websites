import { motion } from 'framer-motion';
import styled from 'styled-components';

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
export const ApplicantInfoLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${({ theme }) => theme.colors.blue900};
  min-width: 60px;
  max-width: 150px;
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
