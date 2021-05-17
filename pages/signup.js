import React from "react";
import Signup from "../components/Signup/Signup";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import AppIcons from "../components/AppIcons/AppIcons";

export default function SignupPage({ user }) {
  const router = useRouter();
  React.useEffect(() => {
    if (user) {
      router.replace("/user");
    }
  }, [user]);
  return (
    <div className={styles.app}>
      <div className={styles.right}>
        <Signup />
        <AppIcons />
      </div>
    </div>
  );
}
