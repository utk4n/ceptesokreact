import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBokXYyk55X5AQAoZmmMge8AUbSQU_yHA4",
  authDomain: "sokmarket-47dd0.firebaseapp.com",
  projectId: "sokmarket-47dd0",
  storageBucket: "sokmarket-47dd0.appspot.com",
  messagingSenderId: "50740266345",
  appId: "1:50740266345:web:98fd7a23bd3c28858069f8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
