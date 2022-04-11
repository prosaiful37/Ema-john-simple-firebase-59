// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADLf4emss1RdbtC9NXljZyZbpajO5WLqc",
  authDomain: "ema-jhon-simple-590f3.firebaseapp.com",
  projectId: "ema-jhon-simple-590f3",
  storageBucket: "ema-jhon-simple-590f3.appspot.com",
  messagingSenderId: "13400577197",
  appId: "1:13400577197:web:c8011cf5e3fadeee2fe224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;