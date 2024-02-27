import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, goToRegisterPage }) => {
  return (
    <button onClick={goToRegisterPage} className={styles.button}>
      <span>{text}</span>
      <img className={styles.arrow} src="/images/arrow-forward.png" alt="" />
    </button>
  );
};

export default Button;
