// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL4q7C-AMnRaLbK--1ePcpMYvgMpwtCF4",
  authDomain: "socialmediaapp-e34ee.firebaseapp.com",
  projectId: "socialmediaapp-e34ee",
  storageBucket: "socialmediaapp-e34ee.appspot.com",
  messagingSenderId: "108386760473",
  appId: "1:108386760473:web:97f06e5d226b2daaa1f788",
  measurementId: "G-JZHT24N60Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, analytics };
