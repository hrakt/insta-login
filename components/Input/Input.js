import React from "react";
import styles from "./Input.module.scss";

export default function Input({ set, text, type }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {/* <span className={styles.placeholder} class="_9nyy2">
        {text}
      </span> */}
        <input
          onChange={(e) => set(e.target.value)}
          placeholder={text}
          label={text}
          minlength={type === "password" ? "8" : null}
          type={type ? type : "text"}
          className={styles.input}
        />
      </label>
    </div>
  );
}
