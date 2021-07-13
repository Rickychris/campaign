import React from "react";
import styles from "./styles.module.scss";

const Spacer = (props) => {
  return (
    <div
      className={styles.root}
      style={{ height: props.height, width: props.width }}
    >
      {props.text}
    </div>
  );
};

export default Spacer;
