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
  display: grid;
  grid-template-columns: 0.4fr 1.6fr;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex: 1;
  justify-content: center;
  z-index: 1000;
`;
export const ApplicantInfoWrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey100};
  height: 100%;
  width: 100%;
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
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  flex-direction: row;
`;
