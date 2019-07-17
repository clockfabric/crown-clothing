import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyB2issaHAy0cPN-hQ9yQsraZBZSpu-VSP4",
	authDomain: "crown-db-66c7a.firebaseapp.com",
	databaseURL: "https://crown-db-66c7a.firebaseio.com",
	projectId: "crown-db-66c7a",
	storageBucket: "",
	messagingSenderId: "934602888775",
	appId: "1:934602888775:web:22f7ae059ddca6b2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
