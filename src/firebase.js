import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9LorMTx8k8VR1TJVoo0DfKS7StxhWH3s",
  authDomain: "disneyplus-clone-25d36.firebaseapp.com",
  projectId: "disneyplus-clone-25d36",
  storageBucket: "disneyplus-clone-25d36.appspot.com",
  messagingSenderId: "1045150359608",
  appId: "1:1045150359608:web:e37fb5852817a2938f86cd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
