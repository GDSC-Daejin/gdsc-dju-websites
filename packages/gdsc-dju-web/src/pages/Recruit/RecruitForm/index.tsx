import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { memo, useLayoutEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  applicationQuestions,
  recruitInfo,
} from '../../../apis/pageData/recruitInfo';
import FileInput from '../../../components/common/input/FileInput';
import { StyledTextArea } from '../../../components/common/input/TextArea/styled';
import {
  ErrorBox,
  StyledInput,
} from '../../../components/common/input/TextInput/styled';
import ApplyModal from '../../../components/common/Modal/ApplyModal';
import ReactHelmet from '../../../components/common/ReactHelmet';
import { SubTitle, Title } from '../../../components/common/Title/title';
import { formValidation } from '../../../components/Validation/recuitForm';
import { db } from '../../../firebase/firebase';
import { storage } from '../../../firebase/firebase.config';
import { alertState } from '../../../store/alert';
import { loaderState } from '../../../store/loader';
import { MODAL_KEY, modalState } from '../../../store/modal';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import {
  IApplicantParams,
  IInputRegister,
  IRegisterApplicantType,
} from '../../../types/applicant';
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
  const [loading, setLoading] = useRecoilState(loaderState);
  const [modal, setModal] = useRecoilState(modalState);
  const [alert, setAlert] = useRecoilState(alertState);
  const [file, setFile] = useState<null | File>(null);
  const navigate = useNavigate();
  const [data, setData] = useState<null | IInputRegister>(null);
  interface FormValue {
    name: string;
    phoneNumber: string;
    major: string;
    email: string;
    studentID: string;
    position: string;
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    link0: string;
    link1: string;
    recommender: string;
  }
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
          alertStatus: 'error',
          alertHandle: true,
        });
      } else if (file.type !== type) {
        const typeName = type.replace('application/', '');
        setAlert({
          ...alert,
          alertMessage: `${typeName} 파일만 업로드 가능합니다.`,
          alertStatus: 'error',
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
    setLoading({ ...loading, load: true });
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
      setLoading({ ...loading, load: false });
    } catch (e) {
      setLoading({ ...loading, load: false });
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

  return (
    <>
      <ReactHelmet title={`${position} 지원서 작성 `} />
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
                <FormContentWrapper>
                  <FormLabel essential={true}>이름(실명)</FormLabel>
                  <StyledInput
                    error={!!errors.name}
                    placeholder={'김구글'}
                    {...register('name', formValidation.name)}
                  />
                  <ErrorBox>
                    {!!errors.name && (errors.name.message as string)}
                  </ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>전화번호</FormLabel>
                  <StyledInput
                    placeholder={'010-0000-0000'}
                    error={!!errors.phoneNumber}
                    {...register('phoneNumber', formValidation.phoneNumber)}
                  />
                  <ErrorBox>
                    {!!errors.phoneNumber && errors.phoneNumber.message}
                  </ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>이메일(gmail)</FormLabel>
                  <StyledInput
                    placeholder={'googledev@gmail.com'}
                    error={!!errors.email}
                    {...register('email', formValidation.email)}
                  />
                  <ErrorBox>{errors.email && errors.email.message}</ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>학과</FormLabel>
                  <StyledInput
                    placeholder={'구글개발학과'}
                    error={!!errors.major}
                    {...register('major', formValidation.major)}
                  />
                  <ErrorBox>{errors.major && errors.major.message}</ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>학번</FormLabel>
                  <StyledInput
                    placeholder={'20221234'}
                    error={!!errors.studentID}
                    {...register('studentID', formValidation.studentID)}
                  />
                  <ErrorBox>
                    {errors.studentID && errors.studentID.message}
                  </ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>포지션</FormLabel>
                  <StyledInput disabled={true} placeholder={position} />
                  <ErrorBox>
                    {errors.position && errors.position.message}
                  </ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>
                    {applicationQuestions.question1}
                  </FormLabel>
                  <FormText>
                    * 디자이너 분들은 사용가능한 툴에 대해서 알려주세요.
                  </FormText>
                  <StyledTextArea
                    placeholder={
                      '예) Spring, Vue, Git, Github, NodeJS, Spring, Figma, Adobe XD'
                    }
                    error={!!errors.question1}
                    {...register('question1', formValidation.question1)}
                  />
                  <ErrorBox>
                    {errors.question1 && errors.question1.message}
                  </ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>
                    {applicationQuestions.question2}
                  </FormLabel>
                  <FormText>
                    * 프로젝트 경험이 없다면 본인이 노력해서 보람을 느낀 일에
                    대해서 알려주세요.
                  </FormText>
                  <StyledTextArea
                    error={!!errors.question2}
                    {...register('question2', formValidation.question2)}
                  />
                  <ErrorBox>
                    {errors.question2 && errors.question2.message}
                  </ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>
                    {applicationQuestions.question3}
                  </FormLabel>
                  <StyledTextArea
                    error={!!errors.question3}
                    {...register('question3', formValidation.question3)}
                  />
                  <ErrorBox>
                    {errors.question3 && errors.question3.message}
                  </ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>
                    {applicationQuestions.question4}
                  </FormLabel>
                  <StyledTextArea
                    error={!!errors.question4}
                    {...register('question4', formValidation.question4)}
                  />
                  <ErrorBox>
                    {errors.question4 && errors.question4.message}
                  </ErrorBox>
                </FormContentWrapper>
                <FormContentWrapper>
                  <FormLabel essential={true}>
                    {applicationQuestions.question5}
                  </FormLabel>
                  <StyledTextArea
                    error={!!errors.question5}
                    {...register('question5', formValidation.question5)}
                  />
                  <ErrorBox>
                    {errors.question5 && errors.question5.message}
                  </ErrorBox>
                </FormContentWrapper>
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
                <FormContentWrapper>
                  <FormLabel essential={false}>링크 1</FormLabel>
                  <StyledInput
                    placeholder={'https://'}
                    error={!!errors.link0}
                    {...register('link0', formValidation.link0)}
                  />
                  <ErrorBox>{errors.link0 && errors.link0.message}</ErrorBox>
                  <FormLabel>링크 2 </FormLabel>
                  <StyledInput
                    placeholder={'https://'}
                    error={!!errors.link1}
                    {...register('link1', formValidation.link1)}
                  />
                  <ErrorBox>{errors.link1 && errors.link1.message}</ErrorBox>
                  <FormText>
                    자신을 잘 나타낼 수 있는 개인블로그, 노션, Github링크 등을
                    입력해주세요.
                  </FormText>
                  <FormText>
                    *디자이너 분들은 포트폴리오가 필수사항입니다.
                  </FormText>
                  <FormText>
                    *파일 용량이 50MB를 넘어갈 경우 클라우드/드라이브에 파일을
                    업로드 후 공유링크를 입력해주세요.
                  </FormText>
                </FormContentWrapper>
                <FormMarginXS />
                <FormContentWrapper>
                  <FormLabel>추천인</FormLabel>
                  <StyledInput
                    placeholder={'GDSC에 추천인이 있다면 입력해주세요.'}
                    {...register('recommender')}
                  />
                  <ErrorBox>
                    {errors.recommender && errors.recommender.message}
                  </ErrorBox>
                </FormContentWrapper>
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
