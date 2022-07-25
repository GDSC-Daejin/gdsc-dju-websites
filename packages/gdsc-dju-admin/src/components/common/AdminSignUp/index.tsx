import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import { modalAtom } from '../../../atoms/modalAtom';
import OutsideClickHandler from '../../../utils/OutsideClickHandler';
import { AdminSignUpWrapper, ApplyModalWrapper } from './styled';
import { modalVariants } from '../../animations/modalVariants';
import { GDSCButton } from '../Button';
import { StyledInput } from '../TextInput/styled';

const AdminSignUp = () => {
  const [modal, setModal] = useAtom(modalAtom);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onRegisterIn = async (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setModal({ ...modal, ADMIN_SIGNUP: false });
      })
      .catch((error) => {
        if (error.code == 'auth/email-already-in-use') {
          setError('이미 사용 중인 이메일입니다.');
        } else if (error.code == 'auth/invalid-email') {
          setError('유효하지 않은 이메일입니다.');
        } else if (error.code == 'operation-not-allowed') {
          setError('이메일 가입이 중지되었습니다.');
        } else if (error.code == 'auth/weak-password') {
          setError('비밀번호를 6자리 이상 입력하세요.');
        } else if (error.code == 'auth/user-not-found') {
          setError('올바르지 않은 유저정보입니다.');
        } else if (error.code == 'auth/wrong-password') {
          setError('올바르지 않은 비밀번호입니다.');
        }
      });
  };

  return (
    <AnimatePresence>
      {modal.ADMIN_SIGNUP && (
        <ApplyModalWrapper>
          <OutsideClickHandler
            outsideClick={() => setModal({ ...modal, ADMIN_SIGNUP: false })}
          >
            <AdminSignUpWrapper
              variants={modalVariants}
              exit={'unActive'}
              animate={'active'}
              initial={'unActive'}
            >
              <StyledInput
                onChange={handleOnChange}
                name={'email'}
                placeholder={'이메일'}
              />
              <StyledInput
                onChange={handleOnChange}
                name={'password'}
                placeholder={'비밀번호'}
              />
              <div>{error}</div>
              <GDSCButton
                text={'회원가입'}
                color={'tossBlue'}
                onClick={onRegisterIn}
              />
            </AdminSignUpWrapper>
          </OutsideClickHandler>
        </ApplyModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default AdminSignUp;
