import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDyabHRbJjTxzmqW9lZI8lQyVoVGBHSRXw",
	authDomain: "techtuu-240ac.firebaseapp.com",
	projectId: "techtuu-240ac",
	storageBucket: "techtuu-240ac.appspot.com",
	messagingSenderId: "528927137100",
	appId: "1:528927137100:web:bace08dccd924309f183e9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
