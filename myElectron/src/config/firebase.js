import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBnzzdBrSUgRPeAHsmz1YuCLNvzWlOEfFM",
  authDomain: "myelectron-9b12f.firebaseapp.com",
  databaseURL: "https://myelectron-9b12f-default-rtdb.firebaseio.com",
  projectId: "myelectron-9b12f",
  storageBucket: "myelectron-9b12f.appspot.com",
  messagingSenderId: "237341241232",
  appId: "1:237341241232:web:c3463dae899f4127748d15",
  measurementId: "G-82WCLN6J8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);