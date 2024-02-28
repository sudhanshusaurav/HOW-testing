import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6AuB0iTwDk_o4laAaVItajbZaHOZLv5I",
  authDomain: "holdonworld-b9ead.firebaseapp.com",
  projectId: "holdonworld-b9ead",
  storageBucket: "holdonworld-b9ead.appspot.com",
  messagingSenderId: "587708565173",
  appId: "1:587708565173:web:da3f786767775b7d6320fc",
  measurementId: "G-LGBKF76LEM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
