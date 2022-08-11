import React from 'react';
import styled from 'styled-components';
import ClearIcon from '../../../assets/icons/ClearIcon';
import LeftArrow from '../../../assets/icons/LeftArrowIcon.svg';
import RightArrow from '../../../assets/icons/RightArrowIcon.svg';

const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey50};
  width: 30px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.grey400};
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
      <ClearIcon />
    </ModalButton>
  );
};
