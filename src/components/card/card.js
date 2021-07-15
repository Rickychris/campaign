import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Card = (props) => {
  const createdAt =
    props.cardData.createdAt &&
    new Date(props.cardData.createdAt).toDateString();
  return (
    <div className={styles.root} data-testid="card">
      <p>{`Created By : ${props.cardData.creatorName}`}</p>
      <p>{createdAt}</p>
      <p>{`Status : ${props.cardData.status}`}</p>
      <div>
        <p onClick={() => props.delete(props.cardData.id)}>delete</p>
        <p onClick={() => props.send(props.cardData.id)}>Send</p>
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
