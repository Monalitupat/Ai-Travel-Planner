// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA-87bw9WWerQQybL1vm1EQQ_UA6n4N6c",
  authDomain: "ai-travel-planner-5b9ce.firebaseapp.com",
  projectId: "ai-travel-planner-5b9ce",
  storageBucket: "ai-travel-planner-5b9ce.firebasestorage.app",
  messagingSenderId: "617166526529",
  appId: "1:617166526529:web:ffc3a48c0990d4a1578ec0",
  measurementId: "G-61P081KR1K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
