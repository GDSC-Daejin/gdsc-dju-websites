import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import API from '../../apis';
import { useSearchParams } from 'react-router-dom';
import AdminApplicantSection from '../../components/common/AdminApplicantSection';
import { recruitmentAtom } from '../../store/recruitmentAtom';
import { AdminSectionWrapper } from './styled';

const AdminApplicants = () => {
  const [recruit] = useAtom(recruitmentAtom);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    API.putRecruitStatus(recruit);
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

export default AdminApplicants;
