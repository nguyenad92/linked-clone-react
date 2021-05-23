import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export { auth, provider, storage };
  export default db;