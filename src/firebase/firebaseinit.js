// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDetUMk66f6W5mWvioFHur89AaLdYCCjzc",
  authDomain: "coffee-8c2bf.firebaseapp.com",
  projectId: "coffee-8c2bf",
  storageBucket: "coffee-8c2bf.firebasestorage.app",
  messagingSenderId: "982612882839",
  appId: "1:982612882839:web:d749d24739a41e743e00d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);