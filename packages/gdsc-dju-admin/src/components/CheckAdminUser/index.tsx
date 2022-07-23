import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { userAtom } from '../../atoms/userAtom';
import { auth, db } from '../../firebase/firebase';

const CheckAdminUser = () => {
  const [adminUser, setAdminUser] = useAtom(userAtom);
  const navigate = useNavigate();
  const location = useLocation();

  const getAdminUser = async (uid: string) => {
    const adminUserRef = await getDoc(doc(db, 'adminUsers', uid));
    const userData = adminUserRef.data();
    if (adminUserRef.exists()) {
      setAdminUser({
        ...adminUser,
        uid: uid,
        nickname: userData?.nickname,
        name: userData?.name,
        phoneNumber: userData?.phoneNumber,
      });
    }
  };
  const checkAdminUser = async () => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        try {
          getAdminUser(user.uid);
        } catch (error) {
          navigate('/');
        }
      }
    });
  };

  useEffect(() => {
    checkAdminUser();
  }, [location.pathname]);
  return null;
};

export default CheckAdminUser;
