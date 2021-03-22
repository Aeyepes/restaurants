import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDEM50wAZofqJWpgKpGZ7Un8zFZhk2YuI8",
    authDomain: "restaurants-2d83a.firebaseapp.com",
    projectId: "restaurants-2d83a",
    storageBucket: "restaurants-2d83a.appspot.com",
    messagingSenderId: "360910857871",
    appId: "1:360910857871:web:bb4fca11c0a813bf3232fa"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
