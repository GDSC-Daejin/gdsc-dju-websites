import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalInner = styled(motion.div)`
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 2px 12px rgba(25, 31, 40, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;
export const ModalContent = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.h7};
  max-width: 200px;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey900};
`;
export const ModalContentWrapper = styled.div`
  padding: 40px 30px 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ModalButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 230px;
  justify-content: space-between;
  margin-top: 20px;
`;
export const ModalBackground = styled(motion.div)`
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;
