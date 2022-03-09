import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

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
// const auth = getAuth(firebaseApp);

//database===
export const db = getFirestore(firebaseApp);

//Writing data
// const documentRef = doc(db, "memos", "one");
// export const writingData = async () => {
//   const docData = {
//     date: "date here",
//     weather: "weather here",
//     airPressure: 1024,
//     humidity: 70,
//     memo: "memo here go.",
//   };
//   try {
//     await setDoc(documentRef, docData, { marge: true });
//     console.log("this value as been written to the database");
//   } catch (error) {
//     console.error("Error adding document: ", error);
//   }
// };

// //Adding new data
// const collectionRef = collection(db, "memos");
// export const addingNewData = async () => {
//   const newData = {
//     date: "date here",
//     weather: "weather here",
//     airPressure: 1024,
//     humidity: 70,
//     memo: "memo here go.",
//   };
//   await addDoc(collectionRef, newData)
//     .then((res) => console.log("Document written with ID: ", res.id))
//     .catch((err) => console.log("error:", err));
// };
// addingNewData();

// //Reading one
// export const readingASingleDoc = async () => {
//   const mySnapshot = await getDoc(documentRef);
//   if (mySnapshot.exists()) {
//     const docData = mySnapshot.data();
//     console.log(`My data is ${JSON.stringify(docData)}`);
//   }
// };
// readingASingleDoc();

// //Reading all
// export const listeningToADocument = async () => {
//   onSnapshot(documentRef, (docSnapshot) => {
//     if (docSnapshot.exists()) {
//       const docData = docSnapshot.data();
//       console.log(`My data is ${JSON.stringify(docData)}`);
//     }
//   });
// };
// listeningToADocument();

//Query

//Analytics===
// const analytics = getAnalytics(firebaseApp);
