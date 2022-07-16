import React, {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  useRef,
  useState,
} from 'react';
import Folder from '../../../../assets/Folder';
import {
  InputImageWrapper,
  StyledFileInput,
  StyledInputWrapper,
} from '../TextInput/styled';

export interface Iprops {
  defaultPlaceholder: string;
  uploadFiles?: (file: HTMLInputElement) => void;
  errorToggle?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
}

const FileInput = (props: Iprops, ref: React.RefObject<HTMLInputElement>) => {
  const {
    defaultPlaceholder,
    uploadFiles,
    errorToggle,
    disabled,
    accept,
    onChange,
  } = props;
  const [placeholder, setPlaceholder] = useState(
    defaultPlaceholder || 'Choose a file',
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPlaceholder(e.target.files[0].name);
      onChange && onChange(e);
    }
  };

  return (
    <StyledInputWrapper
      error={errorToggle}
      disabled={!disabled}
      onClick={() => {
        inputRef.current && inputRef.current.click();
      }}
    >
      <InputImageWrapper>
        <Folder />
      </InputImageWrapper>
      <StyledFileInput>{placeholder}</StyledFileInput>
      <input
        ref={inputRef}
        type={'file'}
        style={{ display: 'none' }}
        name={'fileName'}
        accept={accept}
        onChange={fileHandler}
      />
    </StyledInputWrapper>
  );
};

export default forwardRef(
  FileInput as ForwardRefRenderFunction<HTMLInputElement, Iprops>,
);
