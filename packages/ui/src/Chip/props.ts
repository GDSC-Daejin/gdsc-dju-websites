import { HTMLAttributes, ReactNode } from 'react';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isDark?: boolean;
  size?: 'L' | 'S';
}
