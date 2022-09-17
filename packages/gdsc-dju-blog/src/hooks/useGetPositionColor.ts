import { useTheme } from 'styled-components';
export const useGetPositionColor = (position: string) => {
  const theme = useTheme();
  switch (position) {
    case 'Frontend':
      return theme.colors.blue900;
    case 'Backend':
      return theme.colors.red900;
    case 'Designer':
      return theme.colors.yellow900;
    case 'Android':
      return theme.colors.green900;
    case 'Beginner':
      return theme.colors.orange900;
  }
};
