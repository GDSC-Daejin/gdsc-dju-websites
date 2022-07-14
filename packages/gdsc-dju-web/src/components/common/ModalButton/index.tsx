import React from 'react';
import styled from 'styled-components';
import RightArrow from '../../../assets/RightArrow.svg';
import LeftArrow from '../../../assets/LeftArrow.svg';
import Clear from '../../../assets/Clear.svg';

const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  width: 30px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.grey50};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.grey200};
  }
`;

const ModalButtonIcon = styled.img`
  height: 16px;
`;

interface IButtonProps {
  onClick: () => void;
}

export const RightArrowButton: React.FC<IButtonProps> = ({ onClick }) => {
  return (
    <ModalButton onClick={onClick}>
      <ModalButtonIcon src={RightArrow} />
    </ModalButton>
  );
};
export const LeftArrowButton: React.FC<IButtonProps> = ({ onClick }) => {
  return (
    <ModalButton onClick={onClick}>
      <ModalButtonIcon src={LeftArrow} />
    </ModalButton>
  );
};
export const ClearButton: React.FC<IButtonProps> = ({ onClick }) => {
  return (
    <ModalButton onClick={onClick}>
      <ModalButtonIcon src={Clear} />
    </ModalButton>
  );
};
