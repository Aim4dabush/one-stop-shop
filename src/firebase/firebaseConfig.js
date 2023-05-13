import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBj3ewInAa6GW-l7Feibv2HdgMLk8TJt48",
  authDomain: "c2b-website.firebaseapp.com",
  projectId: "c2b-website",
  storageBucket: "c2b-website.appspot.com",
  messagingSenderId: "853059639587",
  appId: "1:853059639587:web:c58f04796ede0c4e2ad496",
};

//firebase
const app = initializeApp(firebaseConfig);

//authentication
export const auth = getAuth(app);
