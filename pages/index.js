import { useState, useEffect } from "react";
import LoginBox from "../components/LoginBox/LoginBox";
import SignupBox from "../components/SignupBox";
import Phone from "../components/Phone/Phone";
import styles from "./styles.module.scss";
import firebase from "firebase";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
        setUser(firebase.auth().currentUser);
        router.push("/user");
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <Phone />

        <div className={styles.right}>
          <LoginBox />
          <SignupBox />
        </div>
      </div>
    </div>
  );
}
