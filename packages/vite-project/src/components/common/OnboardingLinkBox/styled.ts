import { motion } from 'framer-motion';
import styled from 'styled-components';
export const LinkBox = styled(motion.div)`
  width: 280px;
  height: 180px;
  border-style: solid;
  border-radius: 20px;
  border-color: #d8d8d8;
  border-width: 1px;

  background: white;
  margin-right: 30px;
  :hover {
    cursor: pointer;
  }
`;
export const LinkBoxInner = styled.div`
  padding-left: 30px;
`;
export const LinkLogoWrapper = styled.div`
  height: 40px;
  margin-bottom: 23px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const LinkLogo = styled.img`
  height: 40px;
`;
export const LinkText = styled.img`
  height: 25px;
  margin-left: 15px;
`;

export const LinkDescription = styled.div`
  font-family: 'Gothic A1', sans-serif;
  font-weight: 600;
  margin-bottom: 46px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.grey700};
`;
