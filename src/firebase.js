import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBfRQCK7rPg3KbDAWq_ywHzl_GAhlG3mv8",
  authDomain: "cis-371-recipe-book.firebaseapp.com",
  databaseURL: "https://cis-371-recipe-book.firebaseio.com",
  projectId: "cis-371-recipe-book",
  storageBucket: "cis-371-recipe-book.appspot.com",
  messagingSenderId: "135687415105",
  appId: "1:135687415105:web:ff70db2f0a32b1af812dc0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;