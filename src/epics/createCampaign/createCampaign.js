import React, { useState } from "react";
import styles from "./styles.module.scss";
import firebase from "../../services/firebase";
import Button from "../../components/button/button";
import Spinner from "../../components/spinner/spinner";

const CreateCampaign = (props) => {
  const [name, setName] = useState("");
  const [campaignName, setcampaignName] = useState("");
  const [campaignDetails, setcampaignDetails] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    setIsLoading(true);
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
    await campaignRef.push(campaignData);
    setName("");
    setcampaignName("");
    setcampaignDetails("");
    event.target.reset();
    setIsLoading(false);
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
      {isLoading && <Spinner />}
    </div>
  );
};

export default CreateCampaign;
