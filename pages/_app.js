import "../styles/globals.css";
import firebase from "firebase";
import React from "react";

var firebaseConfig = {
  apiKey: "AIzaSyAEy-j5TRqiWEhfHxrjkYIo3Kj3uIpwqWs",
  authDomain: "instagram-login-b5430.firebaseapp.com",
  projectId: "instagram-login-b5430",
  storageBucket: "instagram-login-b5430.appspot.com",
  messagingSenderId: "82928981879",
  appId: "1:82928981879:web:5477d71a4e5c31892db372",
  measurementId: "G-35KM1H10MV",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function MyApp({ Component, pageProps }) {
  const [user, setUser] = React.useState(false);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setUser(null);
      } else {
        setUser(firebase.auth().currentUser);
      }
    });
  }, []);
  return <Component {...pageProps} user={user} />;
}

export default MyApp;
