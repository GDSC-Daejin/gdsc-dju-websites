import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { SignUpFormStyle } from './styled';
import UserService from '@src/api/UserService';
import { GDSCButton } from '@src/components/atoms/Button';
import { useGetMyData } from '@src/api/hooks/useGetMyData';
import TextInput from '@src/components/atoms/input/TextInput';
import { formValidation } from '@src/components/Validation/profileEdit';
import {
  FormElementWrapper,
  FormLabel,
} from '@src/components/layouts/ProfileEditLayout/styled';

const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onTouched' });

  const navigate = useNavigate();
  const { myData } = useGetMyData();

  const onSubmit = async (values: any) => {
    const response = await UserService.updateMyData({ ...values });
    if (response.data.body.message === 'SUCCESS') {
      alert('회원가입이 완료되었습니다');
      navigate('/', { replace: true });
    } else alert('에러가 발생했습니다');
  };
  const formElements = Object.keys(formValidation) as Array<
    keyof typeof formValidation
  >;
  useEffect(() => {
    if (!myData) {
      return;
    }
    reset({
      id: myData.memberInfo.id,
      memberInfoId: myData.memberInfo.memberInfoId,
      generation: 0,
      birthday: '',
      positionType: 'Beginner',
    });
  }, [myData]);

  return (
    <SignUpFormStyle>
      {formElements.map((element) => {
        const elementName = formValidation[element];
        return (
          <FormElementWrapper key={element}>
            <FormLabel essential={!!elementName.required}>
              {elementName.label}
            </FormLabel>
            <TextInput
              disabled={elementName.isBlock}
              error={errors[element]}
              placeholder={elementName.placeholder}
              {...register(element, elementName)}
            />
          </FormElementWrapper>
        );
      })}
      <GDSCButton
        color={isValid ? 'googleBlue' : 'tossBlue200'}
        text="가입하기"
        disable={!isValid}
        onClick={handleSubmit(onSubmit)}
      />
    </SignUpFormStyle>
  );
};

export default SignUpForm;
