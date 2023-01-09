// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// 🔥 Import Firestore Database
import { getFirestore } from 'firebase/firestore';

// 🔑 Import Auth provider info from Firebase
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDa1Wx6st1z_YV1xXLmpZWm21RfhD64L10',
  authDomain: 'next-habit-tracker.firebaseapp.com',
  projectId: 'next-habit-tracker',
  storageBucket: 'next-habit-tracker.appspot.com',
  messagingSenderId: '299447850787',
  appId: '1:299447850787:web:202d0f9ad7d58278d81e96',
};

// Initialize Firebase, always make this first
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider };
