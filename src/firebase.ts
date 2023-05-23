import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC-6tOTw_INBarFYsTqAdNsDCH9GyFkXpo",
  authDomain: "discord-clone-4d982.firebaseapp.com",
  projectId: "discord-clone-4d982",
  storageBucket: "discord-clone-4d982.appspot.com",
  messagingSenderId: "699530499067",
  appId: "1:699530499067:web:dbd58b7e2b557ee9d4f15e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };