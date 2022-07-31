import { collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react';
import { db } from '../../../firebase/firebase';
import { AdminContainerWrapper } from '../styled';

const AdminHome = () => {
  // const startRecruit = async (generation: string) => {
  //   await dbService.collection('recruitLog').doc(generation).set();
  // };
  // const endRecruit = async (generation: string) => {
  //   await dbService.collection('recruitLog').doc(generation).set();
  // };
  // const recruitQuery = query(
  //   collection(db, 'recruitLog'),
  //   where('status', '==', 'OPEN'),
  // );
  // const recruitLogQuery = query(
  //   collection(db, 'recruitLog'),
  //   where('status', '==', 'CLOSED'),
  // );
  // const getRecruitLog = async (generation: string) => {
  //   const recruit = await getDocs(recruitQuery);
  //   const result = (await recruit) ?? (await getDocs(recruitLogQuery));
  //   return result;
  // };
  return <AdminContainerWrapper></AdminContainerWrapper>;
};

export default AdminHome;
