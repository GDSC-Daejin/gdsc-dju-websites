import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Switch = styled.div`
  width: 36px;
  height: 18px;
  background-color: ${(props) => props.theme.colors.grey700};
  display: flex;
  justify-content: flex-start;
  border: 1px solid transparent;
  border-color: ${(props) => props.theme.colors.grey700};
  border-radius: 50px;
  padding: 3px;
  cursor: pointer;
  &[data-isOn='true'] {
    justify-content: flex-end;
    background-color: ${(props) => props.theme.colors.tossBlue};
  }
`;
export const Handle = styled(motion.div)`
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 40px;
`;

export const InformationHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  height: 70px;
  box-sizing: border-box;
  flex-direction: row;
`;
export const EmailButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ToggleButton = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 10px;
`;

export const AdminSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;
