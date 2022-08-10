import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ToggleButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 10px;
`;
export const Switch = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.grey200};
  display: flex;
  justify-content: flex-start;
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
  background: #fff;
  border: 1px solid #fff;
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
