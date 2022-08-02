import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnny8wSLh8_EykDYGRt6DPDtSD-l6_bgQ",
  authDomain: "ecommerse-390dc.firebaseapp.com",
  projectId: "ecommerse-390dc",
  storageBucket: "ecommerse-390dc.appspot.com",
  messagingSenderId: "300454619022",
  appId: "1:300454619022:web:e93e29b75e7c862639a6df",
  measurementId: "G-X8HD1G8945",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import serviceAccount from "key_service_account.json";
import data from "api.json";
const collectionKey = "productList"; //Name of the collection
initializeApp({
  credential: _credential.cert(serviceAccount),
});
const firestore = _firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
if (data && typeof data === "object") {
  Object.keys(data).forEach((docKey) => {
    firestore
      .collection(collectionKey)
      .doc(docKey)
      .set(data[docKey])
      .then((res) => {
        console.log("Document " + docKey + " successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  });
}
