import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTPfnQ1l7MufS1PBnO72i7Ov-yX4H1yWQ",
  authDomain: "linkedin-clone-61983.firebaseapp.com",
  projectId: "linkedin-clone-61983",
  storageBucket: "linkedin-clone-61983.appspot.com",
  messagingSenderId: "961563861330",
  appId: "1:961563861330:web:d2790f3181fcce887f5a8b",
  measurementId: "G-L0L67CW3XV"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export { auth, provider, storage };
  export default db;