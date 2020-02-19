import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3bWWja2nnxG9i1XNf4ER7LomvXaD1FWg",
  authDomain: "future-tube-leo.firebaseapp.com",
  databaseURL: "https://future-tube-leo.firebaseio.com",
  projectId: "future-tube-leo",
  storageBucket: "future-tube-leo.appspot.com",
  messagingSenderId: "13136273998",
  appId: "1:13136273998:web:32a1c85089e3f46496591f",
  measurementId: "G-3RCBJP9688"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
