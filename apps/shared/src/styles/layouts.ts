import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: calc(100vh - 70px);
  padding-top: 70px;
`;
export const LayoutContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 320px;
  overflow-x: hidden;
  flex: 1;
`;
export const ContainerInner = styled(motion.div)`
  width: 92%;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding: 0 20px;
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.grey900};
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: ${(props) => props.theme.fontSize.h2};
  }
`;
export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: ${(props) => props.theme.fontSize.body2};
  }
`;
