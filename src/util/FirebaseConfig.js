// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA549MPE5zbJUbDOBi2q9WAopDoSInb66k",
  authDomain: "technoc-2b101.firebaseapp.com",
  projectId: "technoc-2b101",
  storageBucket: "technoc-2b101.appspot.com",
  messagingSenderId: "328783462652",
  appId: "1:328783462652:web:024f5d34e789bb62ec5779",
  measurementId: "G-L0FT21JNDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
