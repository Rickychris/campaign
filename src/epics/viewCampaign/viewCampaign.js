import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Card from "../../components/card/card";
import firebase from "../../services/firebase";
import Spinner from "../../components/spinner/spinner";

const ViewCampaign = (props) => {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // ref to the database on firebase
    const campaignRef = firebase.database().ref("campaign-data");

    // listening to the DB for changes
    campaignRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const campaignData = [];
      for (let id in data) {
        campaignData.push({ ...data[id], id });
      }
      setCardData(campaignData);
    });

    setIsLoading(false);

    // Stop listening for updates when no longer required
    return () => campaignRef.off();
  }, []);

  // deletes the node data from firebase
  const deleteCampaign = (id) => {
    const deleteCardRef = firebase.database().ref("campaign-data").child(id);
    deleteCardRef.remove();
  };

  // updates the node status from firebase
  const sendMails = (id) => {
    const deleteCardRef = firebase.database().ref("campaign-data").child(id);
    deleteCardRef.update({
      status: "sent",
    });
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.h1}>Campaign List</h1>
      {cardData.length > 0 ? (
        <div className={styles["card-grid"]}>
          {cardData.map((item) => {
            return (
              <Card
                key={item.id}
                cardData={item}
                delete={deleteCampaign}
                send={sendMails}
              ></Card>
            );
          })}
        </div>
      ) : (
        <h4 className={styles.h4}>No Data Found!</h4>
      )}
      {(isLoading || cardData.length === 0) && <Spinner />}
    </div>
  );
};

export default ViewCampaign;
