import React, { createContext } from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp({
    apiKey: "AIzaSyCUrA6tXSV28OfydrtQSQ4gGs48hnpM6qg",
    authDomain: "chat-react-5475c.firebaseapp.com",
    projectId: "chat-react-5475c",
    storageBucket: "chat-react-5475c.appspot.com",
    messagingSenderId: "363055042870",
    appId: "1:363055042870:web:067d172cddbd4df93a2397",
    measurementId: "G-QXCDY1JRXY"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          firebase,
          auth,
          firestore
      }}>
          <App />
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
