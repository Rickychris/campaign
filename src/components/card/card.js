import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { ReactComponent as Send } from "../../assets/icons/send.svg";
const Card = (props) => {
  const createdAt =
    props.cardData.createdAt &&
    new Date(props.cardData.createdAt).toDateString();
  return (
    <div className={styles.root} data-testid="card">
      <p>{`Created By : ${props.cardData.creatorName}`}</p>
      <p>{createdAt}</p>
      <p>{`Status : ${props.cardData.status}`}</p>
      <div className={styles["icon-wrap"]}>
        <p
          onClick={() => props.send(props.cardData.id)}
          className={styles.icon}
          title="send emails"
        >
          <Send />
        </p>
        <p
          onClick={() => props.delete(props.cardData.id)}
          className={styles.icon}
          title="delete this campaign"
        >
          <Delete />
        </p>
      </div>
    </div>
  );
};
Card.prototype = {
  cardData: PropTypes.shape({
    createdAt: PropTypes.number,
    lastModifiedAt: PropTypes.number,
    creatorName: PropTypes.string,
    status: PropTypes.string,
    delete: PropTypes.func,
    send: PropTypes.func,
  }),
};

export default Card;
