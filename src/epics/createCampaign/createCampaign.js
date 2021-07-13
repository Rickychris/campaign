import React, { useState } from "react";
import styles from "./styles.module.scss";
import firebase from "../../services/firebase";
import Button from "../../components/button/button";

const CreateCampaign = (props) => {
  const [name, setName] = useState("");
  const [campaignName, setcampaignName] = useState("");
  const [campaignDetails, setcampaignDetails] = useState("");
  //   const [name,setName]= useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const campaignData = {
      campaignName: campaignName,
      creatorName: name,
      campaignDetails: campaignDetails,
      createdAt: Date.now(),
      lastModifiedAt: Date.now(),
      status: "active",
    };
    console.log(campaignData);
    const campaignRef = firebase.database().ref("campaign-data");
    campaignRef.push(campaignData);
  };

  return (
    <div className={styles.root} onClick={null}>
      <form onSubmit={(e) => handleSubmit(e)} id="campaign-form-id">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name"
          required
        />
        <input
          type="text"
          value={campaignName}
          onChange={(e) => setcampaignName(e.target.value)}
          placeholder="Enter the Campaign Name"
          required
        />
        <textarea
          type="text"
          value={campaignDetails}
          onChange={(e) => setcampaignDetails(e.target.value)}
          placeholder="Enter Campaign Details"
          required
        />
        <Button type="submit" text="Create Campaign" />
      </form>
    </div>
  );
};

export default CreateCampaign;
