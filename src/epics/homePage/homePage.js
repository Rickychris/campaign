import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";

const HomePage = (props) => {
  return (
    <div className={styles.root}>
      <Link to="create-campaign">
        <Button text="Create" />
      </Link>
      <Link to="view-campaign">
        <Button text="view" />
      </Link>
    </div>
  );
};

export default HomePage;
