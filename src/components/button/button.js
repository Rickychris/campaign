import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Button = (props) => {
  return (
    <button className={styles.root} onClick={props.onClick} {...props}>
      {props.text}
    </button>
  );
};

Button.prototype = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
