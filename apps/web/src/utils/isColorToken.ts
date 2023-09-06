import { ColorGroup, isColorGroup } from '@gdsc-dju/styled-components-theme';

export const isColorToken = (str: string) => {
  //remove number
  const colorGroup = str.replace(/[0-9]/g, '') as ColorGroup;
  return isColorGroup(colorGroup);
};
