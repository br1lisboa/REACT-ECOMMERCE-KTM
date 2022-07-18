// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7DP-MgPYUDDLw1hCo2H22VCNle-eFqPw",
  authDomain: "ecommerce-react-coder-2ec02.firebaseapp.com",
  projectId: "ecommerce-react-coder-2ec02",
  storageBucket: "ecommerce-react-coder-2ec02.appspot.com",
  messagingSenderId: "640032918175",
  appId: "1:640032918175:web:ecbeaf5247b0af1231f0aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);