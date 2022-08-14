import React, { useState } from 'react';
import BottomArrowIcon from '../../../assets/icons/BottomArrowIcon';
import { IFormStructure, errorCheck } from '../../../types/SignUpFormType';
import {
  ArrowWrapper,
  SelectBoxWrapper,
  SignUpColorCircle,
  SignUpDefaultSelectBox,
  SignUpInputLabel,
  SignUpInputLabelCircle,
  SignUpInputLabelText,
  SignUpSelectBox,
  SignUpSelectBoxInner,
  SignUpSelectOption,
} from './styled';

const SignUpSelect = ({
  refName,
  type,
  title,
  condition,
  register,
  setValue,
  watch,
  errors,
}: IFormStructure) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const PositionOption = [
    'Frontend',
    'Backend',
    'Designer',
    'Android',
    'Beginner',
  ];
  const OptionOnClick = (data: string) => {
    setSelectOpen((prev) => {
      return !prev;
    });
    setValue &&
      setValue('positionType', data, {
        shouldTouch: true,
        shouldValidate: true,
      });
  };

  return (
    <SelectBoxWrapper>
      <SignUpInputLabel>
        <SignUpInputLabelText htmlFor={refName}>{title}</SignUpInputLabelText>
        <SignUpInputLabelCircle />
      </SignUpInputLabel>
      <SignUpSelectBoxInner>
        <SignUpDefaultSelectBox type={type} {...register(refName, condition)} />
        <SignUpSelectBox
          errorCheck={errorCheck(errors?.message && errors?.message)}
          BoxOpen={selectOpen}
        >
          <SignUpSelectOption
            onClick={() => setSelectOpen(!selectOpen)}
            selected={false}
          >
            {watch && watch('positionType', '') === ''
              ? '선택'
              : watch && watch('positionType')}
            <ArrowWrapper BoxOpen={selectOpen}>
              <BottomArrowIcon />
            </ArrowWrapper>
          </SignUpSelectOption>
          {PositionOption.map((data, index) => (
            <SignUpSelectOption
              key={index}
              onClick={() => OptionOnClick(data)}
              selected={watch && watch('positionType') === data ? true : false}
            >
              <SignUpColorCircle position={data} />
              {data}
            </SignUpSelectOption>
          ))}
        </SignUpSelectBox>
      </SignUpSelectBoxInner>
    </SelectBoxWrapper>
  );
};

export default SignUpSelect;
