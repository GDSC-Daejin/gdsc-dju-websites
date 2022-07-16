import React from 'react';
import styled, { css } from 'styled-components';
import { IApplicantTypeWithID } from '../../../types/applicant';
import StatusBadge from '../../admin/Statusbadge';

const CheckBoxCardWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.grey100};
  background: ${({ theme }) => theme.colors.white};
  padding: 12px 16px;
  height: 46px;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  width: 480px;
  &:hover {
    background: ${({ theme }) => theme.colors.grey50};
    cursor: pointer;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      width: 200px;
    `}
`;
const CheckBoxText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey800};
  width: 70px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const CheckBoxName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey800};
  width: 60px;
  display: flex;
  white-space: nowrap;
  overflow: hidden;
`;
const CheckBoxStatusWrapper = styled.div`
  width: 65px;
  display: flex;
  justify-content: center;
`;
const CheckBoxEmailText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey800};
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const CheckBox = styled.input`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.grey300};
  cursor: pointer;

  &:checked {
    background: ${({ theme }) => theme.colors.googleBlue};
  }
`;
interface ICheckBoxCardProps {
  setCheckedList?: (id: string, isChecked: boolean) => void;
  checkedList?: Set<unknown>;
  disabled?: boolean;
}

const CheckBoxCard: React.FC<IApplicantTypeWithID & ICheckBoxCardProps> = ({
  id,
  name,
  email,
  status,
  position,
  checkedList,
  setCheckedList,
  disabled,
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <CheckBoxCardWrapper
      disabled={disabled}
      onClick={() => {
        setCheckedList && setCheckedList(id, !ref.current?.checked as boolean);
      }}
    >
      {!disabled && checkedList && setCheckedList && (
        <CheckBox
          type={'checkbox'}
          ref={ref}
          checked={checkedList.has(id)}
          onChange={(e) => setCheckedList(id, e.target.checked)}
        />
      )}
      {!disabled && <CheckBoxName>{name}</CheckBoxName>}
      {!disabled && <CheckBoxText>{position}</CheckBoxText>}
      <CheckBoxEmailText>{email}</CheckBoxEmailText>
      {!disabled && (
        <CheckBoxStatusWrapper>
          <StatusBadge status={status} />
        </CheckBoxStatusWrapper>
      )}
    </CheckBoxCardWrapper>
  );
};

export default CheckBoxCard;
