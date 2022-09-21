import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ApplicationWrapper = styled.div`
  width: 100%;
  padding: 20px;
  height: calc(100vh - 50px);
  box-sizing: border-box;
  overflow: scroll;
`;
export const ApplicationHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h7};
  color: ${({ theme }) => theme.colors.grey900};
  margin-bottom: 6px;
`;
export const ApplicationText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey800};
  margin-bottom: 20px;
`;
