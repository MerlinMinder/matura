// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZudrCkk39pUv1iFq6iHA1ZFCzAryDwHA",
  authDomain: "matura-website.firebaseapp.com",
  projectId: "matura-website",
  storageBucket: "matura-website.appspot.com",
  messagingSenderId: "868626796635",
  appId: "1:868626796635:web:8fee4f29cf99fcfe2f6f7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db };
export { auth };
