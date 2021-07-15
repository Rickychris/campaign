import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Spacer = (props) => {
  return (
    <div
      className={styles.root}
      style={{ height: props.height, width: props.width }}
      data-testid="spacer"
    ></div>
  );
};

Spacer.prototype = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Spacer;
