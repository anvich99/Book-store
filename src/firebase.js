import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhRw63cyMoaE99t1VsLuF4rlbCI58Qres",
  authDomain: "bookstore-8d3df.firebaseapp.com",
  projectId: "bookstore-8d3df",
  storageBucket: "bookstore-8d3df.appspot.com",
  messagingSenderId: "922097842708",
  appId: "1:922097842708:web:e5b34f9f6a54b224f34501",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
