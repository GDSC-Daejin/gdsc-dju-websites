import emailjs from '@emailjs/browser';
import { addDoc, collection } from 'firebase/firestore';
import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import AdminEmailCheckModal from '../../components/molecules/modal/AdminEmailCheckModal';
import ApplicantModal from '../../components/molecules/modal/ApplicantModal';
import EmailContainer from '../../components/organisms/EmailContainer';
import SelectedEmailContainer from '../../components/organisms/SelectedEmailContainer';
import { isDevelop } from '../../context/recruitInfo';
import { db } from '../../firebase/firebase';
import { useModalHandle } from '../../hooks/useModalHandle';

import { alertAtom } from '../../store/alertAtom';
import { loaderAtom } from '../../store/loaderAtom';
import { templateAtom } from '../../store/templateAtom';
import { userAtom } from '../../store/userAtom';
import { EmailLogType, IApplicantTypeWithID } from '../../types/applicant';
import { getApplicants } from '../../utils/applicantsHandler';
import { AdminSectionWrapper } from '../Applicants/styled';
import { AdminContainerInner } from '../styled';
import { EmailLeftWrapper, EmailRightWrapper } from './styled';

const Email = () => {
  const [alert, setAlert] = useAtom(alertAtom);
  const [loading, setLoading] = useAtom(loaderAtom);
  const [admin] = useAtom(userAtom);

  const [filteredApplicants, setFilteredApplicants] =
    useState<IApplicantTypeWithID[]>();
  const [checkedApplicants, setCheckedApplicants] = useState<Set<string>>(
    new Set(),
  );

  const [template] = useAtom(templateAtom);

  const { closeModal } = useModalHandle('EMAIL');

  const isAllChecked = checkedApplicants.size === filteredApplicants?.length;

  const checkAllHandler = () => {
    if (isAllChecked) {
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
    <AdminContainerInner>
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
            {selectApplicants && (
              <SelectedEmailContainer selectApplicants={selectApplicants} />
            )}
          </EmailLeftWrapper>
          <EmailRightWrapper>
            {filteredApplicants && (
              <EmailContainer
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
