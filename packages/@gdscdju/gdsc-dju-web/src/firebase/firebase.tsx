// Import the functions you need from the SDKs you need
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { app } from './firebase.config';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
