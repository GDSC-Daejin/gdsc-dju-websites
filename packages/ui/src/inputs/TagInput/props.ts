export type TagInputAttributes = {
  value?: string;
} & Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'autoComplete'
  | 'autoFocus'
  | 'disabled'
  | 'name'
  | 'readOnly'
  | 'placeholder'
  | 'onFocus'
  | 'onBlur'
  | 'onClick'
>;

export type TagInputProps = {
  className?: string;
  tags?: string[] | [];
  onChange: (tags: string[]) => void;
  maxTags?: number;
  hasError?: boolean;
  borderless?: boolean;
  chip?: keyof JSX.IntrinsicElements;
} & TagInputAttributes;
