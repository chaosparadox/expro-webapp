// import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB6or0YRE40JVLFRjeGawO2mKeAROPPLe0",
  authDomain: "expro-app.firebaseapp.com",
  projectId: "expro-app",
  storageBucket: "expro-app.appspot.com",
  messagingSenderId: "332085300360",
  appId: "1:332085300360:web:6402b94570bbc456ffe33d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const clientCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = firebase.initializeApp(clientCredentials);

export const auth = getAuth();
