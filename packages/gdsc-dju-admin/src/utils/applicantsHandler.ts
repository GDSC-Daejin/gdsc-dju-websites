import { StatusType } from '../types/applicant';
import { db } from '../firebase/firebase';
import { recruitInfo } from '../context/recruitInfo';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { Application, ApplicationWithoutID } from '@gdsc-dju/shared';

export const applicantFilterByStatus = (filteredApplicants: Application[]) => {
  const DOCS = filteredApplicants.filter((data) => data.status === 'DOCS');
  const INTERVIEW = filteredApplicants.filter(
    (data) => data.status === 'INTERVIEW',
  );
  const REJECTED_DOCS = filteredApplicants.filter(
    (data) => data.status === 'REJECTED_DOCS',
  );
  const REJECTED_INTERVIEW = filteredApplicants.filter(
    (data) => data.status === 'REJECTED_INTERVIEW',
  );
  const HIRED = filteredApplicants.filter((data) => data.status === 'HIRED');
  return {
    DOCS: DOCS,
    INTERVIEW: INTERVIEW,
    REJECTED_DOCS: REJECTED_DOCS,
    REJECTED_INTERVIEW: REJECTED_INTERVIEW,
    HIRED: HIRED,
  };
};

export const getApplicants = async (status: StatusType | null) => {
  const applicantRef = collection(db, recruitInfo.COLLECTION);
  const q = status
    ? query(applicantRef, where('status', '==', status))
    : query(applicantRef, orderBy('uploadDate', 'desc'));
  const res = await getDocs(q);

  const applicantsList = res.docs.map((doc) => {
    return { id: doc.id, ...(doc.data() as ApplicationWithoutID) };
  });
  return applicantsList;
};
export const getApplicant = async (id: string) => {
  const res = await getDoc(doc(db, recruitInfo.COLLECTION, id));
  return { id: res.id, ...(res.data() as ApplicationWithoutID) };
};
