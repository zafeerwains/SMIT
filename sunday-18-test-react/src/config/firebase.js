// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuxo4hk1aFL6Mn6G6OefCFexDG-pibjNI",
  authDomain: "july-22-2023.firebaseapp.com",
  projectId: "july-22-2023",
  storageBucket: "july-22-2023.appspot.com",
  messagingSenderId: "986112288167",
  appId: "1:986112288167:web:721a9f01ccfa3df0070282",
  measurementId: "G-C9XN5TH55P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export {analytics,firestore}