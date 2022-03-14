import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider,FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJNXcTonN3yzQusR40QyqVdawaHk-Hydc",
  authDomain: "weather-health-app.firebaseapp.com",
  projectId: "weather-health-app",
  storageBucket: "weather-health-app.appspot.com",
  messagingSenderId: "52166568146",
  appId: "1:52166568146:web:276073ab8c507ba638250b",
  measurementId: "G-0K2BJD1K0K",
};
const firebaseApp = initializeApp(firebaseConfig);

// Auth===
export const auth = getAuth(firebaseApp);

// Google Auth===
export const googleProvider = new GoogleAuthProvider();

export const githubProvider = new GithubAuthProvider();

export const facebookProvider = new FacebookAuthProvider();

//database===
export const db = getFirestore(firebaseApp);


//Analytics===
// const analytics = getAnalytics(firebaseApp);
