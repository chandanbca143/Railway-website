// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJrbapIrDhxTo906pDaN5atDlZwIIfmA0",
  authDomain: "login-b5fe2.firebaseapp.com",
  projectId: "login-b5fe2",
  storageBucket: "login-b5fe2.firebasestorage.app",
  messagingSenderId: "519412094608",
  appId: "1:519412094608:web:731acfdee86b8ba9b02a15",
  measurementId: "G-KN834ZHTMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);