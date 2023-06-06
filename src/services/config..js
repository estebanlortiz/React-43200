import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "byramona-6e04c.firebaseapp.com",
    projectId: "byramona-6e04c",
    storageBucket: "byramona-6e04c.appspot.com",
    messagingSenderId: "737993428777",
    appId: "1:737993428777:web:f7c61ad30ca2557256b138"
  };


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);