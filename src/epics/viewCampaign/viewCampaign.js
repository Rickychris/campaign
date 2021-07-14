import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Card from "../../components/card/card";
import firebase from "../../services/firebase";
import Spinner from "../../components/spinner/spinner";

const ViewCampaign = (props) => {
  //   const campaignData = [
  //     {
  //       id: "unique ID",
  //       campaignName: "Email Campaign",
  //       creatorName: "Alvis Monk",
  //       createdAt: "10 Jul 2020",
  //       lastModifiedAt: "11 Jul 2020",
  //       status: "active",
  //     },
  //   ];
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

  return (
    <div className={styles.root}>
      <h1 className={styles.h1}>Campaign List</h1>
      <div className={styles["card-grid"]}>
        {cardData.map((item) => {
          return <Card key={item.id} cardData={item}></Card>;
        })}
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default ViewCampaign;
