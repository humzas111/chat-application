import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyALre_a5CoD_VrvtJwoXoM-TmZc44oOlZs",
    authDomain: "unichat-56f46.firebaseapp.com",
    projectId: "unichat-56f46",
    storageBucket: "unichat-56f46.appspot.com",
    messagingSenderId: "812603965823",
    appId: "1:812603965823:web:38b2867cdeac910776da4a",
  })
  .auth();
