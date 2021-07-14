import React from "react";
import styles from "./styles.module.scss";

const Spinner = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.spinner}></div>
    </div>
  );
};

Spinner.prototype = {};

export default Spinner;
