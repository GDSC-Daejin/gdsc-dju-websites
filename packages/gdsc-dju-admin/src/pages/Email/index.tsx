import emailjs from '@emailjs/browser';
import { addDoc, collection } from 'firebase/firestore';
import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { useEffect, useRef, useState } from 'react';
import { GDSCButton } from '../../components/atoms/Button';
import { TextInput } from '../../components/atoms/TextInput';
import CheckBoxCard from '../../components/molecules/CheckBoxCard';
import AdminEmailCheckModal from '../../components/molecules/modal/AdminEmailCheckModal';
import ApplicantModal from '../../components/molecules/modal/ApplicantModal';
import { db } from '../../firebase/firebase';
import { useModalHandle } from '../../hooks/useModalHandle';
import { isDevelop } from '../../pageData/recruitInfo';

import { alertAtom } from '../../store/alertAtom';
import { loaderAtom } from '../../store/loaderAtom';
import { userAtom } from '../../store/userAtom';
import { EmailLogType, IApplicantTypeWithID } from '../../types/applicant';
import { getApplicants } from '../../utils/applicantsHandler';
import {
  AdminSectionWrapper,
  EmailButtonWrapper,
  InformationHeader,
} from '../Applicants/styled';
import { TemplateSelectWrapper } from '../EmailLog/styled';
import {
  CheckboxSection,
  CheckboxWrapper,
  EmailCategory,
  EmailLeftInner,
  EmailLeftWrapper,
  EmailRightInner,
  EmailRightWrapper,
  SelectedBoxSection,
  TemplateEmailWrapper,
  TemplateText,
} from './styled';

const Email = () => {
  const [alert, setAlert] = useAtom(alertAtom);
  const [loading, setLoading] = useAtom(loaderAtom);
  const [admin] = useAtom(userAtom);

  const [filteredApplicants, setFilteredApplicants] =
    useState<IApplicantTypeWithID[]>();
  const [checkedApplicants, setCheckedApplicants] = useState(new Set());

  const [template, setTemplate] = useState<string | null>(null);
  const templateRef = useRef<HTMLInputElement>(null);
  const { openModal, closeModal } = useModalHandle('EMAIL');

  const checkedApplicantHandler = (id: string, isChecked: boolean) => {
    const newCheckedApplicants = new Set(checkedApplicants);
    if (isChecked) {
      newCheckedApplicants.add(id);
      setCheckedApplicants(newCheckedApplicants);
    } else if (!isChecked && checkedApplicants.has(id)) {
      newCheckedApplicants.delete(id);
      setCheckedApplicants(newCheckedApplicants);
    }
  };
  const isAllChecked = checkedApplicants.size === filteredApplicants?.length;

  const checkAllHandler = (isChecked: boolean) => {
    if (isChecked) {
      setCheckedApplicants(new Set(filteredApplicants?.map((data) => data.id)));
    } else {
      setCheckedApplicants(new Set());
    }
  };

  const sendLogHandler = async (log: EmailLogType) => {
    await addDoc(
      collection(db, isDevelop ? 'emailLogs-dev' : 'emailLogs'),
      log,
    );
  };
  const sendEmailHandler = async (
    template: string | null,
    applicants: IApplicantTypeWithID[],
  ) => {
    setLoading({ ...loading, isLoading: true });
    closeModal();
    if (applicants.length === 0) {
      setAlert({
        ...alert,
        alertHandle: true,
        alertMessage: '지원자를 선택해주세요.',
      });
    }
    if (template) {
      await sendEmail(template, applicants);
    } else {
      setAlert({
        ...alert,
        alertHandle: true,
        alertMessage: '템플릿을 선택하지 않았어요.',
      });
    }
    setLoading({ ...loading, isLoading: false });
  };

  const sendEmail = async (
    template: string,
    applicants: IApplicantTypeWithID[],
  ) => {
    applicants.map(async (applicant) => {
      emailjs.init('RsM6o4WUsb5rzJGXG');
      if (admin.nickname) {
        try {
          const result = await emailjs.send('default_service', template, {
            email: applicant.email,
            name: applicant.name,
          });

          //로그 생성
          const emailLog: EmailLogType = {
            email: applicant.email,
            name: applicant.name,
            applicantID: applicant.id,
            applicantStatus: applicant.status,
            sender: admin.nickname,
            status: result.status,
            uploadDate: new Date(),
          };
          await sendLogHandler(emailLog);

          if (emailLog) {
            setAlert({
              ...alert,
              alertHandle: true,
              alertMessage: '메일이 전송되었어요. 로그를 확인해주세요.',
            });
            setLoading({ ...loading, isLoading: false });
          }
        } catch (e) {
          setAlert({
            ...alert,
            alertHandle: true,
            alertMessage: '어딘가 문제가 생겼어요. 콘솔을 확인해주세요.',
          });
        }
      }
    });
  };

  const applyButtonHandler = () =>
    checkedApplicants.size > 0
      ? openModal()
      : setAlert({
          ...alert,
          alertHandle: true,
          alertMessage: '선택된 지원자가 없습니다.',
        });

  useEffect(() => {
    (async function () {
      const applicants = await getApplicants(null);
      setFilteredApplicants(applicants);
    })();
  }, []);

  const selectApplicants = filteredApplicants?.filter((applicant) => {
    return checkedApplicants.has(applicant.id);
  });

  return (
    <AnimatePresence>
      <AdminSectionWrapper>
        <ApplicantModal />
        {selectApplicants && (
          <AdminEmailCheckModal
            applicants={selectApplicants}
            sendEmail={sendEmailHandler}
            template={template}
          />
        )}

        <EmailLeftWrapper>
          <EmailLeftInner>
            <EmailCategory>선택한 이메일</EmailCategory>
            {selectApplicants && (
              <SelectedBoxSection>
                {selectApplicants.map((applicant) => (
                  <div key={`check-${applicant.id}`}>
                    <CheckBoxCard {...applicant} disabled={true} />
                  </div>
                ))}
              </SelectedBoxSection>
            )}
          </EmailLeftInner>
        </EmailLeftWrapper>
        <EmailRightWrapper>
          <EmailRightInner>
            <InformationHeader>
              <TemplateSelectWrapper>
                {template && (
                  <TemplateText>선택한 템플릿: {template}</TemplateText>
                )}
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
                  <CheckboxWrapper
                    key={applicant.id}
                    onDoubleClick={() => openModal(applicant.id)}
                  >
                    <CheckBoxCard
                      {...applicant}
                      checkedList={checkedApplicants}
                      setCheckedList={checkedApplicantHandler}
                    />
                  </CheckboxWrapper>
                ))}
              </CheckboxSection>
            )}
          </EmailRightInner>
        </EmailRightWrapper>
      </AdminSectionWrapper>
    </AnimatePresence>
  );
};

export default Email;
