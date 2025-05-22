import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSu6DgEXHqNBnSEr1OfH-CGjI6SHEHDjw",
  authDomain: "ecom-test-af623.firebaseapp.com",
  projectId: "ecom-test-af623",
  storageBucket: "ecom-test-af623.appspot.com",
  messagingSenderId: "370034811689",
  appId: "1:370034811689:web:3752b5166a891bb23bcd38"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);//db