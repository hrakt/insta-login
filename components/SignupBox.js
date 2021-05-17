import React from "react";
import styles from "./SingupBox.module.scss";
import Link from "next/link";

export default function SignupBox() {
  return (
    <div className={styles.box}>
      <p className={styles.paragraph}>
        Don't have an account?{" "}
        <Link href="/signup" className={styles.link}>
          Sign up
        </Link>
      </p>
    </div>
  );
}
