// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDds-gClbpjV5BqkDv81wdAn-jqUNFf12Q",
  authDomain: "electro-store-7c6a3.firebaseapp.com",
  projectId: "electro-store-7c6a3",
  storageBucket: "electro-store-7c6a3.appspot.com",
  messagingSenderId: "1043026310608",
  appId: "1:1043026310608:web:d5e4306456f834cafc75d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;