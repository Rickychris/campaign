import React from "react";
import styles from "./styles.module.scss";

const Card = (props) => {
  const createdAt = new Date(props.cardData.createdAt).toDateString();
  return (
    <div className={styles.root}>
      <p>{`Created By : ${props.cardData.creatorName}`}</p>
      <p>{props.cardData.campaignDetails}</p>
      <p>{createdAt}</p>
      <p>{`Status : ${props.cardData.status}`}</p>
    </div>
  );
};

export default Card;
