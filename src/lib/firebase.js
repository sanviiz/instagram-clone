import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAUeElgIeHKd7fv3J3RUMZZHgII1QyFPjY",
  authDomain: "instagram-clone-777.firebaseapp.com",
  projectId: "instagram-clone-777",
  storageBucket: "instagram-clone-777.appspot.com",
  messagingSenderId: "765971495892",
  appId: "1:765971495892:web:9035ea7f08f9823efeb441",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
