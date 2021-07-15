import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Spacer from "../../components/spacer/spacer";

const HomePage = (props) => {
  return (
    <div className={styles.root} data-testid="homepage">
      <div className={styles.placeholder}>
        Create Your Email Marketing
        <br /> Campaign Today!!
      </div>
      <div className={styles["campaign-wrap"]}>
        <Link to="/create-campaign">
          <Button text="Create Campaign" />
        </Link>
        <Spacer height={40} />
        <Link to="/view-campaign">
          <Button text="Manage Campaigns" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
