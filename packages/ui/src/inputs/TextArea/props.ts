export type TextAreaAttributes = {
  value?: string;
} & Pick<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  | 'autoComplete'
  | 'autoFocus'
  | 'disabled'
  | 'maxLength'
  | 'minLength'
  | 'name'
  | 'readOnly'
  | 'rows'
  | 'placeholder'
  | 'onChange'
  | 'onFocus'
  | 'onBlur'
  | 'onClick'
>;

export type TextAreaProps = {
  className?: string;
  borderless?: boolean;
  hasError?: boolean;
} & TextAreaAttributes;
