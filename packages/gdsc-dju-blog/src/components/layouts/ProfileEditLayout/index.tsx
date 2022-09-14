import React, { useEffect } from 'react';
import { MemberInfo, UserData } from '@type/userDataType';
import { alertState } from '@src/store/alert';
import UserService from '@src/api/UserService';
import { formValidation } from '@src/components/Validation/profileEdit';
import { dateFilter } from '@utils/dateFilter';
import {
  FormButtonWrapper,
  FormElementWrapper,
  FormInner,
  FormLabel,
  FormTitle,
  FormTitleWrapper,
  FormWrapper,
} from './styled';
import ProfileImage from '@src/components/atoms/ProfileImage';
import TextInput from '@src/components/atoms/input/TextInput';
import { GDSCButton } from '@src/components/atoms/Button';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const ProfileEditLayout = ({ myData }: { myData: UserData }) => {
  const { register, handleSubmit, reset, formState } = useForm<MemberInfo>({
    mode: 'onChange',
  });
  const [alert, setAlert] = useRecoilState(alertState);
  const navigate = useNavigate();
  const { errors } = formState;

  const onSubmit = async (values: MemberInfo) => {
    const convertDate = new Date(values.birthday);
    await UserService.updateMyData({
      ...values,
      birthday: convertDate.toISOString(),
    });
    setAlert({
      ...alert,
      alertStatus: 'success',
      alertHandle: true,
      alertMessage: '정보 수정이 완료되었습니다.',
    });
    await navigate(-1);
  };
  const formElements = Object.keys(formValidation) as Array<
    keyof typeof formValidation
  >;
  useEffect(() => {
    reset({
      generation: myData.memberInfo.generation,
      introduce: myData.memberInfo.introduce,
      nickname: myData.memberInfo.nickname,
      phoneNumber: myData.memberInfo.phoneNumber,
      major: myData.memberInfo.major,
      gitEmail: myData.memberInfo.gitEmail,
      studentID: myData.memberInfo.studentID,
      positionType: myData.memberInfo.positionType,
      hashTag: myData.memberInfo.hashTag,
      gitHubUrl: myData.memberInfo.gitHubUrl,
      blogUrl: myData.memberInfo.blogUrl,
      etcUrl: myData.memberInfo.etcUrl,
      birthday: dateFilter(myData.memberInfo.birthday),
    });
  }, [myData]);

  return (
    <FormWrapper>
      <FormInner>
        <FormTitleWrapper>
          <FormTitle>개인정보수정</FormTitle>
          <ProfileImage
            image={myData.profileImageUrl}
            position={myData.memberInfo.positionType}
          />
        </FormTitleWrapper>
        {formElements.map((element) => {
          const elementName = formValidation[element];
          return (
            <FormElementWrapper key={element}>
              <FormLabel essential={!!elementName.required}>
                {elementName.label}
              </FormLabel>
              <TextInput
                disabled={
                  elementName.isBlock ||
                  !!(elementName.isModifyBlock && myData.memberInfo[element])
                }
                error={errors[element]}
                placeholder={elementName.placeholder}
                {...register(element, elementName)}
              />
            </FormElementWrapper>
          );
        })}

        <FormButtonWrapper>
          <GDSCButton
            text={'저장하기'}
            color={'googleBlue'}
            onClick={handleSubmit(onSubmit)}
          />
        </FormButtonWrapper>
      </FormInner>
    </FormWrapper>
  );
};
export default ProfileEditLayout;
