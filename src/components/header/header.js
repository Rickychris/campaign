import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles["App-header-wrap"]}>
      <header className={[styles["App-header"], "max-width"].join(" ")}>
        <div>
          <Link to="/">HOME</Link>
        </div>
        <nav className={styles["header-nav"]}>
          <p>About</p>
          <p>Contact Us</p>
        </nav>
      </header>
    </div>
  );
};

export default Header;
