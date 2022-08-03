import React, { memo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { SidebarContainer } from '../../../pages/styled';
import { ROUTES } from '../../../routes/Route';

import {
  SideElementChildrenWrapper,
  SideElementSelectBar,
  SideElementText,
  SideElementWrapper,
} from './styled';

const position = {
  home: 'HomeSection',
  frontend: 'Frontend Developer',
  backend: 'Backend Developer',
  android: 'Android Developer',
  beginner: 'Beginner',
  design: 'Designer',
  ml: 'Machine Learning',
};

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const ROUTEHandler = (ROUTE: string) => {
    navigate(ROUTE);
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const setParams = (key: string) => {
    setSearchParams({ type: key });
  };

  const positionList = Object.keys(position);
  const ROUTEArray = Object.values(ROUTES);
  return (
    <SidebarContainer>
      {ROUTEArray.map((item) => {
        const isCurrent = location.pathname === item.ROUTE;
        const isRecruitROUTE = location.pathname.includes('/certified/recruit');
        const isRecruit = item.LABEL === '지원자 관리';
        return (
          <>
            <SideElementWrapper
              key={item.ROUTE}
              onClick={() => ROUTEHandler(item.ROUTE)}
            >
              <SideElementSelectBar isCurrent={isCurrent} id={'bar'} />
              <SideElementText isCurrent={isCurrent}>
                {item.LABEL}
              </SideElementText>
            </SideElementWrapper>
            {isRecruit &&
              isRecruitROUTE &&
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
