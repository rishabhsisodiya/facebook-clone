import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD1WewqvDw8ZoHJd2YGjwV5PSkxZhDh3Po",
  authDomain: "f-acebook.firebaseapp.com",
  databaseURL: "https://f-acebook.firebaseio.com",
  projectId: "f-acebook",
  storageBucket: "f-acebook.appspot.com",
  messagingSenderId: "867380806774",
  appId: "1:867380806774:web:0f7d1fda59d5f37fad0b57",
  measurementId: "G-6B6XJ38GR3"
};



const firebseApp = firebase.initializeApp(firebaseConfig)

const db= firebseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider }
export default db




