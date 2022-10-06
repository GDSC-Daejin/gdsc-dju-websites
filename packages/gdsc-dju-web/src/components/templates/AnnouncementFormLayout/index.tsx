import React from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

import { FileInput, TextArea, Input } from '@gdsc-dju/styled-components';

import { SubTitle, Title } from '@atoms/title';
import { formValidation } from '@common/validations/recuitForm';
import {
  ErrorBox,
  FormContentWrapper,
  FormLabel,
  FormMargin,
  FormMarginXS,
  FormSubmitButton,
  FormText,
  RecruitFormInner,
  RecruitFormWrapper,
} from '@pages/Recruit/AnnounceForm/styled';
import { FormValue } from '@type/recruitForm';

type AnnounceFormLayoutProps = {
  handleSubmit: () => void;
  isBlocked: boolean;
  position: string;
  formElements: (keyof FormValue)[];
  register: UseFormRegister<FormValue>;
  errors: FieldErrorsImpl<FormValue>;
  setFile: (file: File) => void;
};

const AnnouncementFormLayout = ({
  handleSubmit,
  formElements,
  isBlocked,
  register,
  position,
  errors,
  setFile,
}: AnnounceFormLayoutProps) => {
  return (
    <div>
      <FormMargin />
      <FormMargin />
      <form onSubmit={handleSubmit}>
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
                  {elementName.text && <FormText>{elementName.text}</FormText>}
                  {elementName.type === 'INPUT' ? (
                    <Input
                      error={!!errors[element]}
                      placeholder={elementName.placeholder}
                      {...register(element, elementName)}
                    />
                  ) : elementName.type === 'TEXT_AREA' ? (
                    <TextArea
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
                    {!!errors[element] && (errors[element]?.message as string)}
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
                  e.target.files && setFile(e.target.files && e.target.files[0])
                }
              />
              <FormText>* 파일은 최대 50MB로 업로드 하실 수 있습니다.</FormText>
            </FormContentWrapper>
            <FormMarginXS />
            <FormMargin />
            {!isBlocked ? (
              <FormSubmitButton type={'submit'}>제출하기</FormSubmitButton>
            ) : (
              <FormSubmitButton type={'button'} disable={isBlocked}>
                제출하기
              </FormSubmitButton>
            )}
            <FormMargin />
          </RecruitFormInner>
        </RecruitFormWrapper>
      </form>
    </div>
  );
};

export default AnnouncementFormLayout;
