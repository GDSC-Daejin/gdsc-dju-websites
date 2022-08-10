import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSidebar from '../components/common/AdminSidebar';

import AdminApplicants from './Applicants';
import Email from './Email';
import AdminEmailLog from './EmailLog';
import Home from './Home';
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
              <Route path={'/*'} element={<Home />} />
              <Route path={'/recruit'} element={<AdminApplicants />} />
              <Route path={'/email'} element={<Email template={template} />} />
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
