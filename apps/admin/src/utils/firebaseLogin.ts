import { getAuth, getRedirectResult, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth();

export const firebaseLogin = async () => {
  const result = await getRedirectResult(auth);
  if (!result) {
    return;
  }
  const credential = await GoogleAuthProvider.credentialFromResult(result);
  if (!credential) {
    return;
  }
  const token = credential.accessToken;
  const user = result.user;
};
