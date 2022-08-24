import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { FormElementWrapper, FormLabel } from '../../MyBlog/ProfileEdit/styled';
import NicknameValidationButton from '@src/components/atoms/NicknameValidationButton';

import {
  NicknameValidationButtonWrapper,
  SignUpFormStyle,
  TextInputWrapper,
} from './styled';
import UserService from '@src/api/UserService';
import { GDSCButton } from '@src/components/atoms/Button';
import { useGetMyData } from '@src/api/hooks/useGetMyData';
import TextInput from '@src/components/atoms/input/TextInput';
import { formValidation } from '@src/components/Validation/profileEdit';

const SignUpForm = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: 'onTouched' });
  const navigate = useNavigate();
  const { userData } = useGetMyData();

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
    if (!userData) {
      return;
    }
    reset({
      id: userData.memberInfo.id,
      memberInfoId: userData.memberInfo.memberInfoId,
      generation: 0,
      birthday: '',
      positionType: 'Beginner',
    });
  }, [userData]);

  return (
    <SignUpFormStyle>
      {formElements.map((element) => {
        const elementName = formValidation[element];

        return (
          <FormElementWrapper key={element}>
            <FormLabel essential={!!elementName.required}>
              {elementName.label}
            </FormLabel>
            <TextInputWrapper>
              <TextInput
                disabled={elementName.isBlock}
                error={errors[element]}
                placeholder={elementName.placeholder}
                {...register(element, elementName)}
              />
            </TextInputWrapper>
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
