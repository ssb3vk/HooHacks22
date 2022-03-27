// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRVgZw3Wh-6olWlHVxnNhhsnocJXMeLjY",
  authDomain: "smartup-c6a71.firebaseapp.com",
  projectId: "smartup-c6a71",
  storageBucket: "smartup-c6a71.appspot.com",
  messagingSenderId: "227299627266",
  appId: "1:227299627266:web:f94c201b11163bb384721b",
  measurementId: "G-QVR8W5D0JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();