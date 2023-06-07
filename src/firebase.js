
// import firebase from 'firebase/compat/app'; //v9
// const firebaseConfig = {
//   apiKey: "AIzaSyCicIxek1z_lRlmAuKvfUJRIDTh4FPWsj0",
//   authDomain: "manifold-ab28d.firebaseapp.com",
//   projectId: "manifold-ab28d",
//   storageBucket: "manifold-ab28d.appspot.com",
//   messagingSenderId: "924990805279",
//   appId: "1:924990805279:web:3bf6dd236676b505c34c2a",
//   measurementId: "G-JT1VYKV5TG"
// };
//   const firebaseApp = firebase.initialize(firebaseConfig)
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();
//   const storage = firebase.storage();
//   export {auth, provider,storage};
//   export default db;


import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';



// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCicIxek1z_lRlmAuKvfUJRIDTh4FPWsj0",
  authDomain: "manifold-ab28d.firebaseapp.com",
  projectId: "manifold-ab28d",
  storageBucket: "manifold-ab28d.appspot.com",
  messagingSenderId: "924990805279",
  appId: "1:924990805279:web:3bf6dd236676b505c34c2a",
  measurementId: "G-JT1VYKV5TG"
};




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
export { auth, provider};

export default db;