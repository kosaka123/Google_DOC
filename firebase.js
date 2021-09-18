import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMzmeNLBugE3rd5UKTnRLMnQ3QVFygkaU",
  authDomain: "seventh-history-326206.firebaseapp.com",
  projectId: "seventh-history-326206",
  storageBucket: "seventh-history-326206.appspot.com",
  messagingSenderId: "812562231372",
  appId: "1:812562231372:web:54779e3fa6cda37b0084e9",
  measurementId: "G-VZPMLZX00E",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
