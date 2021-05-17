import { useState, useEffect } from "react";
import LoginBox from "../components/LoginBox/LoginBox";
import SignupBox from "../components/SignupBox/SignupBox";
import Phone from "../components/Phone/Phone";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export default function Home({ user }) {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    if (user) {
      router.push("/user");
    }
  }, [user]);

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
