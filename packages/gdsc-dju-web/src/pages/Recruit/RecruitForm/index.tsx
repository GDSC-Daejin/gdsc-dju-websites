import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useAtom } from 'jotai';
import React, { memo, useLayoutEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import FileInput from '../../../components/atoms/input/FileInput';
import { StyledTextArea } from '../../../components/atoms/input/TextArea/styled';
import {
  ErrorBox,
  StyledInput,
} from '../../../components/atoms/input/TextInput/styled';
import { SubTitle, Title } from '../../../components/atoms/Title/title';
import ApplyModal from '../../../components/organisms/Modal/ApplyModal';

import { formValidation } from '../../../components/Validation/recuitForm';
import { db } from '../../../firebase/firebase';
import { storage } from '../../../firebase/firebase.config';
import { recruitInfo } from '../../../contents/recruitInfo';
import { alertAtom } from '../../../store/alertAtom';
import { loaderAtom } from '../../../store/loaderAtom';

import { MODAL_KEY, modalAtom } from '../../../store/modalAtom';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import {
  IApplicantParams,
  IInputRegister,
  IRegisterApplicantType,
} from '../../../types/applicant';
import { FormValue } from '../../../types/recruitForm';
import { isObjEmpty } from '../../../utils/objectCheck';
import { positionSelect } from './FormFunctions';
import {
  FormContentWrapper,
  FormLabel,
  FormMargin,
  FormMarginXS,
  FormSubmitButton,
  FormText,
  RecruitFormInner,
  RecruitFormWrapper,
} from './styled';

const RecruitForm = () => {
  const { id } = useParams();
  const [position, setPosition] = useState('');
  const [loading, setLoading] = useAtom(loaderAtom);
  const [modal, setModal] = useAtom(modalAtom);
  const [alert, setAlert] = useAtom(alertAtom);
  const [file, setFile] = useState<null | File>(null);
  const navigate = useNavigate();
  const [data, setData] = useState<null | IInputRegister>(null);

  const { register, handleSubmit, watch, formState } = useForm<FormValue>({
    mode: 'onChange',
  });
  const { errors } = formState;

  const checkFile = (file: File | null, size: number, type: string) => {
    if (file) {
      if (file.size > size) {
        setAlert({
          ...alert,
          alertMessage: `지원서 파일 사이즈는 ${Math.floor(
            size / 1000000,
          )}MB 이하로 선택해주세요.`,
          alertStatus: 'ERROR',
          alertHandle: true,
        });
      } else if (file.type !== type) {
        const typeName = type.replace('application/', '');
        setAlert({
          ...alert,
          alertMessage: `${typeName} 파일만 업로드 가능합니다.`,
          alertStatus: 'ERROR',
          alertHandle: true,
        });
        return;
      } else {
        return file;
      }
      return;
    }
  };

  const uploadFiles = async (file: File) => {
    const checkedFile = checkFile(file, 50000001, 'application/pdf');
    if (checkedFile instanceof File) {
      const storageRef = ref(storage, `${checkedFile.name}`);
      await uploadBytesResumable(storageRef, file);
      return await getDownloadURL(storageRef);
    }
  };
  const onRegister = async () => {
    const recruitItem: IRegisterApplicantType = {
      ...(data as IInputRegister),
      status: 'DOCS',
      generation: recruitInfo.GENERATION,
      uploadDate: new Date(),
      position: position,
    };
    setLoading(true);
    setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: false });
    try {
      if (file) {
        const url = await uploadFiles(file);
        await addDoc(collection(db, recruitInfo.COLLECTION), {
          ...recruitItem,
          fileURL: url,
        });
      } else {
        await addDoc(collection(db, recruitInfo.COLLECTION), {
          ...recruitItem,
          fileURL: null,
        });
      }
      navigate({
        pathname: '/recruit/apply-success',
        search: `?${createSearchParams(
          params as Record<string, string | string[]>,
        )}`,
      });
      setLoading(false);
    } catch (e) {
      setAlert({
        ...modal,
        alertMessage: '어딘가 문제가 생겼어요.',
        alertStatus: 'ERROR',
        alertHandle: true,
      });
      setLoading(false);
    }
  };

  const isBlocked = !(
    watch('name') &&
    watch('email') &&
    watch('major') &&
    watch('phoneNumber') &&
    watch('studentID') &&
    watch('question1') &&
    watch('question2') &&
    watch('question3') &&
    watch('question4') &&
    watch('question5')
  );
  const onSubmit = (values: FieldValues) => {
    setData(JSON.parse(JSON.stringify(values)));
    isObjEmpty(errors) && setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: true });
  };

  const params = {
    name: data?.name,
    position: position,
    email: data?.email,
    phoneNumber: data?.phoneNumber,
  };
  useLayoutEffect(() => {
    setPosition(positionSelect[id as keyof typeof positionSelect]);
  }, [id]);
  const formElements = Object.keys(formValidation) as Array<
    keyof typeof formValidation
  >;

  return (
    <>
      <ApplyModal {...(params as IApplicantParams)} onClick={onRegister} />
      <LayoutContainer>
        <ContainerInner>
          <FormMargin />
          <FormMargin />
          <form onSubmit={handleSubmit(onSubmit)}>
            <RecruitFormWrapper>
              <RecruitFormInner>
                <Title>지원서 작성하기</Title>
                <SubTitle>{position}</SubTitle>
                <FormMargin />
                {formElements.map((element) => {
                  const elementName = formValidation[element];
                  const isRequired = elementName.required.value;
                  return (
                    <FormContentWrapper key={element}>
                      <FormLabel essential={isRequired}>
                        {elementName.label}
                      </FormLabel>
                      {elementName.text && (
                        <FormText>{elementName.text}</FormText>
                      )}
                      {elementName.type === 'INPUT' ? (
                        <StyledInput
                          error={!!errors[element]}
                          placeholder={elementName.placeholder}
                          {...register(element, elementName)}
                        />
                      ) : elementName.type === 'TEXT_AREA' ? (
                        <StyledTextArea
                          placeholder={elementName.placeholder}
                          error={!!errors[element]}
                          {...register(element, elementName)}
                        />
                      ) : (
                        <p>
                          {elementName.notice?.split('\n').map((text) => (
                            <FormText key={text}>{text}</FormText>
                          ))}
                        </p>
                      )}
                      <ErrorBox>
                        {!!errors[element] &&
                          (errors[element]?.message as string)}
                      </ErrorBox>
                    </FormContentWrapper>
                  );
                })}
                <FormContentWrapper>
                  <FormLabel essential={false}>
                    참고해야 할 추가적인 자료가 있다면 첨부해주세요
                  </FormLabel>
                  <FileInput
                    defaultPlaceholder={'PDF로 업로드 해주세요!'}
                    accept={'application/pdf, .pdf'}
                    onChange={(e) =>
                      setFile(e.target.files && e.target.files[0])
                    }
                  />
                  <FormText>
                    * 파일은 최대 50MB로 업로드 하실 수 있습니다.
                  </FormText>
                </FormContentWrapper>
                <FormMarginXS />
                <FormMargin />
                {!isBlocked ? (
                  <FormSubmitButton type={'submit'} onClick={onSubmit}>
                    제출하기
                  </FormSubmitButton>
                ) : (
                  <FormSubmitButton type={'button'} disable={isBlocked}>
                    제출하기
                  </FormSubmitButton>
                )}
                <FormMargin />
              </RecruitFormInner>
            </RecruitFormWrapper>
          </form>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default memo(RecruitForm);
