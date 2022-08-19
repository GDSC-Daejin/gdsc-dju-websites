import { Application } from '@gdsc-dju/shared/types';
import { useAtom } from 'jotai';
import React, { useRef } from 'react';

import {
  CheckboxSection,
  CheckboxWrapper,
  EmailContainerWrapper,
  TemplateEmailWrapper,
  TemplateText,
} from './styled';
import { templateAtom } from '@src/store/templateAtom';
import { alertAtom } from '@src/store/alertAtom';
import CheckBoxCard from '@common/cards/CheckBoxCard';
import { useModalHandle } from '@src/hooks/useModalHandle';
import { GDSCButton } from '@common/Button';
import { TextInput } from '@common/TextInput';
import {
  EmailButtonWrapper,
  InformationHeader,
} from '@pages/Applicants/styled';
import { TemplateSelectWrapper } from '@pages/EmailLog/styled';

interface Props {
  filteredApplicants: Application[];
  checkedApplicants: Set<string>;
  checkAllHandler: (isChecked: boolean) => void;
  isAllChecked: boolean;
  checkedApplicantHandler: (id: string, isChecked: boolean) => void;
}

const EmailContainer = ({
  checkedApplicants,
  checkAllHandler,
  isAllChecked,
  filteredApplicants,
  checkedApplicantHandler,
}: Props) => {
  const [alert, setAlert] = useAtom(alertAtom);
  const [template, setTemplate] = useAtom(templateAtom);

  const { openModal } = useModalHandle('EMAIL');
  const templateRef = useRef<HTMLInputElement>(null);

  const applyButtonHandler = () => {
    if (!template) {
      setAlert({
        ...alert,
        alertHandle: true,
        alertStatus: 'ERROR',
        alertMessage: '템플릿을 입력해주세요.',
      });
    }
    if (checkedApplicants.size < 1) {
      setAlert({
        ...alert,
        alertHandle: true,
        alertStatus: 'ERROR',
        alertMessage: '선택된 지원자가 없어요.',
      });
    }
    if (template && checkedApplicants.size > 0) {
      openModal();
    }
  };
  return (
    <EmailContainerWrapper>
      <InformationHeader>
        <TemplateSelectWrapper>
          {template && <TemplateText>선택한 템플릿: {template}</TemplateText>}
          <TemplateEmailWrapper>
            <TextInput
              ref={templateRef}
              placeholder={'템플릿을 입력해주세요.'}
            />
          </TemplateEmailWrapper>
          <GDSCButton
            color={'blue900'}
            text={'템플릿 선택'}
            onClick={() => setTemplate(templateRef.current?.value ?? '')}
          />
        </TemplateSelectWrapper>
        <EmailButtonWrapper>
          <GDSCButton
            color={!isAllChecked ? 'blue200' : 'blue900'}
            text={!isAllChecked ? '모두 선택' : '모두 해제'}
            onClick={() => checkAllHandler(!isAllChecked)}
            type={'button'}
          />
          <GDSCButton
            color={'blue900'}
            text={'이메일 전송'}
            onClick={applyButtonHandler}
            type={'button'}
          />
        </EmailButtonWrapper>
      </InformationHeader>
      {filteredApplicants && (
        <CheckboxSection>
          {filteredApplicants.map((applicant) => (
            <CheckboxWrapper key={applicant.id}>
              <CheckBoxCard
                {...applicant}
                checkedList={checkedApplicants}
                setCheckedList={checkedApplicantHandler}
              />
            </CheckboxWrapper>
          ))}
        </CheckboxSection>
      )}
    </EmailContainerWrapper>
  );
};

export default EmailContainer;
