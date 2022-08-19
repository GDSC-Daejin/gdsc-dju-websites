import styled from 'styled-components';
import { assetColors } from '../../../styles/assetColors';

export const SelectBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 512px;
`;

export const SignUpSelectBoxInner = styled.div`
  position: relative;
  width: 512px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SignUpDefaultSelectBox = styled.input`
  display: none;
`;

export const SignUpSelectBox = styled.ul<{
  errorCheck: boolean;
  BoxOpen: boolean;
}>`
  position: relative;
  width: 512px;
  height: ${({ theme, BoxOpen }) => (BoxOpen ? '288px' : '48px')};
  box-sizing: border-box;
  z-index: 30;
  background-color: ${({ theme }) => theme.colors.white};
  list-style-type: none;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.grey400};
  border-radius: 10px;
  border: 1px solid
    ${({ theme, errorCheck }) =>
      errorCheck ? theme.colors.tossRed : theme.colors.grey400};
  li:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;
export const SignUpSelectOption = styled.li<{ selected: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  cursor: pointer;
  padding: 11px 20px;
  color: ${({ theme }) => theme.colors.grey400};
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.body4};
  line-height: 26px;
  background-color: ${({ theme, selected }) =>
    selected && theme.colors.grey100};
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey100};
  }
`;

const handleColorType = (position: string) => {
  switch (position) {
    case 'Frontend':
      return assetColors.GDSC_Red;
    case 'Backend':
      return assetColors.GDSC_Blue;
    case 'Designer':
      return assetColors.GDSC_Yellow;
    case 'Android':
      return assetColors.GDSC_Green;
    case 'Beginner':
      return assetColors.GDSC_Beginner;
  }
};

export const SignUpColorCircle = styled.div<{ position: string }>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, position }) => handleColorType(position)};
  border-radius: 50%;
`;

export const ArrowWrapper = styled.div<{ BoxOpen: boolean }>`
  display: flex;
  align-items: center;
  svg {
    transform: ${({ BoxOpen }) => BoxOpen && 'rotate(180deg)'};
  }
`;

export const SignUpInputLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
`;

export const SignUpInputLabelText = styled.label`
  font-size: ${({ theme }) => theme.fontSize.body4};
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.grey900};
`;

export const SignUpInputLabelCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: red;
`;
