import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBoa_HdosdbXut3rOCqBDor2jWQQ03HQns",
  authDomain: "netflix-clone-60bd0.firebaseapp.com",
  databaseURL: "https://netflix-clone-60bd0.firebaseio.com",
  projectId: "netflix-clone-60bd0",
  storageBucket: "netflix-clone-60bd0.appspot.com",
  messagingSenderId: "361331328028",
  appId: "1:361331328028:web:f63c2ec3e1420557918bd9",
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
