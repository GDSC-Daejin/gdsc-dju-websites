import React, { memo } from 'react';

import GdscLogo from '@assets/logos/GdscLogo';
import { circleMotion } from '@src/components/Animation';
import { positionColor } from '@src/utils/positionColor';
import { category, Position } from '@type/position';

import {
  CategoryCircle,
  CategoryCircleWrapper,
  CategoryMenuWrapper,
  CategoryText,
  CategoryTextWrapper,
  GDSCLogoWrapper,
} from './styled';

type CategoryMenuProps = {
  onClick?: (url: Position) => void;
  type: string;
};

const CategoryMenu: React.FC<CategoryMenuProps> = ({ onClick, type }) => {
  const animate = (value: string, categoryValue: string) => {
    return value.toLowerCase() === categoryValue.toLowerCase();
  };

  return (
    <CategoryMenuWrapper>
      {category.map((item, id) => {
        const categoryValue = category[id].toLowerCase() as Position;
        return (
          <CategoryTextWrapper
            isActive={animate(type, categoryValue)}
            onClick={() => onClick && onClick(categoryValue)}
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
