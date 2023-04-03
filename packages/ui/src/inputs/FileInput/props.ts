export type FileInputAttributes = {
  value?: string;
} & Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'autoComplete'
  | 'autoFocus'
  | 'disabled'
  | 'name'
  | 'readOnly'
  | 'placeholder'
  | 'onChange'
  | 'onFocus'
  | 'onBlur'
  | 'onClick'
>;

export type FileInputProps = {
  /**
   * 컴포넌트의 root element(`div`)에 추가되는 className입니다.
   */
  className?: string;

  /**
   * 에러 상태를 표시합니다.
   */
  hasError?: boolean;
  borderless?: boolean;
} & FileInputAttributes;
