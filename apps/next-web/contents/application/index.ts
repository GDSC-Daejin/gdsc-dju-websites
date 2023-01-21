import { PositionType } from '../../types/pageData';
import { FormElementsType, FormValue } from '../../types/recruitForm';

import { androidApplication, androidForm } from './android';
import { backendForm } from './backend';
import { beginnerApplication, beginnerForm } from './beginner';
import {
  designBeginnerApplication,
  designBeginnerForm,
} from './designBeginner';
import { designerApplication, designerForm } from './designer';
import { frontendApplication, frontendForm } from './frontend';
import { iosApplication, iosForm } from './ios';
import { mlApplication, mlForm } from './ml';

export const applications = {
  android: androidApplication,
  frontend: frontendApplication,
  beginner: beginnerApplication,
  designer: designerApplication,
  designBeginner: designBeginnerApplication,
  ios: iosApplication,
  ml: mlApplication,
};

export const forms: Record<PositionType, FormElementsType<keyof FormValue>> = {
  android: androidForm,
  frontend: frontendForm,
  beginner: beginnerForm,
  backend: backendForm,
  designer: designerForm,
  designBeginner: designBeginnerForm,
  ios: iosForm,
  ml: mlForm,
};
