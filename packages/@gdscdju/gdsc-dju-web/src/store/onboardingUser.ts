import { atom } from 'recoil';

const ONBOARDING_USER_KEY = 'onboardingUser';

export const OnboardingUserState = {
  email: '',
  nickname: 'unknown',
  major: '',
  interest: '',
};
export const onboardingUserState = atom<typeof OnboardingUserState>({
  key: ONBOARDING_USER_KEY,
  default: OnboardingUserState,
});
