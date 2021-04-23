import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAe7ErDKAzHO2HhBR1K-uR0FHr3sTdzSEo",
  authDomain: "disney-clone-faecb.firebaseapp.com",
  projectId: "disney-clone-faecb",
  storageBucket: "disney-clone-faecb.appspot.com",
  messagingSenderId: "407575882888",
  appId: "1:407575882888:web:ff9967cb5535c23d89833d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;
