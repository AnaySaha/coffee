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


/*
1. firebase-tools (one time)
2. firebase login (one- time)
3. one time for esch project: firebase init
4. what you want to do: select hosting
5. select a project (already have one create in firebase console)
6. what will be your public ------ dist
7. single page? : y
-----------------------
#### EACH TIME YOU WANT TO DEPLOY
8. npm run build
9. FIREBASE DEPLOY

*/