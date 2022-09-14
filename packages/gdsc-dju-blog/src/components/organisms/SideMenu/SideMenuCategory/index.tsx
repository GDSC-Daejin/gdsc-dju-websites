import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';

import {
  SideCategoryCircle,
  SideCategoryCircleWrapper,
  SideCategoryMenuWrapper,
  SideCategoryText,
  SideCategoryTextWrapper,
  SideMenuGDSCLogoWrapper,
} from './styled';
import { SideMenuCircleAnimation } from '@src/components/Animation';
import { MENU_KEY, menuState } from '@src/store/menu';
import { positionColor } from '@src/store/positionColor';

import GdscLogo from '@assets/logos/GdscLogo';
import { category } from '@type/position';

const SideMenuCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useRecoilState(menuState);

  const animate = (value: string) => {
    return location.pathname.includes(value);
  };

  return (
    <SideCategoryMenuWrapper>
      {category.map((data, id) => {
        const categoryValue = category[id].toLowerCase();
        return (
          <SideCategoryTextWrapper
            key={id}
            isActive={animate(categoryValue)}
            onClick={() => {
              navigate(`/category/${categoryValue}`);
              setMenu({ ...menu, [MENU_KEY.APP_MENU]: false });
            }}
          >
            <SideCategoryCircleWrapper
              variants={SideMenuCircleAnimation}
              animate={animate(categoryValue) ? 'isActive' : 'isUnActive'}
            >
              {categoryValue === 'all' ? (
                <SideMenuGDSCLogoWrapper>
                  <GdscLogo />
                </SideMenuGDSCLogoWrapper>
              ) : (
                <SideCategoryCircle color={positionColor(categoryValue)} />
              )}
            </SideCategoryCircleWrapper>
            <SideCategoryText
              isActive={animate(categoryValue)}
              className={'SideMenuText'}
            >
              {data}
            </SideCategoryText>
          </SideCategoryTextWrapper>
        );
      })}
    </SideCategoryMenuWrapper>
  );
};

export default SideMenuCategory;
