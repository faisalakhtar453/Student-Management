// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnUnc-oCBLFrXUmKM3EmVg9nY0NgaFoWY",
  authDomain: "student-management-b6236.firebaseapp.com",
  projectId: "student-management-b6236",
  storageBucket: "student-management-b6236.appspot.com",
  messagingSenderId: "885702182469",
  appId: "1:885702182469:web:933cde89fa1cac3b4d452c",
  measurementId: "G-YPER1XPT30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const Count = collection(firestore, "Admission");
export { analytics,firestore,Count}