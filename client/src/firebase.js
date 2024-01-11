// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2af8d.firebaseapp.com",
  projectId: "mern-estate-2af8d",
  storageBucket: "mern-estate-2af8d.appspot.com",
  messagingSenderId: "693870589434",
  appId: "1:693870589434:web:810ae32efaf38f20036043"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);