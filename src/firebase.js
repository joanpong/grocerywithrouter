import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCC5_zQepW1EZFriFSGkMn5552JxwJIqNg",
    authDomain: "bt3103-38b3d.firebaseapp.com",
    databaseURL: "https://bt3103-38b3d.firebaseio.com",
    projectId: "bt3103-38b3d",
    storageBucket: "bt3103-38b3d.appspot.com",
    messagingSenderId: "248609922943",
    appId: "1:248609922943:web:c48eee4edb94bc8bd7444a",
    measurementId: "G-KWDHY1BDYC"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;