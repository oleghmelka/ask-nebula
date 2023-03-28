import React from "react";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div className={styles.container}>
      <button className={styles.error}>Error Button</button>
    </div>
  );
};

export default Button;
