import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Card from "../../components/card/card";
import firebase from "../../services/firebase";

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

  useEffect(() => {
    const campaignRef = firebase.database().ref("campaign-data");
    campaignRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const campaignData = [];
      for (let id in data) {
        campaignData.push({ ...data[id], id });
      }
      setCardData(campaignData);
    });
  }, []);

  return (
    <div className={styles.root}>
      <h1 className={styles.h1}>Campaign List</h1>
      <div className={styles["card-grid"]}>
        {cardData.map((item) => {
          return <Card key={item.id} cardData={item}></Card>;
        })}
      </div>
    </div>
  );
};

export default ViewCampaign;
