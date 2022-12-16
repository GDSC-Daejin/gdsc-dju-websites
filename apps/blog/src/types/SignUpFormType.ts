import { Dispatch, SetStateAction } from 'react';
import {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';

export interface IFormStructure {
  refName: string;
  type: 'text' | 'tel' | 'email';
  title: string;
  select?: boolean;
  nickNameCheck?: boolean;
  register: UseFormRegister<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
  watch?: UseFormWatch<FieldValues>;
  trigger?: UseFormTrigger<FieldValues>;
  checkNicknameState?: boolean;
  setCheckNickname?: Dispatch<SetStateAction<boolean>>;
  placeholder?: string;
  condition?: RegisterOptions;
  errors: any;
}

export const errorCheck = (error: string | undefined) => {
  return error !== undefined;
};
