import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ToggleButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 10px;
`;
export const Switch = styled.div`
  width: 36px;
  height: 18px;
  background-color: ${({ theme }) => theme.colors.grey700};
  display: flex;
  justify-content: flex-start;
  border: 0 solid transparent;
  border-color: ${({ theme }) => theme.colors.grey700};
  border-radius: 50px;
  padding: 3px;
  cursor: pointer;
  &[data-isOn='true'] {
    justify-content: flex-end;
    background-color: ${({ theme }) => theme.colors.blue900};
  }
`;

export const Handle = styled(motion.div)`
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 40px;
`;

const ToggleButton: React.FC<{
  isOn: boolean | undefined;
  toggle: () => void;
}> = ({ isOn, toggle }) => {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <ToggleButtonWrapper>
      <Switch data-ison={isOn} onClick={() => toggle()}>
        <Handle layout transition={spring} />
      </Switch>
    </ToggleButtonWrapper>
  );
};

export default ToggleButton;
