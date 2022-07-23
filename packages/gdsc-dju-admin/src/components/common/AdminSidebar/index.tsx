import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SidebarContainer } from '../../../pages/Admin/styled';
import {
  SideElementChildrenWrapper,
  SideElementSelectBar,
  SideElementText,
  SideElementWrapper,
} from './styled';

const position = {
  home: 'Home',
  frontend: 'Frontend Developer',
  backend: 'Backend Developer',
  android: 'Android Developer',
  beginner: 'Beginner',
  design: 'Designer',
  ml: 'Machine Learning',
};
const ROUTES = [
  { label: '홈', route: '/' },
  { label: '멤버 관리', route: '/member' },
  { label: '지원자 관리', route: '/recruit' },
  { label: '이메일', route: '/email' },
  { label: '이메일 로그', route: '/email-log' },
];

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const routeHandler = (route: string) => {
    navigate(`/certified${route}`);
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const setParams = (key: string) => {
    setSearchParams({ type: key });
  };

  const positionList = Object.keys(position);

  return (
    <SidebarContainer>
      {ROUTES.map((item) => {
        const isCurrent = location.pathname === item.route;
        const isRecruitRoute = location.pathname.includes('/certified/recruit');
        const isRecruit = item.label === '지원자 관리';
        return (
          <>
            <SideElementWrapper
              key={item.route}
              onClick={() => routeHandler(item.route)}
            >
              <SideElementSelectBar isCurrent={isCurrent} id={'bar'} />
              <SideElementText isCurrent={isCurrent}>
                {item.label}
              </SideElementText>
            </SideElementWrapper>
            {isRecruit &&
              isRecruitRoute &&
              positionList.map((data) => {
                const selectedPosition = searchParams.get('type') === data;
                return (
                  <SideElementChildrenWrapper
                    key={data}
                    onClick={() => setParams(data)}
                  >
                    <SideElementText isCurrent={selectedPosition}>
                      {data}
                    </SideElementText>
                  </SideElementChildrenWrapper>
                );
              })}
          </>
        );
      })}
    </SidebarContainer>
  );
};

export default memo(AdminSidebar);
