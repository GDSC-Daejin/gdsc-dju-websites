import React, { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { useGetMyData } from '../../../api/hooks/useGetMyData';
import UserService from '../../../api/UserService';
import { GDSCButton } from '../../../components/common/Button';
import TextInput from '../../../components/common/input/TextInput';
import ProfileEditImage from '../../../components/common/ProfileEditImage';
import ProfileImage from '../../../components/common/ProfileImage';
import { formValidation } from '../../../components/Validation/profileEdit';
import { alertState } from '../../../store/alert';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import { IUserDataType, MemberInfo } from '../../../types/userDataType';
import { dateFilter } from '../../../Utils/dateFilter';

import {
  FormButtonWrapper,
  FormElementWrapper,
  FormInner,
  FormLabel,
  FormTitle,
  FormTitleWrapper,
  FormWrapper,
} from './styled';

const ProfileEdit = () => {
  const { userData } = useGetMyData();

  return (
    <LayoutContainer>
      <ContainerInner>
        {userData && <ProfileEditForm userData={userData} />}
      </ContainerInner>
    </LayoutContainer>
  );
};
const ProfileEditForm = ({ userData }: { userData: IUserDataType }) => {
  const { register, handleSubmit, reset, formState } = useForm<MemberInfo>({
    mode: 'onChange',
  });
  const [alert, setAlert] = useRecoilState(alertState);
  const navigate = useNavigate();
  const { errors } = formState;

  const onSubmit = async (values: MemberInfo) => {
    await UserService.updateMyData(values);
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
      generation: userData.memberInfo.generation,
      introduce: userData.memberInfo.introduce,
      nickname: userData.memberInfo.nickname,
      phoneNumber: userData.memberInfo.phoneNumber,
      major: userData.memberInfo.major,
      gitEmail: userData.memberInfo.gitEmail,
      studentID: userData.memberInfo.studentID,
      positionType: userData.memberInfo.positionType,
      hashTag: userData.memberInfo.hashTag,
      githubUrl: userData.memberInfo.githubUrl,
      blogUrl: userData.memberInfo.blogUrl,
      etcUrl: userData.memberInfo.etcUrl,
      birthday: dateFilter(userData.memberInfo.birthday),
    });
  }, [userData]);

  return (
    <FormWrapper>
      <FormInner>
        <FormTitleWrapper>
          <FormTitle>개인정보수정</FormTitle>
          <ProfileImage
            image={userData.profileImageUrl}
            position={userData.memberInfo.positionType}
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
                  !!(elementName.isModifyBlock && userData.memberInfo[element])
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

export default memo(ProfileEdit);
