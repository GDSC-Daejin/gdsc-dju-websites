import React, { useEffect, useState } from 'react';

import { addDoc, collection } from 'firebase/firestore';
import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';

import EmailCheckModal from '@common/modal/EmailCheckModal';
import emailjs from '@emailjs/browser';
import { isDevelop } from '@src/context/recruitInfo';
import { db } from '@src/firebase/firebase';
import { useModalHandle } from '@src/hooks/useModalHandle';
import { alertAtom } from '@src/store/alertAtom';
import { loaderAtom } from '@src/store/loaderAtom';
import { templateAtom } from '@src/store/templateAtom';
import { userAtom } from '@src/store/userAtom';
import { EmailLogType, IApplicantTypeWithID } from '@type/applicant';
import { getApplicants } from '@utils/applicantsHandler';

import { AdminSectionWrapper } from '../Applicants/styled';
import { AdminContainerInner } from '../styled';

import EmailContainer from './EmailContainer';
import SelectedEmailContainer from './SelectedEmailContainer';
import { EmailLeftWrapper, EmailRightWrapper } from './styled';

const Email = () => {
  const [alert, setAlert] = useAtom(alertAtom);
  const [loading, setLoading] = useAtom(loaderAtom);
  const [admin] = useAtom(userAtom);
  const [template] = useAtom(templateAtom);
  const [filteredApplicants, setFilteredApplicants] =
    useState<IApplicantTypeWithID[]>();
  const [checkedApplicants, setCheckedApplicants] = useState<Set<string>>(
    new Set(),
  );
  const { closeModal } = useModalHandle('EMAIL');

  const isAllChecked = checkedApplicants.size === filteredApplicants?.length;

  const selectApplicants = filteredApplicants?.filter((applicant) => {
    return checkedApplicants.has(applicant.id);
  });

  const checkAllHandler = () => {
    if (isAllChecked) {
      setCheckedApplicants(new Set());
    } else {
      setCheckedApplicants(new Set(filteredApplicants?.map((data) => data.id)));
    }
  };
  const checkedApplicantHandler = (id: string, isChecked: boolean) => {
    const newCheckedApplicants = new Set(checkedApplicants);
    if (isChecked) {
      newCheckedApplicants.add(id);
    } else if (checkedApplicants.has(id)) {
      newCheckedApplicants.delete(id);
    }
    setCheckedApplicants(newCheckedApplicants);
  };

  const sendLogHandler = async (log: EmailLogType) => {
    await addDoc(
      collection(db, isDevelop ? 'emailLogs-dev' : 'emailLogs'),
      log,
    );
  };

  const emailCheckHandler = async (
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
      await sendEmailHandler(template, applicants);
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
    applicant: IApplicantTypeWithID,
  ) => {
    emailjs.init('pVvcK6wY1xj9L_Xjv');
    const result = await emailjs.send('default_service', template, {
      email: applicant.email,
      name: applicant.name,
    }, 'pVvcK6wY1xj9L_Xjv');
    return result;
  };

  const sendEmailHandler = async (
    template: string,
    applicants: IApplicantTypeWithID[],
  ) => {
    setLoading({ ...loading, isLoading: true });
    applicants.map(async (applicant) => {
      // if (admin.nickname) {
        try {
          const result = await sendEmail(template, applicant);
          //로그 생성
          const emailLog: EmailLogType = {
            email: applicant.email,
            name: applicant.name,
            applicantID: applicant.id,
            applicantStatus: applicant.status,
            sender: 'Peony',
            status: result.status,
            uploadDate: new Date(),
          };
          await sendLogHandler(emailLog);
          if (emailLog) {
            setAlert({
              ...alert,
              alertHandle: true,
              alertStatus: 'SUCCESS',
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
          setLoading({ ...loading, isLoading: false });
        }
      // }
    });
    setLoading({ ...loading, isLoading: false });
  };

  useEffect(() => {
    (async function () {
      const applicants = await getApplicants(null);
      setFilteredApplicants(applicants);
    })();
  }, []);

  return (
    <AdminContainerInner>
      <AnimatePresence>
        <AdminSectionWrapper>
          {selectApplicants && (
            <EmailCheckModal
              applicants={selectApplicants}
              emailCheckHandler={emailCheckHandler}
              template={template}
            />
          )}
          <EmailLeftWrapper>
            {selectApplicants && (
              <SelectedEmailContainer selectApplicants={selectApplicants} />
            )}
          </EmailLeftWrapper>
          <EmailRightWrapper>
            {filteredApplicants && (
              <EmailContainer
                checkedApplicantHandler={checkedApplicantHandler}
                checkedApplicants={checkedApplicants}
                checkAllHandler={checkAllHandler}
                filteredApplicants={filteredApplicants}
                isAllChecked={isAllChecked}
              />
            )}
          </EmailRightWrapper>
        </AdminSectionWrapper>
      </AnimatePresence>
    </AdminContainerInner>
  );
};

export default Email;
