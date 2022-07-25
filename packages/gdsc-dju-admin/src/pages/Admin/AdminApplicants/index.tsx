import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { AdminSectionWrapper } from './styled';
import { useRecoilValue } from 'recoil';
import { recruitmentAtom } from '../../../atoms/recruitmentAtom';
import API from '../../../apis/index';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import AdminApplicantSection from '../../../components/common/AdminApplicantSection';

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
