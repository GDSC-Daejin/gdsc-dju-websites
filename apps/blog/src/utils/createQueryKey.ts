import { stringify } from 'qs';

import { Position } from '@type/position';

const postUrlFilter = (position: Position) => {
  if (position === 'all') {
    return ``;
  } else {
    return position;
  }
};
export const postSearchUrlFilter = (
  searchContent: string,
  position: Position,
) => {
  if (position === 'all') {
    return searchContent;
  } else {
    return `${position}/${searchContent}`;
  }
};
export const createSearchUrl = (
  searchContent: string,
  position: Position,
  args: any,
) => {
  const arg = args[0];
  const query = stringify(arg);
  return `${postSearchUrlFilter(searchContent, position)}?${query}`;
};

export const createCategoryUrl = (position: Position, args: any) => {
  const arg = args[0];
  const query = stringify(arg);
  return `${postUrlFilter(position)}?${query}`;
};

export const createQueryKey = (url: string, ...args: any) => {
  const arg = args[0];
  const query = stringify(arg);
  return [url, query];
};

const a = {
  id: 1,
  name: 'test',
};

`id=1&name=test`;
