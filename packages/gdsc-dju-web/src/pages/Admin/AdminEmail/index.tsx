import emailjs from '@emailjs/browser';
import { addDoc, collection } from 'firebase/firestore';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isDevelop } from '../../../apis/pageData/recruitInfo';
import ApplicantModal from '../../../components/admin/ApplicantModal';
import StatusBadgeBox from '../../../components/admin/StatusBadgeBox';
import { GDSCButton } from '../../../components/common/Button';
import CheckBoxCard from '../../../components/common/CheckBoxCard';
import AdminEmailCheckModal from '../../../components/common/Modal/AdminEmailCheckModal';
import { db } from '../../../firebase/firebase';
import { alertState } from '../../../store/alert';
import { loaderState } from '../../../store/loader';
import { adminUserState } from '../../../store/localUser';
import { MODAL_KEY, modalState } from '../../../store/modal';

import {
  EmailLogType,
  IApplicantTypeWithID,
  StatusType,
} from '../../../types/applicant';
import { getApplicants } from '../../../utils/applicantsHandler';
import {
  AdminSectionWrapper,
  EmailButtonWrapper,
  InformationHeader,
} from '../AdminApplicants/styled';
import {
  CheckboxSection,
  CheckboxWrapper,
  EmailCategory,
  EmailLeftInner,
  EmailLeftWrapper,
  EmailRightInner,
  EmailRightWrapper,
  SelectedBoxSection,
} from './styled';

const AdminEmail: React.FC<{ template: string }> = ({ template }) => {
  const [alert, setAlert] = useRecoilState(alertState);
  const [loading, setLoading] = useRecoilState(loaderState);
  const admin = useRecoilValue(adminUserState);

  const [filteredApplicants, setFilteredApplicants] =
    useState<IApplicantTypeWithID[]>();
  const [checkedApplicants, setCheckedApplicants] = useState(new Set());
  const [filter, setFilter] = useState<StatusType | null>(null);
  const [modal, setModal] = useRecoilState(modalState);
  const openModal = (id: string) => {
    setModal({
      ...modal,
      [MODAL_KEY.ADMIN_APPLICANT]: true,
      selectedId: id,
    });
  };
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
    template: string,
    applicants: IApplicantTypeWithID[],
  ) => {
    setModal({
      ...modal,
      [MODAL_KEY.ADMIN_EMAIL_CHECK]: false,
    });
    if (applicants.length === 0) {
      setAlert({
        ...alert,
        alertHandle: true,
        alertMessage: '지원자를 선택해주세요.',
      });
    }
    if (template === '템플릿이 없어요 :(') {
      setAlert({
        ...alert,
        alertHandle: true,
        alertMessage: '템플릿을 선택하지 않았어요.',
      });
    } else {
      setLoading({ ...loading, load: true });
      await sendEmail(template, applicants);
    }
  };

  const sendEmail = async (
    template: string,
    applicants: IApplicantTypeWithID[],
  ) => {
    applicants.map(async (applicant) => {
      emailjs.init('RsM6o4WUsb5rzJGXG');
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
          setLoading({ ...loading, load: false });
        }
      } catch (e) {
        setAlert({
          ...alert,
          alertHandle: true,
          alertMessage: '어딘가 문제가 생겼어요. 콘솔을 확인해주세요.',
        });
      }
    });
  };
  const applicantHandler = async () => {
    const applicants = await getApplicants(filter);
    setFilteredApplicants(applicants);
  };

  useEffect(() => {
    applicantHandler();
  }, [filter]);

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
                  <div
                    onDoubleClick={() => openModal(applicant.id)}
                    key={`check-${applicant.id}`}
                  >
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
              {filteredApplicants && (
                <StatusBadgeBox
                  status={filter}
                  setStatus={setFilter}
                  filteredApplicants={filteredApplicants}
                  setFilteredApplicants={setFilteredApplicants}
                />
              )}
              <EmailButtonWrapper>
                <GDSCButton
                  color={!isAllChecked ? 'tossBlue200' : 'tossBlueActive'}
                  text={!isAllChecked ? '모두 선택' : '모두 해제'}
                  onClick={() => checkAllHandler(!isAllChecked)}
                  type={'button'}
                />
                <GDSCButton
                  color={'googleBlue'}
                  text={'이메일 전송'}
                  onClick={() =>
                    setModal(() => ({
                      ...modal,
                      adminEmailCheck: true,
                    }))
                  }
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

export default AdminEmail;
