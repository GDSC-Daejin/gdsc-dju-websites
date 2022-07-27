import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSidebar from '../../components/common/AdminSidebar';

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
  const [template, setTemplate] = useState<string>('템플릿이 없어요 :(');

  return (
    <>
      <AdminContainerWrapper>
        <AdminSidebar />
        <AdminContainer>
          <AdminContainerInner>
            <Routes>
              <Route path={'/*'} element={<AdminHome />} />
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
