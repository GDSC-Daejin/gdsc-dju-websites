export type Position =
  | 'all'
  | 'frontend'
  | 'backend'
  | 'android'
  | 'design'
  | 'common';

export const category: Array<Capitalize<Position>> = [
  'All',
  'Frontend',
  'Backend',
  'Android',
  'Design',
  'Common',
];
