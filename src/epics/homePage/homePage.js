import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Spacer from "../../components/spacer/spacer";

const HomePage = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.placeholder}>Marketing Campaign!!</div>
      <div className={styles["campaign-wrap"]}>
        <Link to="/create-campaign">
          <Button text="Create" />
        </Link>
        <Spacer height={40} />
        <Link to="/view-campaign">
          <Button text="view" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
