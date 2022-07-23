import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { userAtom } from '../../atoms/userAtom';
import AdminSidebar from '../../components/common/AdminSidebar';
import AdminSignUp from '../../components/common/AdminSignUp';
import Navigation from '../../components/common/Navigation';

import { auth, db } from '../../firebase/firebase';

import AdminApplicants from './AdminApplicants';
import AdminEmail from './AdminEmail';
import AdminEmailLog from './AdminEmailLog';
import AdminHome from './AdminHome';
import {
  AdminContainer,
  AdminContainerInner,
  AdminContainerWrapper,
} from './styled';

const Admin = () => {
  const [adminUser, setAdminUser] = useAtom(userAtom);
  // const [selector, setSelector] = useRecoilState(recruitmentSelector);
  const [template, setTemplate] = useState<string>('템플릿이 없어요 :(');
  const navigate = useNavigate();

  const getAdminUser = async (uid: string) => {
    const adminUserRef = await getDoc(doc(db, 'adminUsers', uid));
    const userData = adminUserRef.data();
    if (adminUserRef.exists()) {
      setAdminUser({
        ...adminUser,
        uid: uid,
        nickname: userData?.nickname,
        name: userData?.name,
        phoneNumber: userData?.phoneNumber,
      });
    }
  };

  const checkAdminUser = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        try {
          getAdminUser(user.uid);
        } catch (error) {
          navigate('/auth');
        }
      }
    });
  };

  useEffect(() => {
    // setSelector(selector);
    checkAdminUser();
  }, []);
  return (
    <>
      <AdminSignUp />
      <AdminContainerWrapper>
        <AdminSidebar />
        <AdminContainer>
          <AdminContainerInner>
            <Routes>
              <Route path={'/*'} element={<AdminHome />} />
              {/*<Route path={'/member'} element={<AdminMember />} />*/}
              <Route path={'/recruit'} element={<AdminApplicants />} />
              <Route
                path={'/email'}
                element={<AdminEmail template={template} />}
              />
              <Route
                path={'/email-log'}
                element={
                  <AdminEmailLog
                    template={template}
                    setTemplate={setTemplate}
                  />
                }
              />
            </Routes>
          </AdminContainerInner>
        </AdminContainer>
      </AdminContainerWrapper>
    </>
  );
};

export default Admin;
