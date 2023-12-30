// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApJp7dko5ilfST3vdP2rkkUW-cX7_q5S4",
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-eae92.firebaseapp.com",
  projectId: "mern-auth-eae92",
  storageBucket: "mern-auth-eae92.appspot.com",
  messagingSenderId: "538860346768",
  appId: "1:538860346768:web:ed0a40fe6f9dd865922715"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);