import {
  User,
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { getMemberListData, unwrapMemberListResponse } from '@src/apis/UserService';
import { auth, provider } from '@src/firebase/firebase';
import { UserAtomType } from '@src/store/userAtom';
import { IUserDataType } from '@type/userDataType';

const ADMIN_ROLES = new Set(['LEAD', 'CORE', 'MEMBER']);

const normalizeEmail = (email?: string | null) =>
  email?.trim().toLowerCase() ?? '';

const getMemberEmails = (member: IUserDataType) => {
  return [
    member.email,
    member.memberInfo?.email,
    member.memberInfo?.gitEmail,
  ]
    .map((email) => normalizeEmail(email))
    .filter(Boolean);
};

const findMemberByEmail = (
  members: IUserDataType[],
  email?: string | null,
) => {
  const targetEmail = normalizeEmail(email);

  if (!targetEmail) {
    return undefined;
  }

  return members.find((member) => getMemberEmails(member).includes(targetEmail));
};

const buildAdminUserState = (
  firebaseUser: User,
  member: IUserDataType,
): UserAtomType => {
  const nickname =
    member.memberInfo?.nickname ||
    firebaseUser.displayName ||
    member.username ||
    null;

  return {
    role: member.role,
    nickname,
    uid: member.userId || firebaseUser.uid,
    memberInfo: member.memberInfo,
    email: member.email || firebaseUser.email || null,
    username: member.username || firebaseUser.displayName || nickname,
  };
};

export const resolveAdminMember = async (
  firebaseUser: User,
): Promise<UserAtomType> => {
  const response = await getMemberListData();
  const members = unwrapMemberListResponse(response);
  const member = findMemberByEmail(members, firebaseUser.email);

  if (!member) {
    throw new Error('로그인 가능한 멤버 정보를 찾지 못했어요.');
  }
  if (!ADMIN_ROLES.has(member.role)) {
    throw new Error('관리자 페이지 접근 권한이 없어요.');
  }

  return buildAdminUserState(firebaseUser, member);
};

export const signInAdminWithGoogle = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const result = await signInWithPopup(auth, provider);

    return await resolveAdminMember(result.user);
  } catch (error) {
    if (auth.currentUser) {
      await signOut(auth);
    }

    throw error;
  }
};

export const signOutAdmin = async () => {
  await signOut(auth);
};

export const subscribeAdminAuth = (
  callback: (user: User | null) => void,
) => {
  return onAuthStateChanged(auth, callback);
};
