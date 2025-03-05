// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyASUJlnUutu5AN9CXXcxyAC1cwX7P_Ez54",
//   authDomain: "chrome-ext-40d06.firebaseapp.com",
//   projectId: "chrome-ext-40d06",
//   storageBucket: "chrome-ext-40d06.firebasestorage.app",
//   messagingSenderId: "681316511872",
//   appId: "1:681316511872:web:5245c7dad8f6726b003665"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASUJlnUutu5AN9CXXcxyAC1cwX7P_Ez54",
  authDomain: "chrome-ext-40d06.firebaseapp.com",
  projectId: "chrome-ext-40d06",
  storageBucket: "chrome-ext-40d06.firebasestorage.app",
  messagingSenderId: "681316511872",
  appId: "1:681316511872:web:5245c7dad8f6726b003665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
