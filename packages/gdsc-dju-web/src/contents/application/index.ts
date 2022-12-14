import { backendForm } from '@contents/application/backend';
import {
  beginnerApplication,
  beginnerForm,
} from '@contents/application/beginner';
import {
  designerApplication,
  designerForm,
} from '@contents/application/designer';
import {
  frontendApplication,
  frontendForm,
} from '@contents/application/frontend';
import { iosApplication, iosForm } from '@contents/application/ios';
import { mlApplication, mlForm } from '@contents/application/ml';
import { PositionType } from '@type/pageData';
import { FormElementsType, FormValue } from '@type/recruitForm';

import { androidApplication, androidForm } from './android';
import {
  designBeginnerApplication,
  designBeginnerForm,
} from './designBeginner';

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
