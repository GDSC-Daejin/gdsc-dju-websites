import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ApplyModalInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  z-index: 3;
`;

export const ApplyButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 6px;
  flex-direction: row-reverse;
  margin-top: 10px;
`;
export const ApplyModalP = styled.p`
  font-size: ${(props) => props.theme.fontSize.body2};
  color: ${(props) => props.theme.colors.grey600};
  min-width: 80px;
  margin-bottom: 6px;
`;
export const ApplyModalContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ApplyModalTitle = styled.h5`
  font-size: ${(props) => props.theme.fontSize.h6};
  color: ${(props) => props.theme.colors.grey900};
  margin-bottom: 12px;
`;

export const ApplyModalInner = styled(motion.div)`
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;
export const ApplyModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
export const ApplyModalButtonWrapper = styled.div`
  margin-right: 10px;
`;
