export type Position = 'frontend' | 'backend' | 'android' | 'design' | 'common';

export const category: Capitalize<Position>[] = [
  'ALL',
  'Frontend',
  'Backend',
  'Android',
  'Design',
  'Common',
];
