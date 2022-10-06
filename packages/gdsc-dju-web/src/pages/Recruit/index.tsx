import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import RecruitForm from './AnnounceForm';
import RecruitmentDetail from './Announcement';
import ApplySuccess from './ApplySuccess';
import Recruitment from './Recruitment';

const Recruit = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<Recruitment />} />
      <Route path={'/detail/:id'} element={<RecruitmentDetail />} />
      <Route path={'/form/:id'} element={<RecruitForm />} />
      <Route path={'/apply-success'} element={<ApplySuccess />} />
    </Routes>
  );
};

export default memo(Recruit);
