import firebase from "firebase";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7mdlQISXvfIJknjhvU44CrhyItVX1oJA",
  authDomain: "coder-ecommerce-react.firebaseapp.com",
  projectId: "coder-ecommerce-react",
  storageBucket: "coder-ecommerce-react.appspot.com",
  messagingSenderId: "84833627794",
  appId: "1:84833627794:web:93f68e55293ec86626404b",
};

const items = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(items);
}
