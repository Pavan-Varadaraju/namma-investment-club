import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDaG4QQ48jgjUBxWxTEZbFzne85zyDQcow",
    authDomain: "namma-investment-club-a21f1.firebaseapp.com",
    projectId: "namma-investment-club-a21f1",
    storageBucket: "namma-investment-club-a21f1.appspot.com",
    messagingSenderId: "79640507973",
    appId: "1:79640507973:web:af9fd30fb29d873954952c"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();