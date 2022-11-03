export type Position =
  | 'all'
  | 'frontend'
  | 'backend'
  | 'client'
  | 'design'
  | 'ml';
export const position: Position[] = [
  'all',
  'frontend',
  'backend',
  'client',
  'design',
  'ml',
];

export const category: Array<Capitalize<Position>> = [
  'All',
  'Frontend',
  'Backend',
  'Client',
  'Design',
  'Ml',
];
