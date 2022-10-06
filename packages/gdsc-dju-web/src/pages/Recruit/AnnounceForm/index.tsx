import React, { memo, useLayoutEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { useParams, createSearchParams, useNavigate } from 'react-router-dom';

import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useAtom } from 'jotai';

import { formValidation } from '@common/validations/recuitForm';
import { recruitInfo } from '@contents/recruitInfo';
import ApplyModal from '@organisms/Modal/ApplyModal';
import { db } from '@src/firebase/firebase';
import { storage } from '@src/firebase/firebase.config';
import { alertAtom } from '@store/alertAtom';
import { loaderAtom } from '@store/loaderAtom';
import { MODAL_KEY, modalAtom } from '@store/modalAtom';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import AnnounceFormLayout from '@templates/AnnounceFormLayout';
import {
  IApplicantParams,
  IInputRegister,
  IRegisterApplicantType,
} from '@type/applicant';
import { FormValue } from '@type/recruitForm';
import { isObjEmpty } from '@utils/objectCheck';

import { positionSelect } from './FormFunctions';

const AnnounceForm = () => {
  const { id } = useParams();
  const [position, setPosition] = useState('');
  const [, setLoading] = useAtom(loaderAtom);
  const [modal, setModal] = useAtom(modalAtom);
  const [alert, setAlert] = useAtom(alertAtom);
  const [file, setFile] = useState<null | File>(null);
  const [data, setData] = useState<null | IInputRegister>(null);
  const { register, handleSubmit, watch, formState } = useForm<FormValue>({
    mode: 'onChange',
  });
  const navigate = useNavigate();
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
  const formElements = Object.keys(formValidation) as Array<
    keyof typeof formValidation
  >;
  useLayoutEffect(() => {
    setPosition(positionSelect[id as keyof typeof positionSelect]);
  }, [id]);

  return (
    <>
      <ApplyModal {...(params as IApplicantParams)} onClick={onRegister} />
      <LayoutContainer>
        <ContainerInner>
          <AnnounceFormLayout
            isBlocked={isBlocked}
            formElements={formElements}
            handleSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            position={position}
            setFile={setFile}
          />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default memo(AnnounceForm);
