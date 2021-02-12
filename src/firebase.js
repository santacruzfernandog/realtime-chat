import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLXQmRPmwct9RcclcH6laAt07dz-xmMis",
    authDomain: "realtime-chat-8d32f.firebaseapp.com",
    databaseURL: "https://realtime-chat-8d32f-default-rtdb.firebaseio.com",
    projectId: "realtime-chat-8d32f",
    storageBucket: "realtime-chat-8d32f.appspot.com",
    messagingSenderId: "896246979348",
    appId: "1:896246979348:web:13ebd5ac1ae9b24e06c001"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}