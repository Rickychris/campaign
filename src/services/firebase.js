import firebase from "firebase";

// Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "marketing-campaign-1d550.firebaseapp.com",
  projectId: "marketing-campaign-1d550",
  storageBucket: "marketing-campaign-1d550.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDERP_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
