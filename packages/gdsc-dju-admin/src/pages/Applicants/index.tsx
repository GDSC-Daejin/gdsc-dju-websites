import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import API from '../../apis';
import AdminApplicantSection from '../../components/organisms/AdminApplicantSection';

import {
  recruitmentReadOnlyAtom,
  recruitmentWriteOnlyAtom,
} from '../../store/recruitmentAtom';
import { AdminSectionWrapper } from './styled';

const Applicants = () => {
  const [recruit] = useAtom(recruitmentReadOnlyAtom);
  const [, writeRecruitStatus] = useAtom(recruitmentWriteOnlyAtom);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    writeRecruitStatus();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (recruit && token) {
      API.putRecruitStatus(recruit, token);
    }
  }, [recruit]);

  useEffect(() => {
    !searchParams.get('type') &&
      setSearchParams({
        type: 'home',
      });
  }, [location.pathname]);

  return (
    <AdminSectionWrapper>
      <AdminApplicantSection />
    </AdminSectionWrapper>
  );
};

export default Applicants;
