import React, { memo } from 'react';
import {
  CategoryCircle,
  CategoryCircleWrapper,
  CategoryMenuWrapper,
  CategoryText,
  CategoryTextWrapper,
  GDSCLogoWrapper,
} from './styled';
import { positionColor } from '@src/store/positionColor';
import GdscLogo from '@assets/logos/GdscLogo';

import { circleMotion } from '@src/components/Animation';
import { category } from '@type/position';

type CategoryMenuProps = {
  onClick?: (url: string) => void;
  type: string;
};

const CategoryMenu: React.FC<CategoryMenuProps> = ({ onClick, type }) => {
  const animate = (value: string, categoryValue: string) => {
    return value.toLowerCase() === categoryValue.toLowerCase();
  };

  return (
    <CategoryMenuWrapper>
      {category.map((item, id) => {
        const categoryValue = category[id].toLowerCase();
        return (
          <CategoryTextWrapper
            isActive={animate(type, categoryValue)}
            onClick={() => {
              {
                onClick && onClick(categoryValue);
              }
            }}
            key={id}
          >
            <CategoryCircleWrapper
              variants={circleMotion}
              animate={animate(type, categoryValue) ? 'isActive' : 'isUnActive'}
            >
              {categoryValue === 'all' ? (
                <GDSCLogoWrapper>
                  <GdscLogo />
                </GDSCLogoWrapper>
              ) : (
                <CategoryCircle colors={positionColor(categoryValue)} />
              )}
            </CategoryCircleWrapper>
            <CategoryText>{item}</CategoryText>
          </CategoryTextWrapper>
        );
      })}
    </CategoryMenuWrapper>
  );
};
export default memo(CategoryMenu);
