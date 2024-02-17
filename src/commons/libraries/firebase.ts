// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKSGCHcd2URBzYIs-yy1IzowoDnhhtyvg",
  authDomain: "jokafirebase.firebaseapp.com",
  projectId: "jokafirebase",
  storageBucket: "jokafirebase.appspot.com",
  messagingSenderId: "280747882226",
  appId: "1:280747882226:web:4ad5f4ab183a540326826b"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);