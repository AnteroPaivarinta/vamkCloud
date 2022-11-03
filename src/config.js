const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAwobVKUgUxhUxd27uDXwAxQ3pe_qU-S98",

  authDomain: "autokauppa-76d5a.firebaseapp.com",

  projectId: "autokauppa-76d5a",

  storageBucket: "autokauppa-76d5a.appspot.com",

  messagingSenderId: "622149439927",

  appId: "1:622149439927:web:1815cbe9891a61ff5c9832",

  measurementId: "G-093YL0FVLV"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("cars");
module.exports = User;
